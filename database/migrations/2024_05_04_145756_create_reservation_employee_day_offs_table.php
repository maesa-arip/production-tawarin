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
        Schema::create('reservation_employee_day_offs', function (Blueprint $table) {
            $table->id();
            $table->foreignId('reservation_company_id')->constrained('reservation_companies');
            $table->foreignId('user_id')->constrained('users');
            $table->date('date');
            $table->string('reason');
            $table->boolean('approved')->default(0);
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
        Schema::dropIfExists('reservation_employee_day_offs');
    }
};
