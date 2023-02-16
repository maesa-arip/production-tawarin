<?php

namespace Database\Seeders;

use App\Models\Plan\PlanStep;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class PlanStepSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        PlanStep::create(['step' => 1,'title' => 'Kontrak dan 50% Dana','description'=>'Silakan masukan saldo 50% dari nilai kontrak sebelum konsultan upload hasil perencanaannya. Dana ini tidak bisa ditarik oleh konsultan sebelum disetujui oleh owner.', 'type'=>1]);
        PlanStep::create(['step' => 1,'title' => 'Menunggu Dana Owner','description'=>'Menunggu owner memasukan dana 50% sebelum konsultan upload hasil perencanaannya. Dana ini tidak bisa ditarik oleh konsultan sebelum disetujui oleh owner.', 'type'=>2]);
        PlanStep::create(['step' => 2,'title' => 'Menunggu Konfirmasi Admin','description'=>'Dana sudah di upload, menunggu konfirmasi admin Tawarin', 'type'=>1]);
        PlanStep::create(['step' => 2,'title' => 'Menunggu Konfirmasi Admin','description'=>'Dana sudah di upload, menunggu konfirmasi admin Tawarin', 'type'=>2]);
        PlanStep::create(['step' => 3,'title' => 'Menunggu konsultan upload hasil','description'=>'Dana sudah disetujui admin, menunggu konsultan upload hasil perencanaan', 'type'=>1]);
        PlanStep::create(['step' => 3,'title' => 'Upload hasil perencanaan','description'=>'Saldo sudah masuk silakan upload hasil perencanaanmu, dana bisa ditarik setalah upload hasil dan sudah konfirmasi dari owner', 'type'=>2]);
        PlanStep::create(['step' => 4,'title' => 'Upload Sisa 50% Pembayaran','description'=>'Silakan upload sisa pembayaran sebelum bisa melihat hasil, dana ini tidak bisa ditarik oleh konsultan sebelum pekerjaan dari konsultan selesai', 'type'=>1]);
        PlanStep::create(['step' => 4,'title' => 'Menunggu Sisa Pembayaran 50%','description'=>'Hasil terkirim menunggu owner memasukan sisa dana 50% dan pengajuan revisi, sisa dana 50% ini tidak bisa ditarik sebelum pekerjaan dari konsultan selesai', 'type'=>2]);
    }
}
