<?php

namespace App\Http\Resources\Reservation;

use Illuminate\Http\Resources\Json\JsonResource;

class ReservationCounterResource extends JsonResource
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
            'price' => $this->price,
            'price_user' => $this->price_user,
            'service_duration' => $this->service_duration,
            'period' => $this->period,
            'percent_owner' => $this->percent_owner,
            'percent_employe' => $this->percent_employe,
            'is_active' => $this->is_active,
            'code' => $this->code,
            'slug' => $this->slug,
            'company' => [
                'open_at' => $this->company->open_at,
                'close_at' => $this->company->close_at,
            ],
            'created_at' => $this->created_at->diffForHumans(),
            'media'  => $this->getFirstMediaUrl('reservationcounter'),
            // 'media' => PlanResource::collection($this->whenLoaded('media')),
        ];
    }
}
