import 'phaser';

export default class Scene extends Phaser.Scene {
	constructor() {
		super('Game');
	}

	preload() {
		//load images
		this.load.image('bg', '/assets/Environment/layer1.png');

	}

	create() {
		//add images
		this.add.image(0, 0, 'bg').setOrigin(0, 0);