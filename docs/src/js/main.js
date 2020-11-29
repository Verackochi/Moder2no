/* блок с функциями*/
$(function () {
    /* звездный рейтинг*/
    $(".my-rating").starRating({
        initialRating: 5,
        strokeColor: '#ffa726',
        strokeWidth: 10,
        starSize: 12
    });

    /*слайдер*/

    $('.trend__slider').slick({
        arrows: false,
        dots: true,
        infinite: false,
        speed: 300,
        slidesToShow: 4,
        slidesToScroll: 4,
        responsive: [{
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
            // You can unslick at a given breakpoint now by adding:
            // settings: "unslick"
            // instead of a settings object
        ]
    });

    /*филтр категорий*/
    function app() {
        /*переменная для масива кнопок(использует клас) */
        const buttons = document.querySelectorAll('.products__category-link')

        /*переменная для масива карточек(использует клас) */
        const cards = document.querySelectorAll('.cart__info')

        /*функция фильтрации */


        function filter(category, items) {
            items.forEach((item) => {
                const isItemFiltered = !item.classList.contains(category)
                const isShowAll = category.toLowerCase() === 'all'
                if (isItemFiltered && !isShowAll) {
                    item.classList.add('anime')
                } else {
                    item.classList.remove('hide')
                    item.classList.remove('anime')
                }
            })
        }

        buttons.forEach((button) => {
            button.addEventListener('click', () => {
                const currentCategory = button.dataset.filter
                filter(currentCategory, cards)
            })
        })

        cards.forEach((card) => {
            card.ontransitionend = function () {
                if (card.classList.contains('anime')) {
                    card.classList.add('hide')
                }
            }
        })
    }

    app()
});