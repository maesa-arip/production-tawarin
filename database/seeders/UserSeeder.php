<?php

namespace Database\Seeders;

use App\Models\User;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class UserSeeder extends Seeder
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
                'name' => 'Maesa',
                'username' => 'maesa',
                'address' => 'Pemogan',
                'email' => 'maesa@gmail.com',
                'email_verified_at' => now(),
                'password' => bcrypt('password')
            ],
            [
                'name' => 'Ari',
                'username' => 'ari',
                'address' => 'Pemogan',
                'email' => 'ari@gmail.com',
                'email_verified_at' => now(),
                'password' => bcrypt('password')
            ],
            [
                'name' => 'Owner1',
                'username' => 'owner1',
                'address' => 'Pemogan',
                'email' => 'owner1@gmail.com',
                'email_verified_at' => now(),
                'password' => bcrypt('password')
            ],
            [
                'name' => 'Owner2',
                'username' => 'owner2',
                'address' => 'Pemogan',
                'email' => 'owner2@gmail.com',
                'email_verified_at' => now(),
                'password' => bcrypt('password')
            ],
            [
                'name' => 'Konsultan1',
                'username' => 'konsultan1',
                'address' => 'Pemogan',
                'email' => 'konsultan1@gmail.com',
                'email_verified_at' => now(),
                'password' => bcrypt('password')
            ],
            [
                'name' => 'Konsultan2',
                'username' => 'konsultan2',
                'address' => 'Pemogan',
                'email' => 'konsultan2@gmail.com',
                'email_verified_at' => now(),
                'password' => bcrypt('password')
            ],
        ])->each(fn ($q)=>User::create($q));
    }
}
