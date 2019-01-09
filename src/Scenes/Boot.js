//boot scene
export default class Boot extends Phaser.State {
    constructor() {
        super('Boot');
    }

    preload() {
        this.game.load.json('settings', 'public/config/settings.json');
        this.load.image('title', 'assets/Title.png');
    }

    create() {
        this.game.config.settings = this.game.cache.getJSON('settings');
        this.scene.start('Preloader');
    }
};