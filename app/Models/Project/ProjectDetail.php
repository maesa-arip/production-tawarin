<?php

namespace App\Models\Project;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Spatie\MediaLibrary\HasMedia;
use Spatie\MediaLibrary\InteractsWithMedia;

class ProjectDetail extends Model implements HasMedia
{
    use HasFactory, InteractsWithMedia;
    protected $fillable = ['project_id','project_master_id','description'];
}
