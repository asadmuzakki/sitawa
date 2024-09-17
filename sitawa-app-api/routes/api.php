<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\API\ComplaintController;

Route::middleware(['auth:sanctum'])->get('/user', function (Request $request) {
    return $request->user();
});
Route::apiResource('/complaints', App\Http\Controllers\api\ComplaintController::class);
Route::apiResource('/replies', App\Http\Controllers\api\ReplyController::class);
Route::post('register', [AuthController::class, 'register']);
Route::post('login', [AuthController::class, 'login']);

Route::middleware(['auth:sanctum'])->group(function () {
    Route::post('logout', [AuthController::class, 'logout']);

    Route::middleware('role:admin')->get('/admin', function () {
        return response()->json(['message' => 'Admin access']);
    });

    Route::middleware('role:user')->get('/user', function () {
        return response()->json(['message' => 'User access']);
    });
});