import * as PIXI from "pixi.js";

// https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Classes

export class Player {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.r = 10;
    }

    draw() {
        // http://pixijs.download/dev/docs/PIXI.Graphics.html
        const graphics = new PIXI.Graphics();

        graphics.beginFill(0xFFFFFF);
        graphics.drawCircle(this.x, this.y, this.r);
        graphics.endFill();

        return graphics
    }

    go_left = () => {
        this.x-20>=0? this.x -= 10 : this.x = 10;

    };

    go_right = () => {
        this.x+20<=window.innerWidth? this.x += 10 : this.x = window.innerWidth-10;
    };

    go_up = () => {
        this.y-20>=0? this.y -= 10 : this.y = 10;
    };

    go_down = () => {
        this.y+20<=window.innerHeight? this.y += 10 : this.y = window.innerHeight-10;
    }
}