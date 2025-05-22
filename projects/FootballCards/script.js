const footballTeam = {
    team: 'Manchester United',
    year: 2023,
    headCoach: 'Erik ten Hag',
    players: [
        { name: 'Bruno Fernandes', position: 'midfielder', isCaptain: true },
        { name: 'Marcus Rashford', position: 'forward', isCaptain: false },
        { name: 'Casemiro', position: 'midfielder', isCaptain: false },
        { name: 'Raphaël Varane', position: 'defender', isCaptain: false },
        { name: 'David de Gea', position: 'goalkeeper', isCaptain: false },
        { name: 'Antony', position: 'forward', isCaptain: false },
        { name: 'Lisandro Martínez', position: 'defender', isCaptain: false },
        { name: 'Jadon Sancho', position: 'forward', isCaptain: false },
        { name: 'Scott McTominay', position: 'midfielder', isCaptain: false },
        { name: 'Luke Shaw', position: 'defender', isCaptain: false },
        { name: 'Victor Lindelöf', position: 'defender', isCaptain: false },
        { name: 'Christian Eriksen', position: 'midfielder', isCaptain: false },
        { name: 'Anthony Martial', position: 'forward', isCaptain: false },
        { name: 'Harry Maguire', position: 'defender', isCaptain: false },
        { name: 'Sofyan Amrabat', position: 'midfielder', isCaptain: false }
    ]
};

document.getElementById('head-coach').textContent = footballTeam.headCoach;
document.getElementById('team').textContent = footballTeam.team;
document.getElementById('year').textContent = footballTeam.year;

const filterTeammates = document.getElementById('players');

filterTeammates.addEventListener('change', function() {
    const selected = filterTeammates.value;
    let filtered;
    if (selected === 'all') {
        filtered = footballTeam.players;
    } else {
        filtered = footballTeam.players.filter(function(player) {
            return player.position === selected.toLowerCase();
        });
    }
    renderPlayerCards(filtered);
});

function renderPlayerCards(players) {
    const cardsContainer = document.getElementById('player-cards');
    cardsContainer.innerHTML = '';
    players.forEach(function(player) {
        const card = document.createElement('div');
        card.className = 'player-card';
        const h2 = document.createElement('h2');
        h2.textContent = player.name + (player.isCaptain ? ' (Captain)' : '');
        const p = document.createElement('p');
        p.textContent = 'Position: ' + (player.position);
        card.appendChild(h2);
        card.appendChild(p);
        cardsContainer.appendChild(card);
    });
}

function capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
}

// Render all players on initial load
renderPlayerCards(footballTeam.players);