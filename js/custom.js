// to get current year
function getYear() {
    var currentDate = new Date();
    var currentYear = currentDate.getFullYear();
    document.querySelector("#displayYear").innerHTML = currentYear;
}

getYear();


// isotope js
$(window).on('load', function () {
    $('.filters_menu li').click(function () {
        $('.filters_menu li').removeClass('active');
        $(this).addClass('active');

        var data = $(this).attr('data-filter');
        $grid.isotope({
            filter: data
        })
    });

    var $grid = $(".grid").isotope({
        itemSelector: ".all",
        percentPosition: false,
        masonry: {
            columnWidth: ".all"
        }
    })
});

// nice select
$(document).ready(function() {
    $('select').niceSelect();
  });

/** google_map js **/
function myMap() {
    var mapProp = {
        center: new google.maps.LatLng(40.712775, -74.005973),
        zoom: 18,
    };
}

//this is for the slider section
document.addEventListener('DOMContentLoaded', function() {
    const slides = [
      {
        title: 'Fast Food Restaurant',
        description: 'Doloremque, itaque aperiam facilis rerum, commodi, temporibus sapiente ad mollitia laborum quam quisquam esse error unde. Tempora ex doloremque, labore, sunt repellat dolore, iste magni quos nihil ducimus libero ipsam.',
        image: 'images/slider1.png'
      },
      {
        title: 'Delicious Meals',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nisl eros, pulvinar facilisis justo mollis, auctor consequat urna.',
        image: 'images/slider2.png'
      },
      {
        title: 'Quality Ingredients',
        description: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        image: 'images/slider3.png'
      }
    ];
  
    let currentIndex = 0;
    const titleElement = document.getElementById('slider-title');
    const descriptionElement = document.getElementById('slider-description');
    const imageElement = document.getElementById('slider-image');
    const indicators = document.querySelectorAll('.carousel-indicators li');
  
    function updateSlide(index) {
      titleElement.textContent = slides[index].title;
      descriptionElement.textContent = slides[index].description;
      imageElement.src = slides[index].image;
      indicators.forEach((indicator, i) => {
        indicator.classList.toggle('active', i === index);
      });
    }
  
    function nextSlide() {
      currentIndex = (currentIndex + 1) % slides.length;
      updateSlide(currentIndex);
    }
  
    indicators.forEach((indicator, index) => {
      indicator.addEventListener('click', () => {
        currentIndex = index;
        updateSlide(index);
      });
    });
  
    setInterval(nextSlide, 3000); // Change slide every 3 seconds
  });


// this is for the our offer menu section
  document.addEventListener('DOMContentLoaded', function() {
    const offers = [
        {
            imgSrc: "images/o1.jpg",
            title: "Tasty Thursdays",
            discount: "20%",
            price: "$12.99"
        },
        {
            imgSrc: "images/o2.jpg",
            title: "Pizza Days",
            discount: "15%",
            price: "$9.99"
        },
        {
            imgSrc: "images/o1.jpg",
            title: "Burger Bonanza",
            discount: "10%",
            price: "$7.99"
        }
    ];

    const offerRow = document.getElementById('offerRow');

    offers.forEach(offer => {
        const colDiv = document.createElement('div');
        colDiv.className = 'col-md-6 col-lg-4';

        const boxDiv = document.createElement('div');
        boxDiv.className = 'box';

        const imgBoxDiv = document.createElement('div');
        imgBoxDiv.className = 'img-box';

        const img = document.createElement('img');
        img.src = offer.imgSrc;
        img.alt = '';

        imgBoxDiv.appendChild(img);

        const detailBoxDiv = document.createElement('div');
        detailBoxDiv.className = 'detail-box';

        const h5 = document.createElement('h5');
        h5.textContent = offer.title;

        const h6 = document.createElement('h6');
        h6.innerHTML = `<span>${offer.discount}</span> Off`;

        const priceP = document.createElement('p');
        priceP.textContent = `Price: ${offer.price}`;

        detailBoxDiv.appendChild(h5);
        detailBoxDiv.appendChild(h6);
        detailBoxDiv.appendChild(priceP);

        boxDiv.appendChild(imgBoxDiv);
        boxDiv.appendChild(detailBoxDiv);

        colDiv.appendChild(boxDiv);

        offerRow.appendChild(colDiv);
    });
});

// this is for the menu section

