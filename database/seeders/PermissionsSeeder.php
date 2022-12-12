<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Spatie\Permission\Models\Permission;
use Spatie\Permission\Models\Role;

class PermissionsSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        Role::create(['name' => 'super admin','guard_name' =>'web' ,'created_at'=>now(),'updated_at'=>now()]);
        Role::create(['name' => 'admin','guard_name' =>'web' ,'created_at'=>now(),'updated_at'=>now()]);
        Role::create(['name' => 'konsultan (drafter)','guard_name' =>'web' ,'created_at'=>now(),'updated_at'=>now()]);
        Role::create(['name' => 'konsultan (arsitek)','guard_name' =>'web' ,'created_at'=>now(),'updated_at'=>now()]);
        Role::create(['name' => 'kontraktor','guard_name' =>'web' ,'created_at'=>now(),'updated_at'=>now()]);
        Role::create(['name' => 'pemilik toko','guard_name' =>'web' ,'created_at'=>now(),'updated_at'=>now()]);
        Role::create(['name' => 'pemilik alat','guard_name' =>'web' ,'created_at'=>now(),'updated_at'=>now()]);
        Role::create(['name' => 'pekerja','guard_name' =>'web' ,'created_at'=>now(),'updated_at'=>now()]);

        Permission::create(['name' => 'lihat menu admin saldo','guard_name' =>'web' ,'created_at'=>now(),'updated_at'=>now()]);
        Permission::create(['name' => 'lihat menu admin general','guard_name' =>'web' ,'created_at'=>now(),'updated_at'=>now()]);
        Permission::create(['name' => 'lihat menu perencanaan','guard_name' =>'web' ,'created_at'=>now(),'updated_at'=>now()]);

        
    }
}
