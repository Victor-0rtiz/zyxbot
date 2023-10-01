<?php

use App\Http\Controllers\ChatapiController;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Controllerapi;



Route::get('/', function () {
    return view('welcome');
});

Route::post('/consume-api', [Controllerapi::class, 'ConsumeAPI']);
Route::post('/prueba', [ChatapiController::class, "Prueba"] );
