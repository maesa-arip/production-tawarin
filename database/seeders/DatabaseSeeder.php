<?php

namespace Database\Seeders;

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
    }
}
