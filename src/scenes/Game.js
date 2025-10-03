import { Scene } from "phaser";
import { Backdrop } from "../graphics/Backdrop";
import { Player } from "../player/Player";

export class Game extends Scene {
    backdrop;
    player;

    constructor() {
        super("Game");
    }

    create() {
        this.cameras.main.setBackgroundColor(0x000000);
        this.matter.enableWrapPlugin();

        this.backdrop = new Backdrop({ game: this });
        this.player = new Player({ game: this });

        this.input.keyboard.on("keydown-Q", (event) => {
            this.scene.start("Menu");
        });
    }

    update(time, delta) {
        this.backdrop.update({ time, delta });
        this.player.update({ time, delta });
    }
}
