//Wrap Logo with Link to Homepage
$('.mpl').wrap('<a href="./"></a>');

//Load Profile Info Into Another Page -- Insert at end of page not custom code
$.get('exampleName.e543189.htm', {}, function (data) {
    var $response = $('<div />').html($(data).find('#content').html());
    var $img = $response.find('#hcard img.photo').removeClass('right');
    var $name = $response.find('#hcard h1');
    var $title = $response.find('#hcard .title');
    $('#teamMemberA .img').append($img);
    $('#teamMemberA .name').append($name);
    $('#teamMemberA .title').append($title);
}, 'html');

function getrest() {
    $.get('exampleName.e543189.htm', {}, function (data) {
        var $response = $('<div />').html($(data).find('#content').html());
        var $img = $response.find('#hcard img.photo').removeClass('right');
        var $name = $response.find('#hcard h1');
        var $title = $response.find('#hcard .title');
        $('#teamMemberB .img').append($img);
        $('#teamMemberB .name').append($name);
        $('#teamMemberB .title').append($title);
    }, 'html');
}
setTimeout(getrest, 700);

// Custom Pages That Need Content Container Wrapped
$('#masthead').each(function () {
    $(this).nextUntil('.footer-border').wrapAll('<section id="content"><div class="content-wrap"><div class="container">');
})

// Disable Parent Link on DropDown
$('.about_us>a').on('click', function(e){
    e.preventDefault();
 } );