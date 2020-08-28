class Player{
    constructor(){
        this.index = null;
        this.name = null;
        this.distance = 0;
        this.rank = null;
    }

    getCount(){
        var playerCountRef = database.ref('playerCount');
        playerCountRef.on("value",(data)=>{
            playerCount = data.val()
        });
    }

    updateCount(count){
        database.ref('/').update({
            playerCount : count
        })
    }

    update(name){
        var playerIndex = "players/player" + this.index;
        database.ref(playerIndex).set({
            name : this.name,
            distance : this.distance
       })
    }

    static getPlayerInfo(){
        var playerInfoRef = database.ref('players');
        playerInfoRef.on("value",function(data){
            allPlayers = data.val();
        })
    }

    static getPlayersAtEnd(){
        database.ref('playersAtEnd').on("value",(data)=>{
            this.rank = data.val();
        })
    }

    static updatePlayersAtEnd(rank){
        database.ref('/').update({
            playersAtEnd : rank
        })
    }
}