document.addEventListener('DOMContentLoaded', function() {
  const menuItems = [
      {
          imgSrc: "images/f1.png",
          title: "Delicious Pizza",
          price: 20.00,
          category: "pizza",
          extras: [
              { name: "Drink", price: 2.00 },
              { name: "Chips", price: 1.50 }
          ]
      },
      {
          imgSrc: "images/f2.png",
          title: "Delicious Burger",
          price: 15.00,
          category: "burger",
          extras: [
              { name: "Drink", price: 2.00 },
              { name: "Chips", price: 1.50 }
          ]
      },
      {
          imgSrc: "images/f3.png",
          title: "Delicious Pizza",
          price: 17.00,
          category: "pizza",
          extras: [
              { name: "Drink", price: 2.00 },
              { name: "Chips", price: 1.50 }
          ]
      },
      {
          imgSrc: "images/f4.png",
          title: "Delicious Pasta",
          price: 18.00,
          category: "pasta",
          extras: [
              { name: "Drink", price: 2.00 },
              { name: "Chips", price: 1.50 }
          ]
      },
      {
          imgSrc: "images/f5.png",
          title: "French Fries",
          price: 10.00,
          category: "fries",
          extras: [
              { name: "Drink", price: 2.00 },
              { name: "Chips", price: 1.50 }
          ]
      },
      {
          imgSrc: "images/f6.png",
          title: "Delicious Pizza",
          price: 15.00,
          category: "pizza",
          extras: [
              { name: "Drink", price: 2.00 },
              { name: "Chips", price: 1.50 }
          ]
      },
      {
          imgSrc: "images/f7.png",
          title: "Tasty Burger",
          price: 12.00,
          category: "burger",
          extras: [
              { name: "Drink", price: 2.00 },
              { name: "Chips", price: 1.50 }
          ]
      },
      {
          imgSrc: "images/f8.png",
          title: "Tasty Burger",
          price: 14.00,
          category: "burger",
          extras: [
              { name: "Drink", price: 2.00 },
              { name: "Chips", price: 1.50 }
          ]
      },
      {
          imgSrc: "images/f9.png",
          title: "Delicious Pasta",
          price: 10.00,
          category: "pasta",
          extras: [
              { name: "Drink", price: 2.00 },
              { name: "Chips", price: 1.50 }
          ]
      }
  ];

  const menuRow = document.getElementById('menuRow');
  const totalPriceElement = document.getElementById('totalPrice');
  let totalPrice = 0;

  menuItems.forEach(item => {
      const colDiv = document.createElement('div');
      colDiv.className = `col-sm-6 col-lg-4 all ${item.category}`;

      const boxDiv = document.createElement('div');
      boxDiv.className = 'box';

      const imgBoxDiv = document.createElement('div');
      imgBoxDiv.className = 'img-box';

      const img = document.createElement('img');
      img.src = item.imgSrc;
      img.alt = item.title;

      imgBoxDiv.appendChild(img);

      const detailBoxDiv = document.createElement('div');
      detailBoxDiv.className = 'detail-box';

      const h5 = document.createElement('h5');
      h5.textContent = item.title;

      const extrasDiv = document.createElement('div');
      extrasDiv.className = 'extras';

      item.extras.forEach(extra => {
          const extraDiv = document.createElement('div');
          extraDiv.className = 'extra';

          const label = document.createElement('label');
          label.textContent = `${extra.name} (+$${extra.price.toFixed(2)})`;

          const checkbox = document.createElement('input');
          checkbox.type = 'checkbox';
          checkbox.addEventListener('change', function() {
              if (checkbox.checked) {
                  item.price += extra.price;
              } else {
                  item.price -= extra.price;
              }
              priceP.textContent = `$${item.price.toFixed(2)}`;
              updateTotalPrice();
          });

          extraDiv.appendChild(checkbox);
          extraDiv.appendChild(label);
          extrasDiv.appendChild(extraDiv);
      });

      const priceP = document.createElement('p');
      priceP.className = 'price';
      priceP.textContent = `$${item.price.toFixed(2)}`;

      detailBoxDiv.appendChild(h5);
      detailBoxDiv.appendChild(extrasDiv);
      detailBoxDiv.appendChild(priceP);

      boxDiv.appendChild(imgBoxDiv);
      boxDiv.appendChild(detailBoxDiv);

      colDiv.appendChild(boxDiv);

      menuRow.appendChild(colDiv);

      totalPrice += item.price;
  });

  function updateTotalPrice() {
      totalPrice = menuItems.reduce((sum, item) => sum + item.price, 0);
      totalPriceElement.textContent = totalPrice.toFixed(2);
  }

  updateTotalPrice();
});

// client section owl carousel
$(".client_owl-carousel").owlCarousel({
    loop: true,
    margin: 0,
    dots: false,
    nav: true,
    navText: [],
    autoplay: true,
    autoplayHoverPause: true,
    navText: [
        '<i class="fa fa-angle-left" aria-hidden="true"></i>',
        '<i class="fa fa-angle-right" aria-hidden="true"></i>'
    ],
    responsive: {
        0: {
            items: 1
        },
        768: {
            items: 2
        },
        1000: {
            items: 2
        }
    }
});
