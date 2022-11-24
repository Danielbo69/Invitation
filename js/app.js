let usuario = {
    pass: 'Stevenyfefi2022!'
}

function getLogin() {
    var userTotal = usuario;
    var pas = $("#pass").val();

    if (pas !== userTotal.pass) {
        Swal.fire({
            title: 'Error!',
            text: 'The password you entered is not correct.',
            icon: 'error',
            confirmButtonText: 'Ok'
        })
    } else if (pas === userTotal.pass) {
        token = {
            passAct: pas
        }
        localStorage.setItem("token", token);
        window.location.href = './screens/home.html'
    }
}

//Símbolo de Carga
window.onload = function() {
    var contenedor = document.getElementById('contenedor_loader');
    contenedor.style.visibility = 'hidden';
    contenedor.style.opacity = '0';


    /* Checking if the user is logged in. If not, it redirects to the login page. */
    var URLactual = window.location;
    var verificarData = localStorage.getItem('token');
    if (URLactual.pathname === '/screens/home.html' || URLactual.pathname === '/screens/makeup.html' || URLactual.pathname === '/screens/gift.html' || URLactual.pathname === '/screens/rvsp.html' || URLactual.pathname === '/screens/accommodation.html') {
        if (verificarData === null) {
            window.location = URLactual.origin + "/index.html";
        }
    }
}

function showBodyToggle() {
    console.log('Entro al toggle')
    let div = document.getElementById('offcanvas-body');
    console.log(div.style.display)
    div.style.display = 'block';

}

function closeBodyToggle() {
    let div = document.getElementById('offcanvas-body');
    div.style.display = 'none';
}

$(document).ready(function() {
    $('.top').click(function() {
        $('body, html').animate({
            scrollTop: '0px'
        }, 300);
    });

    $(window).scroll(function() {
        if ($(this).scrollTop() > 0) {
            $('.top').slideDown(300);
        } else {
            $('.top').slideUp(300);
        }
    });

});