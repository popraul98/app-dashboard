<?php

namespace App\Http\Controllers;

use App\Models\Client;
use Illuminate\Http\Request;

class ClientController extends Controller
{
    public function store()
    {
        $attributes = request();

        Client::create([
            'name' => $attributes['name'],
            'email' => $attributes['email'],
            'website' => $attributes['website'],
            'company' => $attributes['company'],
            'matriculation_number' => $attributes['matriculation_number'],
            'cui' => $attributes['cui'],
            'bank_name' => $attributes['bank_name'],
            'bank_account' => $attributes['bank_account'],
            'address' => $attributes['address'],
            'contract_start_date' => $attributes['contract_start_date'],
            'contact_person_1' => $attributes['contact_person_1'],
            'email_contact_person_1' => $attributes['email_contact_person_1'],
            'receive_notification_1' => $attributes['receive_notification_1'],
            'contact_person_2' => $attributes['contact_person_2'],
            'email_contact_person_2' => $attributes['email_contact_person_2'],
            'receive_notification_2' => $attributes['receive_notification_2'],
            'contact_person_3' => $attributes['contact_person_3'],
            'email_contact_person_3' => $attributes['email_contact_person_3'],
            'receive_notification_3' => $attributes['receive_notification_3'],
            'programming_hours' => $attributes['programming_hours'],
            'support_hours' => $attributes['support_hours'],
            'subscription_id' => $attributes['subscription_id'],
            'new_website' => $attributes['new_website'],
            'anniversary_date' => $attributes['anniversary_date'],
            'website_link' => $attributes['website_link'],
            'website_backend_link' => $attributes['website_backend_link'],
            'jira_link' => $attributes['jira_link'],
            'google_drive_link' => $attributes['google_drive_link'],
            'hosting_link' => $attributes['hosting_link'],
            'contract_sent_date' => $attributes['contract_sent_date'],
            'contract_end_date' => $attributes['contract_end_date'],
            'language' => $attributes['language'],
        ]);
        return 1;
    }
}
