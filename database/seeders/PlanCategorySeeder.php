<?php

namespace Database\Seeders;

use App\Models\Plan\PlanCategory;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class PlanCategorySeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        collect([
            [
                'name' => 'Ritel',
                'slug' => 'ritel'
            ],
            [
                'name' => 'F&B',
                'slug' => 'f&b'
            ],
            [
                'name' => 'Laundry',
                'slug' => 'laundry'
            ],
            [
                'name' => 'Mekanik',
                'slug' => 'mekanik'
            ],
            [
                'name' => 'Jasa',
                'slug' => 'jasa'
            ],
            [
                'name' => 'Agrikultur',
                'slug' => 'agrikultur'
            ],
            [
                'name' => 'Beauty Care',
                'slug' => 'beauty-care'
            ],
            [
                'name' => 'Pendidikan',
                'slug' => 'pendidikan'
            ],
            [
                'name' => 'Teknologi',
                'slug' => 'teknologi'
            ],
        ])->each(fn ($q)=>PlanCategory::create($q));
    }
}
