var randomNumber = function(){
	return Math.random()
}

var randomNumberRange = function(min, max){
	return Math.floor(Math.random() * max) + min
}

function shuffle(array) {
  var m = array.length, t, i
  while (m) {
    i = Math.floor(Math.random() * m--)
    t = array[m]
    array[m] = array[i]
    array[i] = t
  }
  return array
}

function showImage(element) {
  document.getElementById("imageModal").src = element.src;
  document.getElementById("imageModalWindow").style.display = "block";
  var captionText = document.getElementById("caption");
  captionText.innerHTML = element.alt;
}

function setActiveMenuItem(q) {
    $(q).addClass('underlined')
	$(q).click(function(event){
		event.preventDefault()
	})
}

var currentTheme = ''

function setTheme(theme) {
    $('body').removeClass(currentTheme)
    $('body').addClass(theme)
    currentTheme = theme
}

$(function() {
	$( "#change-theme" ).click(function() {
        if(currentTheme == "dark-theme")
            setTheme('light-theme')
        else
            setTheme("dark-theme")
    })
    
    $(".toggle-trigger").click(function() {
		var toggle = $(this).closest(".toggle")
		toggle.children('.toggle-component').each(function(){
			$(this).toggleClass("hidden")
		})
	})

    // parallax
	/*
    $(".parallax").each(function( index ) {
        //console.log( index + ": " + $( this ).text() );
        var img = $( this ).attr("img")
        var imgh = $( this ).attr("img-h")
        var height = imgh == null ? 100 : imgh

        $( this ).css({
        		'background-image': 'url("' + img + '")',
        		'background-attachment': 'fixed',
        		'background-position': 'center',
        		'background-repeat': 'no-repeat',
        		'background-size': 'cover',
        		'height': height+'px'
        	})
    })
	*/
    
	// send footer to bottom
	/*
    var footerH = $('footer').height()
    var headerH = $('nav'   ).height()
    var h = footerH + headerH + 8

    $("#main-content").css({
        'min-height' : 'calc(100vh - ' + h + 'px)'
    })
	*/

	/*
	var setNavBG = function(){
        landingHeight = $("#particles-js").height() - $('nav').height()
        if ($(this).scrollTop() < landingHeight)
            $('nav').addClass('transparent-bg')

        if ($(this).scrollTop() > landingHeight)
            $('nav').removeClass('transparent-bg')
    }

    $(function() {
        $(window).scroll(function () { setNavBG() })
        setNavBG()
    })
    */
})
