const qAndA = document.querySelectorAll('.qna');

qAndA.forEach((item)=> {
    const plus = item.querySelector('.qna .q');
    const icon = item.querySelector('.qna .q img');
    const paragraph = item.querySelector('.qna p');

    plus.addEventListener('click', () => {
        console.log('clicked');
        if (paragraph.classList.contains('hide')) {
            paragraph.classList.remove('hide');
            paragraph.style.width = "100%";
            icon.src = "./../img/icon-minus.svg";
            icon.alt = "minus";
        } else {
            paragraph.classList.add('hide');
            icon.src = "./../img/icon-plus.svg";
            icon.alt = "plus";
        }
    });
});
