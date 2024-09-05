import { Scene } from "phaser";
import { Screen } from "../util/Screen";

export class Game extends Scene {
    frame = 0;

    player;
    bullets;

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
        this.anims.create({
            key: "aim",
            frames: [{ key: "blahaj", frame: 0 }],
        });
        this.anims.create({
            key: "fire",
            frames: [{ key: "blahaj", frame: 1 }],
        });

        this.bullets = [];
        for (let i = 0; i < 64; i += 1) {
            // TODO Clean this all up
            let bullet = this.matter.add.sprite(
                0, // x
                0, // y
                "bullet",
            );
            bullet.setScale(4);
            bullet.setActive(false);
            bullet.setVisible(false);
            // TODO Understand what this line is doing
            bullet.scene.add.existing(bullet);
            // TODO Understand what this line is doing
            bullet.world.remove(bullet.body, true);
            bullet.setFrictionAir(0);
            bullet.setCollidesWith([]);
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
            // TODO Base this on dt, not frames
            if (this.frame % 7 === 0) {
                this.player.anims.play("fire");
                // TODO Clean this all up
                let bullet = this.bullets.find((bullet) => !bullet.active);
                if (bullet) {
                    bullet.world.add(bullet.body);
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
                }
            } else {
                this.player.anims.play("aim");
            }
        } else {
            this.player.anims.play("aim");
        }
        this.frame += 1;
    }
}
