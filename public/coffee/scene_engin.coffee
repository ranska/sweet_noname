class window.SceneEngin

  constructor: (@p5) ->
    # load pictures
    @init()
    events = [ 
      name: "explain_me"
      from: "start_menu"
      to: "how_to_play"
    ,
      name: 'back_f_how'
      from: 'how_to_play'
      to: 'start_menu'
    ,
      name: 'who_make_this'
      from: 'start_menu'
      to: 'credit'
    ,
      name: 'back_f_who'
      from: 'credit'
      to: 'start_menu'
    ,
      name: 'go_level_1'
      from: 'start_menu'
      to: 'level_1'
    ,
      name: 'loop_1'
      from: 'level_1'
      to: 'level_1'
    ,
      name: 'back_f_1'
      from: 'level_1'
      to: 'start_menu'
    ,
      name: 'go_level_2'
      from: 'level_1'
      to: 'level_2'
    ,
      name: 'loop_2'
      from: 'level_2'
      to: 'level_2'
    ,
      name: 'back_f_2'
      from: 'level_2'
      to: 'start_menu'
    ,
      name: 'go_level_3'
      from: 'level_2'
      to: 'level_3'
    ,
      name: 'loop_3'
      from: 'level_3'
      to: 'level_3'
    ,
      name: 'back_f_3'
      from: 'level_3'
      to: 'start_menu'
    ,
      name: 'go_end'
      from: 'level_3'
      to: 'end'
    ,
      name: 'back_f_end'
      from: 'end'
      to: 'start_menu'
    ]
    @p5.fsm = StateMachine.create {
      initial: 'start_menu'
      events: events 
      callbacks:
        onexplain_me: (event, from, to) =>
          console.log 'onexplain_me'
          @p5.scene_engin.change_level(@how_to_play)
        onback_f_how: (event, from, to) =>
          console.log 'onback_f_how'
          @p5.scene_engin.change_level(@menu_1)
        onwho_make_this: (event, from, to) =>
          console.log 'onwho_make_this'
          @p5.scene_engin.change_level(@credit_screen)
        onback_f_who: (event, from, to) =>
          console.log 'onback_f_who'
          @p5.scene_engin.change_level(@menu_1)
        ongo_level_1: (event, from, to) =>
          console.log 'ongo_level_1'
          @p5.scene_engin.change_level(@level_f)
        onloop_1: (event, from, to) =>
          console.log 'onloop_1'
          @p5.scene_engin.change_level(@level_f)
        onback_f_1: (event, from, to) =>
          console.log 'onback_f_1'
          @p5.scene_engin.change_level(@menu_1)
        ongo_level_2: (event, from, to) =>
          console.log 'ongo_level_2'
          @p5.scene_engin.change_level(@level_m)
        onloop_2: (event, from, to) =>
          console.log 'onloop_2'
          @p5.scene_engin.change_level(@level_m)
        onback_f_2: (event, from, to) =>
          console.log 'onback_f_2'
          @p5.scene_engin.change_level(@menu_1)
        ongo_level_3: (event, from, to) =>
          console.log 'ongo_level_3'
          @p5.scene_engin.change_level(@level_l)
        onloop_3: (event, from, to) =>
          console.log 'onloop_3'
          @p5.scene_engin.change_level(@level_l)
        onback_f_3: (event, from, to) =>
          console.log 'onback_f_3'
          @p5.scene_engin.change_level(@menu_1)
        ongo_end: (event, from, to) =>
          console.log 'ongo_end'
          @p5.scene_engin.change_level(@menu_2)
        onback_f_end: (event, from, to) =>
          console.log 'onback_f_end'
          @p5.scene_engin.change_level(@menu_1)
    }

  init: ->
    @level_f = new LevelF @p5, @p5.hero, @p5.console, @p5.sound_system
    @level_m = new LevelM @p5, @p5.hero, @p5.console, @p5.sound_system
    @level_l = new LevelL @p5, @p5.hero, @p5.console, @p5.sound_system
    @menu_2 = new Menu2 @p5
    @credit_screen = new CreditScreen @p5
    @how_to_play = new HowToPlayScreen @p5
    @menu_1 = new Menu1 @p5
    @current_level = @menu_1

  change_level: (level) ->
    @current_level.quit()
    @current_level = level
    @current_level.reboot()

  draw: ->
    # draw title and spot

  update: ->
    @current_level.update()
    if @current_level.finished
      @current_level.reboot()
      console.log "update scene"
      console.log @current_level
      @current_level.next()
