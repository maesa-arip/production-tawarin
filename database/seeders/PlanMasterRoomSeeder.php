<?php

namespace Database\Seeders;

use App\Models\Plan\PlanMasterRoom;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class PlanMasterRoomSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        PlanMasterRoom::create(['name' =>'Kamar Tidur Utama','slug' => 'kamar-tidur-utama']);
        PlanMasterRoom::create(['name' =>'Kamar Tidur','slug' => 'kamar-tidur']);
        PlanMasterRoom::create(['name' =>'Kamar Mandi','slug' => 'kamar-mandi']);
        PlanMasterRoom::create(['name' =>'Ruang Tamu','slug' => 'ruang-tamu']);
        PlanMasterRoom::create(['name' =>'Dapur','slug' => 'dapur']);
        PlanMasterRoom::create(['name' =>'Garase','slug' => 'garase']);
        PlanMasterRoom::create(['name' =>'Ruang Cuci dan Jemur','slug' => 'ruang-cuci-dan-jemur']);
        PlanMasterRoom::create(['name' =>'Kolam Renang','slug' => 'kolam-renang']);
        PlanMasterRoom::create(['name' =>'Ruang Makan','slug' => 'ruang-makan']);
        PlanMasterRoom::create(['name' =>'Ruang Keluarga','slug' => 'ruang-keluarga']);
    }
}
