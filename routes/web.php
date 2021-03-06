<?php

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

Route::get('/')->uses('PagesController@index')->name('homepage');

Route::post('fetch')->uses('PagesController@fetch')->name('data.fetch');
Route::get('fetch')->uses('PagesController@fetch')->name('data.fetch');
Route::get('wallet')->uses('PagesController@coins')->name('coins');
Route::get('leaderboard')->uses('PagesController@leaderboard')->name('leaderboard');

Route::get('{any}')->uses('PagesController@index');
