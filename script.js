window.onload = function() {
const offcanvas = document.querySelector('.nav-links');
const open = document.querySelector('#open');
const close = document.querySelector('#close');
    document.addEventListener('click', function(e) {
        if(e.target.id == 'open') {
            open.style.display = 'none';
            close.style.display= 'block';
            offcanvas.style.display = 'flex';
        }else if(e.target.id == 'close') {
            open.style.display = 'flex';
            close.style.display= 'none';
            offcanvas.style.display = 'none';
        }
    });
}