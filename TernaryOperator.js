const select = document.querySelector('select');
const html = document.querySelector('html');
document.body.style.padding = '10px';

function update(bgColor, txtColor) {
    html.style.background = bgColor;
    html.style.color = txtColor;
}

select.onchange = function () {
    (select.value === 'black') ? update('linear-gradient(100deg,#434343,#262626)','white') : update('white','black');
    
}
