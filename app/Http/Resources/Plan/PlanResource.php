<?php

namespace App\Http\Resources\Plan;

use Illuminate\Http\Resources\Json\JsonResource;
use Illuminate\Support\Facades\Storage;

class PlanResource extends JsonResource
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
            'anggaran_proyek' => $this->anggaran_proyek,
            'jumlah_revisi' => $this->jumlah_revisi,
            'dari_anggaran' => $this->dari_anggaran,
            'sampai_anggaran' => $this->sampai_anggaran,
            'slug' => $this->slug,
            'name' => $this->name,
            'plan_category' => [
                'id' => $this->plan_category->id,
                'name' => $this->plan_category->name,
                'slug' => $this->plan_category->slug,
            ],
            'owner' => [
                'id' => $this->owner->id,
                'name' => $this->owner->name,
            ],
            'created_at' => $this->created_at->diffForHumans(),
        ];
    }
}