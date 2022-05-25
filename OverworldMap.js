class OverworldMap {
    constructor(config) {
        this.gameObjects = config.gameObjects;


        this.lowerImage = new Image();
        this.lowerImage.Src = config.lowerSrc;

        this.upperImage = new Image();
        this.upperImage.Src = config.upperSrc;
    }

    drawLowerImage(ctx) {
        ctx.drawImage(this.lowerImage, 0, 0)
    }

    drawUpperImage(ctx) {
        ctx.drawImage(this.upperImage, 0, 0)
    }

}

window.OverworldMaps = {
    midhome: {
        lowerSrc: "/rpg cpw2/imagens/midhome.png",
        upperSrc: "referencias\03-pizza-legends-overworld-maps\images\maps\DemoUpper.png",

        gameObjects: {
            hero: new GameObject({
                x: 10,
                y: 10,
            }),
            npcA: new GameObject({
                x: 7,
                y: 10,
                src: "imagens\heroi.png"

            }),
            npcA: new GameObject({
                x: 7,
                y: 10,
                src: "imagens\mãe.png"

            })

        }
    },

}

