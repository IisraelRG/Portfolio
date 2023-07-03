menu_show = document.querySelector('.btn_menu')
menu = document.querySelector('.menu')

menu_show.addEventListener('click', ()=>{
    menu.classList.toggle('menu--show')
});

$(document).ready(function(){
    // Mostrar solo la información de la categoría predeterminada
    var defaultCategory = $('.default-category').attr('category');
    $('.about-item').hide();
    $('.about-item[category="'+ defaultCategory +'"]').show();
    $('.about-item[category="'+ defaultCategory +'"]').css('transform', 'scale(1)');

    $('.acircle').click(function(){
        var catProduct = $(this).attr('category');
        console.log(catProduct);
        
        $('.acircle').removeClass('ct_item-active');
        $(this).addClass('ct_item-active');

        $('.about-item').css('transform', 'scale(0)');
        function hideProduct(){
            $('.about-item').hide();
        } setTimeout(hideProduct, 400);

        function showProduct(){
            $('.about-item[category="'+ catProduct +'"]').show();
            $('.about-item[category="'+ catProduct +'"]').css('transform', 'scale(1)');
        }setTimeout(showProduct,400);
    });
});

$(document).ready(function(){
    $('.categories .category_portfolio[category="all"]').addClass('ct_item-active');

    $('.category_portfolio').click(function(){
        var catProduct = $(this).attr('category');
        console.log(catProduct);
        
        $('.category_portfolio').removeClass('ct_item-active');
        $(this).addClass('ct_item-active');

        $('.product_item').css('transform', 'scale(0)');
        function hideProduct(){
            $('.portfolio-item').hide();
        } setTimeout(hideProduct, 400);

        function showProduct(){
            $('.portfolio-item[category="'+ catProduct +'"]').show();
            $('.portfolio-item[category="'+ catProduct +'"]').css('transform', 'scale(1)');
        }setTimeout(showProduct,400);
    });
    $('.category_portfolio[category="all"]').click(function(){
        function showAll(){
            $('.portfolio-item').show();
            $('.portfolio-item').css('.transform', 'scale(1)');
        }setTimeout(showAll,400);
    });
});