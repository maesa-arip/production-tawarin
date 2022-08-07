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
            'anggaran_proyek' => $this->anggaran_proyek,
            'slug' => $this->slug,
            'name' => $this->name,
            'plan_category' => [
                'id' => $this->plan_category->id,
                'name' => $this->plan_category->name,
                'slug' => $this->plan_category->slug,
            ],
        ];
    }
}
