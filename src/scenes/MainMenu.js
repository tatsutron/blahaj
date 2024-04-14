import { Scene } from "phaser";

export class MainMenu extends Scene {
    constructor() {
        super("MainMenu");
    }

    create() {
        this.add.image(512, 384, "background");
        this.add.image(512, 384, "logo");

        this.input.once("pointerdown", () => {
            this.scene.start("Game");
        });
    }
}
