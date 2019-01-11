import Phaser from 'phaser.min.js';
import Boot from '../Scenes/Boot';
import Splash from '../Scenes/Splash';
import Menu from '../Scenes/Menu';
import Settings from '../Scenes/Settings';
import Gameplay from '../Scenes/Gameplay';

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