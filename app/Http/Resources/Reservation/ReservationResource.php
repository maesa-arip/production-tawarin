<?php

namespace App\Http\Resources\Reservation;

use Illuminate\Http\Resources\Json\JsonResource;

class ReservationResource extends JsonResource
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
            'name' => $this->name,
            'slug' => $this->slug,
            'formattedAddress' => $this->formattedAddress,
            'open_at' => $this->open_at,
            'close_at' => $this->close_at,
            'reservationcategory' => [
                'name' => $this->reservationcategory->name,
            ],
            'created_at' => $this->created_at->diffForHumans(),
            'media'  => $this->getFirstMediaUrl('reservationcompany'),
            // 'media' => PlanResource::collection($this->whenLoaded('media')),
        ];
    }
}
