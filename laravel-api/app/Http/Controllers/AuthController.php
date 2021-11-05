<?php

namespace App\Http\Controllers;

use App\Http\Requests\RegisterRequest;
use App\Models\Employee;
use Illuminate\Http\Request;
use App\Models\User;

use Exception;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;

class AuthController extends Controller
{
    
    public function Login(Request $request)
    {   
        try {
            // check email and user password
            if (Auth::attempt($request->only('email', 'password'))) {
                $user = Auth::user(); // get user data
                $token = $user->createToken('app')->accessToken;
                
                return response([
                    'message' => 'Successfully Login',
                    'token' => $token,
                    'user' => $user,
                ], 200);
            }
        } 
        catch(Exception $exception) {
            return response([
                'message' => $exception->getMessage(),
            ], 400);
        }
        
        return response([
            'message' => 'Invalid Email Or Password'
        ], 401);
    } // end Login method

    public function Register(RegisterRequest $request)
    {
        try {
            $user = User::create([
                'name' => $request->name,
                'email' => $request->email,
                'password' => Hash::make($request->password),
            ]);
            // login user after registering successfully
            $token = $user->createToken('app')->accessToken;
            
            // create User CV Info
            Employee::create([
                'user_id' => $user->id,
            ]);

            return response([
                'message' => 'Registration Successfully',
                'token' => $token,
                'user' => $user,
            ], 200);
        }
        catch(Exception $exception) {
            return response([
                'message' => $exception->getMessage(),
            ], 400);
        }

        return response([
            'message'=> 'Please Fill All The Required Informations',
        ], 500);
    } // end Register request
}
