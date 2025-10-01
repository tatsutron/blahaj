import { Scene } from "phaser";
import { Player } from "../objects/Player";

export class Game extends Scene {
    player;

    constructor() {
        super("Game");
    }

    create() {
        this.cameras.main.setBackgroundColor(0x000000);
        this.matter.enableWrapPlugin();

        this.player = new Player({ game: this });

        this.input.keyboard.on("keydown-Q", (event) => {
            this.scene.start("Menu");
        });
    }

    update(time, delta) {
        this.player.update({ time, delta });
    }
}
