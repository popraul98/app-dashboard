<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use App\Http\Controllers\Dashboard;
use App\Http\Controllers\DashboardControl;
use App\Http\Controllers\TaskController;
use App\Http\Controllers\ClientController;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return view('welcome');
});


Route::get('/logout', function () {
    return view('welcome');
});


//Route::get('/dashboard', function () {
////    return view('dashboard');
//    return Inertia::render('Dashboard');
//})->middleware(['auth'])->name('dashboard');

Route::middleware('auth')->group(function () {

    Route::get('/dashboard', [Dashboard::class, 'index']);
    Route::get('/dashboardUpdate', [Dashboard::class, 'indexUpdate']);

    Route::get('/dashboard-control', function () {
        return view('dashboard-control');
    });
    Route::get('/dashboard-control-data', [DashboardControl::class, 'index']);
    Route::post('/create-task', [TaskController::class, 'store']);
    Route::post('/update-task', [TaskController::class, 'update']);
    Route::post('/set-completed', [TaskController::class, 'setAsCompleted']);

    Route::post('/create-client', [ClientController::class, 'store']);


});
require __DIR__ . '/auth.php';
