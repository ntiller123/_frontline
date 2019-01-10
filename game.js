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

var game = new Phaser.Game(config);

function preload() {
    this.load.image('bg', 'assets/Environment/layer1.png');
    this.load.image('ground', 'assets/Environment/tanksmap.png');
    this.load.image('barrier', 'assets/Objects/boxCoinAlt.png');
}

function create() {
    this.game.world.setBounds(0, 0, 800, 600);

    game.physics.startSystem(Phaser.Physics.ARCADE);

}

function update() {

}