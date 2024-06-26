<?php

namespace Database\Factories\Plan;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\PlanRevision>
 */
class PlanRevisionFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition()
    {
        return [
            'plan_result_id' => rand(1, 10),
            'description' => str($this->faker->sentence(4))->title(),
            'created_at' => now(),
        ];
    }
}
