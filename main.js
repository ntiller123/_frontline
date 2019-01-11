import Phaser from 'phaser.min.js';
import Splash from "./src/Scenes/Splash";

var config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    scene: {
        preload: preload,
        create: create,
        update: update
    },
    physics: {
        default: 'arcade',
        arcade: {
            debug: false,
            gravity: { y: 200 }
        }
    }
};

var game = new Phaser.Game(config),
    Main = function() {};

Main.prototype = {

    preload: function() {
        game.load.image('logo', 'assets/Logo.png');
        game.load.image('title', 'assets/Title.png');
        game.load.script('splash', 'src/Scenes/Splash.js');
    },

    create: function() {
        game.state.add('Splash', Splash);
        game.state.start('Splash');
    }
};

game.state.add('Main', Main);
game.state.start('Main');