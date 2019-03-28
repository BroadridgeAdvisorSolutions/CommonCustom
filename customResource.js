if ($('body').hasClass('resources')) {
    $('nav ul li:nth-child(4)').addClass('current')
};

$('body').addClass('stretched');
$('.footer .col_two_third .widget').replaceWith($('#footer .footer-widgets-wrap'));
$('#page-title').first().remove();
/* Add '.custom-resource' and '.custom-resource-wrap' classes to [body] and [content wrapper] in Resources */
$(
    'body.market_watch, body.resources, body.tax_library, body.contentpage, body.indCalculator, body.tax_forms, body.learningcentercalculatorsfederalincometax, body.tax_rates, body.tax_publications, body.tax_glossary, body.tax_calendar, body.tax_strategies'
).filter(function () {
    $(this).addClass('custom-resource');
    $(this).find('#Content_container,#program-content, #content').addClass('custom-resource-wrap');
});
if (!($('body.custom-resource #Content_container').length > 0 || $('body.custom-resource #program-content').length >
        0 || $('body.custom-resource #content').length > 0)) {
    $('#wrapper').find("h1:first").nextUntil("#footer").andSelf().wrapAll(
        "<div id='program-content' class='custom-resource-wrap'></div>")
};

// <![CDATA[

var jumpToAnchor = function (event, anchor) {
    var anchor = anchor.split('#')[1];
    event.preventDefault();
    document.getElementById(anchor).scrollIntoView();
}

// ]]>