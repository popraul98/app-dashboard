<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <title>WP Dashboard</title>

    <!-- Fonts -->
    <link href="https://fonts.googleapis.com/css2?family=Nunito:wght@400;600;700&display=swap" rel="stylesheet">

    <!-- Style -->
    <link href="{{ asset('css/app.css') }}" rel="stylesheet">
    <script src="{{ asset('js/app.js') }}" defer></script>
</head>

<body>
<div id="app">
    <welcome></welcome>
</div>

<div class="container text-lg  mx-auto flex h-screen justify-center items-center rounded rounded-lg">
    <div class="px-20 py-10 bg-gray-100 border border-gray-300 rounded-lg shadow">

        <img src="/images/logo.png"
             class="mx-auto"
        >

        <div class="items-center justify-center my-5 ">
            @if (Route::has('login'))
                <div class="text-center">

                    @auth
                            <div class="block">
                                <a href="{{ url('/dashboard') }}"
                                   class=" text-sm bg-white m-1 border border-gray-300 rounded-xl px-3 py-1.5 hover:bg-blue-hrBg hover:text-white"
                                >
                                    Go to Dashboard
                                </a>
                                <a href="{{ url('/dashboard-control') }}"
                                   class=" text-sm bg-white m-1 border border-gray-300 rounded-xl px-3 py-1.5 hover:bg-blue-hrBg hover:text-white"
                                >
                                    Dashboard Control
                                </a>
                            </div>
                            <div class="block my-4 text-right">
                                <form method="POST" action="{{ route('logout') }}">
                                    @csrf

                                    <x-dropdown-link :href="route('logout')"
                                                     onclick="event.preventDefault();
                                                this.closest('form').submit();">
                                        {{ __('Logout') }}
                                    </x-dropdown-link>
                                </form>
                            </div>

                    @else
                        <a href="{{ route('login') }}"
                           class=" text-sm bg-white mr-2 border border-blue-dark rounded-xl px-5 py-2 hover:bg-blue-dark hover:text-white items-center"
                        >
                            Login
                        </a>

                        @if (Route::has('register'))
                            <a href="{{ route('register') }}"
                               class="text-sm bg-white mr-2 border border-blue-dark rounded-xl px-5 py-2 hover:bg-blue-dark hover:text-white items-center"
                            >
                                Register
                            </a>
                        @endif
                    @endauth
                </div>
            @endif
        </div>


        <div class="text-xs">
            Laravel v{{ Illuminate\Foundation\Application::VERSION }} (PHP v{{ PHP_VERSION }})
        </div>

    </div>

</div>
</body>
</html>
