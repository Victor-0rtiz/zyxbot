<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\controllerapi;



Route::get('/', function () {
    return view('welcome');
});

Route::post('/consume-api', [controllerapi::class, 'consumeAPI']);
