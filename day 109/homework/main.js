/* 1) შექმენი კლასი YouTubeChannel, რომელსაც ექნება public მეთოდი uploadVideo().
ამ მეთოდის გამოძახებისას უნდა გაეშვას private მეთოდები:
#checkVideo()
#addTitle()
#publishVideo()
საბოლოოდ კონსოლში უნდა გამოიტანოს:
"Video uploaded successfully" */

console.log();
console.log();
console.log("Homework 1");
console.log();
console.log();

class YouTubeChannel{
    upLoadVideo(){
        this.#checkVideo();
        this.#addTitle();
        this.#publishVideo();
        console.log("Video uploaded successfully");
    }
    #checkVideo(){
        console.log("Checking video...");
    }
    #addTitle(){
        console.log("Adding title...");
    }
    #publishVideo(){
        console.log("Publishing video...");
    }
}

const channel = new YouTubeChannel();

channel.upLoadVideo()

/* 2) შექმენი კლასი TikTokAccount, რომელსაც ექნება public მეთოდი postVideo().
ამ მეთოდის გამოძახებისას უნდა გაეშვას private მეთოდები:
#selectVideo()
#addMusic()
#upload() */

console.log();
console.log();
console.log("Homework 2");
console.log();
console.log();

class TikTokAccount{
    postVideo(){
        this.#selectVideo();
        this.#addMusic();
        this.#upload();
    }
    #selectVideo(){
        console.log("Selecting Video...");
    }
    #addMusic(){
        console.log("Adding Music...");
    }
    #upload(){
        console.log("uploading...");
    }
}

const account = new TikTokAccount();

account.postVideo();

/* 3) შექმენი კლასი SmartTV, რომელსაც ექნება public მეთოდი watchYouTube().
ამ მეთოდის გამოძახებისას უნდა გაეშვას private მეთოდები:
#connectInternet()
#openYouTube()
#playVideo()
საბოლოოდ კონსოლში უნდა გამოიტანოს:
"YouTube video started" */

console.log();
console.log();
console.log("Homework 3");
console.log();
console.log();

class SmartTV{
    watchYouTube(){
        this.#connectInternet();
        this.#openYouTube();
        this.#playVideo();
        console.log("YouTube video started");
    }
    #connectInternet(){
        console.log("connecting internet...");
    }
    #openYouTube(){
        console.log("opening youtube...");
    }
    #playVideo(){
        console.log("Playing video...");
    }
}

const TV = new SmartTV();
TV.watchYouTube();

/* 4) შექმენი კლასი Laptop, რომელსაც ექნება public მეთოდი turnOff().
ამ მეთოდის გამოძახებისას უნდა გაეშვას private მეთოდები:
#closePrograms()
#saveFiles()
#shutdown()
საბოლოოდ კონსოლში უნდა გამოიტანოს:
"Laptop turned off" */

console.log();
console.log();
console.log("Homework 4");
console.log();
console.log();

class Laptop{
    turnOff(){
        this.#closePrograms();
        this.#saveFiles();
        this.#shutdown();
        console.log("Laptop truned off");
    }
    #closePrograms(){
        console.log("closing programs...");
    }
    #saveFiles(){
        console.log("saving files...");
    }
    #shutdown(){
        console.log("shutting down...");
    }
}

const laptop1 = new Laptop();
laptop1.turnOff();

/* 5) შექმენი კლასი OnlineGame, რომელსაც ექნება public მეთოდი startMatch().
ამ მეთოდის გამოძახებისას უნდა გაეშვას private მეთოდები:
#checkPlayers()
#loadMap()
#startGame()
საბოლოოდ კონსოლში უნდა გამოიტანოს:
"Match started" */

console.log();
console.log();
console.log("Homework 5");
console.log();
console.log();

class OnlineGame{
    startMatch(){
        this.#checkPlayers();
        this.#loadMap();
        this.#startGame();
        console.log("Match started");
    }
    #checkPlayers(){
        console.log("Checking players...");
    }
    #loadMap(){
        console.log("loading map...");
    }
    #startGame(){
        console.log("game starting...");
    }
}

const game = new OnlineGame();
game.startMatch();

console.log();
console.log();