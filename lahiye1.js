var swiper = new Swiper(".mySwiper", {
  slidesPerView: 3,
  spaceBetween: 30,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});


var array = [
  {
    h1:"MERCURY",
    sekil: "./mercury-removebg-preview.png",
    basliq: "MERCURY",
    btn: "X",
    aciqlama: "It is the smallest planet in the solar system and the closest to the Sun. Mercury has a very thin atmosphere that almost cannot protect the heat. For this reason, during the alternation of night and day, sharp temperature differences occur on the surface of the planet. Near the equator of Mercury, the temperature reaches 427 °C during the day, but at night the temperature can drop to -173 °C. The surface of Mercury looks like the surface of the Moon. Here, like on the Moon, there are vast basalt seas and heavy impact craters. Geological activity has ceased on the surface of Mercury for billions of years. Basic information about the geology of Mercury was first studied in detail in 1975 by the Mariner 10 spacecraft and observations from Earth. Until now, Mercury was the least studied of the inner planets.",
    img1:"https://upload.wikimedia.org/wikipedia/az/thumb/a/a7/Merkurinin_daxili_qurulusu.jpg/450px-Merkurinin_daxili_qurulusu.jpg",
    img2:"https://upload.wikimedia.org/wikipedia/commons/thumb/c/cb/Spider_crater_on_planet_mercury.jpg/375px-Spider_crater_on_planet_mercury.jpg",
    img3:"https://upload.wikimedia.org/wikipedia/commons/thumb/2/2b/PIA19421-Mercury-Craters-MunchSanderPoe-20150416.jpg/300px-PIA19421-Mercury-Craters-MunchSanderPoe-20150416.jpg"
  },
  {
    h1: "VENUS",
    sekil: "./venus-removebg-preview.png",
    basliq: "VENUS",
    btn: "X",
    aciqlama: "Venus is one of the four Earth-like planets in the Solar System. Like the Earth-like inner planets, Venus is rocky. It is often referred to as Earth's sister or twin because it resembles Earth in size and mass. The diameter of Venus is 12,092 kilometers, which is 650 kilometers less than the diameter of the Earth. The mass of Venus is 81.5% of the mass of the Earth. The natural conditions of Venus are quite radical compared to Earth. 96.5% of its dense atmosphere is carbon dioxide, and 3.5% is nitrogen. Most of the surface of Venus was formed as a result of volcanic activities. Venus has several times more volcanoes than Earth, and 167 of them are large volcanoes over 100 kilometers in diameter. The only example of a volcanic complex of this magnitude on Earth is the island of Hawaii. This is not because Venus is more volcanically active than Earth, but because its crust is older. The Earth's oceanic crust is about 100 million years old because it is constantly being renewed at the boundaries of the plates. However, the surface of Venus is estimated to be 300-600 million years old.",
    img1:"https://upload.wikimedia.org/wikipedia/commons/thumb/7/7a/PIA00084_Eistla_region_pancake_volcanoes.jpg/330px-PIA00084_Eistla_region_pancake_volcanoes.jpg",
    img2:"https://upload.wikimedia.org/wikipedia/commons/thumb/6/60/PIA00103_Venus_-_3-D_Perspective_View_of_Lavinia_Planitia.jpg/330px-PIA00103_Venus_-_3-D_Perspective_View_of_Lavinia_Planitia.jpg",
    img3:"https://upload.wikimedia.org/wikipedia/commons/thumb/e/e8/InteriorOfVenus.svg/330px-InteriorOfVenus.svg.png"
  },
  {
    h1:"EARTH",
    sekil: "./earth-removebg-preview.png",
    basliq: "EARTH",
    btn: "X",
    aciqlama: " The third planet in the solar system due to its proximity to the sun and the only celestial body where life has been detected. According to radiometric dating and other evidence, the Earth was formed 4.5 billion years ago. The Earth's gravitational force interacts with other objects in the universe, especially the Moon and the Sun, which are Earth's only natural satellites. The Earth moves around the Sun in its orbit for 365 days. During this period, the Earth rotates around its axis 365 (366) times. The Earth's outer layer (lithosphere) has been divided into several hard tectonic plates that have been moving along the surface for millions of years. About 29% of the Earth's surface is land, consisting of continents and islands. The remaining 71% is covered by water, mainly the world's oceans, but also lakes, rivers and other fresh water sources that together form the hydrosphere. Most of the Earth's polar regions are covered in ice, including the Antarctic ice sheet and Arctic sea ice. Earth's inner, solid, metallic core and outer liquid core, which creates the earth's magnetic field, are constantly active, as well as the mantle layer, which moves tectonic plates.",
    img1:"https://upload.wikimedia.org/wikipedia/commons/thumb/1/15/Thin_Line_of_Earth%27s_Atmosphere_and_the_Setting_Sun.jpg/324px-Thin_Line_of_Earth%27s_Atmosphere_and_the_Setting_Sun.jpg",
    img2:"https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Felix_2007-09-03_1138Z.jpg/330px-Felix_2007-09-03_1138Z.jpg",
    img3:"https://upload.wikimedia.org/wikipedia/commons/thumb/b/be/Top_of_Atmosphere.jpg/330px-Top_of_Atmosphere.jpg"
  },
  {
    h1:"MARS",
    sekil: "./mars-removebg-preview.png",
    basliq: "MARS",
    btn: "X",
    aciqlama: " The fourth planet of the solar system in terms of proximity to the Sun and the second smallest after Mercury. Named after the Roman god of war, the planet's surface is rich in iron oxide, giving it a reddish appearance, and it is often described as the 'red planet'. Mars is a terrestrial (mostly silicate rocks and metals) planet with a thin atmosphere and surface features reminiscent of both lunar impact craters and Earth's volcanoes, valleys, deserts, and polar ice caps. Mars' rotation period and seasonal cycles are similar to Earth's; the tilt of the axis creates the seasons. Mars is home to the second highest known mountain in the Solar System (the first highest on the planet), Mount Olympus, and one of the largest canyons, Valles Marineris. The smooth Borealis Basin in the Northern Hemisphere covers 40% of the planet and may be a feature formed after a giant collision. Mars has two moons: Phobos and Deimos. They are small and irregularly formed satellites. These moons may be asteroids captured by the Martian trojan 5261 Eureka.",
     img1:"https://upload.wikimedia.org/wikipedia/commons/thumb/7/7d/Mars_atmosphere.jpg/330px-Mars_atmosphere.jpg",
    img2:"https://upload.wikimedia.org/wikipedia/commons/thumb/0/0c/Mars_-_August_30_2021_-_Flickr_-_Kevin_M._Gill.png/435px-Mars_-_August_30_2021_-_Flickr_-_Kevin_M._Gill.png",
    img3:"https://upload.wikimedia.org/wikipedia/commons/thumb/d/dc/PIA17944-MarsCuriosityRover-AfterCrossingDingoGapSanddune-20140209.jpg/330px-PIA17944-MarsCuriosityRover-AfterCrossingDingoGapSanddune-20140209.jpg"
  },
  {
    h1:"JUPITER",
    sekil: "./jupiter-removebg-preview.png",
    basliq: "JUPITER",
    btn: "X",
    aciqlama: " Jupiter is the fifth planet from the Sun and the largest in the Solar System. It is a gas giant with a mass more than two and a half times that of all the other planets in the Solar System combined, and slightly less than one one-thousandth the mass of the Sun. Jupiter orbits the Sun at a distance of 5.20 AU (778.5 Gm) with an orbital period of 11.86 years. Jupiter is the third brightest natural object in the Earth's night sky after the Moon and Venus, and it has been observed since prehistoric times. It was named after Jupiter, the chief deity of ancient Roman religion.Jupiter was the first planet to form, and its inward migration during the primordial Solar System impacted much of the formation history of the other planets. Jupiter is primarily composed of hydrogen (90% by volume), followed by helium, which makes up a quarter of its mass and a tenth of its volume. The ongoing contraction of Jupiter's interior generates more heat than the planet receives from the Sun. ",
     img1:"https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Jupiter_New_Horizons.jpg/435px-Jupiter_New_Horizons.jpg",
    img2:"https://upload.wikimedia.org/wikipedia/commons/thumb/c/cb/Spider_crater_on_planet_mercury.jpg/375px-Spider_crater_on_planet_mercury.jpg",
    img3:"https://upload.wikimedia.org/wikipedia/commons/thumb/7/7a/Jupiter_and_Europa_%28NIRCam%29_Commissioning_Image.jpg/255px-Jupiter_and_Europa_%28NIRCam%29_Commissioning_Image.jpg"
  },
  {
    h1:"SATURN",
    sekil: "./saturn-removebg-preview.png",
    basliq: "SATURN",
    btn: "X",
    aciqlama: "Saturn has a remarkable ring system consisting of ice particles, rock fragments and cosmic dust, with nine continuous rings and three discontinuous bow-shaped ones. Saturn has 82 discovered moons, of which 53 are officially named. This list does not include the relatively large particles in the rings. Saturn's largest moon is Titan, which is the second largest moon in the Solar System after Ganymede. An important feature of Titan, which is larger than Mercury due to its size, is that it has a remarkable atmosphere. Saturn's upper atmosphere is made of ammonia crystals, so its color appears light yellow. Electric currents in the metallic hydrogen layer are thought to generate the planet's magnetic field.Although this flux is weaker than that of the Earth, due to the large size of the planet, its magnetic moment is 580 times greater than the Earth's magnetic moment. The strength of Saturn's magnetic field is one-twentieth the strength of Jupiter's magnetic field.",
    img1:"https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/Saturn_from_Cassini_Orbiter_%282007-01-19%29.jpg/330px-Saturn_from_Cassini_Orbiter_%282007-01-19%29.jpg",
    img2:"https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/PIA17218_%E2%80%93_A_Farewell_to_Saturn%2C_Annotated_Version.jpg/1200px-PIA17218_%E2%80%93_A_Farewell_to_Saturn%2C_Annotated_Version.jpg",
    img3:"https://upload.wikimedia.org/wikipedia/commons/thumb/2/2d/Saturn_diagram.svg/330px-Saturn_diagram.svg.png"
  },
  {
    h1:"URANUS",
    sekil: "./uran-removebg-preview.png",
    basliq: "URANUS",
    btn: "X",
    aciqlama: "The seventh planet in terms of proximity to the Sun. It is the third largest planet in the solar system by radius and fourth by mass. The composition of Uranus is the same as that of Neptune, and both contain the same chemical elements, which differentiate them from the large gas giants Jupiter and Saturn. For this reason, scientists classify Uranus and Neptune as 'ice giants' to distinguish them from gas giants. Although Uranus' atmosphere is similar to that of Saturn and Jupiter in its composition of mostly hydrogen and helium, it contains more ice along with ammonia, methane, and other hydrocarbons.Uranus has the coldest atmosphere in the Solar System with a minimum temperature of 49 K (−224 °C; −371 °F). owns Uranus has a complex layered cloud structure. The clouds in the lowest layer are thought to contain water, and the clouds in the uppermost layer are thought to contain methane. The interior of Uranus is mainly composed of ice and rock.",
    img1:"https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/Uranus_Voyager2_color_calibrated.png/435px-Uranus_Voyager2_color_calibrated.png",
    img2:"https://upload.wikimedia.org/wikipedia/commons/thumb/f/fe/Uranus-intern-en.png/675px-Uranus-intern-en.png",
    img3:"https://upload.wikimedia.org/wikipedia/commons/thumb/0/0e/Uranus_clouds.jpg/255px-Uranus_clouds.jpg"
  },
  {
    h1:"NEPTUNE",
    sekil: "./neptun-removebg-preview.png",
    basliq: "NEPTUNE",
    btn: "X",
    aciqlama: "Part of the group of giant planets, Neptune occupies the fourth place in the solar system in terms of diameter and the third place in terms of mass. The mass of Neptune is 17 times that of Earth. This indicator corresponds to 15 times in Uranus, which is considered the twin of Neptune. Neptune is 30.1 AU from the Sun (4.50×109 km) and completes its orbit around the Sun in 164.8 years. The name Neptune comes from Roman mythology. Neptune was considered the god of the sea in Roman mythology. The planet's astronomical symbol ♆ is also related to the three-pronged spear depicted in Neptune's hand. Neptune cannot be seen with the naked eye, and it is the first planet in the Solar System to be predicted by mathematical calculations and found by empirical observations. Unlike the gas giants Jupiter and Saturn, Neptune's composition is similar to that of Uranus. While Neptune's atmosphere is mainly composed of Hydrogen and Helium, Hydrocarbons and Nitrogen, similar to Jupiter and Saturn, it differs from them in relatively high amounts of Water, Ammonia and Methane ice.",
    img1:"https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/Neptune_Voyager2_color_calibrated%2C_brightened.png/338px-Neptune_Voyager2_color_calibrated%2C_brightened.png",
    img2:"https://upload.wikimedia.org/wikipedia/commons/thumb/f/fd/Neptune_diagram.svg/450px-Neptune_diagram.svg.png",
    img3:"https://upload.wikimedia.org/wikipedia/commons/thumb/8/8c/Neptune_storms.jpg/375px-Neptune_storms.jpg"
  }
]

