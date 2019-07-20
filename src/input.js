import Paddle from "./paddle.js";

export default class InputHandler {

    constructor(paddle) {
        document.addEventListener('keydown', (event) => {
            switch(event.keyCode) {
                case 37:
                    paddle.moveLeft();
                    break;

                case 39:
                    paddle.moveRight();
                    break;
            }
        });

        document.addEventListener('keyup', (event) => {
            switch(event.keyCode) {
                case 37:
                    // prevents paddle from stopping when switching directions
                    if (paddle.speed < 0)
                        paddle.stop();
                    break;

                case 39:
                    // prevents paddle from stopping when switiching directions
                    if (paddle.speed > 0)
                        paddle.stop();
                    break;
            }
        });
    }
}