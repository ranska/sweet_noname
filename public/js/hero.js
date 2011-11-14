(function() {
  window.Hero = (function() {
    function Hero(p5) {
      var currentTime, hours;
      this.p5 = p5;
      this.size = 8;
      this.diameter = 16;
      this.easing = 0.05;
      this.init();
      currentTime = new Date();
      hours = currentTime.getHours();
      this.this_is_night = false;
      if (hours < 9 || hours >= 20) {
        this.this_is_night = true;
      }
      this.deviation_reduction = 0.9;
    }
    Hero.prototype.init = function(x, y) {
      this.x = x != null ? x : 0;
      this.y = y != null ? y : 0;
      if (this.this_is_night) {
        this.x = 800 - this.x;
      }
      this.targetX = this.x;
      this.targetY = this.y;
      this.coord = new this.p5.PVector(this.x, this.y);
      return this.deviation = new this.p5.PVector(0, 0);
    };
    Hero.prototype.draw = function() {
      this.p5.stroke(this.p5.color(window.color));
      this.p5.noFill();
      return this.p5.ellipse(this.x, this.y, this.diameter, this.diameter);
    };
    Hero.prototype.update = function() {
      var dx, dy;
      dx = this.targetX - this.x;
      dy = this.targetY - this.y;
      if (this.p5.abs(dx) > 1) {
        this.coord.x = dx;
      }
      if (this.p5.abs(dy) > 1) {
        this.coord.y = dy;
      }
      if (this.coord.mag() > 2) {
        this.coord.normalize();
        this.x += this.coord.x * 3;
        this.y += this.coord.y * 3;
      } else {
        this.y += dy * this.easing;
        this.x += dx * this.easing;
      }
      this.x += this.deviation.x;
      this.y += this.deviation.y;
      this.deviation.x *= this.deviation_reduction;
      this.deviation.y *= this.deviation_reduction;
      if (this.deviation.x < 1) {
        this.deviation.x = 0;
      }
      if (this.deviation.y < 1) {
        return this.deviation.y = 0;
      }
    };
    Hero.prototype.choc_with = function(coord) {
      var choc_direction;
      choc_direction = new this.p5.PVector(this.x - coord.x, this.y - coord.y);
      choc_direction.normalize();
      choc_direction.x *= window.deviation_power;
      choc_direction.y *= window.deviation_power;
      if (this.x > coord.x) {
        this.deviation.x += this.p5.abs(choc_direction.x);
        console.log("droite " + this.x + " " + coord.x);
      } else {
        this.deviation.x -= this.p5.abs(choc_direction.x);
        console.log("gauche " + this.x + " " + coord.x);
      }
      if (this.y > coord.y) {
        this.deviation.y += this.p5.abs(choc_direction.y);
        return console.log("decent " + this.y + " " + coord.y);
      } else {
        this.deviation.y -= this.p5.abs(choc_direction.y);
        return console.log("monte " + this.y + " " + coord.y);
      }
    };
    return Hero;
  })();
}).call(this);
