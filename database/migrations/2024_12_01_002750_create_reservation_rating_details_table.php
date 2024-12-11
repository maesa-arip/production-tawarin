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
        Schema::create('reservation_rating_details', function (Blueprint $table) {
            $table->id();
            $table->foreignId('reservation_rating_id')->constrained();
            $table->foreignId('reservation_rating_category_id')->constrained();
            $table->string('comments');
            $table->integer('star_rating');
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
        Schema::dropIfExists('reservation_rating_details');
    }
};
