<?php

namespace App\Models\Auth;

use App\Models\User;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class JoinAs extends Model
{
    use HasFactory;
    public function users()
    {
        return $this->hasMany(User::class);
    }
}
