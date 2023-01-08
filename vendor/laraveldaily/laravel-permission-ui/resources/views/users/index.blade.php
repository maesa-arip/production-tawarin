@extends('PermissionsUI::layout')

@section('content')
    <div class="overflow-x-auto">
        <table class="w-full text-left bg-white border border-gray-300 divide-y shadow-sm table-auto rounded-xl">
            <thead>
                <tr class="bg-gray-500/5">
                    <th class="px-4 py-2">{{ __('ID') }}</th>
                    <th>{{ __('Name') }}</th>
                    <th>{{ __('Email') }}</th>
                    <th>{{ __('Roles') }}</th>
                    <th>{{ __('Created_at') }}</th>
                    <th class="px-4"></th>
                </tr>
            </thead>

            <tbody class="divide-y whitespace-nowrap">
                @forelse($users as $user)
                    <tr>
                        <td class="px-4 py-3">{{ $user->id }}</td>
                        <td>{{ $user->name }}</td>
                        <td>{{ $user->email }}</td>
                        <td>
                            @foreach($user->roles as $role)
                                <span class="px-2 py-1 text-xs text-blue-700 bg-blue-300 rounded-xl">{{ $role->name }}</span>
                            @endforeach
                        </td>
                        <td>{{ $user->created_at }}</td>
                        <td class="px-4">
                            <a class="px-4 py-2 text-xs font-semibold text-white bg-gray-800 border border-transparent rounded-md hover:bg-gray-700" href="{{ route(config('permission_ui.route_name_prefix') . 'users.edit', $user) }}">
                                {{ __('Edit') }}
                            </a>
                        </td>
                    </tr>
                @empty
                    <tr>
                        <td class="p-4" colspan="4">{{ __('PermissionsUI::permissions.global.no_records') }}</td>
                    </tr>
                @endforelse
            </tbody>
        </table>

        @if($users->links())
            <div class="mt-4">
                {{ $users->links() }}
            </div>
        @endif
    </div>
@endsection
