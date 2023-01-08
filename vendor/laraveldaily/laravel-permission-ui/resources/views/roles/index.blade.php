@extends('PermissionsUI::layout')

@section('content')
    <div class="flex mb-4">
        <a class="px-4 py-2 text-xs font-semibold text-white bg-gray-800 border border-transparent rounded-md hover:bg-gray-700" href="{{ route(config('permission_ui.route_name_prefix') . 'roles.create') }}">{{ __('Create') }}</a>
    </div>

    <div class="overflow-x-auto">
        <table class="w-full text-left bg-white border border-gray-300 divide-y shadow-sm table-auto rounded-xl">
            <thead>
                <tr class="bg-gray-500/5">
                    <th class="px-4">{{ __('ID') }}</th>
                    <th>{{ __('Name') }}</th>
                    <th>{{ __('Permissions') }}</th>
                    <th>{{ __('Created_at') }}</th>
                    <th></th>
                </tr>
            </thead>

            <tbody>
                @forelse($roles as $role)
                    <tr>
                        <td class="px-4 py-2">{{ $role->id }}</td>
                        <td>{{ $role->name }}</td>
                        <td>
                            @foreach($role->permissions as $permission)
                                <span class="px-2 py-1 text-xs text-blue-700 bg-blue-300 rounded-xl">{{ $permission->name }}</span>
                            @endforeach
                        </td>
                        <td>{{ $role->created_at }}</td>
                        <td class="px-4 divide-x-2">
                            <a class="px-4 py-2 text-xs font-semibold text-white bg-gray-800 border border-transparent rounded-md hover:bg-gray-700" href="{{ route(config('permission_ui.route_name_prefix') . 'roles.edit', $role) }}">
                                {{ __('Edit') }}
                            </a>

                            <form action="{{ route(config('permission_ui.route_name_prefix') . 'roles.destroy', $role) }}" method="POST" style="display: inline-block;">
                                @csrf
                                @method('DELETE')
                                <button class="px-4 py-2 text-xs font-semibold text-white bg-gray-800 rounded-md hover:bg-gray-700" type="submit" onclick="return confirm({{ __('PermissionsUI::permissions.global.confirm_action') }})">
                                    {{ __('Delete') }}
                                </button>
                            </form>
                        </td>
                    </tr>
                @empty
                    <tr>
                        <td class="p-4" colspan="4">{{ __('PermissionsUI::permissions.global.no_records') }}</td>
                    </tr>
                @endforelse
            </tbody>
        </table>
    </div>
@endsection
