import 'phaser';

export default class GamePlay extends Phaser.Scene {
    constructor() {
        super('Game');
    }

    preload() {
        //load images
        this.load.image('logo', 'assets/Logo.png');

    }

    create() {
        //add images
        this.add.image(400, 300, 'logo');
    }
}