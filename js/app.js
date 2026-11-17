const bg = document.querySelectorAll('.bg-wrap li')

bg[0].classList.add('active')

const swiper = new Swiper('.gallery', {
    slidesPerView: 1,
    loop: true,
    //autoplay:true,
    //speed:3000
    navigation: {
        nextEl: '.next',
        prevEl: '.prev',
    },
    on: {
        activeIndexChange: function () {
            const idx = this.realIndex
            console.log(idx);
            bg.forEach(item => item.classList.remove('active'))
            bg[idx].classList.add('active')
        }
    }
});
