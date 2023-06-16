<?php

namespace App\Models\Project;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Spatie\MediaLibrary\HasMedia;
use Spatie\MediaLibrary\InteractsWithMedia;

class Project extends Model implements HasMedia
{
    use HasFactory, InteractsWithMedia;
    protected $guarded =[];

    public function getRouteKeyName()
    {
        return 'slug';
    }
    public function project_category()
    {
        return $this->hasOne(ProjectCategory::class);
    }
    public function projectcategory()
    {
        return $this->hasOne(ProjectCategory::class,'project_category_id');
    }
}
