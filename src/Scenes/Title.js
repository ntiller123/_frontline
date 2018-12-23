import 'phaser';

export default class Title extends Phaser.Scene {
    constructor() {
        super('Title');
    }

    preload() {
        this.load.image('title', 'assets/Title.png');
    }

    create() {
        this.add.image(400, 300, 'title');
    }
};