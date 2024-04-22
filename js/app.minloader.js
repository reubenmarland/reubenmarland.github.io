gsap.config({
    nullTargetWarn: !1
});
var initialise = {
    data: null,
    init: function() {
        initialise.loadData()
    },
    loadData: function() {
        var fetchData = new XMLHttpRequest;
        fetchData.onreadystatechange = function() {
            if (200 === fetchData.status && 4 === fetchData.readyState) {
                var parsedData = JSON.parse(fetchData.responseText);
                initialise.data = parsedData
            }
        }
        fetchData.open("post", "./data.json");
        fetchData.send()
    }
}
var loadPage = {
    hero: null,
    projects: null,
    main: null,
    init: function() {
        function disableScroll() {
            var scrollPosition = window.scrollY;
            document.body.style.position = 'fixed';
            document.body.style.top = `-${scrollPosition}px`;
          }
        disableScroll();
        loadPage.loader()
    },
    loader: function() {
        CustomEase.create("easeOutExpo", "0.16, 1, 0.3, 1");
        CustomEase.create("easeInExpo", "0.7, 0, 0.84, 0");
        CustomEase.create("strongEaseInOut", "0.08, 0.82, 0.17, 1");
        CustomEase.create("strongEaseInLinearOut", "0.08, 0.82, 1, 1");

        function enableScroll() {
            var scrollPosition = parseInt(document.body.style.top || '0', 10);
            document.body.style.position = '';
            document.body.style.top = '';
            window.scrollTo(0, Math.abs(scrollPosition));
        }

        gsap.timeline({}).to(".loader-cover-one", {
            translateY: "-90px",
            ease: "strongEaseInOut",
            duration: 2,
        }, 0.5).to(".loader-cover-two", {
            translateY: "-90px",
            ease: "strongEaseInOut",
            duration: 2,
        }, 3.5).to({}, {
            onComplete: function() {
                enableScroll()
            }
        }, 3.5).to(".loader", {
            opacity: 0,
            ease: "easeOutExpo",
            onComplete: function() {
                setTimeout(function() {
                    document.querySelector(".loader").remove()
                    var bodyHide = document.getElementById("bodyHide")
                    bodyHide.style.overflow = "visible !important"
                },0.1)
            }
        }, 4).to([".logo", ".availability"], {
            opacity: 1,
            ease: "easeInExpo"
        }, 4).to(".animate-line", {
            x: 0,
            y: 0,
            z: 0,
            ease: "easeOutExpo",
            duration: 0.5,
            stagger: {
                each: 0.05
            }
        }, 4)
    }
}

var App = {
    init: function() {
        initialise.init();
        loadPage.init()
    }
};

window.addEventListener("load", function() {
    App.init()
});