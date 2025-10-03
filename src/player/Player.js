import { Screen } from "../util/Screen";
import { Game } from "../scenes/Game";
import { Weapon } from "./Weapon";

export class Player {
    cursors;
    sprite;
    weapon;

    constructor({ game }) {
        this.cursors = game.input.keyboard.createCursorKeys();

        this.sprite = game.matter.add.sprite(
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
        this.sprite.setScale(4);

        this.weapon = new Weapon({ game, player: this });
    }

    update({ time, delta }) {
        if (this.cursors.left.isDown) {
            this.sprite.setAngularVelocity(-0.075);
        } else if (this.cursors.right.isDown) {
            this.sprite.setAngularVelocity(0.075);
        } else {
            this.sprite.setAngularVelocity(0);
        }

        if (this.cursors.up.isDown) {
            this.sprite.thrust(0.00667);
        }

        this.weapon.update({ time, delta, player: this });
    }
}
