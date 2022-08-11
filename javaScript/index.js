import { genrelist,actionmovie,adventure,animation,comedy,crime,documetary ,drama,family,fantacy,history,horor} from "./APIkey.js";

const generes = document.getElementsByClassName("genere");
const rowfilms=document.getElementsByClassName("rowfilms");


try{
fetch(genrelist.genreurl).then((data)=>{
    return data.json();
}).then((jsondata)=>{
    let generesarray=jsondata.genres;
    for(var i=0;i<generes.length;i++){
        generes[i].innerHTML=generesarray[i].name;}
    console.log(generesarray[6].name);
})}
catch(error){
    console.log(error);
}

try{
    fetch(actionmovie.actionmovieurl).then((data)=>{
        return data.json();
    }).then((jsondata)=>{
        let imgsarray=jsondata.results;
        let actionimgs=rowfilms[0].getElementsByTagName("img");
        for(var i=0;i<actionimgs.length;i++){
            actionimgs[i].src="https://image.tmdb.org/t/p/w500"+imgsarray[i].backdrop_path;
           }
        
    })}
    catch(error){
        console.log(error);
    }

try{
        fetch(adventure.adventureurl).then((data)=>{
            return data.json();
        }).then((jsondata)=>{
            let imgsarray=jsondata.results;
            let actionimgs=rowfilms[1].getElementsByTagName("img");
            for(var i=0;i<actionimgs.length;i++){
                actionimgs[i].src="https://image.tmdb.org/t/p/w500"+imgsarray[i].backdrop_path;
               }
            
        })}
    catch(error){
            console.log(error);
        }


try{
    fetch(animation.animationurl).then((data)=>{
        return data.json();
            }).then((jsondata)=>{
                let imgsarray=jsondata.results;
                let actionimgs=rowfilms[2].getElementsByTagName("img");
                for(var i=0;i<actionimgs.length;i++){
                    actionimgs[i].src="https://image.tmdb.org/t/p/w500"+imgsarray[i].backdrop_path;
                   }
                
            })}
            catch(error){
                console.log(error);
            }


            try{
                fetch(comedy.comedyurl).then((data)=>{
                    return data.json();
                }).then((jsondata)=>{
                    let imgsarray=jsondata.results;
                    let actionimgs=rowfilms[3].getElementsByTagName("img");
                    for(var i=0;i<actionimgs.length;i++){
                        actionimgs[i].src="https://image.tmdb.org/t/p/w500"+imgsarray[i].backdrop_path;
                       }
                    
                })}
                catch(error){
                    console.log(error);
                }




                try{
                    fetch(crime.crimeurl).then((data)=>{
                        return data.json();
                    }).then((jsondata)=>{
                        let imgsarray=jsondata.results;
                        let actionimgs=rowfilms[4].getElementsByTagName("img");
                        for(var i=0;i<actionimgs.length;i++){
                            actionimgs[i].src="https://image.tmdb.org/t/p/w500"+imgsarray[i].backdrop_path;
                           }
                        
                    })}
                    catch(error){
                        console.log(error);
                    }



                    try{
                        fetch(documetary.documetaryurl).then((data)=>{
                            return data.json();
                        }).then((jsondata)=>{
                            let imgsarray=jsondata.results;
                            let actionimgs=rowfilms[5].getElementsByTagName("img");
                            for(var i=0;i<actionimgs.length;i++){
                                actionimgs[i].src="https://image.tmdb.org/t/p/w500"+imgsarray[i].backdrop_path;
                               }
                            
                        })}
                        catch(error){
                            console.log(error);
                        }

                        try{
                            fetch(drama.dramaurl).then((data)=>{
                                return data.json();
                            }).then((jsondata)=>{
                                let imgsarray=jsondata.results;
                                let actionimgs=rowfilms[6].getElementsByTagName("img");
                                for(var i=0;i<actionimgs.length;i++){
                                    actionimgs[i].src="https://image.tmdb.org/t/p/w500"+imgsarray[i].backdrop_path;
                                   }
                                
                            })}
                            catch(error){
                                console.log(error);
                            }

                            try{
                                fetch(family.familyurl).then((data)=>{
                                    return data.json();
                                }).then((jsondata)=>{
                                    let imgsarray=jsondata.results;
                                    let actionimgs=rowfilms[7].getElementsByTagName("img");
                                    for(var i=0;i<actionimgs.length;i++){
                                        actionimgs[i].src="https://image.tmdb.org/t/p/w500"+imgsarray[i].backdrop_path;
                                       }
                                    
                                })}
                                catch(error){
                                    console.log(error);
                                }

                                try{
                                    fetch(fantacy.fantacyurl).then((data)=>{
                                        return data.json();
                                    }).then((jsondata)=>{
                                        let imgsarray=jsondata.results;
                                        let actionimgs=rowfilms[8].getElementsByTagName("img");
                                        for(var i=0;i<actionimgs.length;i++){
                                            actionimgs[i].src="https://image.tmdb.org/t/p/w500"+imgsarray[i].backdrop_path;
                                           }
                                        
                                    })}
                                    catch(error){
                                        console.log(error);
                                    }

                                    try{
                                        fetch(history.historyurl).then((data)=>{
                                            return data.json();
                                        }).then((jsondata)=>{
                                            let imgsarray=jsondata.results;
                                            let actionimgs=rowfilms[9].getElementsByTagName("img");
                                            for(var i=0;i<actionimgs.length;i++){
                                                actionimgs[i].src="https://image.tmdb.org/t/p/w500"+imgsarray[i].backdrop_path;
                                               }
                                            
                                        })}
                                        catch(error){
                                            console.log(error);
                                        }


                                        
                                            try{
                                                fetch(horor.hororurl).then((data)=>{
                                                    return data.json();
                                                }).then((jsondata)=>{
                                                    let imgsarray=jsondata.results;
                                                    let actionimgs=rowfilms[10].getElementsByTagName("img");
                                                    for(var i=0;i<actionimgs.length;i++){
                                                        actionimgs[i].src="https://image.tmdb.org/t/p/w500"+imgsarray[i].backdrop_path;
                                                       }
                                                    
                                                })}
                                                catch(error){
                                                    console.log(error);
                                                }