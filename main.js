canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");

avenger_width = 100;
avenger_height = 90;

background_image = "background2.jpg";
avenger_image = "avenger.jpg";
avenger_x = 10;
avenger_Y = 10;

function add() {
    background_imgTag = new Image();
    background_imgTag.onload = uploadBackground;
    background_imgTag.src = background_image;

    avenger_imgTag = new Image();
    avenger_imgTag.onload = uploadavenger;
    avenger_imgTag.src = avenger_image;
}

function uploadBackground() {
    ctx.drawImage(background_imgTag, 0, 0, canvas.width, canvas.height);
}

function uploadavenger() {
    ctx.drawImage(avenger_imgTag, avenger_x, avenger_Y, avenger_width, avenger_height);
}

window.addEventListener("keydown", mykeyDown);

function mykeyDown(e) {
    keypress = e.keyCode;
    if (keypress == '38') {
        up();
    }

    if (keypress == '39') {
        right();
    }

    if (keypress == '40') {
        down();
    }
    if (keypress == '37') {
        left();
    }
}

function up() {
    if (avenger_Y >= 0) {
        avenger_Y = avenger_Y - 10;
        uploadBackground();
        uploadavenger();
    }
}
function down() {
    if (avenger_Y <= 500) {
        avenger_Y = avenger_Y + 10;
        uploadBackground();
        uploadavenger();
    }
}

function left() {
    if (avenger_x >= 0) {
        avenger_x = avenger_x - 10;
        uploadBackground();
        uploadavenger();
    }
}

function right() {
    if (avenger_x <= 700) {
        avenger_x =avenger_x + 10;
        uploadBackground();
        uploadavenger();
    }
}