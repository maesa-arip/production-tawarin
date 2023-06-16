<?php

namespace App\Http\Requests\Project;

use Illuminate\Foundation\Http\FormRequest;

class ProjectRequest extends FormRequest
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
            'project_category_id' => ['required'],
            'project_payment_id' => ['required'],
            'jangka_waktu_penawaran' => ['required'],
            'jangka_waktu_pelaksanaan' => ['required'],
            'jaminan_pemeliharaan' => ['required'],
            'masa_waktu_pemeliharaan' => ['required'],
            'anggaran_proyek' => ['required'],
            'jaminan_pelaksanaan' => ['required'],
        ];
    }
}
