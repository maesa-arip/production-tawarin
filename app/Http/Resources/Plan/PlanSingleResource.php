<?php

namespace App\Http\Resources\Plan;

use Illuminate\Http\Resources\Json\JsonResource;

class PlanSingleResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array|\Illuminate\Contracts\Support\Arrayable|\JsonSerializable
     */
    public function toArray($request)
    {
        return [
            'id' => $this->id,
            'jangka_waktu_penawaran' => $this->jangka_waktu_penawaran,
            'jangka_waktu_pelaksanaan' => $this->jangka_waktu_pelaksanaan,
            'jumlah_revisi' => $this->jumlah_revisi,
            'luas_bangunan' => $this->luas_bangunan,
            'anggaran_proyek' => $this->anggaran_proyek,
            'dari_anggaran' => $this->dari_anggaran,
            'sampai_anggaran' => $this->sampai_anggaran,
            'slug' => $this->slug,
            'name' => $this->name,
            'is_approved' => $this->is_approved,
            'plan_bids_sum_is_approved' => $this->plan_bids_sum_is_approved,
            'lat' => $this->lat,
            'lng' => $this->lng,
            'plan_category' => [
                'id' => $this->plan_category->id,
                'name' => $this->plan_category->name,
                'slug' => $this->plan_category->slug,
            ],
        ];
    }
}
