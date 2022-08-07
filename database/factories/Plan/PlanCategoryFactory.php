<?php

namespace Database\Factories\Plan;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\PlanCategory>
 */
class PlanCategoryFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition()
    {
        return [
            'name' => $name =  str($this->faker->sentence(2))->title(),
            'slug' => str($name)->slug(),
        ];
    }
}
