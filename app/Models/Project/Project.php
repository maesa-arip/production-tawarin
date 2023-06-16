<?php

namespace App\Models\Project;

use App\Models\User;
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
        return $this->belongsTo(ProjectCategory::class);
    }
    public function projectcategory()
    {
        return $this->belongsTo(ProjectCategory::class,'project_category_id');
    }
    public function project_bids()
    {
        return $this->hasMany(ProjectBid::class);
    }
    public function project_bid()
    {
        return $this->hasOne(ProjectBid::class)->where('user_id', auth()->user()->id);
    }
    public function project_details()
    {
        return $this->hasMany(ProjectBid::class);
    }
    public function owner()
    {
        return $this->belongsTo(User::class,'user_id');
    }
    public function projectReject()
    {
        return $this->hasOne(ProjectReject::class);
    }
    public function winner()
    {
        return $this->hasOne(ProjectBid::class)
        ->where('is_approved', 1)->join('users','users.id','user_id');
    }
}
