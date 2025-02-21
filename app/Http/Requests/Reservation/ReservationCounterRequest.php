<?php

namespace App\Http\Requests\Reservation;

use App\Models\Reservation\ReservationCompany;
use Illuminate\Foundation\Http\FormRequest;

class ReservationCounterRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, mixed>
     */
    public function rules()
    {
        $reservationCompany = ReservationCompany::where('user_id', auth()->user()->id)->first();
        return [
            'reservation_car_category_id' => $reservationCompany && $reservationCompany->reservation_category_id == 2 ? 'required' : '',
            // 'reservation_category_id' => ['required_unless:fee,=,2'],
            // 'user_id' => ['required'],
            'name' => 'required',
            // 'slug' => 'required',
            // 'open_at' => 'required',
            'price_user' => 'required',
            'percent_owner' => 'required|numeric|max:100',
            'percent_employe' => 'required',
            'service_duration' => 'required',
            // 'set_dayoff' => 'required',
            'period' => 'required',
            // 'need_image_reservation' => 'required',
            // 'need_image_before_after' => 'required',
            // 'is_active' => 'required',
        ];
    }
}
