$(function(){
    console.log('ok');

    // hamburger nav
    let hbg = document.querySelector('.hamburger');
    let l1 = document.querySelector('.hamburger .line:first-of-type');
    let l2 = document.querySelector('.hamburger .line:nth-of-type(2)');
    let l3 = document.querySelector('.hamburger .line:last-of-type');
    let nav = document.querySelector('nav');
    // let navMobile = document.querySelector('.nav-mobile');
    // let navTrans = document.querySelector('.nav-trans');
    const listNav = document.querySelectorAll('nav ul li');
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
        l1.style.backgroundColor = 'rgba(0,0,0,0.8)';
        l2.style.backgroundColor = 'rgba(0,0,0,0.8)';
        l3.style.backgroundColor = 'rgba(0,0,0,0.8)';
        // kh5.style.color = 'white';
        // kh5.style.transition = '2s';
        hbg.style.transition = '0.5s';
        $('.nav-inside-wrapper').css('left', '0px');
        setTimeout(() => {
            // navMobile.style.animation = 'swipeRight 1s ease forwards';
            $('.nav-wrapper').css('left', '100%');
        }, 1000);
        hbg.style.transition = '0.5s';
        setTimeout(() => {
            hbg.style.transition = '0s';
            // navMobile.style.display = 'none';
        }, 2000);

    }

    listNav.forEach(function (e) {
        e.addEventListener('click', function () {
            if (jumlahClick != 1) {
                closeNavbar();
            }
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

                $('.nav-wrapper').css('left' , '0px');

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
                }, 750);
                setTimeout(() => {
                    hbg.style.transition = '0s';
                }, 1000);
            } else {
                closeNavbar();
            }
            setTimeout(function () {
                wait = true;
            }, 690);
        }




    });

});