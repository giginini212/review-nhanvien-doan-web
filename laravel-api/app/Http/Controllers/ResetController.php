<?php

namespace App\Http\Controllers;

use App\Http\Requests\ResetRequest;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;

class ResetController extends Controller
{
    public function ResetPassword(ResetRequest $request)
    {
        $email = $request->email;
        $token = $request->token;
        $password = Hash::make($request->password);

        $pinCheck = DB::table('password_resets')->where('token', '=', $token)->first();
        $emailCheck = DB::table('password_resets')->where('email', '=', $email)->first();

        // check pincode if exist
        if (!$pinCheck) {
            return response([
                'message' => 'Pincode Is Not Valid',
            ], 401);
        }
        // check email if exist
        if(!$emailCheck) {
            return response([
                'message' => 'Email Not Found',
            ], 401);
        }

        DB::table('users')->where('email', '=', $email)->update([
            'password' => $password,
        ]);
        
        // delete reset password token 
        DB::table('password_resets')->where([['email', '=', $email], ['token', '=', $token]])->delete();
        
        return response([
            'message' => 'Pasword Changed Successfully',
        ], 200);
    } // end ResetPassword method
}
