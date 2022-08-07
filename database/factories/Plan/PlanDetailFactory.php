<?php

namespace Database\Factories\Plan;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\PlanDetail>
 */
class PlanDetailFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition()
    {
        return [
            'plan_id' => rand(1, 10),
            'plan_master_id' => rand(1, 9),
            'description' => str($this->faker->sentence(4))->title(),
        ];
    }
}
