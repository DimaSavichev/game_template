import * as PIXI from "pixi.js";
export class Laser {
    constructor(cur_x, cur_y, dist_x, dist_y) {
        this.cur_x = cur_x;
        this.cur_y = cur_y;
        this.r = 5;
        this.dist_x = dist_x;
        this.dist_y = dist_y;
        this.k = (this.dist_y - this.cur_y) / (this.dist_x - this.cur_x);
        this.b = this.cur_y - this.k*this.cur_x;
    };


    draw() {
        this.cur_x > this.dist_x ? this.cur_x -= 1 : this.cur_x += 1;
       // this.cur_y > this.dist_y ? this.cur_y -= k**2 : this.cur_y += k**2;
        this.cur_y = this.k* this.cur_x+this.b;// ToDo: Вызвать этот метод
        // http://pixijs.download/dev/docs/PIXI.Graphics.html
        const graphics = new PIXI.Graphics();
        graphics.beginFill(0xFFFFFF);
        graphics.drawCircle(this.cur_x, this.cur_y, this.r);
        graphics.endFill();
        return graphics
    }
} 