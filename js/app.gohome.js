gsap.config({
    nullTargetWarn: !1
});

document.addEventListener("DOMContentLoaded", function() {
    homeButton = document.getElementById("go-home")
    var tlGoHome = gsap.timeline({ paused: true });

    tlGoHome.to(["*"], {
        cursor: "default",
    }).to([".logo", ".availability"], {
        opacity: 0,
        ease: "easeInExpo"
    }).to(".animate-line", {
        x: 0,
        y: 2000,
        z: 0,
        ease: "easeInExpo",
        duration: 0.5,
        stagger: {
            each: 0.05
        }
    }).to({}, {
        duration: 0,
        onComplete: function() {
            window.location.href = "../Home/home.html";
        }
    });

    homeButton.addEventListener("click", function() {
        function scrollToTop() {
            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });
        }
        document.body.style.overflow = "hidden";
        scrollToTop();
        setTimeout(function() {
            tlGoHome.restart();
        },0);
    })

})