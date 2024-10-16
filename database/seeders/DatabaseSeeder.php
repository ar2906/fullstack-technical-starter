<?php

namespace Database\Seeders;

use App\Models\User;
// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        // User::factory(10)->create();

        User::factory()->create([
            'name' => 'Test User',
            'email' => 'test@example.com',
            'is_supporter' => false
        ]);


        User::factory()->create([
            'name' => 'Test User 2',
            'email' => 'test22@example.com',
            'is_supporter' => true
        ]);

        
        User::factory()->create([
            'name' => 'Aravind',
            'email' => 'aravind@example.com',
            'is_supporter' => true
        ]);
    }
}
