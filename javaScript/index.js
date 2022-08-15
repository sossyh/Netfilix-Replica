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
const coverdetailpara = document.getElementById("lowerparas");
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
      // movieid=imgsarray[i].id;
      console.log(movieid,i);
      detail.style.display = 'block';
      let url=common+`movie/${imgsarray[i].id}`+APIkey;

      displaymodal(url);
      index.style.overflow= 'hidden';
      index.style.position= 'fixed';
     

      
    });
    
  }
}


function displaymodal(url){
  fetch(url).then(data=>{
    data.json().then(
     (jsonobject)=>{
       console.log(jsonobject);
      //  let coverobject=jsondata.results;
      //   let coverposter=coverobject[i];
           let imgurl="https://image.tmdb.org/t/p/w500"+jsonobject.backdrop_path;
           coverdetailpara.innerHTML=jsonobject.overview;
           coverdetailtitle.innerHTML=jsonobject.tagline;
           coverdetail.style.backgroundImage="url(" +imgurl+")";
     }
    );


//   fetch(coverurl.url).then(data=>{
//     return data.json();
// }).then((jsondata)=>{
//     let coverobject=jsondata.results;
//     let coverposter=coverobject[13];
//     let imgurl="https://image.tmdb.org/t/p/w500"+coverposter.backdrop_path;
//     coverdetailpara.innerHTML=coverposter.overview;
//     // coverdetailtitle.innerHTML=coverposter.title;
//     coverdetail.style.backgroundImage="url(" +imgurl+")";
})
  
}
rowimgfilms.forEach(rowimg =>{
  rowimg.addEventListener("click",()=>{
    console.log("hi");
  })
});



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


