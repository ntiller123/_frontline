import 'phaser';
import config from 'Config/config';
import Game from 'Scenes/Gameplay';
import Boot from 'Scenes/Boot';
import Preloader from 'Scenes/Preloader';
import Title from 'Scenes/Title';
import Options from 'Scenes/Options';
import Credits from 'Scenes/Credits';

class Game extends Phaser.Game {
    constructor() {
        super(config);
        this.scene.add('Boot', Boot);
        this.scene.add('Preloader', Preloader);
        this.scene.add('Title', Title);
        this.scene.add('Options', Options);
        this.scene.add('Credits', Credits);
        this.scene.add('Game', Gameplay);
        this.scene.start('Game');
    }
}

window.game = new Game();