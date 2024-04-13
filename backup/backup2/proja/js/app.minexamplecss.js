document.getElementById('css-code').textContent = `
:root {
    --text: #000;
    --main: #ffffff;
    --secondary: #bf5d54;
    --tertiary: #fff
}

body {
    background: var(--main);
    color: var(--text);
    font-family: 'Times New Roman', Times, serif;
    font-size: 16px;
    line-height: 18px;
}

.overflow-hidden {
    overflow: hidden
}

.default {
    cursor: default;
}

.pointer {
    cursor: pointer;
}

#bodyHide {
    overflow: hidden;
}

.animate-line {
    will-change: transform;
    display: block;
    transform: translate3d(0,2000px,0);
}

.line-divide {
    margin-top: 16px
}

.loader {
    max-width: calc(100vw - 0.25em);
    box-sizing: border-box;
    position: fixed;
    margin: 0 auto;
    padding: 0;
    width: calc(100%);
    height: 200px;
    top: 40%;
    text-align: center;
    font-size: 64px;
}

.loader-cover-one {
    position: fixed;
    background-color: rgb(255, 255, 255);
    height: 150px;
    width: 100%;
    top: 40.2%;
    transform: translateY(-50%);
    z-index: 9999;
}

.loader-cover-two {
    position: fixed;
    background-color: rgb(255, 255, 255);
    height: 150px;
    width: 100%;
    top: calc(40% + 120px);
    transform: translateY(-50%);
    z-index: 9999;
}

.logo {
    opacity: 0;
    pointer-events: none;
    position: relative;
    top: -40px;
    left: 50%;
    transform: translateX(-50%);
    background: var(--main);
    display: flex;
    z-index: 9999;
    text-align: center;
    justify-content: center;
    margin-bottom: -60px;
}

.logo-underlay {
    position: relative;
    width: 100%;
    height: 60px;
    background-color: white;
    z-index: 500;
    top: 0;
}

main {
    margin-bottom: 100px;
}

.hero {
    padding: 120px 40px 70px 40px
}

.hero-content {
    color: var(--text);
    width: 100%;
    margin-left: auto;
    display: flex;
    gap: 20px;
    justify-content: space-around;
}

.hero-col {
    width: calc((100% - 60px) / 6);
    min-width: 210px;
    display: inline-block;
    justify-content: left;
}

.hero-col>div {
    position: relative;
    overflow: hidden
}

.hero-rhs {
    text-align: right;
}

.projects {
    padding: 0;
}

.project-list {
    display: grid;
    grid-template-columns: repeat(6,1fr);
    grid-template-rows: repeat(2, 27em);
    gap: 1em;
}

.projects-counter>svg {
    height: 1em;
    width: 1em;
    fill: var(--secondary);
    vertical-align: text-bottom
}

.card {
    border: 2px solid black;
    max-width: 312px;
    min-width: 312px;
    width: calc(100%-1.25em - 4px);
    height: calc(100% - 2em - 6px);
    margin: auto;
    margin-top: 1em;
    overflow: hidden;
    transition: 0.5s ease;
}

.card img {
    width: 100%;
    height: 100%;
    object-fit: cover;
}

.card .text {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-size: 16px;
    text-align: center;
    opacity: 1;
    pointer-events: none;
}

#proja-img, #proja-img-post {
    opacity: 1;
    transition: opacity 0.5s;
}

#proja-img:hover {
    opacity: 0.2;
    cursor: pointer;
}

.proja-line {
    will-change: transform;
    display: block;
    transform: translate3d(0,2000px,0);
}

#projb-img, #projb-img-post {
    opacity: 1;
    transition: opacity 0.5s;
}

#projb-img:hover {
    opacity: 0.2;
    cursor: pointer;
}

.projb-line {
    will-change: transform;
    display: block;
    transform: translate3d(0,2000px,0);
}

#projc-img, #projc-img-post {
    opacity: 1;
    transition: opacity 0.5s;
}

#projc-img:hover {
    opacity: 0.2;
    cursor: pointer;
}

.projc-line {
    will-change: transform;
    display: block;
    transform: translate3d(0,2000px,0);
}

#projd-img, #projd-img-post {
    opacity: 1;
    transition: opacity 0.5s;
}

#projd-img:hover {
    opacity: 0.2;
    cursor: pointer;
}

.projd-line {
    will-change: transform;
    display: block;
    transform: translate3d(0,2000px,0);
}

#proje-img, #proje-img-post {
    opacity: 1;
    transition: opacity 0.5s;
}

#proje-img:hover {
    opacity: 0.2;
    cursor: pointer;
}

.proje-line {
    will-change: transform;
    display: block;
    transform: translate3d(0,2000px,0);
}

#projf-img, #projf-img-post {
    opacity: 1;
    transition: opacity 0.5s;
}

#projf-img:hover {
    opacity: 0.2;
    cursor: pointer;
}

.projf-line {
    will-change: transform;
    display: block;
    transform: translate3d(0,2000px,0);
}

#projg-img, #projg-img-post {
    opacity: 1;
    transition: opacity 0.5s;
}

#projg-img:hover {
    opacity: 0.2;
    cursor: pointer;
}

.projg-line {
    will-change: transform;
    display: block;
    transform: translate3d(0,2000px,0);
}

#projh-img, #projh-img-post {
    opacity: 1;
    transition: opacity 0.5s;
}

#projh-img:hover {
    opacity: 0.2;
    cursor: pointer;
}

.projh-line {
    will-change: transform;
    display: block;
    transform: translate3d(0,2000px,0);
}

#proji-img, #proji-img-post {
    opacity: 1;
    transition: opacity 0.5s;
}

#proji-img:hover {
    opacity: 0.2;
    cursor: pointer;
}

.proji-line {
    will-change: transform;
    display: block;
    transform: translate3d(0,2000px,0);
}

#projj-img, #projj-img-post {
    opacity: 1;
    transition: opacity 0.5s;
}

#projj-img:hover {
    opacity: 0.2;
    cursor: pointer;
}

.projj-line {
    will-change: transform;
    display: block;
    transform: translate3d(0,2000px,0);
}

#projk-img, #projk-img-post {
    opacity: 1;
    transition: opacity 0.5s;
}

#projk-img:hover {
    opacity: 0.2;
    cursor: pointer;
}

.projk-line {
    will-change: transform;
    display: block;
    transform: translate3d(0,2000px,0);
}

#projl-img, #projl-img-post {
    opacity: 1;
    transition: opacity 0.5s;
}

#projl-img:hover {
    opacity: 0.2;
    cursor: pointer;
}

.projl-line {
    will-change: transform;
    display: block;
    transform: translate3d(0,2000px,0);
}

.proj-column {
    display: inline-block;
    justify-content: center;
}

.proj-column>div {
    position: relative;
    overflow: hidden;
}

.footer {
    position: relative;
    bottom: 0;
    display: flex !important;
    gap: 20px;
    align-items: flex-end;
    padding: 20px 40px;
    margin: 0 auto;
    justify-content: space-between;
    max-width: calc(100vw - 6em);
    width: 100%;
    max-height: 200px;
    margin-top: -60px;
    background-color: white;
}

.footer-col {
    width: calc((100% - 100px) / 6);
}

.footer-info {
    display: block !important;
}

.footer div {
    display: flex;
    align-content: end;
}

.footer-wrapper {
    display: flex;
    flex-direction: column;
    align-content: end;
}

.footer-links {
    text-decoration: none;
    color: var(--text);
    margin-bottom: 2px;
}

.link {
    width: fit-content;
    position: relative;
    overflow: hidden;
    height: 14px;
    text-transform: uppercase;
    pointer-events: all;
    user-select: none;
}

.links-line-break {
    display: none !important;
}

.link-content {
    color: var(--text);
    text-decoration: none;
}

.link-underline {
    height: 1px;
    width: 100%;
    background: #000;
    position: absolute;
    bottom: 0;
    left: 0;
    will-change: transform;
    transform: translate3d(-100%,0,0);
    pointer-events: none;
    user-select: none
}

.copyright {
    width: calc((100% - 20px) / 2);
    text-align: right;
    justify-content: right;
}

@media screen and (max-width: 2023px) {
    .project-list {
        grid-template-columns: repeat(3,1fr);
        grid-template-rows: repeat(4,27em);
    }
}

@media screen and (max-width: 1439px) {
    .loader {
        max-width: calc(100vw - 0.25em);
    }

    .hero-col {
        width: calc((100% - 3em) / 3.5)
    }

    .hero-add {
        display: none !important;
    }

    .projects-counter{
        width: calc((100vw - 6em))
    }

    .footer {
            max-width: calc(100vw - 6em);
            width: 100%;
        }

    .footer-col {
        width: calc((100% - 4.5em) / 4)
    }
}

@media screen and (max-width: 1209px) {
    .loader {
        max-width: calc(100vw - 0.25em);
    }

    .hero-col {
        width: calc((100% - 40px) / 3)
    }

    .projects-counter {
        width: calc((100% - 100px))
    }

    .footer {
        max-width: calc(100vw - 6em);
        width: 100%;
    }

    .footer-col {
        width: calc((100% - 20px) / 2)
    }
}

@media screen and (max-width: 1014px) {
    .project-list {
        grid-template-columns: repeat(2,1fr);
        grid-template-rows: repeat(6,27em);
    }    
}

@media screen and (max-width: 979px) {
    .loader {
        max-width: calc(100vw - 0.25em);
    }

    .hero-col {
        width: calc((100% - 30px) / 2.5)
    }

    .projects-counter {
        width: calc((100% - 60px))
    }

    .footer {
        align-items: flex-start;
        flex-wrap: wrap;
        max-width: calc(100vw - 6em);
        width: 100%;
    }

    .footer-col {
        width: 100%
    }

    .footer-links {
        width: fit-content;
        margin-top: 4px;
    }

    .copyright {
        width: 50%;
        margin-left: auto
    }
    
}

@media screen and (max-width: 749px) {
    .loader {
        max-width: calc(100vw - 0.25em);
    }

    .hero-col {
        width: calc((100% - 20px) / 2)
    }

    .projects-counter {
        width: calc((100% - 100px))
    }

    .footer {
        max-width: calc(100vw - 6em);
        width: 100%;
    }
}

@media screen and (max-width: 660px) {
    .project-list {
        grid-template-columns: 1fr;
        grid-template-rows: repeat(12,27em);
    }

    .break-line {
        display: none;
    }
}

@media screen and (max-width: 634px) {
    .loader {
        max-width: calc(100vw - 0.25em);
    }

    .hero {
        padding: 120px 20px 140px 20px
    }

    .hero-col {
        width: calc((100% - 20px) / 2)
    }

    .projects {
        padding: 120px 20px 100px 20px
    }

    .projects-counter {
        width: 100%
    }

    .footer {
        max-width: calc(100vw - 6em);
        width: 100%;
    }
}

@media screen and (max-width: 479px) {
    .loader {
            max-width: calc(100vw - 0.25em);
        }

    .hero-content {
        flex-direction:column
    }

    .hero-col {
        width: 100%
    }

    .projects {
        margin-top: -200px;
    }

    .project-title {
        display: flex;
        justify-content: center;
        font-size: 36px;
        width: 100%;
    }

    .footer {
        max-width: calc(100vw - 6em);
        width: 100%;
        margin-top: -200px;
    }

    #proja-img, #proja-img-post {
        opacity: 1;
        transition: none;
    }
    
    #proja-img:hover {
        opacity: 1;
        cursor: default;
    }

    #projb-img, #projb-img-post {
        opacity: 1;
        transition: none;
    }
    
    #projb-img:hover {
        opacity: 1;
        cursor: default;
    }

    #projc-img, #projc-img-post {
        opacity: 1;
        transition: none;
    }
    
    #projc-img:hover {
        opacity: 1;
        cursor: default;
    }

    #projd-img, #projd-img-post {
        opacity: 1;
        transition: none;
    }
    
    #projd-img:hover {
        opacity: 1;
        cursor: default;
    }

    #proje-img, #proje-img-post {
        opacity: 1;
        transition: none;
    }
    
    #proje-img:hover {
        opacity: 1;
        cursor: default;
    }

    #projf-img, #projf-img-post {
        opacity: 1;
        transition: none;
    }
    
    #projf-img:hover {
        opacity: 1;
        cursor: default;
    }

    #projg-img, #projg-img-post {
        opacity: 1;
        transition: none;
    }
    
    #projg-img:hover {
        opacity: 1;
        cursor: default;
    }

    #projh-img, #projh-img-post {
        opacity: 1;
        transition: none;
    }
    
    #projh-img:hover {
        opacity: 1;
        cursor: default;
    }

    #proji-img, #proji-img-post {
        opacity: 1;
        transition: none;
    }
    
    #proji-img:hover {
        opacity: 1;
        cursor: default;
    }

    #projj-img, #projj-img-post {
        opacity: 1;
        transition: none;
    }
    
    #projj-img:hover {
        opacity: 1;
        cursor: default;
    }

    #projk-img, #projk-img-post {
        opacity: 1;
        transition: none;
    }
    
    #projk-img:hover {
        opacity: 1;
        cursor: default;
    }

    #projl-img, #projl-img-post {
        opacity: 1;
        transition: none;
    }
    
    #projl-img:hover {
        opacity: 1;
        cursor: default;
    }

}

@media screen and (max-width: 405px) {
    .links-line-break {
        display: block !important;
    }
}`;
