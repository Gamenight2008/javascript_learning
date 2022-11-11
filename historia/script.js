const btn = document.getElementById('btn');
const text = document.getElementById('text');
const page_title = document.getElementById('sub_title');
const img = document.getElementById('img_el');
let count = 0;

btn.addEventListener('click', () => {
    count++;
    if(count === 1) {
        page_title.innerText = 'Ateny';
        btn.innerText = 'Następny';
        text.textContent = '';
    }else if(count === 2) {
        text.textContent = '';
        page_title.innerText = 'Sparta';
        btn.innerText = 'Następny';
    }else if(count === 3) {
        text.textContent = '';
        page_title.innerText = 'Macedonia';
        btn.innerText = 'Następny';
    } else{
        text.textContent = '';
        page_title.innerText = 'Wojny Perskie';
        btn.innerText = 'Następny';
        count = 0;
    }
});