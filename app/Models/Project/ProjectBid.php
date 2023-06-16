<?php

namespace App\Models\Project;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ProjectBid extends Model
{
    use HasFactory;
    public function project()
    {
        return $this->belongsTo(Project::class);
    }
}
