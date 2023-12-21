

function start() {
        //affcher au debut du jeu
    let game= `                                                ______
                                            |     |
                                            |    \\O/
                                            |     |
                                            |    / \\
                                            |  |̅̅ ̅̅ ̅̅ ̅̅ ̅̅ |
    `
    console.log(game);
}


function lose() {
        //afficher si le joueur perds
    let loser=`                                         ______
                                            |     |
                                            |    \\O/
                                            |     |
                                            |    / \\     DEAD
                                            |          |̅̅ ̅̅ ̅̅ ̅̅ ̅̅ ̅̅ |
    `
    console.log(loser);
        
}
   
function win() {
        //afficher si le joueur gagne 
    let winner=`                                            ______
                                            |     
                                            |    \\O/
                                            |     |
                                            |    / \\  DEATH , WHERE IS THEE POWER ?
                                            |  |̅̅ ̅̅ ̅̅ ̅̅ ̅̅ |
    `
    console.log(winner);
}

exports.winner = win
exports.loser = lose
exports.start = start