<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('pages', function (Blueprint $table) {
            $table->id();
            $table->string('title',length:250);
            $table->string('city',length:100);
            $table->json('tags');
            $table->string('theme');
            $table->string('font_family');
            $table->boolean('publish')->default(false);
            $table->integer('visited')->nullable();
            $table->foreignId('user_id')
            ->unique()           // Ensures each user can only have one post
            ->constrained()      // Automatically references `users(id)`
            ->onDelete('cascade');
            $table->timestamps();

        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('pages');
    }
};
