
var currentScrollTop = 0;
window.addEventListener('scroll', function() {
    var scrollY = window.scrollY;
    var button = document.getElementsByClassName('back_to_top')[0];

    if (scrollY < currentScrollTop && scrollY > (window.innerHeight*.85)) {
        button.classList.add('fixed');
    } else {
        button.classList.remove('fixed');
    }

    var allDocumentHeight = document.body.scrollHeight;
    var linksScroll = document.getElementsByClassName('links_bar')[0];
    var offsetFromBottom = document.getElementsByClassName('contacts')[0];
    if (scrollY > (window.innerHeight*.35) && ((scrollY + window.innerHeight) < (allDocumentHeight - offsetFromBottom.offsetHeight)))  {
        linksScroll.classList.add('removed'); 
    } else {
        linksScroll.classList.remove('removed'); 
    }

    currentScrollTop = scrollY;

});


window.onload = function() {
    var scrolled;

    function scrollToTop() {
        if (scrolled > 350) {
            window.scrollTo(0, scrolled);
            scrolled = scrolled - 350;
            window.requestAnimationFrame(scrollToTop);
        } else {
            window.scrollTo(0,0);
        }
    } 

    function scrollTo(to) {
        if (scrolled < to) {
            scrolled += 350;
            window.scrollTo(0, scrolled);
            window.requestAnimationFrame(function(){
                scrollTo(to)
            });
        } else {
            window.scrollTo(0, to);
        }
    }
    document.getElementsByClassName('back_to_top')[0].onclick = function (e) {
        e.preventDefault();
        scrolled = window.pageYOffset;
        scrollToTop();
    }

    document.getElementsByClassName('nav')[0].addEventListener('click', function (e) {
        e.preventDefault();
        if (e.target.dataset && e.target.dataset.path) {
            var target = document.getElementById(e.target.dataset.path);
            scrolled = 0;
            scrollTo(target.offsetTop);
        }
    });  
};




