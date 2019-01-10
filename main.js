var game = new Phaser.Game(Config),
    Main = function() {};

Main.prototype = {

    preload: function() {
        game.load.image('bg', 'assets/Environment/layer1.png');
        game.load.image('levelMap', 'assets/Environment/level1.json');
    },
    create: function() {
        game.physics.startSystem(Phaser.Physics.ARCADE);
    },
    update: function() {

    }
};