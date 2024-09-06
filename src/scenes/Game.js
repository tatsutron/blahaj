import { Scene } from "phaser";
import { Screen } from "../util/Screen";

export class Game extends Scene {
    frame = 0;

    player;
    bullets;
    firedWhen = -1;

    cursors;
    spaceBar;

    constructor() {
        super("Game");
    }

    create() {
        this.cameras.main.setBackgroundColor(0x000000);
        this.matter.enableWrapPlugin();

        this.player = this.matter.add.sprite(
            Screen.center.x,
            Screen.center.y,
            "blahaj",
            null, // frame
            {
                plugin: {
                    wrap: {
                        min: {
                            x: 0,
                            y: 0,
                        },
                        max: {
                            x: Screen.width,
                            y: Screen.height,
                        },
                    },
                },
            },
        );
        this.player.setScale(4);

        this.bullets = [];
        for (let i = 0; i < 64; i += 1) {
            let bullet = this.matter.add.sprite(
                0, // x
                0, // y
                "bullet",
            );
            bullet.setScale(4);
            bullet.setFrictionAir(0);
            bullet.setCollidesWith([]);
            bullet.setActive(false);
            bullet.setVisible(false);
            bullet.world.remove(bullet.body, true);
            this.bullets.push(bullet);
        }

        this.cursors = this.input.keyboard.createCursorKeys();
        this.spaceBar = this.input.keyboard.addKey(
            Phaser.Input.Keyboard.KeyCodes.SPACE,
        );
        this.input.keyboard.on("keydown-Q", (event) => {
            this.scene.start("Credits");
        });
    }

    update(time, delta) {
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

        const delay = (7 / 60) * 1000;
        let bullet = this.bullets.find((bullet) => !bullet.active);
        let canFire = time - this.firedWhen > delay;
        if (this.spaceBar.isDown && bullet && canFire) {
            this.player.anims.play("fire");
            let p = new Phaser.Math.Vector3(96, 4, 0);
            let r = new Phaser.Math.Matrix3();
            r.rotate(this.player.rotation);
            p.applyMatrix3(r);
            p.x += this.player.body.position.x;
            p.y += this.player.body.position.y;
            bullet.setPosition(p.x, p.y);
            bullet.setRotation(this.player.rotation);
            let speed = 20;
            bullet.setVelocityX(
                this.player.body.velocity.x +
                    Math.cos(this.player.rotation) * speed,
            );
            bullet.setVelocityY(
                this.player.body.velocity.y +
                    Math.sin(this.player.rotation) * speed,
            );
            bullet.setActive(true);
            bullet.setVisible(true);
            bullet.world.add(bullet.body);
            this.firedWhen = time;
        } else {
            this.player.anims.play("aim");
        }
        this.frame += 1;
    }
}
