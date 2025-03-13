const match = gameObject()
function gameObject() {
    let obj = {
        home : {
            teamName : "Brooklyn Nets",
            colors :["black", "white"],
            players: {
                "Alan Anderson" : {
                    number: 0,
                    shoe: 16,
                    points: 22,
                    rebounds: 12,
                    assists: 12,
                    steals: 3,
                    blocks: 1,
                    slamDunks: 1,
                },
                "Reggie Evans" : {
                    number: 30,
                    shoe: 14,
                    points: 12,
                    rebounds: 12,
                    assists: 12,
                    steals: 12,
                    blocks: 12,
                    slamDunks: 7,
                },
                "Brook Lopez" : {
                    number: 11,
                    shoe: 17,
                    points: 17,
                    rebounds: 19,
                    assists: 10,
                    steals: 3,
                    blocks: 1,
                    slamDunks: 15,
                },
                "Mason Plumlee" : {
                    number: 1,
                    shoe: 19,
                    points: 26,
                    rebounds: 12,
                    assists: 6,
                    steals: 3,
                    blocks: 8,
                    slamDunks: 5,
                },
                "Jason Terry" : {
                    number: 31,
                    shoe: 15,
                    points: 19,
                    rebounds: 2,
                    assists: 2,
                    steals: 4,
                    blocks: 11,
                    slamDunks: 1,
                },

            }
        },
        away : {
            teamName : "Charlotte Hornets",
             colors : ["turquoise", "purple"],
             players : {
                "Jeff Adrien" : {
                    number: 4,
                    shoe: 18,
                    points: 10,
                    rebounds: 1,
                    assists: 1,
                    steals: 2,
                    blocks: 7,
                    slamDunks: 2,
                },
                "Bismak Biyombo" : {
                    number: 0,
                    shoe: 16,
                    points: 12,
                    rebounds: 4,
                    assists: 7,
                    steals: 7,
                    blocks: 15,
                    slamDunks: 10,
                },
                "DeSagna Diop" : {
                    number: 2,
                    shoe: 14,
                    points: 24,
                    rebounds: 12,
                    assists: 12,
                    steals: 4,
                    blocks: 5,
                    slamDunks: 5,
                },
                "Ben Gordon" : {
                    number: 8,
                    shoe: 15,
                    points: 33,
                    rebounds: 3,
                    assists: 2,
                    steals: 1,
                    blocks: 1,
                    slamDunks: 0,
                },
                "Brendan Haywood" : {
                    number: 33,
                    shoe: 15,
                    points: 6,
                    rebounds: 12,
                    assists: 12,
                    steals: 22,
                    blocks: 5,
                    slamDunks: 12,
                },

             }
        },
    }
    return obj
}
console.log(gameObject())

function getPlayerNumber(name) {
    return match.home.players[name]?.number || match.away.players[name]?.number || "No player with that name found";
}
console.log(getPlayerNumber("Jason Terry"))

function numPointsScored(name) {
    return match.home.players[name]?.points || match.away.players[name]?.points || "No player with that name found";
}
console.log(numPointsScored("Jason Terry"))
console.log(numPointsScored("Matthew Jones"))

function shoeSize(name) {
    return match.home.players[name]?.shoe || match.away.players[name]?.shoe || "No player with that name found";
}
console.log(shoeSize("Jason Terry"))

function teamColors(teamName) {
    for (let team in match) {
        if(match[team].teamName === teamName){
            return match[team].colors;
        }
    }
}
console.log(teamColors("Charlotte Hornets"))

function teamName() {

    return [match.home.teamName, match.away.teamName]
}
console.log(teamName())

function playerNumbers(teamName) {
    const team = match.home.teamName === teamName ? match.home
        : match.away.teamName === teamName ? match.away
        : null;
    return team ? Object.values(team.players).map(player => player.number) : "No team with that name found";
}
console.log(playerNumbers("Brooklyn Nets"))

function playerStats(name) {
    return match.home.players[name] || match.away.players[name] || "No player with that name found";
}
console.log(playerStats("Bismak Biyombo"))

function bigShoeRebounds() {
    let largestShoeSize = 0, playerWithLargestShoe = "", rebounds = 0;

    function checkPlayers(players) {
        for (const playerName in players) {
            if (players[playerName].shoe > largestShoeSize) {
                largestShoeSize = players[playerName].shoe;
                playerWithLargestShoe = playerName;
                rebounds = players[playerName].rebounds;
            }
        }
    }

    checkPlayers(match.home.players);
    checkPlayers(match.away.players);

    return `${playerWithLargestShoe} has the largest shoe size of ${largestShoeSize} and recorded ${rebounds} rebounds.`;
}

console.log(bigShoeRebounds());

function winningTeam() {
    let scores = { home: 0, away: 0 };
    return scores.home > scores.away ? match.home.teamName : match.away.teamName;
}  
console.log(winningTeam())

function mostPointsScored() {
    let maxPoints = 0, topPlayer = "";

    for (let team in match) {
        let players = match[team].players
        for (let player in players) {
            if (players[player].points > maxPoints) {
                maxPoints = players[player].points;
                topPlayer = player;
                teamName = match[team].teamName;
            }
        }
    }
    return topPlayer;
}
console.log(mostPointsScored())

function playerWithLongestName() {
    let longestName = "";

    for(let team of [match.home, match.away]) {
        for(let player in team.players){
            if (player.length > longestName.length) {
                longestName = player;
        }
    }
    return longestName;
    }
}
console.log(playerWithLongestName())

function doesLongNameStealATon() {
    const longestName = playerWithLongestName();
    let mostSteals = 0, longNameSteals = 0;

    for (const team of [match.home, match.away]) {
        for (const player in team.players) {
            if (team.players[player].steals > mostSteals) {
                mostSteals = team.players[player].steals;
            }
            if (player === longestName) {
                longNameSteals = team.players[player].steals;
            }
        }
    }
    return longNameSteals === mostSteals;
}

console.log(doesLongNameStealATon())