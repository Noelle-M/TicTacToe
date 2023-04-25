<?php

namespace App\Event;

use App\Entity\Player;
use Symfony\Contracts\EventDispatcher\Event;

class GameWonEvent extends Event
{
    public const NAME = 'game.won';

    private $winner;

    public function __construct(Player $winner)
    {
        $this->winner = $winner;
    }

    public function getWinner(): Player
    {
        return $this->winner;
    }
}
