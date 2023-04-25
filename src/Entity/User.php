<?php

namespace App\Entity;

use App\Repository\UserRepository;
use Doctrine\ORM\Mapping as ORM;

#[ORM\Entity(repositoryClass: UserRepository::class)]
class User
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    private ?int $id = null;

    #[ORM\Column(length: 255, nullable: false)]
    private ?string $player1 = null;

    #[ORM\Column(length: 255, nullable: false)]
    private ?string $player2 = null;

    public function getId(): ?int
    {
        return $this->id;
    }
    public function getPlayer1(): ?string
    {
        return $this->player1;
    }
    public function setPlayer1(?string $player1): self
    {
        $this->player1 = $player1;

        return $this;
    }
    public function getPlayer2(): ?string
    {
        return $this->player2;
    }
    public function setPlayer2(?string $player2): self
    {
        $this->player2 = $player2;

        return $this;
    }
}
