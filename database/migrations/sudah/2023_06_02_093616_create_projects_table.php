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
        Schema::create('projects', function (Blueprint $table) {
            $table->id();
            $table->foreignId('user_id')->constrained('users');
            $table->string('name');
            $table->string('slug');
            $table->foreignId('project_category_id')->constrained('project_categories');
            $table->foreignId('project_payment_id')->constrained('project_payments');
            $table->integer('jangka_waktu_penawaran');
            $table->integer('jangka_waktu_pelaksanaan');
            $table->integer('jaminan_pemeliharaan');
            $table->integer('masa_waktu_pemeliharaan');
            $table->integer('anggaran_proyek');
            $table->integer('jaminan_pelaksanaan');
            $table->string('lat');
            $table->string('lng');
            $table->string('street')->nullable();
            $table->tinyInteger('is_approved')->default(0);
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
        Schema::dropIfExists('projects');
    }
};
