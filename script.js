(function () {
    const header = document.querySelector(".header")
    function add_bg_to_header() {
        if (window.pageYOffset > 50) {
            header.classList.add("header_active")
        }
        else{
            header.classList.remove("header_active")
        }
    }
    window.addEventListener("scroll", add_bg_to_header)
}());


(function () {
    let video_item = document.querySelector(".video__item")
    let src = video_item.dataset.src

    video_item.addEventListener("click", function () {
        video_item.classList.add("video__item_ready")
        video_item.insertAdjacentHTML("afterend", `<iframe class="video__element" src=${src} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>`)
    })
}());