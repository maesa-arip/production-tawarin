<?php

namespace App\Http\Requests\Portofolio;

use Illuminate\Foundation\Http\FormRequest;

class PortofolioRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return false;
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
