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
        // PlanMaster::create(['name' => $name =  'Gambar Arsitektur','slug' => str($name)->slug(),'type'=>'checkbox']);
        PlanMaster::create(['name' => $name =  'Gambar Arsitektur','slug' => 'gambar_arsitektur','type'=>'checkbox']);
        PlanMaster::create(['name' => $name =  'Gambar Sipil','slug' => 'gambar_sipil','type'=>'checkbox']);
        PlanMaster::create(['name' => $name =  'Metode Pelaksanaan','slug' => 'metode_pelaksanaan','type'=>'checkbox']);
        PlanMaster::create(['name' => $name =  'Animasi 3D','slug' => 'animasi_3d','type'=>'checkbox']);
        PlanMaster::create(['name' => $name =  'Gambar Struktur','slug' => 'gambar_struktur','type'=>'checkbox']);
        PlanMaster::create(['name' => $name =  'Gambar MEP','slug' => 'gambar_mep','type'=>'checkbox']);
        PlanMaster::create(['name' => $name =  'RAB dan Spesifikasi Teknis','slug' => 'rab_dan_spesifikasi_teknis','type'=>'checkbox']);
        PlanMaster::create(['name' => $name =  'Time Schedule dan Bobot Pembayaran','slug' => 'time_schedule_dan_bobot_pembayaran','type'=>'checkbox']);
        PlanMaster::create(['name' => $name =  'Lainnya','slug' => 'lainnya','type'=>'text']);
    }
}
