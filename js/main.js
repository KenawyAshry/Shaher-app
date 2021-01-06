const popUp = document.querySelector('.video-popup'),
    closeBtn = document.querySelector('.video-popup__close') ,
    openBtn = document.querySelector('.video-play-btn'),
    navList = document.querySelectorAll('.nav-link');



//////////////////////////////// PopUP Video
openBtn.addEventListener('click', () =>{

    popUp.classList.add('open')
    popUp.nextElementSibling

});
closeBtn.addEventListener('click', () =>{

    popUp.classList.remove('open')

});

//////////////////////////////////// NavBar items
navList.forEach(link => {
    link.addEventListener('click', (e) =>{

        e.target.parentElement.parentElement.querySelectorAll('.active').forEach(item =>{
            item.classList.remove('active');
        });

        e.target.classList.add('active')
    });
});

//  NavBar Shrink
// const navBar = document.querySelector('.navbar')
// window.addEventListener('scroll', () =>{
//     if (window.scrollTo > 90) {
//         navBar.classList.add('navbar-shrink');
//     }else{
//         navBar.classList.remove('navbar-shrink');
//     }
// });
$(document).ready(function () {
    $(window).on('scroll', function () {
        if ($(this).scrollTop() > 90) {
            $(".navbar").addClass("navbar-shrink");
        }else {
            $(".navbar").removeClass("navbar-shrink");
        }
        
    });







///////////////////////////// Carousel
///////////////////////////// 

    $('.features__carousel').owlCarousel({
        loop:true,
        margin:0,
        autoplay:true,
        responsiveClass:true,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:2
            },
            1000:{
                items:3
            }
        }
    });




// --------------------------------------- Page Scrollling - ScrollIt---------------------------------->

        $.scrollIt({
            topOffset: -50
        });
    





///////////////// loader--------------------
$(window).on("load", function () {
    $(".loader").fadeOut("slow")
});
///////////////////////////// Carousel
///////////////////////////// 

$('.screenshots__carousel').owlCarousel({
    loop:true,
    margin:0,
    autoplay:true,
    responsiveClass:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:2
        },
        1000:{
            items:4
        }
    }
});




///////////////////////////// Carousel
///////////////////////////// 

$('.testimonials__carousel').owlCarousel({
    loop:true,
    margin:0,
    autoplay:true,
    responsiveClass:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:2
        },
        1000:{
            items:3
        }
    }
});
///////////////////////////// Carousel
///////////////////////////// 

$('.team__carousel').owlCarousel({
    loop:true,
    margin:0,
    autoplay:false,
    responsiveClass:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:2
        },
        1000:{
            items:3
        }
    }
});







////////////
//// End Function
});



//////////////////////////////////////////
/////////////////////// Queries
const queriesHead = document.querySelectorAll('.queries__box--head'),
    queriesBody = document.querySelectorAll('.queries__box--body'),
    icon = document.querySelectorAll(".queries__box--head i")



queriesHead.forEach(item =>{
    item.addEventListener('click', function (e) {
        item.parentElement.parentElement.parentElement.querySelectorAll('.active').forEach(ac =>{
            ac.classList.remove('active');
        })
        item.classList.add('active');
        
        item.nextElementSibling.classList.toggle('active');
        // slideToggle(queriesBody)
        icon.forEach(ic =>{
            ic.classList.remove('fa-minus')
            ic.classList.add('fa-plus')
        });
        if (item.nextElementSibling.classList.contains('active')) {
            item.childNodes[3].classList.remove('fa-plus');
            item.childNodes[3].classList.add('fa-minus');
        }else{
            item.childNodes[3].classList.remove('fa-minus');
            item.childNodes[3].classList.add('fa-plus');
        }
    })
})





//////////////////////////////////////////////////// toggle Dark Theme
const togglerDiv = document.querySelector('.tggler-theme'),
    iconTheme = document.querySelector('.tggler-theme i');


    function toggleTheme() {
        if (localStorage.getItem("shaher-theme") !== null) {
            if (localStorage.getItem("shaher-theme") === "dark") {
                document.body.classList.add("dark")
            }else {
                document.body.classList.remove("dark")
            }
        }
        updateIcon();
    }
    toggleTheme();
    togglerDiv.addEventListener('click', () =>{
        document.body.classList.toggle("dark");
        if (document.body.classList.contains("dark")) {
            localStorage.setItem("shaher-theme", "dark");
        }else{
            localStorage.setItem("shaher-theme", "light")
        }
        updateIcon();
    });
    function updateIcon() {
        if (document.body.classList.contains("dark")) {
            iconTheme.classList.remove('fa-moon')
            iconTheme.classList.add('fa-sun')
        }else{
            iconTheme.classList.remove('fa-sun')
            iconTheme.classList.add('fa-moon')
        }
    }