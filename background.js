import { Sprite, Texture} from "pixi.js"



export function createBackground(app, starAmount) {
    const starTexture = Texture.from('./assets/star.png');
    
    for (let i = 0; i < starAmount; i++) {
        const star = new Sprite(starTexture)
        star.x = 0.5;
        star.y = 0.7;
        randomizeStar(star);
        app.stage.addChild(star);
        console.log("tes")
    }
}



function randomizeStar(star) {
    star.z = Math.random() * 5000;

    const deg = Math.random() * Math.PI * 10;
    const distance = Math.random() * 50;
    star.x = Math.cos(deg) * distance;
    star.y = Math.sin(deg) * distance;
}