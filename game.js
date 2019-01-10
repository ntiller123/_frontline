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
        this.load.image('bg', 'assets/Environment/layer1.png');
        this.load.image('levelMap', 'assets/Environment/level1.json');
    },
    create: function() {
        game.physics.startSystem(Phaser.Physics.ARCADE);
    },
    update: function() {

    }
};