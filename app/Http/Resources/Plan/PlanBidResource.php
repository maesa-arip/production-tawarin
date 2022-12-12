<?php

namespace App\Http\Resources\Plan;

use Illuminate\Http\Resources\Json\JsonResource;

class PlanBidResource extends JsonResource
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
            'is_approved' => $this->is_approved,
            'plan_category' => [
                'id' => $this->plan_category->id,
                'name' => $this->plan_category->name,
                'slug' => $this->plan_category->slug,
            ],
            'owner' => [
                'id' => $this->owner->id,
                'name' => $this->owner->name,
            ],
            'plan_bid' => [
                'bid_price' => $this->plan_bid->bid_price,
                'description' => $this->plan_bid->description,
                'is_approved' => $this->plan_bid->is_approved,
            ],
            'created_at' => $this->created_at->diffForHumans(),
            // 'plan_bids' => PlanBidResource::collection($this->whenLoaded('plan_bids')),
        ];
    }
}
