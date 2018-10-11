<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Profile extends Model
{
    protected $fillable = [
        'specialization',
        'address',
        'city',
        'lga',
        'state',
        'user_id'
    ];

    protected $table = 'profiles';

    public function user()
    {
        return $this->belongsTo('App\Models\User');
    }
}
