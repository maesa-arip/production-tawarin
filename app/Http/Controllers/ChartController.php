<?php

namespace App\Http\Controllers;

use App\Models\Reservation\ReservationEmployee;
use Illuminate\Http\Request;
use Illuminate\Support\Carbon;
use Illuminate\Support\Facades\DB;

class ChartController extends Controller
{
    public function index()
    {
        // Define the date range (last 7 days)
        $startDate = Carbon::now()->subDays(6)->startOfDay();
        $endDate = Carbon::now()->endOfDay();

        // Initialize the dates array
        $dates = [];
        for ($i = 6; $i >= 0; $i--) {
            $dates[] = Carbon::now()->subDays($i)->format('Y-m-d');
        }

        // Fetch data using the provided query and group by date
        $query = ReservationEmployee::select(
            DB::raw('DATE(reservation_customers.date) as date'),
            'reservation_employees.id as employee_id',
            'users.name as employee_name',
            DB::raw('COUNT(reservation_customers.id) as total_customers'),
            DB::raw('SUM(reservation_counters.price_user) as total_price_user'),
            DB::raw('SUM(reservation_counters.jasa) as total_jasa')
        )
        ->join('users', 'reservation_employees.user_id', '=', 'users.id')
        ->join('reservation_companies', 'reservation_employees.reservation_company_id', '=', 'reservation_companies.id')
        ->join('reservation_counters', 'reservation_companies.id', '=', 'reservation_counters.reservation_company_id')
        ->join('reservation_teams', 'reservation_counters.id', '=', 'reservation_teams.reservation_counter_id')
        ->join('reservation_customers','reservation_customers.reservation_team_id', '=', 'reservation_teams.id')
        ->join('reservation_team_details', function($join) {
            $join->on('reservation_teams.id', '=', 'reservation_team_details.reservation_team_id')
                 ->on('reservation_team_details.user_id', '=', 'reservation_employees.user_id');
        })
        ->where('reservation_customers.selesai_customer', '=', 1)
        ->whereBetween('reservation_customers.date', [$startDate, $endDate])
        ->groupBy('date', 'reservation_employees.id', 'users.name')
        ->orderBy('date')
        ->orderBy('reservation_employees.id')
        ->get();

        // Structure the data for the chart
        $employees = $query->pluck('employee_name')->unique()->values()->toArray();

        $salesData = [];
        foreach ($dates as $date) {
            $dailyData = array_fill(0, count($employees), 0);

            foreach ($query as $record) {
                if ($record->date == $date) {
                    $employeeIndex = array_search($record->employee_name, $employees);
                    $dailyData[$employeeIndex] = $record->total_customers; // Assuming we're plotting total_customers
                }
            }

            $salesData[] = $dailyData;
        }

        return inertia('Charts/CompanyChart', [
            'dates' => $dates,
            'employees' => $employees,
            'salesData' => $salesData,
        ]);
    }
    public function employeechart()
    {
        // Define the date range (last 7 days)
        $startDate = Carbon::now()->subDays(6)->startOfDay();
        $endDate = Carbon::now()->endOfDay();

        // Initialize the dates array
        $dates = [];
        for ($i = 6; $i >= 0; $i--) {
            $dates[] = Carbon::now()->subDays($i)->format('Y-m-d');
        }

        // Fetch data using the provided query and group by date
        $query = ReservationEmployee::select(
            DB::raw('DATE(reservation_customers.date) as date'),
            'reservation_employees.id as employee_id',
            'users.name as employee_name',
            DB::raw('COUNT(reservation_customers.id) as total_customers'),
            DB::raw('SUM(reservation_counters.price_user) as total_price_user'),
            DB::raw('SUM(reservation_counters.jasa) as total_jasa')
        )
        ->join('users', 'reservation_employees.user_id', '=', 'users.id')
        ->join('reservation_companies', 'reservation_employees.reservation_company_id', '=', 'reservation_companies.id')
        ->join('reservation_counters', 'reservation_companies.id', '=', 'reservation_counters.reservation_company_id')
        ->join('reservation_teams', 'reservation_counters.id', '=', 'reservation_teams.reservation_counter_id')
        ->join('reservation_customers','reservation_customers.reservation_team_id', '=', 'reservation_teams.id')
        ->join('reservation_team_details', function($join) {
            $join->on('reservation_teams.id', '=', 'reservation_team_details.reservation_team_id')
                 ->on('reservation_team_details.user_id', '=', 'reservation_employees.user_id');
        })
        ->where('reservation_customers.selesai_customer', '=', 1)
        ->where('reservation_employees.user_id', '=', auth()->user()->id)
        ->whereBetween('reservation_customers.date', [$startDate, $endDate])
        ->groupBy('date', 'reservation_employees.id', 'users.name')
        ->orderBy('date')
        ->orderBy('reservation_employees.id')
        ->get();

        // Structure the data for the chart
        $employees = $query->pluck('employee_name')->unique()->values()->toArray();

        $salesData = [];
        foreach ($dates as $date) {
            $dailyData = array_fill(0, count($employees), 0);

            foreach ($query as $record) {
                if ($record->date == $date) {
                    $employeeIndex = array_search($record->employee_name, $employees);
                    $dailyData[$employeeIndex] = $record->total_customers; // Assuming we're plotting total_customers
                }
            }

            $salesData[] = $dailyData;
        }

        return inertia('Charts/EmployeeChart', [
            'dates' => $dates,
            'employees' => $employees,
            'salesData' => $salesData,
        ]);
    }
}
