<?php

namespace App\Http\Resources\Plan;

use Illuminate\Http\Resources\Json\JsonResource;

class BidPlanResource extends JsonResource
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
            'plan_id' => $this->plan_id,
            'bid_price' => $this->bid_price,
            'bid_price_user' => $this->bid_price_user,
            'description' => $this->description,
            'is_approved' => $this->is_approved,
            'konsultan' => [
                'id' => $this->konsultan->id,
                'name' => $this->konsultan->name,
            ],
            'plan' => [
                'name' => $this->plan->name,
                'slug' => $this->plan->slug,
            ],
            'created_at' => $this->created_at->diffForHumans(),
        ];
    }
}
