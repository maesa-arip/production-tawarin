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
                'name' => 'Tawarin',
                'username' => 'tawarin',
                'address' => 'Jalan Kunti',
                'email' => 'tawarinfirst@gmail.com',
                'phone' => '089',
                'email_verified_at' => now(),
                'password' => bcrypt('JustDoItTawarin')
            ],
            [
                'name' => 'Maesa',
                'username' => 'maesa',
                'address' => 'Pemogan',
                'email' => 'mahesa.deary@gmail.com',
                'phone' => '089629258211',
                'email_verified_at' => now(),
                'password' => bcrypt('password')
            ],
            [
                'name' => 'agus suryawan',
                'username' => 'Agus surya',
                'address' => 'Perum Taman Uma Dewi Residance Gang 4 No 2, Jalan Penganyutan Buduk Mengwi Badung Bali',
                'email' => 'agus.suryawan.supit@gmail.com',
                'phone' => '089',
                'email_verified_at' => now(),
                'password' => '$2y$10$vLY.RIcod0jTvA1lQZQP6OzTm9aMzn7JfyQXOl.NuDIdufywiRIZK'
            ],
            [
                'name' => 'I Nyoman Wisnu Bawa',
                'username' => 'WISNU',
                'address' => 'Jl. Mayang sari no 23',
                'email' => 'anjaarchitect83@gmail.com',
                'phone' => '089',
                'email_verified_at' => now(),
                'password' => '$2y$10$o/FsxdWv9fvIzJMB/pmbvu6kkCov/fy.4EKRGtX61FtOJfty0tWxK'
            ],
            // [
            //     'name' => 'Owner1',
            //     'username' => 'owner1',
            //     'address' => 'Pemogan',
            //     'email' => 'owner1@gmail.com',
            //     'email_verified_at' => now(),
            //     'password' => bcrypt('password')
            // ],
            // [
            //     'name' => 'Owner2',
            //     'username' => 'owner2',
            //     'address' => 'Pemogan',
            //     'email' => 'owner2@gmail.com',
            //     'email_verified_at' => now(),
            //     'password' => bcrypt('password')
            // ],
            // [
            //     'name' => 'Konsultan1',
            //     'username' => 'konsultan1',
            //     'address' => 'Pemogan',
            //     'email' => 'konsultan1@gmail.com',
            //     'email_verified_at' => now(),
            //     'password' => bcrypt('password')
            // ],
            // [
            //     'name' => 'Konsultan2',
            //     'username' => 'konsultan2',
            //     'address' => 'Pemogan',
            //     'email' => 'konsultan2@gmail.com',
            //     'email_verified_at' => now(),
            //     'password' => bcrypt('password')
            // ],
        ])->each(fn ($q)=>User::create($q));
    }
}
