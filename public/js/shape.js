(function() {
  window.Shape = (function() {
    function Shape(browser) {
      this.browser = browser;
      this.levels = [[[1, 2, 3]]];
      this.level_name = ["m"];
    }
    Shape.prototype.caching_images = function(sketch) {
      var image, images, l, more, s, shapes, url, _i, _j, _len, _len2, _len3, _len4, _ref, _results;
      _ref = this.levels;
      for (l = 0, _len = _ref.length; l < _len; l++) {
        shapes = _ref[l];
        for (s = 0, _len2 = shapes.length; s < _len2; s++) {
          images = shapes[s];
          for (_i = 0, _len3 = images.length; _i < _len3; _i++) {
            image = images[_i];
            sketch.imageCache.add("/images/famillies/" + this.browser + "/" + this.level_name[l] + "/" + image + ".png");
          }
        }
      }
      more = ['common/1', 'common/12', 'exit/1'];
      _results = [];
      for (_j = 0, _len4 = more.length; _j < _len4; _j++) {
        url = more[_j];
        _results.push(sketch.imageCache.add("/images/famillies/" + url + ".png"));
      }
      return _results;
    };
    return Shape;
  })();
}).call(this);
