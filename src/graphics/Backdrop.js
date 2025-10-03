import { Screen } from "../util/Screen";

export class Backdrop {
    layers;
    stars;

    constructor({ game }) {
        this.layers = [
            {
                numStars: 64,
                speed: 0.01,
            },
            {
                numStars: 32,
                speed: 0.05,
            },
            {
                numStars: 16,
                speed: 0.1,
            },
        ];

        this.layers.forEach((layer) => {
            let stars = [];
            for (let i = 0; i < layer.numStars; i += 1) {
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
                stars.push(star);
            }
            layer.stars = stars;
        });
    }

    update({ time, delta }) {
        this.layers.forEach((layer) => {
            layer.stars.forEach((star) => {
                let x = star.body.position.x - delta * layer.speed;
                let y = star.body.position.y;
                star.setPosition(x, y);
            });
        });
    }
}
