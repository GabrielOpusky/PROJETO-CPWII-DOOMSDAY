class Overworld {

    constructor(config) {
        this.element = config.element;
        this.canvas = this.element.querySelector(".game-canvas");
        this.ctx = this.canvas.getContext("2d");
        this.map = null;
    }

    startGameLoop() {
        const step = () => {

            //pega e desenha o layer do piso inferior 
            this.map.drawLowerImage(this.ctx);

            //desenha os objetos do jogo

            Object.values(this.map.gameObjects).forEach(object => {
                object.sprite.draw(this.ctx);
            })

            //pega e desenha o layer do piso superior
            this.map.drawUpperImage(this.ctx);


            requestAnimationFrame(() => {
                step();
            })

        }
        step();
    }
    init() {


        this.map = new OverworldMap(window.OverworldMaps.midhome);
        this.startGameLoop();



    }
}