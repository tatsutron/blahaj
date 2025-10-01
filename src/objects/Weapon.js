import { Game } from "../scenes/Game";
import { Player } from "./Player";

const MAX_BULLETS = 8;
const BULLET_SPEED = 20;
const BULLET_TTL = 1000;

export class Weapon {
    spaceBar;
    bullets;
    firedWhen = -1;

    constructor({ game, player }) {
        this.player = player;

        this.spaceBar = game.input.keyboard.addKey(
            Phaser.Input.Keyboard.KeyCodes.SPACE,
        );

        this.bullets = [];
        for (let i = 0; i < MAX_BULLETS; i += 1) {
            let bullet = game.matter.add.sprite(
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
    }

    update({ time, delta, player }) {
        const delay = (7 / 60) * 1000;
        let bullet = this.bullets.find((bullet) => !bullet.active);
        let canFire = time - this.firedWhen > delay;
        if (this.spaceBar.isDown && bullet && canFire) {
            player.sprite.anims.play("fire");
            this.fire({
                bullet,
                playerPos: player.sprite.body.position,
                playerVel: player.sprite.body.velocity,
                playerRot: player.sprite.rotation,
            });
            this.firedWhen = time;
        } else {
            player.sprite.anims.play("aim");
        }

        this.bullets.forEach((bullet) => {
            if (bullet.active) {
                bullet.ttl -= delta;
                if (bullet.ttl <= 0) {
                    bullet.setActive(false);
                    bullet.setVisible(false);
                    bullet.world.remove(bullet.body, true);
                }
            }
        });
    }

    fire({ bullet, playerPos, playerVel, playerRot }) {
        // Offset relative to player position
        let pos = new Phaser.Math.Vector3(96, 4, 0);
        let rot = new Phaser.Math.Matrix3();
        rot.rotate(playerRot);
        pos.applyMatrix3(rot);
        pos.x += playerPos.x;
        pos.y += playerPos.y;
        let velX = playerVel.x + Math.cos(playerRot) * BULLET_SPEED;
        let velY = playerVel.y + Math.sin(playerRot) * BULLET_SPEED;

        bullet.ttl = BULLET_TTL;
        bullet.setPosition(pos.x, pos.y);
        bullet.setRotation(playerRot);
        bullet.setVelocityX(velX);
        bullet.setVelocityY(velY);
        bullet.setActive(true);
        bullet.setVisible(true);
        bullet.world.add(bullet.body);
    }
}
