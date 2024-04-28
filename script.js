// LANGUAGE CHANGER

// $(".select-btn").removeClass("active");
//         $(".options").removeClass("active");
//         $(".content").removeClass("active");

//         $(".select-btn").on("click",function(){
//             $(".select-btn").toggleClass("active");
//             $(".content").toggleClass("active");
//         })

// ITEM SLIDER

const productContainers = [...document.querySelectorAll('.product-container')];
const nxtBtn = [...document.querySelectorAll('.nxt-btn')];
const preBtn = [...document.querySelectorAll('.pre-btn')];

productContainers.forEach((item, i) => {
    let containerDimensions = item.getBoundingClientRect();
    let containerWidth = containerDimensions.width;

    nxtBtn[i].addEventListener('click', () => {
        item.scrollLeft += containerWidth;
    })

    preBtn[i].addEventListener('click', () => {
        item.scrollLeft -= containerWidth;
    })

    // Automated sliding
    setInterval(() => {
        item.scrollLeft += containerWidth;
        if (item.scrollLeft >= item.scrollWidth - item.clientWidth) {
            item.scrollLeft = 0;
        }
    }, 4000); 
});

// NAVBAR FADE IN WHEN SCROLL

const nav = document.querySelector(".nav");
        let navDissapear = 100;

        nav.classList.remove("fadein");

        window.addEventListener("scroll", () => {
            if (window.scrollY >= navDissapear)
            {
                nav.classList.add("fadein");
            } 
            else
            {
                nav.classList.remove("fadein");
            }

            lastScrollY = window.scrollY;
        });


// ELEMENTS REAVEAl ON SCROLL

window.addEventListener('scroll', reveal);

function reveal()
{
    var reveals = document.querySelectorAll(".reveal");

    for (var i = 0; i < reveals.length; i++)
    {
        var windowheight = window.innerHeight;
        var revealTop = reveals[i].getBoundingClientRect().top;
        var revealpoint = 150;

        if (revealTop < windowheight - revealpoint)
        {
            reveals[i].classList.add("active");
        }
        else
        {
            $(".select-btn").removeClass("active");
            $(".options").removeClass("active");
            $(".content").removeClass("active");

            $(".select-btn").on("click",function(){
            $(".select-btn").toggleClass("active");
            $(".content").toggleClass("active");
            });        
            reveals[i].classList.remove("active");
        }
    }
}