<?php

namespace App\Manager;

use App\Entity\Player;
use Doctrine\ORM\EntityManagerInterface;

class PlayerManager
{
    private EntityManagerInterface $entityManager;

    public function __construct(EntityManagerInterface $entityManager)
    {
        $this->entityManager = $entityManager;
    }

    public function createOrUpdatePlayer(string $name): Player
    {
        $playerRepository = $this->entityManager->getRepository(Player::class);
        $player = $playerRepository->findOneBy(['name' => $name]);

        if (!$player) {
            $player = new Player();
            $player->setName($name);
        }

        $player->setLastActivity(new \DateTime());

        $this->entityManager->persist($player);
        $this->entityManager->flush();

        return $player;
    }

    public function incrementGamesPlayed(Player $player): void
    {
        $player->setGamesPlayed($player->getGamesPlayed() + 1);
        $this->entityManager->flush();
    }

    public function incrementGamesWon(Player $player): void
    {
        $player->setGamesWon($player->getGamesWon() + 1);
        $this->entityManager->flush();
    }

}