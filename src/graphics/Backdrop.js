import { Screen } from "../util/Screen";

export class Backdrop {
    stars;

    constructor({ game }) {
        this.stars = [];
        for (let i = 0; i < 64; i += 1) {
            let star = game.matter.add.sprite(
                Screen.width * Math.random(), // x
                Screen.height * Math.random(), // y
                "star",
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
            star.setScale(4);
            star.setCollidesWith([]);
            star.setVisible(true);
            this.stars.push(star);
        }
    }

    update({ time, delta }) {
        this.stars.forEach((star) => {
            let x = star.body.position.x - delta * 0.01;
            let y = star.body.position.y;
            star.setPosition(x, y);
        });
    }
}
