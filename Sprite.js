class Sprite {
    constructor(config) {

        //set up the images//

        this.image = new Image();

        this.image.src = config.src;

        this.image.onload = () => {

            this.isLoaded = true;
        }

        //shadow

        this.shadow = new Image();
        this.useShadow = true; // config.useShadow || false
        if (this.useShadow) {

            this.shadow.src = "imagens\shadoooow.png"
        }
        this.shadow.onload = () => {

            this.isShadowLoaded = true;
        }




        //configurando animação e estado inicial//

        this.animations = config.animations || {
            idleDown: [
                [0, 0]
            ]
        }
        this.currentAnimation = config.currentAnimation || "idleDown";

        this.currentAnimationFrame = 0;


        //reference the game object

        this.gameObject = config.gameObject;

    }

    draw(ctx) {

        const x = this.gameObject.x * 16 - 8;

        const Y = this.gameObject.y * 16 - 18;

        this.isShadowLoaded && ctx.drawImage(this.shadow, x, Y)


        this.isLoaded && ctx.drawImage(this.image,

            0, 0,
            32, 32,
            x, Y,
            32, 32

        )

    }

}