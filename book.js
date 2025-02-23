

document.querySelector(".heart").addEventListener("click", function () {
    document.querySelector(".heart2").style.display = "block"
})
document.querySelector(".btn3").addEventListener("click", function () {
    document.querySelector(".heart2").style.display = "none"
           })

var deyer;
document.querySelector(".inp1").addEventListener("keyup", function () {
    deyer = document.querySelector(".inp1").value
    document.querySelectorAll(".book1 ").forEach(x => {
        if (x.innerText.toLowerCase().includes(deyer.toLowerCase())) {
            x.style.display = "block"
        }
        else {
            x.style.display = "none"
        }
    });
})

var array = [
    {
        img: "https://m.media-amazon.com/images/I/41IV28joucL._SY445_SX342_.jpg",
        p: "Carrying the Fire",
        i: "fa-regular fa-heart heart1",
        btn: "X",
        buton: "X"
    },
    {
        img: "https://m.media-amazon.com/images/I/514dtCwG-sL.jpg",
        p: "If the sun dies",
        i: "fa-regular fa-heart heart1",
        btn: "X",
        buton: "X"
    },
    {
        img: "https://m.media-amazon.com/images/I/71Ip5n46MML._AC_UY327_FMwebp_QL65_.jpg",
        p: "How Apollo Flew to the Moon",
        i: "fa-regular fa-heart heart1",
        btn: "X",
        buton: "X"
    },
    {
        img: "https://m.media-amazon.com/images/I/71+XY62xzaL._AC_UY327_FMwebp_QL65_.jpg",
        p: "Sputnik and the Soviet Space Challenge",
        i: "fa-regular fa-heart heart1",
        btn: "X",
        buton: "X"
    },
    {
        img: "https://m.media-amazon.com/images/I/81jOV4azC0L._AC_UY327_FMwebp_QL65_.jpg",
        p: "Packing for Mars",
        i: "fa-regular fa-heart heart1",
        btn: "X",
        buton: "X"
    },
    {
        img: "https://m.media-amazon.com/images/I/71lsmzR9jhL._AC_UY327_FMwebp_QL65_.jpg",
        p: "The Stars",
        i: "fa-regular fa-heart heart1",
        btn: "X",
        buton: "X"
    },
    {
        img: "https://m.media-amazon.com/images/I/91hJL3n0IbL._AC_UY327_FMwebp_QL65_.jpg",
        p: "Galaxy Under Siege",
        i: "fa-regular fa-heart heart1",
        btn: "X",
        buton: "X"
    },
    {
        img: "https://m.media-amazon.com/images/I/81a507YmldL._AC_UY327_FMwebp_QL65_.jpg",
        p: "An Insider's Guide to Leaving Planet Earth",
        i: "fa-regular fa-heart heart1",
        btn: "X",
        buton: "X"
    }


]

array.forEach((x, i) => {
    document.querySelector(".books").innerHTML += `
     <div class="book1">
     <div class="yuxari">
     <img src="${x.img}" alt="">
      </div>
            <div class="sol1">
             <p>${x.p}</p>
                </div> 
                <div class="sag1">
              <span> <i class="fa-regular fa-heart heart1"  onclick="funk(${i})"></i></span>
                  </div>
               </div>
     `
})

function funk(i) {

    document.querySelector(".heart2").innerHTML += `
         <div class="heart3">
         <div class="left">
         <img src="${array[i].img}" alt="">
       </div>
       <div class="right">
            <h1>${array[i].p}</h1>
            <button class="btn1">${array[i].btn}</button>
       </div>
          </div>
          `

          document.querySelector(".btn3").addEventListener("click", function () {
            document.querySelector(".heart2").style.display = "none"
                   })
        
    $(".btn1").click(function () {
        $(this).parents(".heart3").hide()

    })

}

$(".bar").click(function () {
    $(".ekran-bars").css("display","flex")
  })
  $(".btn-bars").click(function () {
    $(".ekran-bars").hide()
  })

  var a = 0;
document.querySelectorAll(".heart1").forEach(x => {
    x.addEventListener("click", function () {
        document.querySelector(".spanh span").innerHTML = ++a;
         document.querySelectorAll(".btn1").forEach(x => {
        x.addEventListener("click", function () {
            document.querySelector(".spanh span").innerHTML = --a;
            })
        });
        })
    });


    
   
    

