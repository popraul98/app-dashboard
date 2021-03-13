<?php

namespace App\Http\Controllers;

use App\Models\Client;
use App\Models\Event;
use App\Models\Task;
use App\Models\User;
use http\Env\Response;
use Illuminate\Http\Request;
use Inertia\Inertia;

class Dashboard extends Controller
{
    protected $model = User::class;

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $tasks_today = Task::GetTodayActiveTasks()->get();
        $update_tasks_10days = Task::GetUpdateTask10Days()->get();

        $clients_contract_end_today = Client::GetEndContractsToday()->get();
        $clients_contract_end_in30_days = Client::GetEndContractIn30Days()->get();

        $events_failed = Event::getFailedEvents()->get();

        return Inertia::render('Dashboard', [
            'tasks_today' => $tasks_today,
            'update_tasks_10days' => $update_tasks_10days,
            'clients_contract_end_today' => $clients_contract_end_today,
            'clients_contract_end_in30_days' => $clients_contract_end_in30_days,
            'events_failed' => $events_failed,
        ]);

    }


    public function indexUpdate()
    {
        $tasks_today = Task::GetTodayActiveTasks()->get();
        $update_tasks_10days = Task::GetUpdateTask10Days()->get();

        $clients_contract_end_today = Client::GetEndContractsToday()->get();
        $clients_contract_end_in30_days = Client::GetEndContractIn30Days()->get();

        $events_failed = Event::getFailedEvents()->get();


        return response()->json([
            'tasks_today' => $tasks_today,
            'update_tasks_10days' => $update_tasks_10days,
            'clients_contract_end_today' => $clients_contract_end_today,
            'clients_contract_end_in30_days' => $clients_contract_end_in30_days,
            'events_failed' => $events_failed,
            ]);

    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param \Illuminate\Http\Request $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     *
     * @param int $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param int $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param \Illuminate\Http\Request $request
     * @param int $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param int $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }
}
