<?php

namespace App\Http\Controllers;

use App\Http\Requests\EmployeeCreateRequest;
use App\Models\Employee;
use Carbon\Carbon;
use Exception;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Intervention\Image\Facades\Image as Image;

class EmployeeController extends Controller
{
    public function UpdateCvInfo(EmployeeCreateRequest $request)
    {
        try {
            $cvToUpdateId = Auth::user()->id;
            // delete old CV image before update
            $this->deleteImage($cvToUpdateId);
            // generate image path
            $urlToSave = $this->createImagePath($request);

            Employee::where('user_id', $cvToUpdateId)->update([
                'sex' => $request->sex,
                'date_of_birth' => $request->date_of_birth,
                'phone' => $request->phone,
                'hobby' => $request->hobby,
                'photo_path' => $urlToSave,
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

    public function ShowCvInfo($id)
    {
        try {
            $cvToShow = Employee::findOrFail($id)->get();
            return response()->json($cvToShow);
        }
        catch(Exception $exception) {
            return response([
                'message' => 'ID is not valid or not existed',
            ], 404);
        } 
    }

    // delete old Image
    public function deleteImage($cvId)
    {
        $photoToDelete = Employee::where('user_id', '=', $cvId)->firstOrFail()->photo_path;
        if ($photoToDelete) {
            @unlink(public_path($photoToDelete));
        }
    }

    // create image
    public function createImagePath($request)
    {
        // image processing
        $image = $request->file('avatar');
        $name_gen = hexdec(uniqid()).'.'.$image->getClientOriginalExtension();
        // store image to public folder
        Image::make($image)->resize(300, 300)->save('upload/employee/'.$name_gen);
        // save image path to database
        $urlToSave = 'upload/employee/'.$name_gen;
        return $urlToSave;
    }
}
