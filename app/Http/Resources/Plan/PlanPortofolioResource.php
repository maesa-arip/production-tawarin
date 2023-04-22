<?php

namespace App\Http\Resources\Plan;

use Illuminate\Http\Resources\Json\JsonResource;

class PlanPortofolioResource extends JsonResource
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
            'is_approved' => $this->is_approved,
            'owner' => $this->owner,
            'phone_owner' => $this->phone_owner,
            'plan_category' => [
                'id' => $this->plan_category->id,
                'name' => $this->plan_category->name,
                'slug' => $this->plan_category->slug,
            ],
            'created_at' => $this->created_at->diffForHumans(),
            'media'  => $this->getFirstMediaUrl('contohgambar'),
        ];
    }
}
