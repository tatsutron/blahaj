import { Scene } from "phaser";

export class Game extends Scene {
    cusors;
    player;

    constructor() {
        super("Game");
    }

    create() {
        this.cameras.main.setBackgroundColor(0x000000);
        this.add.image(512, 384, "background").setAlpha(0.33);

        this.player = this.physics.add.sprite(512, 384, "machine_gun");
        this.player.setDrag(10);
        this.player.setScale(4);

        this.cursors = this.input.keyboard.createCursorKeys();
        this.input.once("pointerdown", () => {
            this.scene.start("GameOver");
        });
    }

    update() {
        if (this.cursors.left.isDown) {
            this.player.angle -= 2;
        }
        if (this.cursors.right.isDown) {
            this.player.angle += 2;
        }
        if (this.cursors.up.isDown) {
            this.player.body.velocity.x += Math.cos(this.player.rotation) * 5;
            this.player.body.velocity.y += Math.sin(this.player.rotation) * 5;
        }
        this.physics.world.wrap(this.player, 64);
    }
}
