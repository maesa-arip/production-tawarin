<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('plans', function (Blueprint $table) {
            $table->id();
            $table->foreignId('user_id')->constrained('users');
            $table->foreignId('plan_category_id')->constrained('plan_categories');
            $table->string('name');
            $table->string('slug');
            $table->integer('jangka_waktu_penawaran');
            $table->integer('jangka_waktu_pelaksanaan');
            $table->integer('jumlah_revisi');
            $table->integer('luas_bangunan');
            $table->bigInteger('anggaran_proyek');
            $table->bigInteger('acuan_anggaran');
            $table->integer('dari_anggaran');
            $table->integer('sampai_anggaran');
            $table->tinyInteger('is_approved');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('plans');
    }
};
