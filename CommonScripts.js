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
$('.about_us>a').on('click', function (e) {
    e.preventDefault();
});

//add this of adding the team and modals to a custom page with .load
if ($('.profile-button').length >= 1) {
    $('.profile-button').on('click touchend', function (element) {
        var $this = $(this).closest('[data-agent-url]'),
            URL = $this.attr('data-agent-url'),
            agentEcard;

        var combinedURL = function () {
            var isUAT = location.pathname.indexOf('/uat/') >= 1;
            var isPreview = location.pathname.indexOf('preview') >= 1;

            if (isPreview) {
                return '//' + location.hostname + '/preview/' + URL;
            } else if (isUAT) {
                return '//' + location.hostname + '/uat/' + URL;
            } else {
                return '//' + location.hostname + '/' + URL;
            }
        }

        function populateModal() {
            $('.modal-body').html(agentEcard);
            $('.view-full-page').attr('href', combinedURL())
            $('#agentModal').modal('show');
        };

        if (!($this.data().hasOwnProperty('bio'))) {
            $.ajax({
                    url: combinedURL(),
                    method: 'GET',
                    dataType: 'html'
                })
                .done(function (data) {
                    agentEcard = $(data).find('#hcard').html();
                    populateModal();
                });
        } else {
            agentEcard = $this.data('bio');
            populateModal();
        }
    });
}