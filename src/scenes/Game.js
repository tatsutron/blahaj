import { Scene } from "phaser";

export class Game extends Scene {
    frame = 0;
    cusors;
    player;
    spaceBar;

    constructor() {
        super("Game");
    }

    create() {
        this.cameras.main.setBackgroundColor(0x000000);
        this.add.image(512, 384, "background").setAlpha(0.33);

        this.player = this.matter.add.sprite(512, 384, "blahaj");
        this.player.setScale(4);
        this.anims.create({
            key: "aim",
            frames: [{ key: "blahaj", frame: 0 }],
        });
        this.anims.create({
            key: "fire",
            frames: [{ key: "blahaj", frame: 1 }],
        });

        this.cursors = this.input.keyboard.createCursorKeys();
        this.spaceBar = this.input.keyboard.addKey(
            Phaser.Input.Keyboard.KeyCodes.SPACE,
        );
        this.input.once("pointerdown", () => {
            this.scene.start("GameOver");
        });
    }

    update() {
        if (this.cursors.left.isDown) {
            this.player.setAngularVelocity(-0.075);
        } else if (this.cursors.right.isDown) {
            this.player.setAngularVelocity(0.075);
        } else {
            this.player.setAngularVelocity(0);
        }

        if (this.cursors.up.isDown) {
            this.player.thrust(0.00667);
        }
        if (this.spaceBar.isDown) {
            this.player.anims.play("fire");
            if (this.frame % 7 === 0) {
                this.player.anims.play("fire");
                // TODO Fire bullet
            } else {
                this.player.anims.play("aim");
            }
        } else {
            this.player.anims.play("aim");
        }
        this.frame += 1;
    }
}
