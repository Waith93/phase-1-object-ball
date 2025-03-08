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
    let object = gameObject();
    if(object.home.players[name]){
        return object.home.players[name].number
    }else if(object.away.players[name]) {
        return object.away.players[name].number
    }else 
         return 'No player with that name found';
}
console.log(getPlayerNumber("Jason Terry"))

function numPointsScored(name) {
    let object = gameObject();
    if(object.home.players[name]){
       return object.home.players[name].points
    }else if(object.away.players[name]){
        return object.away.players[name].points
    }else
        return 'No player with that name found';
}
console.log(numPointsScored("Jason Terry"))

function shoeSize(name) {
    let object = gameObject();
    if (object.home.players[name]) {
        return object.home.players[name].shoe;
    } else if (object.away.players[name]) {
        return object.away.players[name].shoe;
    } else 
        return "No player with that name found";
}
console.log(shoeSize("Jason Terry"))

function teamColors(teamName) {
    let object = gameObject();
    if(object.home.teamName === teamName) {
        return object.home.colors;
    }else if(object.away.teamName === teamName) {
        return object.away.colors;
    }else 
        return 'No team with that name found';
}
console.log(teamColors("Charlotte Hornets"))

function teamName() {
    let object = gameObject();
    return [object.home.teamName, object.away.teamName]
}
console.log(teamName())

function playerNumbers(teamName) {
    let object = gameObject();
    if (object.home.teamName === teamName) {
        team = object.home;
    } else if (object.away.teamName === teamName) {
        team = object.away;
    } else {
        return "No team with that name found";
    }

    return Object.values(team.players).map(player => player.number);
}
console.log(playerNumbers("Brooklyn Nets"))

function playerStats(name) {
    let object = gameObject();
    if(object.home.players[name]) {
        return object.home.players[name]
    }else if(object.away.players[name]) {
        return object.away.players[name]
    }else
        return 'No player with that name found';
}
console.log(playerStats("Bismak Biyombo"))

function bigShoeRebounds() {
    let object = gameObject();
    let largestShoeSize = 0;

    for (let team of [object.home, object.away]) {
        for (let player in team.players) {
            let playerData = team.players[player];

            
            if (playerData.shoe > largestShoeSize) {
                largestShoeSize = playerData.shoe;
                rebounds = playerData.rebounds;
            }
        }
    }

    return rebounds;
}
console.log(bigShoeRebounds())

function winningTeam() {
    let object = gameObject();
    let scores = { home: 0, away: 0 };

    for (let team of [object.home, object.away]) {
        for (let player in team.players) {
            scores[team] += team.players[player].points;
        }
    }
     if(scores.home > scores.away) {
        return object.home.teamName
     }else 
        return object.away.teamName
    
}
console.log(winningTeam())

function mostPointsScored() {
    let object = gameObject();
    let maxPoints = 0;
    let topPlayer = "";

    for (let team of [object.home, object.away]) {
        for (let player in team.players) {
            if (team.players[player].points > maxPoints) {
                maxPoints = team.players[player].points;
                topPlayer = player;
            }
        }
    }
    return topPlayer;
}
console.log(mostPointsScored())

function playerWithLongestName() {
    let object = gameObject();
    let longestName = "";

    for(let team of [object.home, object.away]) {
        for(let player in team.players){
            if (player.length > longestName.length) {
                longestName = player;
        }
    }
    return longestName;
    }
}
console.log(playerWithLongestName())