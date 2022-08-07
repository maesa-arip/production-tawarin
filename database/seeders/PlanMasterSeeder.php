<?php

namespace Database\Seeders;

use App\Models\Plan\PlanMaster;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class PlanMasterSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        PlanMaster::create(['name' => $name =  'Gambar Arsitektur','slug' => str($name)->slug()]);
        PlanMaster::create(['name' => $name =  'Gambar 3D Interior','slug' => str($name)->slug()]);
        PlanMaster::create(['name' => $name =  'Gambar 3D Exterior','slug' => str($name)->slug()]);
        PlanMaster::create(['name' => $name =  'Animasi 3D','slug' => str($name)->slug()]);
        PlanMaster::create(['name' => $name =  'Gambar Struktur','slug' => str($name)->slug()]);
        PlanMaster::create(['name' => $name =  'Gambar MEP','slug' => str($name)->slug()]);
        PlanMaster::create(['name' => $name =  'RAB dan Spesifikasi Teknis','slug' => str($name)->slug()]);
        PlanMaster::create(['name' => $name =  'Time Schedule dan Bobot Pembayaran','slug' => str($name)->slug()]);
        PlanMaster::create(['name' => $name =  'Lainnya','slug' => str($name)->slug()]);
    }
}
