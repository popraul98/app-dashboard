<?php

namespace App\Http\Controllers;

use App\Models\Client;
use App\Models\Event;
use App\Models\Task;
use App\Models\User;
use Illuminate\Http\Request;
use Inertia\Inertia;


class DashboardControl extends Controller
{
    protected $model = User::class;


    public function index()
    {
        $tasks_today = Task::GetTodayActiveTasks()->get();
        $update_tasks_10days = Task::GetUpdateTask10Days()->get();

        $completed_tasks = Task::GetCompletedTasks()->get();
        $out_of_date_tasks = Task::GetOutOfDateTasks()->get();

        $all_clients = Client::GetAllClients()->get();
        $all_uncompleted_tasks = Task::GetAllUncompletedTasks()->get();

//        $clients_contract_end_today = Client::GetEndContractsToday()->get();
//        $clients_contract_end_in30_days = Client::GetEndContractIn30Days()->get();
//
//        $events_failed = Event::getFailedEvents()->get();

        return response()->json([
            'tasks_today' => $tasks_today,
            'update_tasks_10days' => $update_tasks_10days,
            'completed_tasks' => $completed_tasks,
            'all_clients' => $all_clients,
            'out_of_date_tasks' => $out_of_date_tasks,
            'all_uncompleted_tasks' => $all_uncompleted_tasks,
//            'clients_contract_end_today' => $clients_contract_end_today,
//            'clients_contract_end_in30_days' => $clients_contract_end_in30_days,
//            'events_failed' => $events_failed,
        ]);

    }
}
