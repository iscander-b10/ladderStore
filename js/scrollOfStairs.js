export function scrollOfStairs(){
    document.getElementsByClassName("leftArrow")[0].addEventListener('click', () => scroll());
    document.getElementsByClassName("rightArrow")[0].addEventListener('click', () => scroll(true));

    function scroll(arrowRight) {
        const container = document.querySelector('.typesOfStairs__list');
        const childsLength = container.children.length;
        const width = container.scrollWidth / childsLength;
        const skipChilds = 3;
        const cords = {
            top: 0,
            left: 0,
            behavior: "smooth",
          }
        
        if (arrowRight) {
            cords.left = container.scrollLeft + width * skipChilds;
        } else {
            cords.left = container.scrollLeft - width * skipChilds;
        }

        container.scrollTo(cords);
    }
}