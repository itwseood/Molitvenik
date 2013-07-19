var app = function () {

window.addEventListener('load', function () {
    new FastClick(document.body);
}, false);

// The dynamically built HTML pages. In a real-life app, In a real-life app, use Handlerbar.js, Mustache.js or another template engine

function homePage () {
	var tpl = $('#menuHome').html();
	var html = Mustache.to_html(tpl);
	$('#container').html(html);
}

function utrinniMolitvi () {
	var tpl = $('#utrinniMolitvi').html();
	var html = Mustache.to_html(tpl);
	$('#container').html(html);
}

function vecherniMolitvi () {
	var tpl = $('#vecherniMolitvi').html();
	var html = Mustache.to_html(tpl);
	$('#container').html(html);
}

function GospodniaMolitva () {
	var tpl = $('#GospodniaMolitva').html();
	var html = Mustache.to_html(tpl);
	$('#container').html(html);
}

function svetiiMolitvi () {
	var tpl = $('#svetiiMolitvi').html();
	var html = Mustache.to_html(tpl);
	$('#container').html(html);
}

function razlichniMolitvi () {
	var tpl = $('#razlichniMolitvi').html();
	var html = Mustache.to_html(tpl);
	$('#container').html(html);
}

function IisusovaMolitva () {
	var tpl = $('#IisusovaMolitva').html();
	var html = Mustache.to_html(tpl);
	$('#container').html(html);
}

function prichastniMolitvi () {
	var tpl = $('#prichastniMolitvi').html();
	var html = Mustache.to_html(tpl);
	$('#container').html(html);
}
var slider = new PageSlider($("#container"));
$(window).on('hashchange', route);

// Basic page routing
function route(event) {
    var page,
        hash = window.location.hash;

    if (hash === "#utrinniMolitvi") {
    utrinniMolitvi();	

    } else if (hash === "#vecherniMolitvi") {
    vecherniMolitvi();
    
    } else if (hash === "#GospodniaMolitva") {
    GospodniaMolitva();
	
    } else if (hash === "#svetiiMolitvi") {
    svetiiMolitvi();	    
    
    } else if (hash === "#razlichniMolitvi") {
    razlichniMolitvi();	    

	} else if (hash === "#IisusovaMolitva") {
    IisusovaMolitva();

	} else if (hash === "#prichastniMolitvi") {
    prichastniMolitvi();

	}

	else {
	
	homePage();

    }
	slider.slidePage($(page));
}

route();

}

