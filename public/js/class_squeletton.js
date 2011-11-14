(function() {
  window.SceneEngin = (function() {
    function SceneEngin(p5) {
      this.p5 = p5;
      this.init();
    }
    SceneEngin.prototype.init = function() {
      return this.finished = false;
    };
    SceneEngin.prototype.draw = function() {};
    SceneEngin.prototype.update = function() {
      return this.finished = true;
    };
    SceneEngin.prototype.reboot = function() {
      return this.init();
    };
    return SceneEngin;
  })();
}).call(this);
