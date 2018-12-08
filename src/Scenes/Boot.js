import 'phaser';

export default class Boot extends Phaser.Scene {
	constructor() {
		super('Boot');
	}

	preload() {
		this.load.image('title', 'assets/Title.png');
	}

	create() {
		this.scene.start('Preloader');
	}
};