<?php

namespace App\Controller;

use App\Entity\User;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class AccueilController extends AbstractController
{
    private EntityManagerInterface $entityManager;

    public function __construct(EntityManagerInterface $entityManager){
        $this->entityManager = $entityManager;
    }
    #[Route('/')]
    public function index(): Response
    {
        return $this->render('accueil/index.html.twig');
    }

    #[Route('/api/players', methods: ['GET'])]
    public function getPlayers(): JsonResponse
    {
        $users = $this->entityManager->getRepository(User::class)->findAll();

        $players = [];
        foreach ($users as $user) {
            $players[] = [
                'id' => $user->getId(),
                'player1' => $user->getPlayer1(),
                'player2' => $user->getPlayer2(),
            ];
        }

        return new JsonResponse($players);
    }
}
