<?php

namespace Database\Seeders;

use App\Models\Plan\Plan;
use App\Models\Plan\PlanBid;
use App\Models\Plan\PlanCategory;
use App\Models\Plan\PlanDetail;
use App\Models\Plan\PlanResult;
use App\Models\Plan\PlanRevision;
use App\Models\Plan\PlanRevisionResult;
use App\Models\Toko\Product;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        $this->call([
            UserSeeder::class,
            CategorySeeder::class,
        ]);
        Product::factory(50)->create();

        \App\Models\User::factory(1000)->create();
        $this->call([
            PlanMasterSeeder::class,
        ]);
        PlanCategory::factory(10)->create();
        Plan::factory(10)->create();
        PlanDetail::factory(10)->create();

        PlanBid::factory(50)->create();
        PlanResult::factory(20)->create();
        PlanRevision::factory(20)->create();
        PlanRevisionResult::factory(20)->create();
    }
}
