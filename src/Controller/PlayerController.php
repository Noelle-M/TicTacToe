<?php

namespace App\Controller;

use App\Entity\Player;
use App\Repository\PlayerRepository;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class PlayerController extends AbstractController
{
    private EntityManagerInterface $entityManager;

    public function __construct(EntityManagerInterface $entityManager){
        $this->entityManager = $entityManager;
    }
    #[Route('/api/player/finish', methods: ['POST'])]
    public function finishGame(Request $request, PlayerRepository $playerRepository, EntityManagerInterface $entityManager): Response
    {
        $requestData = json_decode($request->getContent(), true);
        $winnerName = $requestData['winner'] ?? null;
        $loserName = $requestData['loser'] ?? null;

        if ($winnerName && $loserName) {
            $winner = $playerRepository->findOneBy(['name' => $winnerName]);
            $loser = $playerRepository->findOneBy(['name' => $loserName]);

            if (!$winner) {
                $winner = new Player();
                $winner->setName($winnerName);
                $winner->setGamesPlayed(0);
                $winner->setGamesWon(0);
            }

            if (!$loser) {
                $loser = new Player();
                $loser->setName($loserName);
                $loser->setGamesPlayed(0);
                $loser->setGamesWon(0);
            }

            $winner->setGamesPlayed($winner->getGamesPlayed() + 1);
            $winner->setGamesWon($winner->getGamesWon() + 1);
            $winner->setLastActivity(new \DateTime());

            $loser->setGamesPlayed($loser->getGamesPlayed() + 1);
            $loser->setGamesWon($loser->getGamesWon() + 0);
            $loser->setLastActivity(new \DateTime());

            $entityManager->persist($winner);
            $entityManager->persist($loser);
            $entityManager->flush();

            return new JsonResponse(['status' => 'success']);
        } else {
            return new JsonResponse(['status' => 'error', 'message' => 'Winner or loser name is missing'], Response::HTTP_BAD_REQUEST);
        }
    }

    #[Route('/api/players/win', methods: ['GET'])]
    public function getPlayersWin(): JsonResponse
    {
        $winners = $this->entityManager->getRepository(Player::class)->findAll();

        $winnersTab = [];
        foreach ($winners as $user) {
            $winnersTab[] = [
                'id' => $user->getId(),
                'name' => $user->getName(),
                'gamesPlayed' => $user->getGamesPlayed(),
                'gamesWon' => $user->getGamesWon(),
                'lastActivity' => $user->getLastActivity(),
            ];
        }

        return new JsonResponse($winnersTab);
    }
}
