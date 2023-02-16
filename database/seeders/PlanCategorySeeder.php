<?php

namespace Database\Seeders;

use App\Models\Plan\PlanCategory;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class PlanCategorySeeder extends Seeder
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
                'name' => 'Proyek Konstruksi Teknik Sipil',
                'slug' => 'proyek-konstruksi-teknik-sipil'
            ],
            [
                'name' => 'Proyek Konstruksi Bangunan Gedung',
                'slug' => 'proyek-konstruksi-bangunan-gedung'
            ],
            [
                'name' => 'Proyek Konstruksi Jalan Raya',
                'slug' => 'proyek-konstruksi-jalan-raya'
            ],
            [
                'name' => 'Proyek Konstruksi Perumahan',
                'slug' => 'proyek-konstruksi-perumahan'
            ],
            [
                'name' => 'Proyek Konstruksi Bangunan Industri',
                'slug' => 'proyek-konstruksi-bangunan-industri'
            ],
            [
                'name' => 'Proyek Konstruksi Bangunan Air',
                'slug' => 'proyek-konstruksi-bangunan-air'
            ],
            [
                'name' => 'Proyek Konstruksi Jembatan',
                'slug' => 'proyek-konstruksi-jembatan'
            ],
            [
                'name' => 'Proyek Konstruksi Sekolah',
                'slug' => 'proyek-konstruksi-sekolah'
            ],
            [
                'name' => 'Proyek Konstruksi Rumah Sakit',
                'slug' => 'proyek-konstruksi-rumah-sakit'
            ],
        ])->each(fn ($q)=>PlanCategory::create($q));
    }
}
