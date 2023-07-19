<?php

namespace App\Models\Portofolio;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Spatie\MediaLibrary\HasMedia;
use Spatie\MediaLibrary\InteractsWithMedia;

class Portofolio extends Model implements HasMedia
{
    use HasFactory, InteractsWithMedia;
    protected $guarded = [];

    public function getRouteKeyName()
    {
        return 'slug';
    }
    public function portofolio_category()
    {
        return $this->belongsTo(PortofolioCategory::class);
    }
    public function portofoliocategory()
    {
        return $this->belongsTo(PortofolioCategory::class,'portofolio_category_id');
    }
}
