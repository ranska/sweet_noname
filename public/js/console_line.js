(function() {
  window.ConsoleLine = (function() {
    function ConsoleLine(p5, x, y, text) {
      this.p5 = p5;
      this.x = x;
      this.y = y;
      this.text = text;
      this.init();
    }
    ConsoleLine.prototype.init = function() {};
    ConsoleLine.prototype.draw = function() {
      this.p5.noStroke();
      this.p5.fill(window.color);
      return this.p5.text(this.text, this.x, this.y);
    };
    ConsoleLine.prototype.update = function() {};
    ConsoleLine.prototype.reboot = function() {
      return this.init();
    };
    return ConsoleLine;
  })();
}).call(this);
