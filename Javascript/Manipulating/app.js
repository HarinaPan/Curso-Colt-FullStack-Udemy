const allLinks = document.querySelectorAll('span');

// for (let link of allLinks) {
//     link.innerText = 'Disgunsting'
// }


for (let link of allLinks) {
    link.style.color = 'rgb(0, 108, 134)';
    link.style.textDecorationColor = 'magenta';
    link.style.textDecorationStyle = 'wavy'
}


let link = document.querySelector('img');
link.setAttribute('src','https://devsprouthosting.com/images/chicken.jpg')
link.setAttribute('alt','chicken')


