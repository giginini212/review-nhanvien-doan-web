<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateEmployeesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('employees', function (Blueprint $table) {
            $table->id();
            $table->integer('user_id');
            $table->string('sex')->nullable();
            $table->timestamp('date_of_birth')->nullable();
            $table->string('phone')->nullable();
            $table->text('hobby')->nullable();
            $table->string('photo_path')->nullable();
            $table->text('care_goals')->nullable();
            $table->string('education')->nullable();
            $table->text('experience')->nullable();
            $table->text('skill')->nullable();
            $table->string('certification')->nullable();
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
        Schema::dropIfExists('employees');
    }
}
