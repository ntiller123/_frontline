import 'phaser';
import Boot from '../Scenes/Boot';

export default {
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
            gravity: {
                y: 200
            }
        }
    }
};

var game = new Phaser.Game(config);