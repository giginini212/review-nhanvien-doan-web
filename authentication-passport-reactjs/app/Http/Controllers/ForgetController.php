<?php

namespace App\Http\Controllers;

use App\Http\Requests\ForgetRequest;
use App\Mail\ForgetMail;
use App\Models\User;
use Carbon\Carbon;
use Exception;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Mail;

class ForgetController extends Controller
{
    public function ForgetPassword(ForgetRequest $request)
    {
        $email = $request->email;

        if(User::where('email', '=', $email)->doesntExist()) {
            return response([
                'message' => 'Email Is Not Valid Or Not Existed',
            ], 401);
        }

        // generate Random Token
        $token = rand(10, 100000);
        
        try {
            // store reset password token
            DB::table('password_resets')->insert([
                'email' => $email,
                'token' => $token,
                'created_at' => Carbon::now(),
            ]);
            // make a mail: php artisan make:mail MailName
            Mail::to($email)->send(new ForgetMail($token)); // mail send to user 

            return response([
                'message' => 'Reset Password Mail Was Sent To Your Email',
            ], 200);
        }
        catch(Exception $exception) {
            return response([
                'message' => $exception->getMessage(),
            ], 400);
        }

    } // end ForgetPassword 
}
