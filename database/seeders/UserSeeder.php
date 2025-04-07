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
            'first_name' => 'Admin',
            'last_name' => 'Admin',
            'email' => 'admin@driveable.lt',
            'password' => Hash::make('admin1234'),
        ])->assignRole('admin');

        $worker = User::create([
            'first_name' => 'Worker',
            'last_name' => 'User',
            'email' => 'worker@driveable.lt',
            'password' => Hash::make('worker1234'),
        ])->assignRole('user');
    }
}
