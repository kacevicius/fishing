<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\User;
use Illuminate\Support\Facades\Hash;

class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        User::create([
            'name' => 'Admin',
            'email' => 'admin@fishing.lt',
            'password' => Hash::make('admin1234'),
        ])->assignRole('admin');

        User::create([
            'name' => 'User',
            'email' => 'user@fishing.lt',
            'password' => Hash::make('user1234'),
        ])->assignRole('user');
    }
}
