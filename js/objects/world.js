import {Player} from "./player";
import {Info} from "./info"
import {Laser} from "./laser"

export class World {
    constructor() {
        // Создадим игрока
        this.player = new Player(10, 10);
        this.las = []
    }
    click (b, c) {
        console.log(this.player, b, c);
        this.las.push(new Laser (this.player.x, this.player.y, b, c));
    }

    // В зависисмости от нажатых клавиш изменяем среду
    move = (keys) => {
        // Для каждого ключа в объекте
        Object.keys(keys).map((key) => {
            // Если нажата кнопка
            if (keys[key]) {
                // Взависимости от того какая кнопка
                switch (key) {
                    case "a":
                        this.player.go_left();
                        break;
                    case "d":
                        this.player.go_right();
                        break;
                    case "s":
                        this.player.go_down();
                        break;
                    case "w":
                        this.player.go_up();
                        break;
                }
            }
        });

    };


    get_items() {
        //this.a = this.a.filter(Laser =>
        return [this.player, new Info(this.player.x, this.player.y), ...this.las]
    }

}

