/* звездный рейтинг*/
$(function () {

    $(".my-rating").starRating({
        initialRating: 5,
        strokeColor: '#ffa726',
        strokeWidth: 10,
        starSize: 12
    });

});

/* филтр категорий */
$(function () {
    /*переменная с масивом ссылок */
    let filter = $("[data-filter]");
    /*действия при клике убирает стандартное поведение */
    filter.on("click", function (event) {
        event.preventDefault();
        /*берем данные из масива в переменну */
        let cat = $(this).data('filter');
        /*если переменая равна all удаляемем класс hiden( содержит display:none) у всех карточек */
        if (cat == 'all') {
            $("[data-cat]").removeClass("hide");
        } else {
            /*проверям совпадение с другими ссылка если элемент масива ссылки совпадает то ко всем остальным блокам 
            приметь display: none с помощью класса hiden  */
            $("[data-cat]").each(function () {
                let workCat = $(this).data('cat');

                if (workCat != cat) {
                    $(this).addClass('hide');
                } else {
                    $(this).removeClass('hide');
                }
            });
        }
    });
});