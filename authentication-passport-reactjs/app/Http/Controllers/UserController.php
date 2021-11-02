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
    public function User()
    {
        // return current user's data
        return Auth::user();
    } // end User method

    public function EditProfile(EditRequest $request)
    {
        $currentUserId = Auth::user()->id;
        $currentUser = User::findOrFail($currentUserId);

        try {
            $currentUser->email = $request->email != NULL ? $request->email : Auth::user()->email;
            $currentUser->name = $request->name != NULL ? $request->name : Auth::user()->name;
            if ($request->password) {
                $currentUser->password = Hash::make($request->password);
            } 

            $currentUser->save();
            return response()->json(User::findOrFail($currentUserId));
        } 
        catch(Exception $exception) {
            return response([
                'message' => $exception->getMessage(),
            ], 400);
        }
    } // end EditProfile method
}
