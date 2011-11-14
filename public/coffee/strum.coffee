class window.Strum
  constructor: (@p5, opts) ->
    @x = opts.x
    @y = opts.y
    @coord = new @p5.PVector @x, @y
    @img = opts.img
    @size = 32
    @rotated = opts.rotated
    @translated= opts.translated
    @center_x = opts.center_x
    @center_y = opts.center_y
    @centre = new @p5.PVector @center_x, @center_y
    @radius = opts.radius
    @current_angle = opts.current_angle
    @name = opts.name
    @type = opts.type
    if opts.rally_point?
      @rally_point = opts.rally_point
      @target = new @p5.PVector @rally_point[0][0], @rally_point[0][1]
    @move = new @p5.PVector 0, 0
    @current_point = 0
    #
    if opts.speed?
      @speed = opts.speed
    else
      @speed = 1
    if opts.angle_speed?
      @angle_speed = opts.angle_speed
    else
      @angle_speed = 1

  update: ->
    @current_angle += @angle_speed
    @current_angle = @current_angle % 360
    if @rotated
      true

  draw: (angle) ->
    if @rotated
      @anim_rotated_strum angle
    else 
      if @translated
        @anim_translated_strum angle
      else
        @rotated_strum angle


  rotated_strum: (angle) ->
    @p5.pushMatrix()
    @p5.translate @x, @y
    @p5.rotate (@p5.PI/180.0) * angle
    @p5.image @img, -@img.width/2, -@img.height/2
    @p5.popMatrix()

  anim_rotated_strum: (angle)->
    @p5.pushMatrix()
    @p5.translate @center_x, @center_y
    @p5.rotate (@p5.PI/180.0) * @current_angle
    @p5.translate @radius, 0
    @p5.rotate (@p5.PI/180.0) * angle
    @p5.image @img, -@img.width/2, -@img.height/2
    @p5.popMatrix()

  anim_translated_strum: (angle) ->
    @move_to_target()
    if @coord.dist(@target) < 3
      @current_point += 1
      @current_point = 0 if @current_point >= @rally_point.length
      @target.x  = @rally_point[@current_point][0]
      @target.y  = @rally_point[@current_point][1]
    @p5.pushMatrix()
    @p5.translate @coord.x, @coord.y
    @p5.rotate (@p5.PI/180.0) * angle
    @p5.image @img, -@img.width/2, -@img.height/2
    @p5.popMatrix()


  move_to_target: ->
    # distance between these two dots on vector
    @move.x = @target.x - @coord.x
    @move.y = @target.y - @coord.y
    # normalize
    @move.normalize() 
    # then move vector's coord
    @coord.x += @move.x * @speed
    @coord.y += @move.y * @speed
    @x = @coord.x
    @y = @coord.y


  get_coords: ->
    if @rotated
      x = @center_x + @p5.cos(@current_angle * @p5.PI/180 ) * @radius
      y = @center_y + @p5.sin(@current_angle * @p5.PI/180 ) * @radius
    else
      x = @x
      y = @y
    [x,y]

