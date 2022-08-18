<?php

namespace App\Http\Requests\Plan;

use Illuminate\Foundation\Http\FormRequest;

class PlanRequest extends FormRequest
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
            // 'user_id' => ['required'],
            // 'plan_category_id' => ['required'],
            'name' => ['required'],
            // 'slug' => ['required'],
            'jangka_waktu_penawaran' => ['required'],
            'jangka_waktu_pelaksanaan' => ['required'],
            'jumlah_revisi' => ['required'],
            'luas_bangunan' => ['required'],
            'anggaran_proyek' => ['required'],
            'acuan_anggaran' => ['required'],
            // 'files' => ['string'],
            // 'dari_anggaran' => ['required'],
            // 'sampai_anggaran' => ['required'],
        ];
    }
}
