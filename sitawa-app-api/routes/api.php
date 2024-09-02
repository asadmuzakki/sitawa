<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\API\TestController;
use App\Http\Controllers\API\ComplaintController;

Route::middleware(['auth:sanctum'])->get('/user', function (Request $request) {
    return $request->user();
});
Route::middleware('auth:sanctum')->apiResource('posts', TestController::class);
Route::middleware('auth:sanctum')->apiResource('complaints', ComplaintController::class);
// Route::post('/complaints', [ComplaintController::class, 'store']);
// Route::get('/complaints', [ComplaintController::class, 'index']);


