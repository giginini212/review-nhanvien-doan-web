<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class ResetRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return [
            'token' => 'bail|required',
            'email' => 'required|email|min:10|max:60',
            'password' => 'required|min:4|max:28|confirmed'
        ];
    }
    
    public function messages()
    {
        return [
            'token.required' => 'A token is required',
            'email.required' => 'An email is required or not valid',
            'password.required' => 'A password is required or not valid',
            'password.confirmed' => 'Confirmation Password did not match',
        ];
    }
}
