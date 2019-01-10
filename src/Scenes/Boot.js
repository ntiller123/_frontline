//boot scene
export default class Boot extends Phaser.State {
    constructor() {
        super('Boot');
    }

    preload() {
        this.load.image('logo', 'assets/Logo.png');
    }

    create() {
        this.scene.start('Preloader');
    }
};