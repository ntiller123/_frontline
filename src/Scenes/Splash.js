import Phaser from 'phaser.min.js';

export default class Splash extends Phaser.Scene {
    constructor() {
        super('Splash');
    }

    init() {
        this.readyCount = 0;
    }

    preload() {
        //phaser logo
        this.add.image(400, 300, 'logo');

        //create progress bar and holding box
        var progressBar = this.add.graphics();
        var progressBox = this.add.graphics();
        progressBox.fillstyle(0x222222, 0.8);
        progressBox.fillRect(240, 270, 320, 50);

        //add loading text
        var width = this.cameras.main.width;
        var height = this.cameras.main.height;
        var loadingText = this.make.text({
            x: width / 2,
            y: height / 2 - 50,
            text: 'Loading...',
            style: {
                font: '20px monospace',
                fill: ffffff
            }
        });
        loadingText.setOrigin(0.5, 0.5);

        //update progress bar
        this.load.on('progress', function(value) {
            console.log(value);
            progressBar.clear();
            progressBar.fillstyle(0xffffff, 1);
            progressBar.fillRect(250, 280, 300 * value, 30);
        });

        //reomove progress bar when complete
        this.load.on('complete', function() {
            console.log('complete');
            progressBar.destroy();
            progressBox.destroy();
            loadingText.destroy();
            this.ready();
        }.bind(this));

        //timer to view logo for 3 seconds
        this.timedEvent = this.time.delayedCall(3000, this.ready, [], this);

        //load assets
        this.load.image('greenButton1', 'assets/UI/green_button02.png');
        this.load.image('greenButton2', 'assets/UI/green_button03.png');
        this.load.image('logo', 'assets/Logo.png');
    }

    ready() {
        this.readyCount++;
        if (this.readyCount === 2) {
            this.scene.start('Title');
        }
    }
};