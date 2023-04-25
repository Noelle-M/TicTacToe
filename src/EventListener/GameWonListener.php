<?php

namespace App\EventListener;

use App\Event\GameWonEvent;
use App\Manager\PlayerManager;

class GameWonListener
{
    private $playerManager;

    public function __construct(PlayerManager $playerManager)
    {
        $this->playerManager = $playerManager;
    }

    public function onGameWon(GameWonEvent $event): void
    {
        $winner = $event->getWinner();
        $this->playerManager->incrementGamesPlayed($winner);
        $this->playerManager->incrementGamesWon($winner);
    }
}
