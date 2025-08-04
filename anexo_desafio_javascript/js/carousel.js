

//carousel

//Array storage class
let carouselArr = [];


//class Carousel
class Carousel {
    constructor (imagem, titulo, url){
        this.imagem = imagem;
        this.titulo = titulo;
        this.url = url;
    }
    
      
    static Start(arr){
        if(arr){

            if(arr.length > 0){
                Carousel._sequence = 0;
                Carousel._size = arr.length;
                Carousel.Next(); //start
                Carousel._interval = setInterval(function(){ Carousel.Next(); },2000);
            }
            
        } else {
            throw "Method Start need a Array Variable.";
        }
    }

    static Next(){
        const item = carouselArr [Carousel._sequence];

        const divCarrossel = document.getElementById ("carousel");
        divCarrossel.innerHTML = `<img src="img/${item.imagem}" alt="" style="height: 100%; display: flex; margin: 0 auto" />`;

        const divTitulo = document.getElementById ("carousel-title");
        divTitulo.innerHTML = `<a href="${item.url}"> ${item.titulo} </a>`;

        Carousel._sequence = (Carousel._sequence + 1) % Carousel._size;
    }
};
