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
            gravity: { y: 0 }
        }
    }
};

var game = new Phaser.Game(config);

function preload() {
    this.load.image("bg", "assets/Environment/layer1.png");
    this.load.image("foreground", "assets/Environment/foreground.json");
    this.load.image("bg", "assets/Environment/layer1.png");
    this.load.image("bg", "assets/Environment/layer1.png");
    this.load.image("bg", "assets/Environment/layer1.png");
}

function create() {
    this.add.image("bg", "assets/Environment/layer1.png");
}

function update() {

}