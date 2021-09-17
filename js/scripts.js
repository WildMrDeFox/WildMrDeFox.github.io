 AOS.init();

// Калькулятор
let arr1 = [10000, 15000, 20000],
    arr2 = [5000, 10000, 12000],
    arr3 = [3000, 6000, 12000];

let arr1_2 = [2, 3, 6],
    arr2_2 = [1, 3, 2],
    arr3_2 = [4, 4, 4];

let que1, que2, que3, result, day, end_result;

$('select').change(function(){

    que1 = $('select[name=type]').val();
    que2 = $('select[name=disigne]').val();
    que3 = $('select[name=adaptiv]').val();

    result = arr1[que1] + arr2[que2] + arr3[que3];
    day = arr1_2[que1] + arr2_2[que2] + arr3_2[que3];

    if(result) {
        $('.result_day').text(day + ' дней');
        $('.result_price').text(result + ' рублей');
    }
});



//Активная навигация
$(window).scroll(() => {
    let scrollDistance = $(window).scrollTop();

    $(".section").each((i, el) => {

        if($(el).offset().top - $("nav").outerHeight() <= scrollDistance) {
            $("nav a").each((i, el) => {
                if ($(el).hasClass("active")) {
                    $(el).removeClass("active");
                }
            });

            $('nav li:eq('+ i +')').find('a').addClass('active');
        }
    });
});



// Подгрузка изображений
$(document).ready(function(){

    let options = {threshold: [0.5]};
    let observer = new IntersectionObserver(onEntry, options);
    let elements = $('.element-img');
    elements.each((i, el) => {
        observer.observe(el);
    });
});

function onEntry (entry) {
    entry.forEach(change =>  {
        if (change.isIntersecting) {
            change.target.src = change.target.dataset.src;
        }
    });
}


// Отложенная анимация блока Statistic
let opt = {threshold: [0.7]};
let obs = new IntersectionObserver(callback, opt);
let elem = $('.statis_container');
elem.each((i, el) => {
    obs.observe(el);
});

function callback() {
    $('.statis_title').each(function(){
        $(this).prop('Counter', 0).animate({
            Counter: $(this).text()
        }, {
            duration: 2000,
            easing: 'swing',
            step:function(now){
                $(this).text(Math.ceil(now));
            }
        });
    });
};

$(document).ready(function() {
    $('.img-link').magnificPopup({type:'image'});
  });




