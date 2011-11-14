(function() {
  window.Strum = (function() {
    function Strum(p5, opts) {
      this.p5 = p5;
      this.x = opts.x;
      this.y = opts.y;
      this.coord = new this.p5.PVector(this.x, this.y);
      this.img = opts.img;
      this.size = 32;
      this.rotated = opts.rotated;
      this.translated = opts.translated;
      this.center_x = opts.center_x;
      this.center_y = opts.center_y;
      this.centre = new this.p5.PVector(this.center_x, this.center_y);
      this.radius = opts.radius;
      this.current_angle = opts.current_angle;
      this.name = opts.name;
      this.type = opts.type;
      if (opts.rally_point != null) {
        this.rally_point = opts.rally_point;
        this.target = new this.p5.PVector(this.rally_point[0][0], this.rally_point[0][1]);
      }
      this.move = new this.p5.PVector(0, 0);
      this.current_point = 0;
      if (opts.speed != null) {
        this.speed = opts.speed;
      } else {
        this.speed = 1;
      }
      if (opts.angle_speed != null) {
        this.angle_speed = opts.angle_speed;
      } else {
        this.angle_speed = 1;
      }
    }
    Strum.prototype.update = function() {
      this.current_angle += this.angle_speed;
      this.current_angle = this.current_angle % 360;
      if (this.rotated) {
        return true;
      }
    };
    Strum.prototype.draw = function(angle) {
      if (this.rotated) {
        return this.anim_rotated_strum(angle);
      } else {
        if (this.translated) {
          return this.anim_translated_strum(angle);
        } else {
          return this.rotated_strum(angle);
        }
      }
    };
    Strum.prototype.rotated_strum = function(angle) {
      this.p5.pushMatrix();
      this.p5.translate(this.x, this.y);
      this.p5.rotate((this.p5.PI / 180.0) * angle);
      this.p5.image(this.img, -this.img.width / 2, -this.img.height / 2);
      return this.p5.popMatrix();
    };
    Strum.prototype.anim_rotated_strum = function(angle) {
      this.p5.pushMatrix();
      this.p5.translate(this.center_x, this.center_y);
      this.p5.rotate((this.p5.PI / 180.0) * this.current_angle);
      this.p5.translate(this.radius, 0);
      this.p5.rotate((this.p5.PI / 180.0) * angle);
      this.p5.image(this.img, -this.img.width / 2, -this.img.height / 2);
      return this.p5.popMatrix();
    };
    Strum.prototype.anim_translated_strum = function(angle) {
      this.move_to_target();
      if (this.coord.dist(this.target) < 3) {
        this.current_point += 1;
        if (this.current_point >= this.rally_point.length) {
          this.current_point = 0;
        }
        this.target.x = this.rally_point[this.current_point][0];
        this.target.y = this.rally_point[this.current_point][1];
        console.log("current p");
        console.log(this.current_point);
      }
      this.p5.pushMatrix();
      this.p5.translate(this.coord.x, this.coord.y);
      this.p5.rotate((this.p5.PI / 180.0) * angle);
      this.p5.image(this.img, -this.img.width / 2, -this.img.height / 2);
      return this.p5.popMatrix();
    };
    Strum.prototype.move_to_target = function() {
      console.log("speed " + this.name + " " + this.speed);
      this.move.x = this.target.x - this.coord.x;
      this.move.y = this.target.y - this.coord.y;
      this.move.normalize();
      this.coord.x += this.move.x * this.speed;
      this.coord.y += this.move.y * this.speed;
      this.x = this.coord.x;
      return this.y = this.coord.y;
    };
    Strum.prototype.get_coords = function() {
      var x, y;
      if (this.rotated) {
        x = this.center_x + this.p5.cos(this.current_angle * this.p5.PI / 180) * this.radius;
        y = this.center_y + this.p5.sin(this.current_angle * this.p5.PI / 180) * this.radius;
      } else {
        x = this.x;
        y = this.y;
      }
      return [x, y];
    };
    return Strum;
  })();
}).call(this);
