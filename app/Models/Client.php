<?php

namespace App\Models;

use Carbon\Carbon;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Client extends Model
{
    use HasFactory;

    const LANGUAGE_RO = 'ro';
    const LANGUAGE_HU = 'hu';
    const LANGUAGE_EN = 'en';

    const RECEIVE_NOTIFICATION_YES = 1;
    const RECEIVE_NOTIFICATION_NO = 0;

    const TYPE_CLIENT = 1;
    const TYPE_LEAD = 2;

    protected $fillable = [
        'name',
        'email',
        'website',
        'company',
        'matriculation_number',
        'cui',
        'bank_name',
        'bank_account',
        'address',
        'contract_start_date',
        'contact_person_1',
        'email_contact_person_1',
        'receive_notification_1',
        'contact_person_2',
        'email_contact_person_2',
        'receive_notification_2',
        'contact_person_3',
        'email_contact_person_3',
        'receive_notification_3',
        'programming_hours',
        'support_hours',
        'subscription_id',
        'new_website',
        'anniversary_date',
        'website_link',
        'website_backend_link',
        'jira_link',
        'google_drive_link',
        'hosting_link',
        'contract_sent_date',
        'contract_end_date',
        'language',
    ];


    public function subscription()
    {
        return $this->belongsTo(Subscription::class);
    }


    public function tasks()
    {
        return $this->hasMany(Task::class, 'client_id');
    }


    public static function scopeIsActive($query)
    {
        return $query->whereNull('contract_end_date');
    }


    public static function forDropDown()
    {
        return Client::where('contract_end_date', null)
            ->orderBy('name', 'asc')
            ->get()
            ->map(
                function ($item, $key) {
                    $item['value'] = $item['id'];
                    $item['text'] = $item['name'];

                    return $item;
                }
            )
            ->prepend(['value' => '', 'text' => __('Choose client')])
            ->toArray();
    }

    public function scopeGetEndContractsToday($query)
    {
        return $query->whereDate('contract_end_date', Carbon::today());

    }

    public function scopeGetEndContractIn30Days($query)
    {
        $startDate = Carbon::today();
        $endDate = Carbon::today()->addDays(30);

        return $query->whereBetween('contract_end_date', [$startDate, $endDate])
            ->orderBy('contract_end_date', 'ASC');
    }

    public function scopeGetAllClients($query)
    {
        $startDate = Carbon::today();
        $endDate = Carbon::today()->addDays(30);

        return $query->orderBy('created_at', 'DESC');
    }

}