array.forEach((x, i) => {
  document.querySelector(".swiper-wrapper").innerHTML += `
   <div class="swiper-slide" onclick="funk(${i})">
               <img src="${x.sekil}" alt="">
               <div class="asagi">
               <h1>${x.h1}</h1>
               </div>
             </div>
   
   `
})

function funk(i) {
  document.querySelector(".modal").style.display = "block"
  document.querySelector(".modal").innerHTML = `
       <div class="modal1">
       <h1>${array[i].basliq}</h1>
        <p>${array[i].aciqlama}</p>
       <button class="btn2">${array[i].btn}</button>
       <div class="modal2">
       <img src="${array[i].img1}" alt="">
       <img src="${array[i].img2}" alt="">
       <img src="${array[i].img3}" alt="">
       </div>
        </div>
        `
  document.querySelector(".btn2").addEventListener("click", function () {
    document.querySelector(".modal").style.display = "none";
  })
}


document.addEventListener("scroll", function () {
  console.log(window.scrollY);
  // var element=document.querySelectorAll(".star1")

  if (window.scrollY > 2200) {
    document.querySelectorAll(".div7 .btn1").forEach(x => {
      x.style.animationName = "animasi1"
    });
  }
  else {
    document.querySelectorAll(".div7 .btn1").forEach(x => {
      x.style.animationName = ""
    });
  }
})
document.addEventListener("scroll", function () {
  console.log(window.scrollY);
  // var element=document.querySelectorAll(".star1")

  if (window.scrollY > 2060) {
    document.querySelectorAll(".p1 p").forEach(x => {
      x.style.animationName = "animasi"
    });
  }
  else {
    document.querySelectorAll(".p1 p").forEach(x => {
      x.style.animationName = ""
    });
  }
})
document.addEventListener("scroll", function () {
  console.log(window.scrollY);
  // var element=document.querySelectorAll(".star1")

  if (window.scrollY > 130) {
    document.querySelectorAll(".div2 h1").forEach(x => {
      x.style.animationName = "animasiya1"
    });
  }
  else {
    document.querySelectorAll(".div2 h1").forEach(x => {
      x.style.animationName = ""
    });
  }
})

