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
    public function Create(EmployeeCreateRequest $request)
    {
        try {
            $cvToUpdateId = Auth::user()->id;
            // image processing
            $image = $request->file('avatar');
            $name_gen = hexdec(uniqid()).'.'.$image->getClientOriginalExtension();
            // store image to public folder
            Image::make($image)->resize(300, 300)->save('upload/employee/'.$name_gen);
            // save image path to database
            $save_url = 'upload/employee/'.$name_gen;

            Employee::where('user_id', $cvToUpdateId)->update([
                'sex' => $request->sex,
                'date_of_birth' => $request->date_of_birth,
                'phone' => $request->phone,
                'hobby' => $request->hobby,
                'photo_path' => $save_url,
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

    }
}
