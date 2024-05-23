<?php

namespace App\Http\Resources\Wallet;

use Illuminate\Http\Resources\Json\JsonResource;

class DepositAdminResource extends JsonResource
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
            'payable_type' => $this->payable_type,
            'payable_id' => $this->payable_id,
            'wallet_id' => $this->wallet_id,
            'type' => $this->type,
            'meta' => $this->meta,
            'amount' => $this->amount,
            'holder_name' => $this->wallet->holder->name,
            'confirmed' => $this->confirmed,
            'created_at' => $this->created_at->diffForHumans(),
        ];
    }
}
