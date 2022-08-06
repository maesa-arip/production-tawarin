<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class ExampleController extends Controller
{
    public function form()
    {
        return inertia('Example/Form');
    }
    public function descriptionlist()
    {
        return inertia('Example/DescriptionList');
    }
}
