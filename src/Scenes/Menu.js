import Phaser from 'phaser.min.js';

export default class Menu extends Phaser.Scene {
    constructor() {
        super('Menu');
    }

    preload() {
        this.load.image('title', 'assets/Title.png');
    }

    create() {
        this.add.image(400, 300, 'title');
    }
};