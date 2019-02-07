import Bootloader from './Bootloader.js';

const config = {
    title: "islas de andaman2",
    width: 1280,
    height: 720,
    type: Phaser.AUTO,
    parent: "container",
    backgroundColor: "#4834d4",
    pixelArt: true,
    physics: {
        default: "arcade",
        "arcade": {
            gravity: {
                y: 500
            }
        }
    },
    scene: [
        Bootloader
    ]
};

new Phaser.Game(config);