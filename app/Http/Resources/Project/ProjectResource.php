<?php

namespace App\Http\Resources\Project;

use Carbon\Carbon;
use Illuminate\Http\Resources\Json\JsonResource;

class ProjectResource extends JsonResource
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
            'jangka_waktu_penawaran' => $this->jangka_waktu_penawaran,
            'jangka_waktu_pelaksanaan' => $this->jangka_waktu_pelaksanaan,
            'project_bids_count' => $this->project_bids_count,
            'project_bids_sum_is_approved' => $this->project_bids_sum_is_approved,
            'project_category' => [
                'id' => $this->project_category->id,
                'name' => $this->project_category->name,
                'slug' => $this->project_category->slug,
            ],
            'owner' => [
                'id' => $this->owner->id,
                'name' => $this->owner->name,
            ],
            'winner' => [
                'id' => $this->winner ? $this->winner->id : '',
                'name' => $this->winner ? $this->winner->name : '',
            ],
            'created_at' => $this->created_at->diffForHumans(),
            'until' =>  ($this->created_at->addDays($this->jangka_waktu_penawaran))->diffInDays(Carbon::now()),
            'media'  => $this->getFirstMediaUrl('contohgambar'),
            // 'media' => projectResource::collection($this->whenLoaded('media')),
        ];
    }
}
