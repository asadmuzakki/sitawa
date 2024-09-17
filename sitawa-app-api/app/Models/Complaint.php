<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Casts\Attribute;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Complaint extends Model
{
    use HasFactory;

    protected $fillable = [
        'name',
        'address',
        'phone',
        'image',
        'subject',
        'description',
        'latitute',
        'longitude',
    ];

    /**
     * image
     *
     * @return Attribute
     */
    protected function image(): Attribute
    {
        return Attribute::make(
            get: fn ($image) => url('/storage/image/' . $image),
        );
    }
    public function replies()
    {
        return $this->hasOne(Reply::class);
    }
}
