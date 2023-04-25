<?php
namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class TicTacToeController extends AbstractController
{
    /**
    * @Route("/tictactoe", name="tictactoe")
    */
    public function index(): Response
    {
        return $this->render('tictactoe/index.html.twig');
    }
}
