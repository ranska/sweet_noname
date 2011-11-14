(function() {
  window.Console = (function() {
    function Console(p5) {
      this.p5 = p5;
      this.lines = [];
      this.lines.push(new ConsoleLine(this.p5, 15, 430, 'Console Sweet_Name'));
      this.lines.push(new ConsoleLine(this.p5, 15, 490, 'Sound_system on'));
      this.lines.push(new ConsoleLine(this.p5, 15, 530, 'Hero_detected'));
      this.lines.push(new ConsoleLine(this.p5, 15, 560, 'lost in my dark world...', 'normal'));
      this.boxed = false;
    }
    Console.prototype.update = function() {
      var line, _i, _len, _ref;
      _ref = this.lines;
      for (_i = 0, _len = _ref.length; _i < _len; _i++) {
        line = _ref[_i];
        line.update();
      }
      if (this.lines.length > 8) {
        return this.reduce_lines();
      }
    };
    Console.prototype.reduce_lines = function() {
      var line, _i, _len, _ref, _results;
      this.lines.shift();
      _ref = this.lines;
      _results = [];
      for (_i = 0, _len = _ref.length; _i < _len; _i++) {
        line = _ref[_i];
        _results.push(line.y -= 20);
      }
      return _results;
    };
    Console.prototype.draw = function() {
      var line, _i, _len, _ref, _results;
      this.p5.noStroke();
      this.p5.fill(0, 150);
      this.p5.rect(0, 400, 800, 200);
      _ref = this.lines;
      _results = [];
      for (_i = 0, _len = _ref.length; _i < _len; _i++) {
        line = _ref[_i];
        _results.push(line.draw());
      }
      return _results;
    };
    Console.prototype.add_new_boxed_line = function(text, style) {
      if (style == null) {
        style = 'italic';
      }
      this.boxed = true;
      return this.add_line(text, style);
    };
    Console.prototype.add_new_line = function(text, style) {
      if (style == null) {
        style = 'italic';
      }
      if (!this.boxed) {
        return this.add_line(text, style);
      }
    };
    Console.prototype.add_line = function(text, style) {
      var last, new_y;
      if (style == null) {
        style = 'italic';
      }
      this.update();
      if (this.lines.length !== 0) {
        last = this.lines.length - 1;
        new_y = this.lines[last].y + 20;
      } else {
        new_y = 430;
      }
      return this.lines.push(new ConsoleLine(this.p5, 15, new_y, text));
    };
    Console.prototype.reboot = function() {
      return this.init();
    };
    Console.prototype.clear = function() {
      return this.lines = [];
    };
    return Console;
  })();
}).call(this);
