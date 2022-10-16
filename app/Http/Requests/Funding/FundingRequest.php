<?php

namespace App\Http\Requests\Funding;

use Illuminate\Foundation\Http\FormRequest;

class FundingRequest extends FormRequest
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
            // 'slug' => ['required'],
            'jangka_waktu_penawaran' => ['required'],
            'total_lembar' => ['required'],
            // 'anggaran' => ['required'],
            'provinsi' => ['required'],
            // 'roi' => ['required'],
            'jadwal_deviden' => ['required'],
        ];
    }
}
