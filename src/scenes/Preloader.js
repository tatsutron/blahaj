import { Scene } from "phaser";
import { Screen } from "../util/Screen";
import { fontTexture, fontData } from "../../public/assets/font.js";

export class Preloader extends Scene {
    constructor() {
        super("Preloader");
    }

    init() {
        //  A simple progress bar. This is the outline of the bar.
        let outline = this.add.rectangle(
            Screen.center.x,
            Screen.center.y,
            468,
            32,
        );
        outline.setStrokeStyle(2, 0xffffff);

        //  This is the progress bar itself. It will increase in size from the left based on the % of progress.
        const bar = this.add.rectangle(
            Screen.center.x - 230,
            Screen.center.y,
            4,
            28,
            0xffffff,
        );

        //  Use the 'progress' event emitted by the LoaderPlugin to update the loading bar
        this.load.on("progress", (progress) => {
            //  Update the progress bar (our bar is 464px wide, so 100% = 464px)
            bar.width = 4 + 460 * progress;
        });
    }

    preload() {
        //  Load the assets for the game - Replace with your own assets
        this.load.setPath("assets");
        this.load.bitmapFont("font", fontTexture, fontData);
        this.load.spritesheet("blahaj", "blahaj.png", {
            frameWidth: 43,
            frameHeight: 14,
        });
        this.load.image("bullet", "bullet.png");
    }

    create() {
        //  When all the assets have loaded, it's often worth creating global objects here that the rest of the game can use.
        //  For example, you can define global animations here, so we can use them in other scenes.
        this.anims.create({
            key: "aim",
            frames: [{ key: "blahaj", frame: 0 }],
        });
        this.anims.create({
            key: "fire",
            frames: [{ key: "blahaj", frame: 1 }],
        });

        //  Move to the Menu. You could also swap this for a Scene Transition, such as a camera fade.
        this.scene.start("Menu");
    }
}
