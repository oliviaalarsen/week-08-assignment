/* 
TODO: Create a menu app as seen in this week’s video. 
What you create is up to you as long as it meets the following requirements:
Use at least one array.
Use at least two classes.
Your menu should have the options to create, view, and delete elements.
*/

//Menu music playlist 

//class Songs
    //title
    //artist
    //genre
    //duration

    //see a menu
    //add songs
    //delete songs
    //view songs

    //start the menu


//Song class
    //defines properties for each song: title, artist, duration

class Song {
    constructor(title, artist, duration) {
        this.title = title; //song title
        this.artist = artist; //song artist
        this.duration = duration; //duration (minutes)
    }
}

//Playlist class
    //stores songs in an array
    //ways to add songs, view playlist, calculate total duration

class Playlist {
    constructor() {
        this.songs = [];
    }

//adds song to the playlist
addSong() {
    let songTitle = prompt("Add song title:");
    let songArtist = prompt("Add song artist:");
    let songDuration = prompt("Add song duration:");
    let song = new Song(songTitle, songArtist, songDuration);
    this.songs.push(song);
    console.log(`${song.title} by ${song.artist} added to the playlist.`);
}

//delete songs
deleteSong() {
    let songIndex = prompt("Enter the song index you want to delete:");
    this.songs.splice(songIndex - 1, 1);
    console.log(`Song deleted.`);
}

//views the playlist
    viewPlaylist() {
        let displaySongs = '';
        for (let i = 0; i < this.songs.length; i++) {
            displaySongs += `
            ${i}) ${this.songs[i].title} by ${this.songs[i].artist} - ${this.songs[i].duration} mins\n`;
        }
        alert(`
            Playlist:
            -----------------
            ${displaySongs}
            `);
    }

//see a menu
showMainMenu() {
    return prompt(`
        Main Menu:
        ----------------
        0) Exit
        1) Add Song
        2) Delete Song
        3) View Playlist
        `);
    }

//start the menu
start() {
    let selection = this.showMainMenu();
    while (selection !== "0") {
        switch (selection) {
            case "1":
                this.addSong();
                break;
            case "2":
                this.deleteSong();
                break;
            case "3":
                this.viewPlaylist();
                break;
            default:
                selection = 0;
        }
        selection = this.showMainMenu();
    }

    alert("Exiting menu... *elevator music*");

}

}

//instantiate the menu and invoke the start method
let menu = new Playlist();

menu.start();

//list of songs

let song1 = new Song("Tropicana", "Topaz Jones", 2.3);
console.log(song1);

let song2 = new Song("Star Shopping", "Lil Peep", 2.2);
console.log(song2);

let song3 = new Song("Mutt", "Leon Thomas", 3.1);
console.log(song3);

let song4 = new Song("Conceited", "Lola Young", 4);
console.log(song4);

let song5 = new Song("Broken Bones", "Kaleo", 4);
console.log(song5);



//song list array

    const songList = [
        new Song("Tropicana", "Topaz Jones", 2.3),
        new Song("Star Shopping", "Lil Peep", 2.2),
        new Song("Mutt", "Leon Thomas", 3.1),
        new Song("Conceited", "Lola Young", 4),
        new Song("Broken Bones", "Kaleo", 4),
    ]
