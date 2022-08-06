<?php

namespace Database\Seeders;

use App\Models\Toko\Category;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class CategorySeeder extends Seeder
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
                'name' => $name =  'Laravel',
                'slug' => str($name)->slug(),
            ],
            [
                'name' => $name =  'Javascript',
                'slug' => str($name)->slug(),
            ],
            [
                'name' => $name =  'React JS',
                'slug' => str($name)->slug(),
            ],
            [
                'name' => $name =  'Vue JS',
                'slug' => str($name)->slug(),
            ],
            [
                'name' => $name =  'Angular',
                'slug' => str($name)->slug(),
            ],
            [
                'name' => $name =  'Tailwind CSS',
                'slug' => str($name)->slug(),
            ],
        ])->each(fn ($q)=>Category::create($q));
    }
}
