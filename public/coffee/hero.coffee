class window.Hero
  constructor: (@p5) ->
    @size = 8
    @diameter = 16
    @easing = 0.05
    @init()
    currentTime = new Date()
    hours = currentTime.getHours()
    @this_is_night = false
    if hours < 9 or hours >= 20
      @this_is_night = true
    @deviation_reduction = 0.9

  init:(@x = 0, @y = 0) ->
    if @this_is_night
      @x = 800 - @x
    @targetX = @x
    @targetY = @y
    @coord = new @p5.PVector @x, @y
    @deviation = new @p5.PVector 0, 0

  draw: () ->
    @p5.stroke(@p5.color window.color)
    @p5.noFill()
    @p5.ellipse @x, @y, @diameter, @diameter

  update: () ->
    dx = @targetX - @x
    dy = @targetY - @y
    if @p5.abs(dx) > 1
      @coord.x = dx
    if @p5.abs(dy) > 1
      @coord.y = dy
    if @coord.mag() > 2
      @coord.normalize()
      @x += @coord.x * 3
      @y += @coord.y * 3
    else
      @y += dy * @easing
      @x += dx * @easing
    # colision's physics
    @x += @deviation.x
    @y += @deviation.y
    
    @deviation.x *= @deviation_reduction
    @deviation.y *= @deviation_reduction
    if @deviation.x < 1
      @deviation.x = 0
    if @deviation.y < 1
      @deviation.y = 0

  choc_with: (coord) ->
    choc_direction = new @p5.PVector @x - coord.x, @y - coord.y
    choc_direction.normalize()
    choc_direction.x *= window.deviation_power
    choc_direction.y *= window.deviation_power
    if  @x > coord.x
      @deviation.x += @p5.abs choc_direction.x
      console.log "droite #{@x} #{coord.x}"
    else
      @deviation.x -= @p5.abs choc_direction.x
      console.log "gauche #{@x} #{coord.x}"
    if  @y > coord.y
      @deviation.y += @p5.abs choc_direction.y
      console.log "decent #{@y} #{coord.y}"
    else
      @deviation.y -= @p5.abs choc_direction.y
      console.log "monte #{@y} #{coord.y}"


