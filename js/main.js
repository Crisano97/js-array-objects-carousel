//dato un array di oggetti letterali, crea un carosello;

const images = [
    {
        url: 'http://www.viaggiareonline.it/wp-content/uploads/2014/11/sweden_148857365.jpg',
        title: 'Svezia',
        description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam.'
    },

    {
        url: 'https://static1.evcdn.net/images/reduction/1513757_w-1920_h-1080_q-70_m-crop.jpg',
        title: 'Perù',
        description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam.'
    },

    {
        url: 'https://img.itinari.com/pages/images/original/0d3ed180-d22d-48e8-84df-19c4d888b41f-62-crop.jpg?ch=DPR&dpr=2.625&w=1600&s=7ebd4b5a9e045f41b4e0c7c75d298d6c',
        title: 'Chile',
        description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam.'
    },
    {
        url: 'https://static1.evcdn.net/images/reduction/1583177_w-1920_h-1080_q-70_m-crop.jpg',
        title: 'Argentina',
        description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam.'
    },
    {
        url: 'https://cdn.sanity.io/images/24oxpx4s/prod/ed09eff0362396772ad50ec3bfb728d332eb1c30-3200x2125.jpg?w=1600&h=1063&fit=crop',
        title: 'Colombia',
        description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam.'
    },
];

const imageContainer = document.getElementById('image-container');

images.forEach((element) => {

    const newTitle = document.createElement('span');
    newTitle.classList.add('d-none', 'position-absolute', 'w-50', 'top-0', 'end-0', 'text-white');
    newTitle.append(`${element.title} 
    
    ${element.description}`);

    const newImage = document.createElement('img');
    newImage.classList.add('m_img', 'd-none');
    newImage.setAttribute('src', element.url);
    imageContainer.append(newImage, newTitle);
})

let imageList = document.querySelectorAll(".m_img");
imageList[0].classList.remove('d-none')
let spanList = document.querySelectorAll("span");
console.log(spanList)
spanList[0].classList.remove('d-none')

const btnNext = document.getElementById('next-button');

let activeIndex = 0;

btnNext.addEventListener('click', function () {

    imageList[activeIndex].classList.add('d-none');
    spanList[activeIndex].classList.add('d-none');


    activeIndex++;

    if (activeIndex === imageList.length && activeIndex === spanList.length) {
        activeIndex = 0;
    }

    imageList[activeIndex].classList.remove('d-none');
    spanList[activeIndex].classList.remove('d-none');


});

const btnPrev = document.getElementById('prev-button');

btnPrev.addEventListener('click', function () {


    imageList[activeIndex].classList.add('d-none');
    spanList[activeIndex].classList.add('d-none');

    activeIndex--;

    if (activeIndex === -1) {
        activeIndex = imageList.length - 1;
    }

    imageList[activeIndex].classList.remove('d-none');
    spanList[activeIndex].classList.remove('d-none');



});



