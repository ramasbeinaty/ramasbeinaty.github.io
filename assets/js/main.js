/*=========== SHOW SIDEBAR ===========*/
const navMenu = document.getElementById('sidebar'),
    navToggle = document.getElementById('nav-toggle'),
    navClose = document.getElementById('nav-close')

    if (navToggle) {
        navToggle.addEventListener("click", () => {
            navMenu.classList.add('show-sidebar')
        })
    }

    if (navClose) {
        navClose.addEventListener("click", () => {
            navMenu.classList.remove('show-sidebar')
        })
    }

/*=========== SIDEBAR NAV ===========*/
const navbar_links = document.querySelectorAll('.nav__link')

function activeNavSection() {
    navbar_links.forEach(link => link.classList.remove('active-link'))
    this.classList.add('active-link')
}

navbar_links.forEach(link => link.addEventListener("click", activeNavSection))

// const nav_links = document.querySelectorAll(".nav__link")
// console.log(nav_links)
//     nav_links.forEach(nav_link => {
//         nav_link.addEventListener("click", (selected_nav_link) => {
//             nav_links.forEach(nav_link1 => {
//                 nav_link1.classList.remove("active-link")
//             })

//             selected_nav_link.target.classList.add("active-link")
//         })
//     })

/*=========== SKILLS TABS ===========*/
const tabs = document.querySelectorAll('[data-target]'),
    tabContents = document.querySelectorAll('[data-content]')

    tabs.forEach(tab => {
        tab.addEventListener("click", () => {
            const target = document.querySelector(tab.dataset.target)

            tabContents.forEach(tabContent => {
                tabContent.classList.remove("skills__active")
            })

            target.classList.add('skills__active')

            tabs.forEach(tab1 => {
                tab1.classList.remove("skills__active")
            })

            tab.classList.add('skills__active')
        })
    })

/*=========== MIXITUP FILTER PORTFOLIO ===========*/
var mixerPortfolio = mixitup('.work__container', {
    selectors: {
        target: '.work__card'
    },
    animation: {
        duration: 300
    }
});

/*=========== Active Work Link ===========*/
const work_links = document.querySelectorAll('.work__item')

function activeWork() {
    work_links.forEach(link => link.classList.remove('active-work'))
    this.classList.add('active-work')
}

work_links.forEach(link => link.addEventListener("click", activeWork))

/*=========== Work Card Popup ===========*/
/* TODO: when clicked outside, close window */
document.addEventListener("click", e => {
    if (e.target.classList.contains("work__button")) {
        togglePortfolioPopup();
        workCardItemDetails(e.target.parentElement);
    }
})

function togglePortfolioPopup() {
    document.querySelector(".work__card__popup").classList.toggle("open");
}

document.querySelector(".work__card__popup-close").addEventListener("click", togglePortfolioPopup)

function workCardItemDetails(wordCardItem) {
    document.querySelector(".work__card__thumbnail img").src = wordCardItem.querySelector(".work__img").src;
    document.querySelector(".work__card__popup-subtitle span").innerHTML = wordCardItem.querySelector(
        ".work__title").innerHTML;
        document.querySelector(".work__card__popup-body").innerHTML = wordCardItem.querySelector(
            ".work__item-details").innerHTML;
}

/*=========== SCROLL SECTIONS ACTIVE LINK ===========*/
// get all the sections with attribute id
const sections = document.querySelectorAll("section[id]");

// add an event listener to for scroll action
window.addEventListener("scroll", navHighlighter)

function navHighlighter() {
    let scrollY = window.pageYOffset;

    // get height, top and id values of each section
    sections.forEach(current => {
        const sectionHeight = current.offsetHeight;
        const sectionTop = current.offsetTop - 50;
        const sectionId = current.getAttribute("id");

        // if current scroll position enters current section area, add .active class to link; else remove it.
        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight)
        {
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add("active-link");
        }
        else {
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active-link')
        }
    })
}