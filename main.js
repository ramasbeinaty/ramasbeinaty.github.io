

/*=========== SIDEBAR NAV ===========*/
const sections = document.querySelectorAll(".nav__link")
console.log(sections)
    sections.forEach(section => {
        section.addEventListener("click", (selected) => {
            sections.forEach(section1 => {
                section1.classList.remove("active-link")
            })

            selected.target.classList.add("active-link")
        })
    })

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