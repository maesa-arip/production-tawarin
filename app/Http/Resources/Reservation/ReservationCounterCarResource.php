<?php

namespace App\Http\Resources\Reservation;

use Illuminate\Http\Resources\Json\JsonResource;

class ReservationCounterCarResource extends JsonResource
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
            // 'cars' => ArrayResource::collection($this->whenLoaded('cars')),
            // 'slug' => $this->slug,
            'counter' => [
                'name' => $this->counter->name,
                'price' => $this->counter->price,
                'description' => $this->counter->description,
            ],
            // 'created_at' => $this->created_at->diffForHumans(),
            // 'media'  => $this->getFirstMediaUrl('reservationcounter'),
        ];
    }
}
