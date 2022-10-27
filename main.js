function preload() {
picture = loadImage ("https://i.postimg.cc/HkNzxNyh/cake.jpg")}

function setup() {
    canvas = createCanvas(640, 480);
    canvas.position(110, 250);
    stroke("blue");
    fill("blue")
    
    rect(60, 10, 520, 30);
    rect(60, 440, 520, 30);
    rect(10, 60, 30, 360);
    rect(600, 60, 30, 360);

    // Draw a circle at location (30, 30) with a diameter of 20.
    stroke("pink");
    fill("pink")
    circle(30, 30, 50);
    circle(30, 450, 50);
    circle(610, 30, 50);
    circle(610, 450, 50);

}

function draw() {
    image(picture, 200, 150, 200, 150);
}

function take_snapshot() {
    save('birthday_cake_with_frame.png');
}