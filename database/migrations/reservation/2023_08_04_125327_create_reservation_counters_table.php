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
        Schema::create('reservation_counters', function (Blueprint $table) {
            $table->id();
            $table->foreignId('reservation_company_id')->constrained('reservation_companies');
            $table->foreignId('user_id')->constrained('users');
            $table->string('name');
            $table->time('open_at');
            $table->time('close_at');
            $table->integer('service_duration');
            $table->boolean('set_dayoff');
            $table->integer('period');
            $table->tinyInteger('need_image_reservation');
            $table->tinyInteger('need_image_before_after');
            $table->boolean('is_active');
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
        Schema::dropIfExists('reservation_counters');
    }
};
