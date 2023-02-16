<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Spatie\Permission\Models\Permission;
use Spatie\Permission\Models\Role;
use Illuminate\Support\Facades\DB;

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
        Role::create(['name' => 'owner','guard_name' =>'web' ,'created_at'=>now(),'updated_at'=>now()]);

        Permission::create(['name' => 'lihat menu admin saldo','guard_name' =>'web' ,'created_at'=>now(),'updated_at'=>now()]);
        Permission::create(['name' => 'lihat menu admin general','guard_name' =>'web' ,'created_at'=>now(),'updated_at'=>now()]);
        Permission::create(['name' => 'lihat menu perencanaan','guard_name' =>'web' ,'created_at'=>now(),'updated_at'=>now()]);
        Permission::create(['name' => 'melakukan penawaran perencanaan','guard_name' =>'web' ,'created_at'=>now(),'updated_at'=>now()]);
        Permission::create(['name' => 'approve perencanaan','guard_name' =>'web' ,'created_at'=>now(),'updated_at'=>now()]);
        Permission::create(['name' => 'approve proyek','guard_name' =>'web' ,'created_at'=>now(),'updated_at'=>now()]);
        Permission::create(['name' => 'membuat perencanaan','guard_name' =>'web' ,'created_at'=>now(),'updated_at'=>now()]);
        Permission::create(['name' => 'membuat proyek','guard_name' =>'web' ,'created_at'=>now(),'updated_at'=>now()]);
        Permission::create(['name' => 'atur hak akses','guard_name' =>'web' ,'created_at'=>now(),'updated_at'=>now()]);

        DB::table('model_has_roles')->insert(['role_id' => 1,'model_type' => 'App\Models\User','model_id' => 1,]);
        DB::table('model_has_roles')->insert(['role_id' => 2,'model_type' => 'App\Models\User','model_id' => 1,]);
        // DB::table('model_has_roles')->insert(['role_id' => 3,'model_type' => 'App\Models\User','model_id' => 5,]);
        // DB::table('model_has_roles')->insert(['role_id' => 3,'model_type' => 'App\Models\User','model_id' => 6,]);
        // DB::table('model_has_roles')->insert(['role_id' => 4,'model_type' => 'App\Models\User','model_id' => 5,]);
        // DB::table('model_has_roles')->insert(['role_id' => 4,'model_type' => 'App\Models\User','model_id' => 6,]);
        // DB::table('model_has_roles')->insert(['role_id' => 9,'model_type' => 'App\Models\User','model_id' => 3,]);


        DB::table('role_has_permissions')->insert(['permission_id' => 5,'role_id' => 2,]);
        DB::table('role_has_permissions')->insert(['permission_id' => 6,'role_id' => 2,]);
        DB::table('role_has_permissions')->insert(['permission_id' => 3,'role_id' => 3,]);
        DB::table('role_has_permissions')->insert(['permission_id' => 4,'role_id' => 3,]);
        DB::table('role_has_permissions')->insert(['permission_id' => 3,'role_id' => 4,]);
        DB::table('role_has_permissions')->insert(['permission_id' => 4,'role_id' => 4,]);
        DB::table('role_has_permissions')->insert(['permission_id' => 7,'role_id' => 9,]);
        DB::table('role_has_permissions')->insert(['permission_id' => 8,'role_id' => 9,]);        
        DB::table('role_has_permissions')->insert(['permission_id' => 9,'role_id' => 1,]);        
    }
}
