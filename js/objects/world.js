import {Player} from "./player";
import {Info} from "./info"


export class World {
    constructor() {
        // Создадим игрока
        this.player = new Player(10, 10)
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
        return [this.player, new Info(this.player.x, this.player.y)]
    }

}

