import React, { useEffect, useState } from 'react';
import moment from 'moment';
import 'moment/locale/fr';

const ScoreBoard = () => {
    const [winners, setWinnersTab] = useState([]);

    useEffect(() => {
        fetch('/api/players/win')
            .then((response) => response.json())
            .then((data) => setWinnersTab(data));
    }, []);

    return (
        <div className="container ">
            <h2 className="mt-5 text-center">Tableau des scores</h2>
            <div className="bg-light p-4 container-score mt-5">
                <table className="table table-striped table-hover">
                <thead>
                <tr>
                    <th scope="col">Nom</th>
                    <th scope="col">Parties jouées</th>
                    <th scope="col">Parties gagnées</th>
                    <th scope="col">Dernière activité</th>
                </tr>
                </thead>
                <tbody>
                {winners.map((winner) => {
                    const formattedDate = moment(winner.lastActivity.date).locale('fr').format('LLLL');
                    return (
                        <tr key={winner.id}>
                            <td>{winner.name}</td>
                            <td>{winner.gamesPlayed}</td>
                            <td>{winner.gamesWon}</td>
                            <td>{formattedDate}</td>
                        </tr>
                    )
                })}
                </tbody>
            </table>
            </div>
        </div>
    );
};

export { ScoreBoard };
