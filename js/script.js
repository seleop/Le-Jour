const showLanguage = () => {
    $(".lang").mouseenter(function () {
        $(".lang ul").show();
    });
    $(".lang").mouseleave(function () {
        $(".lang ul").hide();
    });
    // $('.lang').mouseover(function(){
    //     $('.lang ul').toggle();
    // })
};
const showDepth2 = () => {
    $("#product").mouseenter(function () {
        $(".depth02_wrap").stop().slideDown();
    });
    $(".depth02_wrap").mouseover(function () {
        $(".depth02_wrap").show();
    });
    $("#product").mouseleave(function () {
        $(".depth02_wrap").stop().slideUp();
    });
    $(".depth02_wrap").mouseleave(function () {
        $(".depth02_wrap").stop().slideUp();
    });
};

const modifyHeader = () => {
    window.addEventListener("scroll", () => {
        if (window.scrollY >= 100) {
            document.querySelector("header").classList.add("active");
            console.log("100 over");
        } else if (window.scrollY === 0) {
            document.querySelector("header").classList.remove("active");
            console.log("0");
        }
    });
};
var swiper = new Swiper(".mySwiper", {
    autoplay: {
        duration: 2000,
    },
    loop: true,
    speed: 1000,
});

const toggleChoiceBtn = () => {
    const choices = document.querySelectorAll(".choice-category > span");
    const choiceContainers = document.querySelectorAll(".choice-container");

    for (let i = 0; i < choices.length; i++) {
        choices[i].addEventListener("click", () => {
            choices.forEach((ele) => {
                ele.classList.remove("active");
            });
            choiceContainers.forEach((ele) => {
                ele.classList.remove('active');
            })
            choices[i].classList.add("active");
            choiceContainers[i].classList.add('active');
        });
    }
};
showLanguage();
showDepth2();
modifyHeader();
toggleChoiceBtn();
var swiper = new Swiper(".choice-container", {
    slidesPerView: 5,
    spaceBetween: 30,
    autoplay:true,
    speed:1000,
    loop:true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
});