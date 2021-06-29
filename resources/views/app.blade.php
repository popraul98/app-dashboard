<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="csrf-token" content="{{ csrf_token() }}">

    <title>Dashboard</title>
    <link href="{{ mix('/css/app.css') }}" rel="stylesheet" />
    <script src="{{ asset('/js/app.js') }}" defer></script>
    <script src="https://kit.fontawesome.com/ba31a05267.js"></script>
{{--    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">--}}
</head>
<body>
<div>
    @inertia
</div>

<script src="https://unpkg.com/vue@next"></script>
<script src="https://unpkg.com/axios/dist/axios.min.js"></script>
</body>
</html>
