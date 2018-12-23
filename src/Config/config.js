import 'phaser';
import Boot from '../Scenes/Boot';

export default {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    parent: 'frontline',
    physics: {
        default: 'arcade',
        arcade: {
            gravity: { y: 200 }
        }
    },
    scene: {
        preload: preload,
        create: create,
        update: update
    }
};

var game = new Phaser.Game(config);

function preload() {
    this.load.image('title', 'assets/Title.png');
}