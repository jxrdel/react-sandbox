<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class TaskController extends Controller
{
    public function index()
    {
        return inertia('task/index', [
            'tasks' => \App\Models\Task::latest()->get(),
        ]);
    }
}
