<?php
namespace App\Repositories;

use App\Models\Page;
use App\Repositories\Interfaces\PageRepositoryInterface;
use Illuminate\Support\Collection;

class PageRepository implements PageRepositoryInterface
{
    public function all(): Collection
    {
        return Page::all();
    }

    public function find(int $id): ?Page
    {
        return Page::find($id);
    }
    public function findWithUserId(int $userId): ?Page
    {
        return Page::where('user_id', $userId)->first();
    }
    public function create(array $data): Page
    {
        try {
            return Page::create([
                'title'=>$data['title'],
                'city'=>$data['city'],
                'theme'=>$data['theme'],
                'font_family'=>$data['fontFamily'],
                'tags'=>$data['tags'],
                'visited'=>0,
                'user_id'=>$data['userId'],
                'published'=>0,
            ]);
        }catch (\Exception $e) {
            // Handle any other exceptions
            throw new \Exception('An unexpected error occurred: ' . $e->getMessage());
        } 
    }

    public function update(int $id, array $data): bool
    {
        $page = $this->find($id);
        return $page ? $page->update($data) : false;
    }

    public function delete(int $id): bool
    {
        $page = $this->find($id);
        return $page ? $page->delete() : false;
    }
}
