<?php
namespace App\Services;

use App\Repositories\Interfaces\PageRepositoryInterface;
use Exception;
use Illuminate\Support\Facades\Log;

class PageService
{
    protected PageRepositoryInterface $pageRepo;

    public function __construct(PageRepositoryInterface $pageRepo)
    {
        $this->pageRepo = $pageRepo;
    }

    public function listPages()
    {
        try {
            return $this->pageRepo->all();
        } catch (Exception $e) {
            Log::error('Failed to fetch pages', ['error' => $e->getMessage()]);
            throw new \RuntimeException('Unable to fetch pages.');
        }
    }

    public function getPage(int $id) 
    {
        return $this->pageRepo->find($id);

       
    }

    public function createPage(array $data)
    {
        $jsonString = json_encode($data['tags']);
        $data['tags']= $jsonString;
        return $this->pageRepo->create($data);

        
       
    }

    public function updatePage(int $id, array $data)
    {
        try {
            return $this->pageRepo->update($id, $data);
        } catch (Exception $e) {
            Log::error("Failed to update page ID: $id", ['error' => $e->getMessage()]);
            throw new \RuntimeException('Unable to update page.');
        }
    }

    public function deletePage(int $id)
    {
        try {
            return $this->pageRepo->delete($id);
        } catch (Exception $e) {
            Log::error("Failed to delete page ID: $id", ['error' => $e->getMessage()]);
            throw new \RuntimeException('Unable to delete page.');
        }
    }
    public function userHasPage(int $id)
    {
        return $this->pageRepo->findWithUserId($id);
    }
}
