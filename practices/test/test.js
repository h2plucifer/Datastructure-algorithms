 
/* 
     *
    ***
   *****
  *******
   *****
    ***
     *
*/

//UPSIDE PYRAMID  //n=5
for(let i=0;i<5;i++){
    let spaces="";
    let stars="";
    //FOR STARS
    for(let j=0;j<2*i+1;j++){
        stars+="*";
    }
    for(let k=4;k>i;k--){
        spaces+=" ";
    }
    stars=spaces+stars;
    console.log(stars);
}

//DOWNSIDE PYRAMID
for(let i=5;i>0;i--){
    let spaces="";
    let stars="";
    //STARS
    for(let j=0;j<2*i-1;j++){
        stars+="*";
    }
    //SPACES
    for(k=4;k>=i;k--){
        spaces+=" ";
    }
    stars=spaces+stars;
    console.log(stars)
}



