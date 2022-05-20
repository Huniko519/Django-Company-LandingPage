$(document).ready(function() {
    $(window).scroll(function() {
        var scroll = $(window).scrollTop();
        if (scroll >= 1) {
            $(".header").addClass("light_header");
        } else {
            $(".header").removeClass("light_header");
        }
    });
});

// Cart
$(document).ready(function() {
  $("#cart").on("click", function() {
    $(".shopping-cart").toggle("fast");
  });
});

// Search Overley
$('a[href="#search"]').on('click', function(event) {
    $('#search').addClass('open');
    $('#search > form > input[type="search"]').focus();
});
$('#search, #search button.close').on('click keyup', function(event) {
    if (event.target == this || event.target.className == 'close' || event.keyCode == 27) {
        $(this).removeClass('open');
    }
});


// Accordion
$(document).ready(function() {
    // Add minus icon for collapse element which is open by default
    $(".collapse.show").each(function() {
        $(this).prev(".card-header").find(".mdi").addClass("active").removeClass("inactive");
    });

    // Toggle plus minus icon on show hide of collapse element
    $(".collapse").on('show.bs.collapse', function() {
        $(this).prev(".card-header").find(".mdi").removeClass("inactive").addClass("active");
        $(this).parent(".card").removeClass("inactive").addClass("active");
    }).on('hide.bs.collapse', function() {
        $(this).prev(".card-header").find(".mdi").removeClass("active").addClass("inactive");
        $(this).parent(".card").removeClass("active").addClass("inactive");
    });
});

// Progress bar
$(document).ready(function() {
    setTimeout(function() {
        $('.progress-bar').each(function() {
            var me = $(this);
            var perc = me.attr("aria-valuenow");
            var current_perc = 0;
            var progress = setInterval(function() {
                if (current_perc >= perc) {
                    clearInterval(progress);
                } else {
                    current_perc += 1;
                    me.css('width', (current_perc) + '%');
                }
                me.text((current_perc) + '%');
            }, 1);
        });
    }, 600);
});


// Testimonial 
$('.testimonial_slider').owlCarousel({
    autoplay:true,
    // autoplayTimeout:1000,
    autoplayHoverPause:false,
    loop:false,
    margin:30,
    dots: false,
    nav: true,
    navText: ["<img src='images/prev-arrow-01.png'>","<img src='images/next-arrow-01.png'>"],
    responsiveClass:true,
    responsive:{
        0:{
            items:1
        },
        992:{
            items:2
        }
    }
})