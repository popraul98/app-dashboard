<?php

namespace App\Models;

use Carbon\Carbon;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use phpDocumentor\Reflection\Types\Null_;

class Task extends Model
{
    use HasFactory;

    const STATE_OPEN = 1;
    const STATE_CLOSED = 0;

    const TYPE_UPGRADE = 0;
    const TYPE_INTERN = 1;
    const TYPE_REQUEST = 2;


    protected $fillable = [
        'client_id',
        'task_date',
        'name',
        'state',
        'type',
        'details',
        'invoiced_date',
        'programming_worked_minutes',
        'support_worked_minutes',
        'closed_date',
    ];


    public function isOpen()
    {
        return $this->state == Task::STATE_OPEN;
    }


    public function isClosed()
    {
        return $this->state == Task::STATE_CLOSED;
    }


    public function client()
    {
        return $this->belongsTo(Client::class, 'client_id');
    }


    public function scopeGetTodayActiveTasks($query)
    {
        return $query->whereDate('task_date', Carbon::today())
            ->where('closed_date', NULL)
            ->orderBy('created_at', 'DESC');
    }

    public function scopeGetCompletedTasks($query)
    {
        return $query->whereNotNull('closed_date')
            ->orderBy('closed_date', 'DESC');
    }

    public function scopeGetUpdateTask10Days($query)
    {
        $todayDate = Carbon::today();
        $endDate = Carbon::today()->addDays(10);

        return $query->whereBetween('task_date', [$todayDate, $endDate])
            ->where('closed_date', NULL)
            ->where('type', 0)
            ->orderBy('task_date', 'ASC')
            ->orderBy('created_at', 'DESC');

    }

    public function scopeGetAllUncompletedTasks($query)
    {
        $todayDate = Carbon::today();

        return $query->whereDate('task_date', '>=', $todayDate)
            ->where('closed_date', NULL)
            ->orderBy('task_date', 'ASC');
    }

    public function scopeGetOutOfDateTasks($query)
    {
        $todayDate = Carbon::today();

        return $query->whereDate('task_date', '<=', $todayDate)
            ->where('closed_date', NULL)
            ->orderBy('task_date', 'ASC');
    }

}
