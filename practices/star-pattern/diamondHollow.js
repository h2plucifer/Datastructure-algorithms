/*

    *
   ***
  *****
 *******
*********
*********
 *******
  *****
   ***
    *
    * 

*/
for(i=0;i<5;i++){
    let temp="";
    let spaces="";
    let res="";
    for(j=5;j>i;j--){
        spaces+=" ";
    }
    for(k=0;k<=2*i-1;k++){
        if(k==0||k==2*i-2)
        temp+="*";
        else temp+=" ";
    }
    res=spaces+temp;

    console.log(res);
}

for(i=5;i>0;i--){
    let temp="";
    let spaces="";
    let res="";
    for(j=1;j<=2*i-1;j++){
       if(j==1||j==2*i-1)
        temp+="*";
         else
         temp+=" ";
    }
    for(k=5;k>i;k--){
        spaces+=" ";
    }
    res=spaces+temp;

    console.log(res);
}