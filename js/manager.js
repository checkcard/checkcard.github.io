$(document).keypress(function (e) {
    if (e.which == 13) {
        $('.btn').trigger('click');
    }
});

$(function() {
    $('#check').click(function() {
        var formValid = true;
        $('input').each(function() {
            //найти предков, которые имеют класс .input-group, для установления success/error
            var formGroup = $(this).parents('.input-group');
            //найти glyphicon, который предназначен для показа иконки успеха или ошибки
            var glyphicon = formGroup.find('.form-control-feedback');
            //для валидации данных используем HTML5 функцию checkValidity
            if (this.checkValidity()) {
                //добавить к formGroup класс .has-success, удалить has-error
                formGroup.addClass('has-success').removeClass('has-error');
                //добавить к glyphicon класс glyphicon-ok, удалить glyphicon-remove
                glyphicon.addClass('glyphicon-ok').removeClass('glyphicon-remove');
            } else {
                //добавить к formGroup класс .has-error, удалить .has-success
                formGroup.addClass('has-error').removeClass('has-success');
                //добавить к glyphicon класс glyphicon-remove, удалить glyphicon-ok
                glyphicon.addClass('glyphicon-remove').removeClass('glyphicon-ok');
                //отметить форму как невалидную 
                formValid = false;  
            }
        });
        if (formValid) {
            //отобразить сообщение об успехе
            $(this).button('loading').delay(1000).queue(function() {
                $(this).button('reset');
                $(this).dequeue();
            });  
            $('#success-alert').removeClass('hidden');
            $('#success-alert').animate({opacity: "1"}, 1200)
            homer.style.bottom = 0;
        }
    });
});
