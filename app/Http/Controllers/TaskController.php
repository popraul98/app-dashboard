<?php

namespace App\Http\Controllers;

use App\Models\Task;
use Carbon\Carbon;
use Illuminate\Http\Request;

class TaskController extends Controller
{


    public function store()
    {

        $attributes = request();

        Task::create([
            'name' => $attributes['name'],
            'client_id' => $attributes['client_id'],
            'task_date' => $attributes['task_date'],
            'state' => 1,
            'type' => $attributes['type'],
            'details' => $attributes['details'],
            'invoiced_date' => $attributes['invoiced_date'],
            'programming_worked_minutes' => $attributes['programming_worked_minutes'],
            'support_worked_minutes' => $attributes['support_worked_minutes'],
            'closed_date' => null,
        ]);
        return 1;
    }

    public function update()
    {
        $attributes = request();

        Task::where('id', $attributes['id'])->update([
            'name' => $attributes['name'],
            'client_id' => $attributes['client_id'],
            'task_date' => $attributes['task_date'],
            'state' => 1,
            'type' => $attributes['type'],
            'details' => $attributes['details'],
            'invoiced_date' => $attributes['invoiced_date'],
            'programming_worked_minutes' => $attributes['programming_worked_minutes'],
            'support_worked_minutes' => $attributes['support_worked_minutes'],
            'closed_date' => null,
        ]);
    }

    public function setAsCompleted()
    {
        $todayDate = Carbon::today();
        $attributes = request();

        Task::where('id', $attributes['id'])->update([
            'closed_date' => $todayDate,
        ]);
    }
}
