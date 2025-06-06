const cars = [
    {
        model: "audi rs1",
        photo: "https://images.cdn.autocar.co.uk/sites/autocar.co.uk/files/images/car-reviews/first-drives/legacy/audi_rs_1.jpg",
        speed: 250,
    },
    {
        model: "audi rs2",
        photo: "https://cdn.motor1.com/images/mgl/weoGL/s1/audi-rs2-avant-1994.webp",
        speed: 262,
    },
    {
        model: "audi rs3",
        photo: "https://image-cdn.hypb.st/https%3A%2F%2Fhypebeast.com%2Fimage%2F2022%2F10%2Faudi-rs3-performance-edition-sedan-sportback-top-speed-power-rare-hot-hatch-tw.jpg?w=960&cbr=1&q=90&fit=max",
        speed: 250,
    },
    {
        model: "audi rs4",
        photo: "https://media.audi.com/is/image/audi/nemo/models/a4/rs-4-avant/my-2022/derivative-startpage/scroll-zoom/1920x1080-rs4_2020_1500_scroll.jpg?width=375",
        speed: 250,
    },
    {
        model: "audi rs5",
        photo: "https://www.topgear.com/sites/default/files/2024/05/A242456_medium%20%287%29.jpg",
        speed: 300,
    },
    {
        model: "audi rs6",
        photo: "https://static1.topspeedimages.com/wordpress/wp-content/uploads/jpg/202209/1-200-hp-audi-rs6-av-3.jpg",
        speed: 280,
    },
    {
        model: "audi rs7",
        photo: "https://www.carscoops.com/wp-content/uploads/2019/07/33dc9606-addarmor-audi-rs7.jpg",
        speed: 320,
    },
    {
        model: "audi rs8",
        photo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFH34KQVj7BYjyYfbVlQCmKcfiXEo_ikUemA&s",
        speed: 324,
    },
    {
        model: "bmw x1",
        photo: "https://images.coches.com/_vn_/bmw/X1/819a15048fed68393cf665dc644a4205.jpg?w=1920&ar=16:9",
        speed: 206,
    },
    {
        model: "bmw x2",
        photo: "https://www.topgear.com/sites/default/files/2024/02/1-BMW-X2-review.jpg",
        speed: 207,
    },
];

const listElement = document.createElement("ul");
cars.forEach((car) => {
    listElement.insertAdjacentHTML("beforeend", `<li> 
        <h2> ${car.model} </h2> 
        <img src="${car.photo}" alt="${car.speed}"> 
        <p>${car.speed}</p> </li> `
    );
});

document.body.append(listElement);
