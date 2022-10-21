<?php

namespace App\Http\Resources\Funding;

use Carbon\Carbon;
use Illuminate\Http\Resources\Json\JsonResource;

class FundingSingleResource extends JsonResource
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
            'jangka_waktu_penawaran' => $this->jangka_waktu_penawaran,
            'total_lembar' => $this->total_lembar,
            'harga_perlembar' => $this->harga_perlembar,
            'anggaran' => $this->anggaran,
            'provinsi' => $this->provinsi,
            'alamat' => $this->alamat,
            'roi' => $this->roi,
            'jadwal_deviden' => $this->jadwal_deviden,
            'tentang_bisnis' => $this->tentang_bisnis,
            'created_at' => $this->created_at->diffForHumans(),
            'until' =>  ($this->created_at->addDays($this->jangka_waktu_penawaran))->diffInDays(Carbon::now()),
            'funding_category' => [
                'id' => $this->funding_category->id,
                'name' => $this->funding_category->name,
                'slug' => $this->funding_category->slug,
            ],
            'owner' => [
                'id' => $this->owner->id,
                'name' => $this->owner->name,
            ],
        ];
    }
}
