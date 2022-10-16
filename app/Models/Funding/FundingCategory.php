<?php

namespace App\Models\Funding;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class FundingCategory extends Model
{
    use HasFactory;
    public function fundings()
    {
        return $this->hasMany(FundingCategory::class);
    }
}
