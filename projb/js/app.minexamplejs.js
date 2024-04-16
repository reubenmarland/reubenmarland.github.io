document.getElementById('js-code').textContent = `
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
            document.body.style.top = \`-\${scrollPosition}px\`;
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
        }, 0).to(".loader-cover-two", {
            translateY: "-90px",
            ease: "strongEaseInOut",
            duration: 2,
        }, 3).to({}, {
            onComplete: function() {
                enableScroll()
            }
        },3).to(".loader", {
            opacity: 0,
            ease: "easeOutExpo",
            onComplete: function() {
                setTimeout(function() {
                    document.querySelector(".loader").remove()
                    var bodyHide = document.getElementById("bodyHide")
                    bodyHide.style.overflow = "visible !important"
                },0.1)
            }
        }, 3.5).to([".logo", ".availability"], {
            opacity: 1,
            ease: "easeInExpo"
        }, 3.5).to(".animate-line", {
            x: 0,
            y: 0,
            z: 0,
            ease: "easeOutExpo",
            duration: 0.5,
            stagger: {
                each: 0.05
            }
        }, 3.5)
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

document.addEventListener("DOMContentLoaded", function() {
    CustomEase.create("easeOutExpo", "0.16, 1, 0.3, 1");
    CustomEase.create("easeInExpo", "0.7, 0, 0.84, 0");

    var touchTimelines = {};

    function createTimelines(cardId) {

        var projClick = document.getElementById(cardId + "-click");
        var projImg = document.getElementById(cardId + "-img");
        var tlProjEnter = gsap.timeline({ paused: true });
        var tlProjLeave = gsap.timeline({ paused: true });
        var tlProjEnterTouch = gsap.timeline({ paused: true });
        var tlProjLeaveTouch = gsap.timeline({ paused: true });
        var tlProjLeavePage = gsap.timeline({ paused: true });
        var currentIndex = cardIDs.indexOf(cardId);
        var cardElements = cardIDs.filter(function(id, index) {
            return Math.abs(currentIndex - index) > 0;
        }).map(function(id) {
            return document.getElementById(id + "-click");
        });
        touchTimelines[cardId] = { enter: tlProjEnterTouch, leave: tlProjLeaveTouch };

        console.log("HERE MAN" + cardElements);
        
        tlProjLeavePage.to(["body", ".default", ".pointer", "#" + cardId + "-img:hover"], {
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
                window.location.href = cardId + ".html";
            }
        });

        tlProjEnter.to("." + cardId + "-line", {
            x: 0,
            y: 0,
            z: 0,
            ease: "easeOutExpo",
            duration: 0.5,
            stagger: {
                each: 0.1
            }
        }).to({}, {
            duration: 0,
            onComplete: function() {
                projImg.style.transitionDelay = "0.5s";
            }
        })

        tlProjLeave.to("." + cardId + "-line", {
            x: 0,
            y: 2000,
            z: 0,
            ease: "easeInExpo",
            duration: 0.5,
            stagger: {
                each: 0.1
            }
        }).to({}, {
            duration: 0,
            onComplete: function() {
                projImg.style.transitionDelay = "";
            }
        });

        tlProjEnterTouch.to("#" + cardId + "-img", {
            opacity: 0.2,
            duration: 0.5
        }, 0.3).to("." + cardId + "-line", {
            x: 0,
            y: 0,
            z: 0,
            ease: "easeOutExpo",
            duration: 0.5,
            stagger: {
                each: 0.1
            }
        }).to({}, {
            duration: 0,
            onComplete: function() {
                projImg.style.transitionDelay = "0.5s";
            }
        });

        tlProjLeaveTouch.to("." + cardId + "-line", {
            x: 0,
            y: 2000,
            z: 0,
            ease: "easeInExpo",
            duration: 0.5,
            stagger: {
                each: 0.1
            }
        }, 0.1).to("#" + cardId + "-img", {
            opacity: 1,
            duration: 0.5
        }).to({}, {
            duration: 0,
            onComplete: function() {
                projImg.style.transitionDelay = "";
            }
        });

        projClick.addEventListener("mouseenter", function() {
            tlProjEnter.restart()
        });

        projClick.addEventListener("mouseleave", function() {
            tlProjLeave.restart()
        });

        projClick.addEventListener("click", function() {
            function scrollToTop() {
                window.scrollTo({
                    top: 0,
                    behavior: "smooth"
                });
            }
            projImg.setAttribute("id", cardId + "-img-post")
            document.body.style.overflow = "hidden";
            tlProjLeavePage.restart();
            setTimeout(function() {
                scrollToTop();
            },0.05);
        })

        function touchStartEnterHandler() {
            tlProjEnterTouch.restart();
            setTimeout(function() {
                createTimelines(cardId)
            },0.5)        
            setTimeout(function() {
                projClick.removeEventListener("touchstart", touchStartEnterHandler)
            },0.7)        
        }

        projClick.addEventListener("touchstart", touchStartEnterHandler);

        function touchStartLeaveHandler() {
            tlProjLeaveTouch.restart();
            setTimeout(function() {
            cardElements.forEach(function(card) {
              card.removeEventListener("touchstart", touchStartLeaveHandler);
            });
                createTimelines(cardID);
            },0.5)
          }
          
        cardElements.forEach(function(card) {
            card.addEventListener("touchstart", touchStartLeaveHandler);
          });

    }

    const cardIDs = ['proja', 'projb', 'projc', 'projd', 'proje', 'projf', 'projg', 'projh', 'proji', 'projj', 'projk', 'projl'];
    cardIDs.forEach(function(cardID) {
        createTimelines(cardID);
    });
})`;
