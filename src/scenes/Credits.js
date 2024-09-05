import { Scene } from "phaser";
import { Screen } from "../util/Screen";

export class Credits extends Scene {
    constructor() {
        super("Credits");
    }

    create() {
        this.cameras.main.setBackgroundColor(0x000000);

        let title = this.add.bitmapText(
            Screen.center.x,
            Screen.center.y,
            "font",
            "YOU DIED",
        );
        title.setOrigin(0.5, 0.5);
        title.tint = "0xff0000";
    }
}
