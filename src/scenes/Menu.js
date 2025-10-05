import { Scene } from "phaser";
import { Screen } from "../util/Screen";

const backgroundColor = 0x000000;
const titleTextColor = 0xffecff;
const titleTextColorShadow = 0x80687e;
const subtitleTextColor = 0x8bffff;
const subtitleTextColorShadow = 0x008080;
const highlightedTextColor = 0xf8f1eb;
const highlightedTextColorShadow = 0x776e67;
const gameTextColor = 0xcafff8;
const gameTextColorShadow = 0x3f8077;
const cursorColor = 0xffffff;
const cursorColorShadow = 0x808080;
const textShadowOffset = 3;

export class Menu extends Scene {
    blinkingTextVisible = true;

    constructor() {
        super("Menu");
    }

    create() {
        this.cameras.main.setBackgroundColor(backgroundColor);

        let titleShadow = this.add.bitmapText(
            Screen.center.x + textShadowOffset,
            32 + textShadowOffset,
            "font",
            "SUPER BLAHAJ 12 IN 1",
        );
        titleShadow.setOrigin(0.5, 0.5);
        titleShadow.scale = 0.5;
        titleShadow.tint = titleTextColorShadow;
        let title = this.add.bitmapText(
            Screen.center.x,
            32,
            "font",
            "SUPER BLAHAJ 12 IN 1",
        );
        title.setOrigin(0.5, 0.5);
        title.scale = 0.5;
        title.tint = titleTextColor;

        let subtitleShadow = this.add.bitmapText(
            Screen.center.x + textShadowOffset,
            64 + textShadowOffset,
            "font",
            "PUSH SEL OR START BUTTON",
        );
        subtitleShadow.setOrigin(0.5, 0.5);
        subtitleShadow.scale = 0.5;
        subtitleShadow.tint = subtitleTextColorShadow;
        subtitleShadow.setWordTint("SEL", -1, true, highlightedTextColorShadow);
        subtitleShadow.setWordTint(
            "START",
            -1,
            true,
            highlightedTextColorShadow,
        );
        let subtitle = this.add.bitmapText(
            Screen.center.x,
            64,
            "font",
            "PUSH SEL OR START BUTTON",
        );
        subtitle.setOrigin(0.5, 0.5);
        subtitle.scale = 0.5;
        subtitle.tint = subtitleTextColor;
        subtitle.setWordTint("SEL", -1, true, highlightedTextColor);
        subtitle.setWordTint("START", -1, true, highlightedTextColor);

        let game1Shadow = this.add.bitmapText(
            Screen.center.x + textShadowOffset,
            64 + 32 * 1 + textShadowOffset,
            "font",
            "001.BLAHAJ BLASTER  ",
        );
        game1Shadow.setOrigin(0.5, 0.5);
        game1Shadow.scale = 0.5;
        game1Shadow.tint = gameTextColorShadow;
        let game1 = this.add.bitmapText(
            Screen.center.x,
            64 + 32 * 1,
            "font",
            "001.BLAHAJ BLASTER  ",
        );
        game1.setOrigin(0.5, 0.5);
        game1.scale = 0.5;
        game1.tint = gameTextColor;

        let game2Shadow = this.add.bitmapText(
            Screen.center.x + textShadowOffset,
            64 + 32 * 2 + textShadowOffset,
            "font",
            "002.????????????????",
        );
        game2Shadow.setOrigin(0.5, 0.5);
        game2Shadow.scale = 0.5;
        game2Shadow.tint = gameTextColorShadow;
        let game2 = this.add.bitmapText(
            Screen.center.x,
            64 + 32 * 2,
            "font",
            "002.????????????????",
        );
        game2.setOrigin(0.5, 0.5);
        game2.scale = 0.5;
        game2.tint = gameTextColor;

        let game3Shadow = this.add.bitmapText(
            Screen.center.x + textShadowOffset,
            64 + 32 * 3 + textShadowOffset,
            "font",
            "003.????????????????",
        );
        game3Shadow.setOrigin(0.5, 0.5);
        game3Shadow.scale = 0.5;
        game3Shadow.tint = gameTextColorShadow;
        let game3 = this.add.bitmapText(
            Screen.center.x,
            64 + 32 * 3,
            "font",
            "003.????????????????",
        );
        game3.setOrigin(0.5, 0.5);
        game3.scale = 0.5;
        game3.tint = gameTextColor;

        let game4Shadow = this.add.bitmapText(
            Screen.center.x + textShadowOffset,
            64 + 32 * 4 + textShadowOffset,
            "font",
            "004.????????????????",
        );
        game4Shadow.setOrigin(0.5, 0.5);
        game4Shadow.scale = 0.5;
        game4Shadow.tint = gameTextColorShadow;
        let game4 = this.add.bitmapText(
            Screen.center.x,
            64 + 32 * 4,
            "font",
            "004.????????????????",
        );
        game4.setOrigin(0.5, 0.5);
        game4.scale = 0.5;
        game4.tint = gameTextColor;

        let game5Shadow = this.add.bitmapText(
            Screen.center.x + textShadowOffset,
            64 + 32 * 5 + textShadowOffset,
            "font",
            "005.????????????????",
        );
        game5Shadow.setOrigin(0.5, 0.5);
        game5Shadow.scale = 0.5;
        game5Shadow.tint = gameTextColorShadow;
        let game5 = this.add.bitmapText(
            Screen.center.x,
            64 + 32 * 5,
            "font",
            "005.????????????????",
        );
        game5.setOrigin(0.5, 0.5);
        game5.scale = 0.5;
        game5.tint = gameTextColor;

        let game6Shadow = this.add.bitmapText(
            Screen.center.x + textShadowOffset,
            64 + 32 * 6 + textShadowOffset,
            "font",
            "006.????????????????",
        );
        game6Shadow.setOrigin(0.5, 0.5);
        game6Shadow.scale = 0.5;
        game6Shadow.tint = gameTextColorShadow;
        let game6 = this.add.bitmapText(
            Screen.center.x,
            64 + 32 * 6,
            "font",
            "006.????????????????",
        );
        game6.setOrigin(0.5, 0.5);
        game6.scale = 0.5;
        game6.tint = gameTextColor;

        let game7Shadow = this.add.bitmapText(
            Screen.center.x + textShadowOffset,
            64 + 32 * 7 + textShadowOffset,
            "font",
            "007.????????????????",
        );
        game7Shadow.setOrigin(0.5, 0.5);
        game7Shadow.scale = 0.5;
        game7Shadow.tint = gameTextColorShadow;
        let game7 = this.add.bitmapText(
            Screen.center.x,
            64 + 32 * 7,
            "font",
            "007.????????????????",
        );
        game7.setOrigin(0.5, 0.5);
        game7.scale = 0.5;
        game7.tint = gameTextColor;

        let game8Shadow = this.add.bitmapText(
            Screen.center.x + textShadowOffset,
            64 + 32 * 8 + textShadowOffset,
            "font",
            "008.????????????????",
        );
        game8Shadow.setOrigin(0.5, 0.5);
        game8Shadow.scale = 0.5;
        game8Shadow.tint = gameTextColorShadow;
        let game8 = this.add.bitmapText(
            Screen.center.x,
            64 + 32 * 8,
            "font",
            "008.????????????????",
        );
        game8.setOrigin(0.5, 0.5);
        game8.scale = 0.5;
        game8.tint = gameTextColor;

        let game9Shadow = this.add.bitmapText(
            Screen.center.x + textShadowOffset,
            64 + 32 * 9 + textShadowOffset,
            "font",
            "009.????????????????",
        );
        game9Shadow.setOrigin(0.5, 0.5);
        game9Shadow.scale = 0.5;
        game9Shadow.tint = gameTextColorShadow;
        let game9 = this.add.bitmapText(
            Screen.center.x,
            64 + 32 * 9,
            "font",
            "009.????????????????",
        );
        game9.setOrigin(0.5, 0.5);
        game9.scale = 0.5;
        game9.tint = gameTextColor;

        let game10Shadow = this.add.bitmapText(
            Screen.center.x + textShadowOffset,
            64 + 32 * 10 + textShadowOffset,
            "font",
            "010.????????????????",
        );
        game10Shadow.setOrigin(0.5, 0.5);
        game10Shadow.scale = 0.5;
        game10Shadow.tint = gameTextColorShadow;
        let game10 = this.add.bitmapText(
            Screen.center.x,
            64 + 32 * 10,
            "font",
            "010.????????????????",
        );
        game10.setOrigin(0.5, 0.5);
        game10.scale = 0.5;
        game10.tint = gameTextColor;

        let game11Shadow = this.add.bitmapText(
            Screen.center.x + textShadowOffset,
            64 + 32 * 11 + textShadowOffset,
            "font",
            "011.????????????????",
        );
        game11Shadow.setOrigin(0.5, 0.5);
        game11Shadow.scale = 0.5;
        game11Shadow.tint = gameTextColorShadow;
        let game11 = this.add.bitmapText(
            Screen.center.x,
            64 + 32 * 11,
            "font",
            "011.????????????????",
        );
        game11.setOrigin(0.5, 0.5);
        game11.scale = 0.5;
        game11.tint = gameTextColor;

        let game12Shadow = this.add.bitmapText(
            Screen.center.x + textShadowOffset,
            64 + 32 * 12 + textShadowOffset,
            "font",
            "012.????????????????",
        );
        game12Shadow.setOrigin(0.5, 0.5);
        game12Shadow.scale = 0.5;
        game12Shadow.tint = gameTextColorShadow;
        let game12 = this.add.bitmapText(
            Screen.center.x,
            64 + 32 * 12,
            "font",
            "012.????????????????",
        );
        game12.setOrigin(0.5, 0.5);
        game12.scale = 0.5;
        game12.tint = gameTextColor;

        let games = [];
        games.push(game1);
        games.push(game2);
        games.push(game3);
        games.push(game4);
        games.push(game5);
        games.push(game6);
        games.push(game7);
        games.push(game8);
        games.push(game9);
        games.push(game10);
        games.push(game11);
        games.push(game12);

        let index = 0;

        let cursorShadow = this.add.bitmapText(
            120 + textShadowOffset,
            games[index].y + textShadowOffset,
            "font",
            ">",
        );
        cursorShadow.setOrigin(0.5, 0.5);
        cursorShadow.scale = 0.5;
        cursorShadow.tint = cursorColorShadow;
        let cursor = this.add.bitmapText(120, games[index].y, "font", ">");
        cursor.setOrigin(0.5, 0.5);
        cursor.scale = 0.5;
        cursor.tint = cursorColor;

        this.input.keyboard.on("keydown-SPACE", (event) => {
            index = (index + 1) % 12;
            cursor.y = games[index].y;
            cursorShadow.y = games[index].y + 3;
        });
        this.input.keyboard.on("keydown-ENTER", (event) => {
            if (index === 0) {
                this.scene.start("Game");
            }
        });

        this.time.addEvent({
            delay: 500,
            callback: () => {
                this.blinkingTextVisible = !this.blinkingTextVisible;
                if (this.blinkingTextVisible) {
                    subtitleShadow.setWordTint(
                        "SEL",
                        -1,
                        true,
                        highlightedTextColorShadow,
                    );
                    subtitleShadow.setWordTint(
                        "START",
                        -1,
                        true,
                        highlightedTextColorShadow,
                    );
                    subtitle.setWordTint("SEL", -1, true, highlightedTextColor);
                    subtitle.setWordTint(
                        "START",
                        -1,
                        true,
                        highlightedTextColor,
                    );
                } else {
                    subtitleShadow.setWordTint("SEL", -1, true, 0x000000);
                    subtitleShadow.setWordTint("START", -1, true, 0x000000);
                    subtitle.setWordTint("SEL", -1, true, 0x000000);
                    subtitle.setWordTint("START", -1, true, 0x000000);
                }
            },
            callbackScope: this,
            loop: true,
        });
    }
}
