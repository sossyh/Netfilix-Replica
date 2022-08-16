import {
  genrelist,
  actionmovie,
  adventure,
  animation,
  comedy,
  crime,
  documetary,
  drama,
  family,
  fantacy,
  history,
  horor,
  coverurl,
  common,
  APIkey
} from "./APIkey.js";

const generes = document.getElementsByClassName("genere");
const rowfilms = document.getElementsByClassName("rowfilms");
const rowimgfilms = document.querySelectorAll(".rowimgfilms");
const coverindex = document.getElementsByClassName("cover")[0];
const rowelemets = document.getElementsByClassName("rowelements");
const index = document.getElementsByClassName("index")[0];
const coverindexpara=document.getElementById("coverpara");
const coverindextitle=document.getElementById("title");
const detail=document.getElementsByClassName("detail")[0];
const topi=document.getElementById("topi");
const coverdetail = document.getElementsByClassName("coverdetail")[0];
const coverdetailtitle = document.getElementsByClassName("toppartpara")[0];
const recimgs = document.getElementsByClassName("cardimgrec");
const similarimgs = document.getElementsByClassName("cardimg");
const coverdetailpara = document.getElementById("lowerparas");
const recparas = document.getElementsByClassName("lowerparas1");
let movieid;
let loading=false;


const imgurl = "https://image.tmdb.org/t/p/w500";

topi.addEventListener("click",function (){
  detail.style.display = 'none';
  index.style.overflow= 'auto';
  index.style.position= 'static';
})



function displayimgs(jsondata, rowid) {
  let imgsarray = jsondata.results;
  rowfilms[rowid].innerHTML = "";

  for (let i = 0; i < imgsarray.length; i++) {
    let movieimg = document.createElement("img");
    movieimg.classList.add("rowimgfilms");
    movieimg.src =
      "https://image.tmdb.org/t/p/w500" + imgsarray[i].backdrop_path;
    rowfilms[rowid].appendChild(movieimg);
    movieimg.addEventListener("click",function (){
      // 
      
      detail.style.display = 'block';
      let url=common+`movie/${imgsarray[i].id}`+APIkey;
      let movieid=imgsarray[i].id;
      console.log(movieid,i);
      displaymodal(url);
      getmovierecommendations(movieid);
      getsimilarmovie(movieid);
      index.style.overflow= 'hidden';
      index.style.position= 'fixed';
     

      
    });
    
  }
}

function getmovierecommendations(movieid){
  let recommendationurl=common+`movie/${movieid}/recommendations`+APIkey+`&language=en-US&page=1`;
  fetch(recommendationurl).then(data=>{
    data.json().then(
     (jsondata)=>{
      let recommondationsarray = jsondata.results;
      for (let i = 0; i < recimgs.length; i++) {
        recimgs[i].src="https://image.tmdb.org/t/p/w500" + recommondationsarray[i].backdrop_path;
        // recparas[i].innerHTML=recommondationsarray[i].overview;
        console.log(recparas[i]);
      }
   console.log(recommondationsarray);
     });
}
  )}


function getsimilarmovie(movieid){
  let similarmovieurl=common+`movie/${movieid}/similar`+APIkey+`&language=en-US&page=1`;

  fetch(similarmovieurl).then(data=>{
    data.json().then(
     (jsondata)=>{
       let similarsarray = jsondata.results;
      for (let i = 0; i < similarimgs.length; i++) {
        similarimgs[i].src="https://image.tmdb.org/t/p/w500" + similarsarray[i].backdrop_path;

      }
   console.log(similarsarray);
     });
}
  )}


function displaymodal(url){
  fetch(url).then(data=>{
    data.json().then(
     (jsonobject)=>{
      
           let imgurl="https://image.tmdb.org/t/p/w500"+jsonobject.backdrop_path;
           coverdetailpara.innerHTML=jsonobject.overview;
           coverdetailtitle.innerHTML=jsonobject.tagline;
           coverdetail.style.backgroundImage="url(" +imgurl+")";
     }
    );

})
  
}



try {
  fetch(genrelist.genreurl)
    .then((data) => {
      return data.json();
    })
    .then((jsondata) => {
      let generesarray = jsondata.genres;
      for (var i = 0; i < generes.length; i++) {
        generes[i].innerHTML = generesarray[i].name;
      }
      
    });
} catch (error) {
  console.log(error);
}

try {
  fetch(actionmovie.actionmovieurl)
    .then((data) => {
      return data.json();
    })
    .then((jsondata) => {
      displayimgs(jsondata, 0);
    });
} catch (error) {
  console.log(error);
}

try {
  fetch(adventure.adventureurl)
    .then((data) => {
      return data.json();
    })
    .then((jsondata) => {
      displayimgs(jsondata, 1);
    });
} catch (error) {
  console.log(error);
}

try {
  fetch(animation.animationurl)
    .then((data) => {
      return data.json();
    })
    .then((jsondata) => {
      displayimgs(jsondata, 2);
    });
} catch (error) {
  console.log(error);
}

try {
  fetch(comedy.comedyurl)
    .then((data) => {
      return data.json();
    })
    .then((jsondata) => {
      displayimgs(jsondata, 3);
    });
} catch (error) {
  console.log(error);
}

try {
  fetch(crime.crimeurl)
    .then((data) => {
      return data.json();
    })
    .then((jsondata) => {
      displayimgs(jsondata, 4);
    });
} catch (error) {
  console.log(error);
}

try {
  fetch(documetary.documetaryurl)
    .then((data) => {
      return data.json();
    })
    .then((jsondata) => {
      displayimgs(jsondata, 5);
    });
} catch (error) {
  console.log(error);
}

try {
  fetch(drama.dramaurl)
    .then((data) => {
      return data.json();
    })
    .then((jsondata) => {
      displayimgs(jsondata, 6);
    });
} catch (error) {
  console.log(error);
}

try {
  fetch(family.familyurl)
    .then((data) => {
      return data.json();
    })
    .then((jsondata) => {
      displayimgs(jsondata, 7);
    });
} catch (error) {
  console.log(error);
}

try {
  fetch(fantacy.fantacyurl)
    .then((data) => {
      return data.json();
    })
    .then((jsondata) => {
      displayimgs(jsondata, 8);
    });
} catch (error) {
  console.log(error);
}

try {
  fetch(history.historyurl)
    .then((data) => {
      return data.json();
    })
    .then((jsondata) => {
      displayimgs(jsondata, 9);
    });
} catch (error) {
  console.log(error);
}

try {
  fetch(horor.hororurl)
    .then((data) => {
      return data.json();
    })
    .then((jsondata) => {
      displayimgs(jsondata, 10);
    });
} catch (error) {
  console.log(error);
}

fetch(coverurl.url).then(data=>{
    return data.json();
}).then((jsondata)=>{
    let coverobject=jsondata.results;
    let coverposter=coverobject[6];
    let imgurl="https://image.tmdb.org/t/p/w500"+coverposter.backdrop_path;
    coverindexpara.innerHTML=coverposter.overview;
    coverindextitle.innerHTML=coverposter.title;
    coverindex.style.backgroundImage="url(" +imgurl+")";
})


