/* блок с функциями*/
$(function () {
    /* звездный рейтинг*/
    $(".my-rating").starRating({
        initialRating: 5,
        strokeColor: '#ffa726',
        strokeWidth: 10,
        starSize: 12
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