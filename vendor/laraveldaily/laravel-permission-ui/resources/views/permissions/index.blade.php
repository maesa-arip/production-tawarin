@extends('PermissionsUI::layout')

@section('content')
    <div class="flex mb-4">
        <a class="px-4 py-2 text-xs font-semibold text-white bg-gray-800 border border-transparent rounded-md hover:bg-gray-700" href="{{ route(config('permission_ui.route_name_prefix') . 'permissions.create') }}">{{ __('Create') }}</a>
    </div>

    <div class="overflow-x-auto">
        <table class="w-full text-left bg-white border border-gray-300 divide-y shadow-sm table-auto rounded-xl">
            <thead>
                <tr class="bg-gray-500/5">
                    <th class="px-4">{{ __('ID') }}</th>
                    <th>{{ __('Name') }}</th>
                    <th>{{ __('Created_at') }}</th>
                    <th></th>
                </tr>
            </thead>

            <tbody>
                @forelse($permissions as $permission)
                    <tr>
                        <td class="px-4 py-3">{{ $permission->id }}</td>
                        <td>{{ $permission->name }}</td>
                        <td>{{ $permission->created_at }}</td>
                        <td class="px-4 divide-x-2">
                            <a class="px-4 py-2 text-xs font-semibold text-white bg-gray-800 border border-transparent rounded-md hover:bg-gray-700" href="{{ route(config('permission_ui.route_name_prefix') . 'permissions.edit', $permission) }}">
                                {{ __('Edit') }}
                            </a>

                            <form action="{{ route(config('permission_ui.route_name_prefix') . 'permissions.destroy', $permission) }}" method="POST" style="display: inline-block;">
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
