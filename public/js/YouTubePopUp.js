! function(o) {
    o.fn.YouTubePopUp = function(e) {
        var u = o.extend({ autoplay: 1 }, e);
        o(this).on("click", function(e) {
            var a = o(this).attr("href");
            if (a.match(/(youtube.com)/)) var p = "v=",
                t = 1;
            if (a.match(/(youtu.be)/) || a.match(/(vimeo.com\/)+[0-9]/)) p = "/", t = 3;
            if (a.match(/(vimeo.com\/)+[a-zA-Z]/)) p = "/", t = 5;
            var i = a.split(p)[t].replace(/(&)+(.*)/, "");
            if (a.match(/(youtu.be)/) || a.match(/(youtube.com)/)) var c = "https://www.youtube.com/embed/" + i + "?autoplay=" + u.autoplay;
            if (a.match(/(vimeo.com\/)+[0-9]/) || a.match(/(vimeo.com\/)+[a-zA-Z]/)) c = "https://player.vimeo.com/video/" + i + "?autoplay=" + u.autoplay;
            o("body").append('<div class="YouTubePopUp-Wrap YouTubePopUp-animation"><div class="YouTubePopUp-Content"><span class="YouTubePopUp-Close"></span><iframe src="' + c + '" allowfullscreen></iframe></div></div>'), o(".YouTubePopUp-Wrap").hasClass("YouTubePopUp-animation") && setTimeout(function() { o(".YouTubePopUp-Wrap").removeClass("YouTubePopUp-animation") }, 600), o(".YouTubePopUp-Wrap, .YouTubePopUp-Close").click(function() { o(".YouTubePopUp-Wrap").addClass("YouTubePopUp-Hide").delay(515).queue(function() { o(this).remove() }) }), e.preventDefault()
        }), o(document).keyup(function(e) { 27 == e.keyCode && o(".YouTubePopUp-Wrap, .YouTubePopUp-Close").click() })
    }
}(jQuery);