$(makeHomerAnimation());  

$(".btn").click(makeButtonLoading());  
$(document).keypress(function (e) {
    if (e.which == 13) {
        makeButtonLoading();
    }
});
$('#check').click(checkForm());


function makeButtonLoading() { 
    $(this).button('loading').delay(2000).queue(function() {
        $(this).button('reset');
        $(this).dequeue();
    });
}

function makeHomerAnimation() {
    homer.style.bottom = 0;
}

function checkForm() {
    var isFormValid = true;
    //перебрать все элементы управления input 
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
            isFormValid = false;  
        }
    });
    //если форма валидна, то
    if (isFormValid) {
        //отобразить сообщение об успехе
        $('#success-alert').removeClass('hidden');
        makeButtonLoading();
        makeHomerAnimation();
    }
}