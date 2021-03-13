<?php

namespace App\Models;

use Carbon\Carbon;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Event extends Model
{
    use HasFactory;

    const STATUS_SUCCESS = 1;
    const STATUS_FAILURE = 0;

    const TYPE_BACKUP = 'BACKUP';
    const TYPE_UPTIME = 'UPTIME';
    const TYPE_SECURITY = 'SECURITY';
    const TYPE_INFO = 'WP-INFO';

    protected $fillable = [
        'client_id',
        'event_date',
        'type',
        'status',
        'description',
        'info',
    ];


    public function isSuccess()
    {
        return $this->status === Event::STATUS_SUCCESS;
    }


    public function isFailure()
    {
        return $this->status === Event::STATUS_FAILURE;
    }

    public function client()
    {
        return $this->belongsTo(Client::class, 'client_id');
    }

    public function scopeGetFailedEvents($query)
    {
        return $query->where('status', 0)
            ->orderBy('event_date', 'ASC');
    }

}
