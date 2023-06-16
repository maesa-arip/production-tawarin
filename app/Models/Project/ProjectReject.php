<?php

namespace App\Models\Project;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ProjectReject extends Model
{
    use HasFactory;
    public function project()
    {
        $this->belongsTo(Project::class);
    }
}
