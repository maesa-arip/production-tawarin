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
        Schema::create('fundings', function (Blueprint $table) {
            $table->id();
            $table->foreignId('user_id')->constrained();
            $table->string('name');
            $table->string('slug');
            $table->foreignId('funding_category_id')->constrained();
            $table->integer('jangka_waktu_penawaran');
            $table->integer('harga_perlembar');
            $table->integer('total_lembar');
            $table->bigInteger('anggaran');
            $table->bigInteger('anggaran_user');
            $table->string('maps')->nullable();
            $table->string('alamat')->nullable();
            $table->integer('provinsi');
            $table->integer('kota');
            $table->integer('kecamatan');
            $table->integer('desa');
            $table->text('prospektus')->nullable();
            $table->float('roi');
            $table->integer('jadwal_deviden');
            $table->text('tentang_bisnis');
            $table->boolean('is_approved')->default(false);
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
        Schema::dropIfExists('fundings');
    }
};
