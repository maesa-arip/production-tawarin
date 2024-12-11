<?php

namespace App\Models;

use App\Models\Auth\JoinAs;
use App\Models\Plan\Plan;
use App\Models\Reservation\ReservationCompany;
use App\Models\Reservation\ReservationCustomer;
use App\Models\Reservation\ReservationEmployee;
use App\Models\Reservation\ReservationEmployeeBreak;
use App\Models\Reservation\ReservationEmployeeDayOff;
use App\Models\Toko\Invoice;
use App\Models\Toko\Product;
use App\Traits\HasManyCarts;
use Bavix\Wallet\Interfaces\Confirmable;
use Bavix\Wallet\Interfaces\Wallet;
use Bavix\Wallet\Traits\CanConfirm;
use Bavix\Wallet\Traits\HasWallet;
use Bavix\Wallet\Traits\HasWallets;
use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Laravel\Sanctum\HasApiTokens;
use Spatie\Permission\Traits\HasRoles;
use Illuminate\Support\Str;
use Spatie\MediaLibrary\HasMedia;
use Spatie\MediaLibrary\InteractsWithMedia;

class User extends Authenticatable implements Wallet, Confirmable, MustVerifyEmail, HasMedia
{
    use HasApiTokens, HasFactory, Notifiable, HasManyCarts, HasWallet, HasWallets, CanConfirm, HasRoles, InteractsWithMedia;

    /**
     * The attributes that are mass assignable.
     *
     * @var array<int, string>
     */
    protected $fillable = [
        'name',
        'email',
        'password',
        'username',
        'join_as_id',
        'referral',
        'from_referral',
        'phone',
        'visi',
        'misi',
        'lat',
        'lng',
        'formattedAddress',
        'email_verified_at',
        'avatar',
    ];

    /**
     * The attributes that should be hidden for serialization.
     *
     * @var array<int, string>
     */
    protected $hidden = [
        'password',
        'remember_token',
    ];

    /**
     * The attributes that should be cast.
     *
     * @var array<string, string>
     */
    protected $casts = [
        'email_verified_at' => 'datetime',
    ];

    public static function booted()
    {
        static::creating(fn (User $user) => $user->uuid = Str::uuid());
        // static::creating(fn (User $user) => $user->myreferral = Str::random(6));
    }
    public function invoices()
    {
        return $this->hasMany(Invoice::class);
    }

    public function join_as()
    {
        return $this->belongsTo(JoinAs::class);
    }
    public function products()
    {
        return $this->belongsToMany(Product::class, 'user_product');
    }

    public function chats()
    {
        return $this->hasMany(Chat::class, 'sender_id');
    }
    public function socialAccounts()
    {
        return $this->hasMany(SocialAccount::class);
    }

    public function employess()
    {
        return $this->hasMany(ReservationEmployee::class);
    }

    public function dayoffs()
    {
        return $this->hasMany(ReservationEmployeeDayOff::class);
    }
    public function employeebreaks()
    {
        return $this->hasMany(ReservationEmployeeBreak::class);
    }
    public function customers()
    {
        return $this->hasMany(ReservationCustomer::class);
    }
    /**
     * Get the user associated with the User
     *
     * @return \Illuminate\Database\Eloquent\Relations\HasOne
     */
    public function company()
    {
        return $this->hasOne(ReservationCompany::class);
    }
    /**
     * Get all of the comments for the User
     *
     * @return \Illuminate\Database\Eloquent\Relations\HasMany
     */
    public function teamdetails()
    {
        return $this->hasMany(ReservationTeamDetail::class);
    }
}
