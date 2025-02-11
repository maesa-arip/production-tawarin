<!doctype html>
<html lang="en">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    {{-- <link rel="icon" href="img/xfavicon.png.pagespeed.ic.ZPA6oHfdtf.webp" type="image/png"> --}}
    <title>@yield('title')</title>
    {{-- <link rel="stylesheet" href="{{ asset('style.css')}}" />
    <link rel="stylesheet" href="{{ asset('style_2.css')}}" /> --}}
    @yield('css')
</head>

<body>
    <header class="header_area navbar_fixed">
        {{-- @include('components.header') --}}
    </header>
    
    @yield('content')
    @yield('js')

</body>
</html>