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
        Schema::create('reservation_customers', function (Blueprint $table) {
            $table->id();
            $table->foreignId('reservation_schedule_id')->constrained('reservation_schedules');
            $table->foreignId('user_id')->constrained('users');
            $table->dateTime('date');
            $table->boolean('cancel');
            $table->string('reason');
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
        Schema::dropIfExists('reservation_customers');
    }
};
