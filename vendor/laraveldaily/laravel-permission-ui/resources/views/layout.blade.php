<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="csrf-token" content="{{ csrf_token() }}">

    <title>Permissions - {{ config('app.name', 'Laravel') }}</title>

    @vite('resources/css/app.css', 'vendor/permission_ui/build')
</head>
<body class="h-full p-5 bg-gray-100">
    <main class="p-5 mx-auto space-y-4 bg-white rounded-lg shadow-md max-w-7xl">
        <div class="space-x-2">
            <a class="text-gray-800 hover:text-gray-600 hover:underline" href="/">{{ __('Home') }}</a>
            <a class="text-gray-800 hover:text-gray-600 hover:underline" href="{{ route(config('permission_ui.route_name_prefix') . 'users.index') }}">{{ __('Users') }}</a>
            <a class="text-gray-800 hover:text-gray-600 hover:underline" href="{{ route(config('permission_ui.route_name_prefix') . 'roles.index') }}">{{ __('Roles') }}</a>
            <a class="text-gray-800 hover:text-gray-600 hover:underline" href="{{ route(config('permission_ui.route_name_prefix') . 'permissions.index') }}">{{ __('Permissions') }}</a>
        </div>

        <div class="max-w-full">
            @yield('content')
        </div>
    </main>
</body>
</html>
