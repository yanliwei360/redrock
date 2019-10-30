function getarr(arr){

       for(var i=0;i<arr.length-1;i++){
    
           for(var k=i+1;k<arr.length;k++){
    
               if(arr[i]>arr[k]){
    
                  var temp =arr[i];
    
                    arr[i]=arr[k];
    
                    arr[k]=temp;
    
              }
    
          }
    
       }
       return arr
    }
    
    console.log(getarr([1,0,2,3,100,55,44,66,11]))
   