<?php

use App\Http\Controllers\ProfileController;
use App\Http\Controllers\User\UserTripController;
use Illuminate\Support\Facades\Route;

Route::get('/', function () {
    return view('apps-chat');
});

Route::group(['middleware' => ['auth', 'verified']], function () {

    Route::prefix('admin')->name('admin.')->middleware(['role:admin'])->group(callback: function () {

    });

    Route::prefix('vartotojas')->name('user.')->middleware(['role:user'])->group(function () {
        Route::get('/', [UserTripController::class, 'index'])->name('index');
    });

});

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

require __DIR__.'/auth.php';
