import { Screen } from "./util/Screen";
import { Boot } from "./scenes/Boot";
import { Preloader } from "./scenes/Preloader";
import { Menu } from "./scenes/Menu";
import { TitleScreen } from "./scenes/TitleScreen";
import { Game } from "./scenes/Game";
import { Credits } from "./scenes/Credits";

//  Find out more information about the Game Config at:
//  https://newdocs.phaser.io/docs/3.70.0/Phaser.Types.Core.GameConfig
const config = {
    type: Phaser.AUTO,
    width: Screen.width,
    height: Screen.height,
    parent: "game-container",
    backgroundColor: "#000000",
    scale: {
        mode: Phaser.Scale.FIT,
        autoCenter: Phaser.Scale.CENTER_BOTH,
    },
    pixelArt: true,
    physics: {
        default: "matter",
        matter: {
            gravity: { y: 0 },
            debug: false,
        },
    },
    scene: [Boot, Preloader, Menu, TitleScreen, Game, Credits],
};

export default new Phaser.Game(config);
