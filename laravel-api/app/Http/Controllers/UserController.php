<?php

namespace App\Http\Controllers;

use App\Http\Requests\EditRequest;
use App\Models\User;
use Exception;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;

class UserController extends Controller
{
    public function User($userId)
    {
        $user = User::findOrFail($userId);
        return response()->json($user);
    } // end User method

    public function EditProfile(EditRequest $request, $userId)
    {
        $currentUser = User::findOrFail($userId);

        try {
            $currentUser->email = $request->email != NULL ? $request->email : Auth::user()->email;
            $currentUser->name = $request->name != NULL ? $request->name : Auth::user()->name;
            if ($request->password) {
                $currentUser->password = Hash::make($request->password);
            } 

            $currentUser->save();
            return response()->json(User::findOrFail($userId));
        } 
        catch(Exception $exception) {
            return response([
                'message' => $exception->getMessage(),
            ], 400);
        }
    } // end EditProfile method

    public function GetAllUsers() {
        $allUsers = User::select('id', 'name', 'email')->get();
        return response()->json($allUsers);
    }
}
