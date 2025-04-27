<?php

namespace App\Http\Controllers;

use App\Models\Page;
use Illuminate\Http\Request;
use App\Http\Requests\StorePageRequest;
use Illuminate\Support\Facades\Auth;

use Inertia\Inertia;
use App\Services\PageService;

class PageController extends Controller
{
    public function __construct(PageService $pageService)
    {
        $this->pageService = $pageService;
       
       
    }
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $user =Auth::user();
        $pageExists = $this->pageService->userHasPage( $user->id);
        if ($pageExists ){

            return Inertia::render('User/Dashboard',[
                'page'=>$pageExists
                ]);
        }else{
            return redirect()->route('create');

        }
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return Inertia::render('User/Wellcome');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StorePageRequest $request)
    {
        $validated = $request->validated();
        $this->pageService->createPage($validated);

    }

    /**
     * Display the specified resource.
     */
    public function show(Page $page)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Page $page)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Page $page)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Page $page)
    {
        //
    }
}
