<!DOCTYPE html>
<html>
<head>
    <title>Dashboard Control</title>
    <meta charset="utf-8"/>
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0"/>
    <link href="{{ mix('/css/app.css') }}" rel="stylesheet"/>
    <script src="{{ asset('/js/app.js') }}" defer></script>
    <script src="https://kit.fontawesome.com/a076d05399.js"></script>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
</head>
<body>

<div id="sidebar" class="grid grid-cols-5 flex">

    {{--    SideBar--}}
    <ul class=" sticky top-0 border-r-2 border-gray-400 h-screen bg-blue-darkGray text-gray-100">

        <div class="text-xl font-medium text-center bg-blue-hrBg py-2 mb-4">
            Dashboard Control
        </div>

        {{--Home--}}
        <li class=" pl-6 text-sm font-normal items-center pt-2 text-blue-hrBg">
            <div class="transition duration-800 ease-in-out transform hover:-translate-y-1 hover:scale-100">
                <router-link to="/" tag="button" exact>
                    <i class="fa fa-code  "></i>
                    <span class="text-white">
                    Home
                    </span>
                </router-link>
            </div>
        </li>

        {{--            CLIENTS--}}
        <p class=" pl-6 text font-semibold pt-3">CLIENTS:</p>

        <li class=" pl-6 text-sm font-normal items-center pt-2 text-blue-hrBg">
            <div class="transition duration-800 ease-in-out transform hover:-translate-y-1 hover:scale-100">
                <router-link to="/add-client" tag="button" exact>
                    <i class="fa fa-code "></i>
                    <span class="text-white">
                    Add Client
                    </span>
                </router-link>
            </div>
        </li>
        <li class=" pl-6 text-sm font-normal items-center pt-2 text-blue-hrBg">
            <div class="transition duration-800 ease-in-out transform hover:-translate-y-1 hover:scale-100">
                <router-link to="/manage-clients" tag="button" exact>
                    <i class="fa fa-code "></i>
                    <span class="text-white">
                    Manage Clients
                    </span>
                </router-link>
            </div>
        </li>

        {{--            TASKS--}}
        <p class=" pl-6 text font-semibold pt-3">TASKS:</p>
        <li class=" pl-6 text-sm font-normal items-center pt-2 text-blue-hrBg">
            <div class="transition duration-800 ease-in-out transform hover:-translate-y-1 hover:scale-100">
                <router-link to="/add-task" tag="button" exact>
                    <i class="fa fa-code "></i>
                    <span class="text-white">
                    Add Task
                    </span>
                </router-link>
            </div>
        </li>
        <li class=" pl-6 text-sm font-normal items-center pt-2 text-blue-hrBg ">
            <div class="transition duration-800 ease-in-out transform hover:-translate-y-1 hover:scale-100">
                <router-link to="/manage-tasks" tag="button" exact>
                    <i class="fa fa-code  "></i>
                    <span class="text-white"> Manage Tasks</span>
                </router-link>
            </div>
        </li>
        <li class=" pl-6 text-sm font-normal items-center pt-2 text-blue-hrBg">
            <div class="transition duration-800 ease-in-out transform hover:-translate-y-1 hover:scale-100">
                <router-link to="/completed-tasks" tag="button" exact>
                    <i class="fa fa-code "></i>
                    <span class="text-white">
                        Completed Tasks
                    </span>
                </router-link>
            </div>
        </li>

        <li class=" pl-6 text-sm font-normal items-center pt-2 text-blue-hrBg">
            <div class="transition duration-800 ease-in-out transform hover:-translate-y-1 hover:scale-100">
                <router-link to="/out-of-date-tasks" tag="button" exact>
                    <i class="fa fa-code "></i>
                    <span class="text-white">
                        Out of date Tasks
                    </span>
                </router-link>
            </div>
        </li>


        {{--Button LogOut--}}
        <li class="absolute bottom-0 left-0 p-5  ">
            <a href="/logout"
               class="border text-sm rounded-lg hover:bg-white hover:text-black px-2 py-1 ">
                Dashboard / Logout
            </a>
        </li>

    </ul>

    {{--    Main Content--}}
    <div class="col-span-4">

        <router-view/>
    </div>
</div>


<script src="https://unpkg.com/vue@next"></script>
<script src="https://unpkg.com/axios/dist/axios.min.js"></script>
</body>
</html>
