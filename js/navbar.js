function freeze() {
    var top = window.scrollY;

    document.body.style.overflow = 'hidden';

    window.onscroll = function () {
        window.scroll(0, top);
    }
}

function unfreeze() {
    document.body.style.overflow = '';
    window.onscroll = null;
}

$(function () {

    // hamburger nav
    let hbg = document.querySelector('.hamburger');
    let l1 = document.querySelector('.hamburger .line:first-of-type');
    let l2 = document.querySelector('.hamburger .line:nth-of-type(2)');
    let l3 = document.querySelector('.hamburger .line:last-of-type');
    let nav = document.querySelector('nav');
    // let navMobile = document.querySelector('.nav-mobile');
    // let navTrans = document.querySelector('.nav-trans');
    const listNav = document.querySelectorAll('nav ul li a');
    let jumlahClick = 1;
    let waitRespond = 'click';
    let wait = true;



    function closeNavbar() {



        l1.style.top = '7px';
        l1.style.transform = 'rotate(0deg)';
        l2.style.opacity = 1;

        l3.style.top = '24px';
        l3.style.transform = 'rotate(0deg)';
        jumlahClick = 1;







        // hbg.style.border = '1px solid rgba(255,255,255,1)';
        l1.style.backgroundColor = 'rgba(255,255,255,0.9)';
        l2.style.backgroundColor = 'rgba(255,255,255,0.9)';
        l3.style.backgroundColor = 'rgba(255,255,255,0.9)';
        // kh5.style.color = 'white';
        // kh5.style.transition = '2s';
        hbg.style.transition = '0.5s';
        $('.nav-inside-wrapper').css('left', '0px');
        setTimeout(() => {
            // navMobile.style.animation = 'swipeRight 1s ease forwards';
            $('.nav-wrapper').css('left', '100%');
        }, 500);
        hbg.style.transition = '0.5s';
        setTimeout(() => {
            hbg.style.transition = '0s';
            // navMobile.style.display = 'none';
        }, 2000);

    }

    listNav.forEach(function (e) {
        e.addEventListener('click', function (ev) {
            // ev.preventDefault();
            // if (jumlahClick != 1) {

            //     l1.style.top = '7px';
            //     l1.style.transform = 'rotate(0deg)';
            //     l2.style.opacity = 1;

            //     l3.style.top = '24px';
            //     l3.style.transform = 'rotate(0deg)';
            //     jumlahClick = 1;

            //     l1.style.backgroundColor = 'rgba(0,0,0,0.8)';
            //     l2.style.backgroundColor = 'rgba(0,0,0,0.8)';
            //     l3.style.backgroundColor = 'rgba(0,0,0,0.8)';
            //     hbg.style.transition = '0.5s';

            //     $('.nav-inside-wrapper').css('left', '0px');
            //     $('.hamburger').fadeOut(500);
            // }
        });

    })

    hbg.addEventListener(waitRespond, function () {
        if (wait == true) {
            wait = false;
            $('nav').css('transition', '0.5s ease');
            if (jumlahClick == 1) {

                l1.style.top = '16px';
                l1.style.transform = 'rotate(45deg)';
                l2.style.opacity = 0;

                $('.nav-wrapper').css('left', '0px');

                l3.style.top = '16px';
                l3.style.transform = 'rotate(-45deg)';
                jumlahClick++;
                // navMobile.style.display = 'block';


                // true nav
                // navMobile.style.animation = 'swipeLeft 1s ease forwards';
                // navTrans.style.animation = 'swipeLeft 0s ease forwards';

                // hbg.style.border = '1px solid rgba(0,0,0,1)';
                l1.style.backgroundColor = 'rgba(0,0,0,1)';
                l2.style.backgroundColor = 'rgba(0,0,0,1)';
                l3.style.backgroundColor = 'rgba(0,0,0,1)';
                hbg.style.transition = '0.5s';
                // kh5.style.transition = '2s';
                // kh5.style.color = 'black';
                setTimeout(() => {
                    // navTrans.style.animation = 'swipeRight 0.8s ease forwards';
                    $('.nav-inside-wrapper').css('left', '100%');
                }, 500);
                setTimeout(() => {
                    hbg.style.transition = '0s';
                }, 1000);
            } else {

                closeNavbar();
            }
            setTimeout(function () {
                wait = true;
            }, 1200);
        }




    });

    // donasi
    let showup = false;
    $('.list-donate').on('click', function (e) {
        e.preventDefault();

        if ($(window).innerWidth() <= 950) {
            closeNavbar();
            setTimeout(() => {
                $('.pop-up').fadeIn(500);
                $('html , body').css('overflow-y', 'hidden');
                showup = true;
            }, 1000);
        } else {
            $('.pop-up').fadeIn(500);
            $('html , body').css('overflow-y', 'hidden');
            showup = true;
        }



    })

    $('.pop-up').on('click', function (e) {
        if (e.target == $('.pop-up')[0] || e.target == $('.closeup')[0]) {
            $('.pop-up').fadeOut(500);
            $('html , body').css('overflow-y', 'unset');
            showup = false;
        }
    });

    $(document).keyup(function (e) {
        if (e.key === "Escape") {
            if (showup) {
                $('.pop-up').fadeOut(500);
                $('html , body').css('overflow-y', 'unset');
                showup = false;
            }
        }
    });

    // scrolling up
    window.onscroll = function (e) {
        var scrollY = window.pageYOffset || document.documentElement.scrollTop;
        var header = document.querySelector('nav');

        e.preventDefault();
        
        
        

        if (scrollY <= this.lastScroll) {
            
            // header.style.visibility = 'visible';
            $('nav').fadeIn();
            // setTimeout(() => {
            //     $('nav').css('visibility', 'visible!important');
            // }, 200);
            this.lastScroll = scrollY;
        } else {
            // header.style.visibility = 'hidden';
            if ($(window).innerWidth() <= 950) {
                this.lastScroll = this.lastScroll;
            }else{
                $('nav').fadeOut();
                this.lastScroll = scrollY;
            }
            
            // setTimeout(() => {
            //     $('nav').css('visibility' , 'hidden!important');
            // }, 200);
        }



        
    }

    // scroll top button
    $(window).on('scroll' , function(e){
        if(window.scrollY >= 200){
            $('.scrup').fadeIn(500);
        }else{
            $('.scrup').fadeOut(500);
        }
        
    });


    $(".scrup").click(function () {
        $("html, body").animate({ scrollTop: 0 }, "slow");
        return false;
    });

   

});

// menunggu semua gambar di load baru tampil halaman
function imageload(selector, imageNum, callback) {
    let load = false;
    window.addEventListener('load', function () {


        // (lagi) menuggu gambar team di load baru tampil halaman
        let imageLoaded = 0;
        document.querySelectorAll(selector).forEach(function (e) {
            imageLoaded++;
        });


        if (imageLoaded == imageNum) {
            $('.lds-ellipsis').fadeOut(300);
            $('.page-loader').fadeOut(800);
            load = true;

        }
        if (load == true) {
            callback();
        }


    });

}

// no scroll while fixed position
let fixed = document.querySelectorAll('.page-loader , .nav-wrapper');


fixed.forEach(function (evt) {
    evt.addEventListener('touchmove', function (e) {

        e.preventDefault();

    }, false);

    evt.addEventListener('scroll', function (e) {

        e.preventDefault();

    }, false);


});