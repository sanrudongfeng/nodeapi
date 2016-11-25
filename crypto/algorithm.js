/*
function  bubbleSort(arr){
    var len =arr.length,temp;
    for(var i=0;i<len-1;i++){
        for(var j=i+1;j<len;j++){
            if(arr[i]>arr[j]){
                temp = arr[i];
                arr[i] = arr[j];
                arr[j]=temp;
            }
        }
    }
    return arr;

}


var quickSort = function(arr) {
    console.time('2.快速排序耗时');
    if (arr.length <= 1) {
        return arr;
    }
    var left = [];
    var right = [];
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] < arr[0]) {
            left.push(arr[i]);
        } else {
            right.push(arr[i]);
        }
        console.timeEnd('2.快速排序耗时');
        console.log(quickSort(right));
        return quickSort(left).concat(1).concat(quickSort(right));
    }
}


var arr=[2,4,3,1];
var newarr =quickSort(arr);
console.log(newarr);*/


// new Promise((res,rej)=>{
//     res('step1');
// }).then(function(data){
//     console.log(data);
//     return {then:function(resolve,reject){
//         console.log('jinlai');
//         resolve('xxx');
//     }}
// }).then(function(data){
//     console.log(data);
// })

//var fs =require('fs');
setTimeout(function(){
    console.log(1)
},0);
/*
fs.readFile('./chiper.js',function(err,result){
    console.log('jinlai');
})
*/

setImmediate(function(){
    console.log(2)
});

// console.log('2');
// process.nextTick(function(){
//     console.log(0)
// })