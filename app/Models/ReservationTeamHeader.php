<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ReservationTeamHeader extends Model
{
    use HasFactory;
    protected $fillable = ['name','reservation_company_id'];

    
}
