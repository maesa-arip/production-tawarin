<?php

namespace App\Http\Resources\Reservation;

use App\Http\Resources\ArrayResource;
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
            'cars' => ArrayResource::collection($this->whenLoaded('cars')),
            'id' => $this->id,
            'name' => $this->name,
            'price' => $this->price,
            'price_user' => $this->price_user,
            'bonus_khusus' => $this->bonus_khusus,
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
                'reservation_category_id' => $this->company->reservation_category_id,
            ],
            'category' => [
                'name' => $this->category?->name,
            ],
            'created_at' => $this->created_at->diffForHumans(),
            'media'  => $this->getFirstMediaUrl('reservationcounter'),
        ];
    }
}
