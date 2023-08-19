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
        Schema::create('reservation_schedules', function (Blueprint $table) {
            $table->id();
            $table->foreignId('reservation_counter_id')->constrained('reservation_counters');
            $table->foreignId('reservation_team_id')->constrained('reservation_teams');
            $table->foreignId('reservation_day_id')->constrained('reservation_days');
            $table->foreignId('reservation_time_id')->constrained('reservation_times');
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
        Schema::dropIfExists('reservation_schedules');
    }
};
