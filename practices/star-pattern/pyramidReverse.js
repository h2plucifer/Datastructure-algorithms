/*

*********
 *******
  *****
   ***
    *
    * 
 */


for(i=5;i>0;i--){
    let temp="";
    let spaces="";
    let res="";
    for(j=1;j<=2*i-1;j++){
        temp+="*";
    }
    for(k=5;k>i;k--){
        spaces+=" ";
    }
    res=spaces+temp;

    console.log(res);
}