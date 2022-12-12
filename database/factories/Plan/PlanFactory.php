<?php

namespace Database\Factories\Plan;

use Illuminate\Database\Eloquent\Factories\Factory;
use Illuminate\Support\Str;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Plan>
 */
class PlanFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition()
    {
        return [
            'user_id' => rand(3, 4),
            'plan_category_id' => rand(1, 9),
            'name' => $name =  str($this->faker->sentence(4))->title().'-'. Str::lower(Str::random(6)),
            'slug' => str($name)->slug(),
            'jangka_waktu_penawaran' => rand(10, 100),
            'jangka_waktu_pelaksanaan' => rand(30, 180),
            'jumlah_revisi' => rand(1, 5),
            'luas_bangunan' => $l = rand(50, 1000),
            'anggaran_proyek' => $agr = rand(100000000, 10000000000),
            'acuan_anggaran' => $l * 400000,
            'dari_anggaran' => round($agr * 1/100) ,
            'sampai_anggaran' => round($agr * 3/100),
            'is_approved' => rand(0, 1),
        ];
    }
}
