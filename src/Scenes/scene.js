import 'phaser';

export default class Scene extends Phaser.Scene {
	constructor() {
		super('Game');
	}

	preload() {
		//load images
		this.load.image('background', 'assets/BG.png');
		this.load.image('ground', 'assets/Ground.png');
		this.load.image('block', 'assets/Brick.png');
		this.load.image('crate', 'assets/Crate.png');
		this.load.image('stone', 'assets/Stone.png');
		this.load.image('cactus', 'assets/Cactus.png');


	}

	create() {
		//add images
		this.add.image(400, 300, 'background');

		platforms = this.physics.add.staticGroup();
		platforms.create(400, 100, 'ground');

		this.add.image(400, 0, 'ground');
		this.add.image(200, 200, 'block');
		this.add.image(100,100, 'crate');
		this.add.image(0,0, 'stone');
	}
}; 