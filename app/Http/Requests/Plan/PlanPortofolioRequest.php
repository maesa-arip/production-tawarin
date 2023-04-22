<?php

namespace App\Http\Requests\Plan;

use Illuminate\Foundation\Http\FormRequest;

class PlanPortofolioRequest extends FormRequest
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
     * @return array<string, mixed>
     */
    public function rules()
    {
        return [
            'name' => ['required'],
            'luas_bangunan' => ['required'],
            'anggaran_proyek' => ['required'],
            'owner' => ['required'],
            'phone_owner' => ['required'],
            'plan_category_id' => ['required'],
            'description' => ['required'],
        ];
    }
}
