<?php

namespace App\Models\Portofolio;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class PortofolioCategory extends Model
{
    use HasFactory;
    protected $guarded = [];

    public function portofolios()
    {
        return $this->hasMany(Portofolio::class);
    }
}
