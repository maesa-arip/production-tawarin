<?php

namespace Database\Factories\Plan;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\PlanBid>
 */
class PlanBidFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition()
    {
        return [
            'user_id' => rand(5, 6),
            'plan_id' => rand(1, 10),
            'bid_price_user' => $bid = rand(100000000, 10000000000),
            'bid_price' => round($bid * 105/100),
            'description' => str($this->faker->sentence(4))->title(),
            'is_approved' => rand(0, 1),
            'created_at' =>now(),  
        ];
    }
}
