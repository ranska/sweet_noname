class window.Initializer

  constructor: ->
    userAgent = navigator.userAgent.toLowerCase()
    jQuery.browser = 
      version: (userAgent.match(/.+(?:rv|it|ra|ie|me)[\/: ]([\d.]+)/) or [])[1]
      chrome: /chrome/.test(userAgent)
      safari: /webkit/.test(userAgent) and not /chrome/.test(userAgent)
      opera: /opera/.test(userAgent)
      msie: /msie/.test(userAgent) and not /opera/.test(userAgent)
      mozilla: /mozilla/.test(userAgent) and not /(compatible|webkit)/.test(userAgent)
    #
    browser = "firefox" 
    browser = "safari" if $.browser.safari
    browser = "chrome" if $.browser.chrome
    browser = "opera" if $.browser.opera
    browser = "ie" if $.browser.msie and $.browser.version <= 6
    browser = "ie" if $.browser.msie and $.browser.version > 6
    #
    window.shape = new Shape browser
    window.my_browser = browser
    soundManager.url = '/js/swf/'
    soundManager.debugFlash = false
    soundManager.debugMode = false
    soundManager.defaultOptions = {loops: 10000}

    @ip_color("00.000.00.002")
    @deviation_power("fr")

  deviation_power: (lang_info) ->
    sum = 0
    for i in [0...lang_info.length]
      sum += lang_info.charCodeAt(i)
    choice = sum % 4

    velocities = [10, 12, 14, 16]
    window.deviation_power = velocities[choice]
    # NOTE uncomment this line to force default's choice
    # window.deviation_power = velocities[0]

  ip_color: (ip) ->
    #
    tab = ip.split "."
    sum = 0
    sum += parseInt i for i in tab
    choice = sum % 145
    colors = [0xFFFFbF00, 0xFFFFa81e, 0xFFFF8F35, 0xFFFF7145, 0xFFFF4571, 0xFFFF358F, 0xFFFF1ea8, 0xFFFF00bF, 0xFFFFc720, 0xFFFFb03d
              0xFFFF9653, 0xFFFF7560, 0xFFFF6075, 0xFFFF5396, 0xFFFF3db0, 0xFFFF2Fbc, 0xFFFF20c7, 0xFFFFe51e, 0xFFFFcF40, 0xFFFFb85c
              0xFFFF9c70, 0xFFFF7878, 0xFFFF709c, 0xFFFF5cb8, 0xFFFF40cF, 0xFFFF1ee5, 0xFFFFed3d, 0xFFFFd760, 0xFFFFbF7c, 0xFFFFa28c
              0xFFFF8ca2, 0xFFFF7cbF, 0xFFFF60d7, 0xFFFF3ded, 0xFFF3FF2b, 0xFFFFF55c, 0xFFFFdF80, 0xFFFFc79a, 0xFFFFa5a5, 0xFFFF9ac7
              0xFFFF80dF, 0xFFFF5cf5, 0xFFF335FF, 0xFFecFF53, 0xFFFFFd7c, 0xFFFFe79F, 0xFFFFceb8, 0xFFFFb8ce, 0xFFFF9Fe7, 0xFFFF7cFd
              0xFFec53FF, 0xFFceFF45, 0xFFe4FF70, 0xFFF9FF9a, 0xFFFFeFbF, 0xFFFFd2d2, 0xFFFFbFeF, 0xFFF99aFF, 0xFFe470FF, 0xFFce45FF
              0xFFc5FF60, 0xFFdbFF8c, 0xFFF1FFb8, 0xFFFFF7dF, 0xFFFFdFF7, 0xFFF1b8FF, 0xFFdb8cFF, 0xFFc560FF, 0xFFa5FF4b, 0xFFbbFF78
              0xFFd2FFa5, 0xFFe8FFd2, 0xFFFFFFFF, 0xFFe8d2FF, 0xFFd2a5FF, 0xFFbb78FF, 0xFFa54bFF, 0xFF9aFF60, 0xFFb0FF8c, 0xFFc5FFb8
              0xFFdFFFe7, 0xFFdFe7FF, 0xFFc5b8FF, 0xFFb08cFF, 0xFF9a60FF, 0xFF77FF45, 0xFF8cFF70, 0xFFa0FF9a, 0xFFbFFFcF, 0xFFd2FFFF
              0xFFbFcFFF, 0xFFa09aFF, 0xFF8c70FF, 0xFF7745FF, 0xFF67FF53, 0xFF7cFF7e, 0xFF9FFFb7, 0xFFb8FFe9, 0xFFb8e9FF, 0xFF9Fb7FF
              0xFF7c7eFF, 0xFF6753FF, 0xFF41FF35, 0xFF5cFF66, 0xFF80FF9F, 0xFF9aFFd2, 0xFF5aFFFF, 0xFF9ad2FF, 0xFF809FFF, 0xFF5c66FF
              0xFF4135FF, 0xFF3dFF4F, 0xFF60FF87, 0xFF7cFFbb, 0xFF8cFFe9, 0xFF8ce9FF, 0xFF7cbbFF, 0xFF6087FF, 0xFF3d4FFF, 0xFF1eFF37
              0xFF40FF70, 0xFF5cFFa4, 0xFF70FFd3, 0xFF78FFFF, 0xFF70d3FF, 0xFF5ca4FF, 0xFF4070FF, 0xFF1e37FF, 0xFF20FF58, 0xFF3dFF8c
              0xFF53FFbd, 0xFF60FFe9, 0xFF60e9FF, 0xFF53bdFF, 0xFF3d8cFF, 0xFF2058FF, 0xFF00FF40, 0xFF1eFF74, 0xFF35FFa6, 0xFF45FFd4
              0xFF4bFFFF, 0xFF45d4FF, 0xFF35a6FF, 0xFF1e74FF, 0xFF0040FF, 0xFFFF4b4b]
    #
    window.color = colors[choice]
