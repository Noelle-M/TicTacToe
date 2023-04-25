<?php
namespace App\Controller;

use App\Entity\User;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Routing\Annotation\Route;

class AddPlayersController extends AbstractController
{
    private EntityManagerInterface $entityManager;

    public function __construct(EntityManagerInterface $entityManager){
        $this->entityManager = $entityManager;
    }
    #[Route('/players', methods: ['POST'])]
    public function addPlayers(Request $request): JsonResponse
    {
        $content = $request->getContent();
        $data = json_decode($content, true);

        $addUser = new User();
        $addUser->setPlayer1($data['player1']);
        $addUser->setPlayer2($data['player2']);

        $this->entityManager->persist($addUser);
        $this->entityManager->flush();

        return new JsonResponse([
            'id' => $addUser->getId(),
            'player1' => $addUser->getPlayer1(),
            'player2' => $addUser->getPlayer2(),
            'message' => 'Player added successfully'
        ]);
    }
}