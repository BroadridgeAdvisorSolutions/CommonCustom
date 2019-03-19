//Wrap Logo with Link to Homepage
$('.mpl').wrap('<a href="./"></a>');

//Load Profile Info Into Another Page -- Insert at end of page not custom code
$(document).one('ready', function () {
    $.get('exampleName.e543189.htm', {}, function (data) {
        var $response = $('<div />').html($(data).find('#content').html());
        var $img = $response.find('#hcard img.photo').removeClass('right');
        var $name = $response.find('#hcard h1');
        var $title = $response.find('#hcard .title');
        $('#a .img').append($img);
        $('#a .name').append($name);
        $('#a .title').append($title);
    }, 'html');

    function getrest() {
        $.get('exampleName.e543189.htm', {}, function (data) {
            var $response = $('<div />').html($(data).find('#content').html());
            var $img = $response.find('#hcard img.photo').removeClass('right');
            var $name = $response.find('#hcard h1');
            var $title = $response.find('#hcard .title');
            $('#b .img').append($img);
            $('#b .name').append($name);
            $('#b .title').append($title);
        }, 'html');
    }
    setTimeout(getrest, 700);
});