import { Scene } from "phaser";

export class Game extends Scene {
    frame = 0;
    cusors;
    player;
    bullets;
    spaceBar;

    constructor() {
        super("Game");
    }

    create() {
        this.cameras.main.setBackgroundColor(0x000000);
        this.add.image(512, 384, "background").setAlpha(0.33);

        this.player = this.physics.add.sprite(512, 384, "machine_gun");
        this.player.setDrag(10);
        this.player.setScale(4);

        this.bullets = this.physics.add.group();

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
            this.player.angle -= 2;
        }
        if (this.cursors.right.isDown) {
            this.player.angle += 2;
        }
        if (this.cursors.up.isDown) {
            this.player.body.velocity.x += Math.cos(this.player.rotation) * 5;
            this.player.body.velocity.y += Math.sin(this.player.rotation) * 5;
        }
        if (this.spaceBar.isDown && this.frame % 4 === 0) {
            let bullet = this.bullets.create(
                this.player.body.position.x,
                this.player.body.position.y,
                "bullet",
            );
            bullet.setScale(4);
            bullet.angle = this.player.angle;
            this.physics.velocityFromAngle(
                bullet.angle,
                1000,
                bullet.body.velocity,
            );
        }
        this.physics.world.wrap(this.player, 64);
        this.frame += 1;
    }
}
