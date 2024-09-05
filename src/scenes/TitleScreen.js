import { Scene } from "phaser";
import { Screen } from "../util/Screen";

export class TitleScreen extends Scene {
    constructor() {
        super("TitleScreen");
    }

    create() {
        this.cameras.main.setBackgroundColor(0x000000);

        let title = this.add.bitmapText(
            Screen.center.x,
            Screen.center.y,
            "font",
            "BLAHAJSTERRHOIDS",
        );
        title.setOrigin(0.5, 0.5);
        title.tint = "0xff0000";

        this.input.keyboard.on("keydown-ENTER", (event) => {
            this.scene.start("Game");
        });
    }
}
