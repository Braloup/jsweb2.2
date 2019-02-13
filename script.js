// import some polyfill to ensure everything works OK
import "babel-polyfill"

// import bootstrap's javascript part
import 'bootstrap';

import axios from 'axios';

/*
  Put the JavaScript code you want below.
*/

console.log("Hey look in your browser console. It works!");



let inside = document.querySelector(".inside");
//fonction asynchrone car sinon, il ne recharge pas l'API
async function getallBeers() {
  try {
    let response = await axios.get('https://api.punkapi.com/v2/beers/') //then attend que await soit fini
    for (var i = 0; i < response.data.length; i++) {

      let bName = response.data[i].name;
      let bTag = response.data[i].tagline;
      let bYear = response.data[i].first_brewed;
      let bImg = response.data[i].image_url;

      let li = document.createElement("li");
      li.className = "beerCase";

      let h2 = document.createElement("h2");
      let h3 = document.createElement("h3");
      let p = document.createElement("p");

      let img = new Image();

      let beerName = document.createTextNode(bName);
      let beerTag = document.createTextNode(bTag);
      let beerBrew = document.createTextNode(bYear);

      img.src = bImg;

      h2.appendChild(beerName);
      h3.appendChild(beerTag);
      p.appendChild(beerBrew);
      li.appendChild(h2);
      li.appendChild(h3);
      li.appendChild(p);
      li.appendChild(img);
      inside.appendChild(li);
    }
  } catch (error) {
    console.error(error);
  }
}

getallBeers();
