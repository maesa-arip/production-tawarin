<?php

namespace App\Models\Funding;

use App\Models\User;
use Bavix\Wallet\Interfaces\Wallet;
use Bavix\Wallet\Traits\HasWallet;
use Bavix\Wallet\Traits\HasWallets;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Spatie\MediaLibrary\HasMedia;
use Spatie\MediaLibrary\InteractsWithMedia;

class Funding extends Model implements HasMedia, Wallet
{
    use HasFactory,InteractsWithMedia, HasWallet,HasWallets;
    protected $fillable = ['user_id','name','slug','funding_category_id','jangka_waktu_penawaran','harga_perlembar',
    'total_lembar','anggaran','anggaran_user','maps','alamat','provinsi','kota','kecamatan','desa','prospektus','roi',
    'jadwal_deviden','tentang_bisnis','is_approved'
];
    public function getRouteKeyName()
    {
        return 'slug';
    }

    public function funding_category()
    {
        return $this->belongsTo(FundingCategory::class);
    }
    public function fundingcategory()
    {
        return $this->belongsTo(FundingCategory::class,'funding_category_id');
    }
    public function owner()
    {
        return $this->belongsTo(User::class,'user_id');
    }
}