document.addEventListener("scroll", function () {
  console.log(window.scrollY);
  // var element=document.querySelectorAll(".star1")

  if (window.scrollY > 190) {
    document.querySelectorAll(".div2 p").forEach(x => {
      x.style.animationName = "animasiya2"
    });
  }
  else {
    document.querySelectorAll(".div2 p").forEach(x => {
      x.style.animationName = ""
    });
  }
})


document.addEventListener("scroll", function () {
  console.log(window.scrollY);
  // var element=document.querySelectorAll(".star1")

  if (window.scrollY > 1780) {
    document.querySelectorAll(".h11 h1").forEach(x => {
      x.style.animationName = "animasiya3"
    });
  }
  else {
    document.querySelectorAll(".h11 h1").forEach(x => {
      x.style.animationName = ""
    });
  }
})

document.addEventListener("scroll", function () {
  console.log(window.scrollY);
  // var element=document.querySelectorAll(".star1")

  if (window.scrollY > 1890) {
    document.querySelectorAll(".h2 h1").forEach(x => {
      x.style.animationName = "animasiya4"
    });
  }
  else {
    document.querySelectorAll(".h2 h1").forEach(x => {
      x.style.animationName = ""
    });
  }
})

document.addEventListener("scroll", function () {
  console.log(window.scrollY);
  // var element=document.querySelectorAll(".star1")

  if (window.scrollY > 930) {
    document.querySelectorAll(".blackh1 h1").forEach(x => {
      x.style.animationName = "animasiya8"
    });
  }
  else {
    document.querySelectorAll(".blackh1 h1").forEach(x => {
      x.style.animationName = ""
    });
  }
})




document.querySelector(".sag button").addEventListener("click",function () {
  document.querySelector(".log").style.display="block"
})
document.querySelector(".btn4").addEventListener("click",function () {
  document.querySelector(".log").style.display="none"
})

document.querySelector(".btn3").addEventListener("click",function () {
  document.querySelector(".log").style.display="none"
})


$(".bar").click(function () {
  $(".ekran-bars").css("display","flex")
})
$(".btn-bars").click(function () {
  $(".ekran-bars").hide()
})

  

$(".videos video").trigger('pause');


$(window).scroll(function (){
  if (this.scrollY >= 1400 && this.scrollY <= 2200) {
      $(".stars video").trigger('play');
  } else {
      $(".stars video").trigger('pause');
  }
});


