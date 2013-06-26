$(window).load(function(){

function rand(min, max) {
    return parseInt(Math.random() * (max - min + 1), 10) + min;
}

function getRandomOrange() {
    var h = rand(20, 26); // color hue between 1 and 360
    var s = rand(90, 100); // saturation 30-100%
    var l = rand(55, 75); // lightness 30-70%
    return 'hsl(' + h + ',' + s + '%,' + l + '%)';
}

// Color Me Divs
$('div').each(function(i, el) {
    debugger
    $(el).css('background-color', getRandomOrange()), 
    $(el).css('background-image', 'none'),
    $(el).css('transition', 'all 2s ease-in')
});

// Color me text
	$('*').css('color', '#FEDDB6')


// Color me text
	$('img').css('opacity', '.6')

});