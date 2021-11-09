<?php

use App\Http\Controllers\AuthController;
use App\Http\Controllers\EmployeeController;
use App\Http\Controllers\ForgetController;
use App\Http\Controllers\ResetController;
use App\Http\Controllers\UserController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

// Route::middleware('auth:api')->get('/user', function (Request $request) {
//     return $request->user();
// });

// Login Routes
Route::post('/login', [AuthController::class, 'Login']);

// Register Routes
Route::post('/register', [AuthController::class, 'Register']);

// Forgot Password Routes
Route::post('/forgetpassword', [ForgetController::class, 'ForgetPassword']);

// Reset Password Routes
Route::post('/reset/password', [ResetController::class, 'ResetPassword']);

// Current User Routes
Route::get('/user/{userId}', [UserController::class, 'User']); // middleware check user login or not
Route::post('/user/edit/{userId}', [UserController::class, 'EditProfile']);

// Employee Routes
Route::post('/employee/cv-update', [EmployeeController::class, 'UpdateCvInfo']);
Route::get('/employee/cv-show/{userId}', [EmployeeController::class, 'ShowCvInfo']);

// Route get all user
