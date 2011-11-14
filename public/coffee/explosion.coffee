class window.Explosion

  constructor: (@p5, @x, @y) ->
    @life = 0
    @life2 = 0
    @large = 30
    @large2 = 20
    @init()
    @current_angle = 0
    @triangle_angle = (@p5.PI/180.0) * @current_angle

  init: ->
    @finished = false

  draw: ->
    alpha = 158
    @p5.stroke window.color, alpha

    tab3 = [[@large, 0, @large, @large, 1, 1], [0, @large, @large, -@large, -1, 1],
      [-@large, 0, -@large, -@large, -1, -1], [0, -@large, @large, -@large, 1, -1]]
    for points in tab3
      @p5.pushMatrix()
      @p5.translate @x, @y
      @p5.translate @life * points[4], @life * points[5]
      @p5.rotate @triangle_angle
      @p5.triangle 0, 0, points[0], points[1], points[2], points[3]
      @p5.popMatrix()

    #smals triangles
    tab4 = [[@large2, 0, @large2, @large2, 1, 0], [@large2, 0, @large2, @large2, 0, 1],
      [-@large2, 0, -@large2, -@large2, -1, 0], [0, -@large2, @large2, -@large2, 0, -1]]
    for points in tab4  
      @p5.pushMatrix()
      @p5.translate @x, @y
      @p5.translate @life2 * points[4], @life2 * points[5]
      @p5.rotate (@p5.PI/180.0) * @current_angle
      @p5.triangle 0, 0, points[0], points[1], points[2], points[3]
      @p5.popMatrix()

  update: ->
    @large2 -= 0.5
    if @large2  == 0
      @finished = true
    @large -= 1
    if @large  == 0
      @finished = true
    @current_angle += 6
    if @current_angle >= 360
      @current_angle = 0
    @life2 += 1
    if @life2 == 60
      @finished = true
    @life += 2
    if @life == 80
      @finished = true
    @triangle_angle = (@p5.PI/180.0) * @current_angle
