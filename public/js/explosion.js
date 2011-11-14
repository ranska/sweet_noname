(function() {
  window.Explosion = (function() {
    function Explosion(p5, x, y) {
      this.p5 = p5;
      this.x = x;
      this.y = y;
      this.life = 0;
      this.life2 = 0;
      this.large = 30;
      this.large2 = 20;
      this.init();
      this.current_angle = 0;
      this.triangle_angle = (this.p5.PI / 180.0) * this.current_angle;
    }
    Explosion.prototype.init = function() {
      return this.finished = false;
    };
    Explosion.prototype.draw = function() {
      var alpha, points, tab3, tab4, _i, _j, _len, _len2, _results;
      alpha = 158;
      this.p5.stroke(window.color, alpha);
      tab3 = [[this.large, 0, this.large, this.large, 1, 1], [0, this.large, this.large, -this.large, -1, 1], [-this.large, 0, -this.large, -this.large, -1, -1], [0, -this.large, this.large, -this.large, 1, -1]];
      for (_i = 0, _len = tab3.length; _i < _len; _i++) {
        points = tab3[_i];
        this.p5.pushMatrix();
        this.p5.translate(this.x, this.y);
        this.p5.translate(this.life * points[4], this.life * points[5]);
        this.p5.rotate(this.triangle_angle);
        this.p5.triangle(0, 0, points[0], points[1], points[2], points[3]);
        this.p5.popMatrix();
      }
      tab4 = [[this.large2, 0, this.large2, this.large2, 1, 0], [this.large2, 0, this.large2, this.large2, 0, 1], [-this.large2, 0, -this.large2, -this.large2, -1, 0], [0, -this.large2, this.large2, -this.large2, 0, -1]];
      _results = [];
      for (_j = 0, _len2 = tab4.length; _j < _len2; _j++) {
        points = tab4[_j];
        this.p5.pushMatrix();
        this.p5.translate(this.x, this.y);
        this.p5.translate(this.life2 * points[4], this.life2 * points[5]);
        this.p5.rotate((this.p5.PI / 180.0) * this.current_angle);
        this.p5.triangle(0, 0, points[0], points[1], points[2], points[3]);
        _results.push(this.p5.popMatrix());
      }
      return _results;
    };
    Explosion.prototype.update = function() {
      this.large2 -= 0.5;
      if (this.large2 === 0) {
        this.finished = true;
      }
      this.large -= 1;
      if (this.large === 0) {
        this.finished = true;
      }
      this.current_angle += 6;
      if (this.current_angle >= 360) {
        this.current_angle = 0;
      }
      this.life2 += 1;
      if (this.life2 === 60) {
        this.finished = true;
      }
      this.life += 2;
      if (this.life === 80) {
        this.finished = true;
      }
      return this.triangle_angle = (this.p5.PI / 180.0) * this.current_angle;
    };
    return Explosion;
  })();
}).call(this);
