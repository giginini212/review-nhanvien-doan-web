<?php

namespace App\Http\Controllers;

use App\Http\Requests\EmployeeCreateRequest;
use App\Models\Employee;
use App\Models\User;
use Carbon\Carbon;
use Exception;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Intervention\Image\Facades\Image as Image;

class EmployeeController extends Controller
{
    public function GetAllEmployees()
    {
        $employess = Employee::select('id', 'name', 'email', 'photo_path')->get();
        return response()->json($employess);
    }

    public function UpdateCvInfo(EmployeeCreateRequest $request)
    {
        try {
            $cvToUpdateId = $request->id;
            
            Employee::where('user_id', $cvToUpdateId)->update([
                'name' => $request->name,
                'email' => $request->email,
                'sex' => $request->sex,
                'date_of_birth' => $request->date_of_birth,
                'phone' => $request->phone,
                'hobby' => $request->hobby,
                'photo_path' => $request->avatar,
                'career_goals' => $request->career_goals,
                'education' => $request->education,
                'experience' => $request->experience,
                'skill' => $request->skill,
                'certification' => $request->certification,
            ]);

            return response([
                'message' => 'CV Updated Successully'
            ], 200);
        }
        catch(Exception $exception) {
            return response([
                'message' => $exception->getMessage(),
            ], 400);
        }
        return response([
            'message' => 'Sth wrong'
        ], 401);
    } // end UpdateCvInfo

    public function ShowCvInfo(Request $request, $cvId)
    {
        try {
            $cvToShow = Employee::findOrFail($cvId);
            return response()->json($cvToShow);
        }
        catch(Exception $exception) {
            return response([
                'message' => $exception->getMessage()
            ], 404);
        } 
        
        return response([
            'message' => 'Cannot find user info with specified ID'
        ], 404);
    }

    // delete old Image
    // public function deleteImage($cvId)
    // {
    //     $photoToDelete = Employee::where('user_id', '=', $cvId)->firstOrFail()->photo_path;
    //     if ($photoToDelete) {
    //         @unlink(public_path($photoToDelete));
    //     }
    // }

    // create image
    // public function createImagePath($request)
    // {
    //     // image processing
    //     $image = $request->file('avatar');
    //     $name_gen = hexdec(uniqid()).'.'.$image->getClientOriginalExtension();
    //     // store image to public folder
    //     Image::make($image)->resize(300, 300)->save('upload/employee/'.$name_gen);
    //     // save image path to database
    //     $urlToSave = 'upload/employee/'.$name_gen;
    //     return $urlToSave;
    // }
}
