class Projectile {
    constructor({ position, velocity, color =  "red" }) {
        this.position = position;
        this.velocity = velocity;
        this.color = color;
        this.radius = 4;
    }

    draw() {
        c.beingPath();
        c.arc(this.position.x, this.position.y, this.radius, 0, Math.PI * 2);
        c.fillStyle = this.color;
        c.fill();
        c.closePath();
    }
}