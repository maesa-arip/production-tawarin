@extends('PermissionsUI::layout')

@section('content')
    <form class="space-y-4" action="{{ route(config('permission_ui.route_name_prefix') . 'permissions.store') }}" method="post">
        @csrf

        <div class="space-y-2">
            <label class="text-base font-medium text-gray-700" for="name">{{ __('Name') }}</label>
            <input class="block w-full px-2 py-1 border border-gray-300 rounded-md shadow-sm" type="text" name="name" id="name" value="{{ old('name') }}" required />
            @error('name')
                <span class="text-sm text-red-600">{{ $message }}</span>
            @enderror
        </div>

        @if($roles->count())
            <div class="space-y-2">
                <label class="block text-base font-medium text-gray-700" for="permissions">{{ __('Roles') }}</label>
                <div class="space-x-2">
                    @foreach($roles as $id => $name)
                        <div class="inline-flex space-x-1">
                            <input class="border-gray-300 rounded-md shadow-sm" type="checkbox" name="roles[]" id="role-{{ $id }}" value="{{ $id }}" @checked(old('role-'. $id))>
                            <label class="text-sm font-medium text-gray-700" for="role-{{ $id }}">{{ $name }}</label>
                        </div>
                    @endforeach
                </div>
                @error('roles')
                    <span class="text-sm text-red-600">{{ $message }}</span>
                @enderror
            </div>
        @endif

        <button class="px-4 py-2 text-xs font-semibold text-white bg-gray-800 rounded-md hover:bg-gray-700" type="submit">
            {{ __('Save') }}
        </button>
    </form>
@endsection
