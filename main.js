//Antipodal Average

/*Given an array, return a shorter array following these steps:
- Split the array into two equal parts*. If unequal, remove the middle element to obtain two equal arrays.
- Sum each number of the first part with the inverse numbers of the second part.
- Divide each number of the resulting array by 2.
 

Example:
- For the array `[1,2,3,5,22,6]`, the result should be `[3.5, 12, 4]`.*/

const array = [1,2,3,7,8,7,5,22,6]
const array2 =[]
const mitad = Math.floor(array.length / 2);

function Antipodal_avarage(array){
    const primerParte = array.slice(0, mitad);
    const segundaParte = array.slice(mitad);
    const segundaParteVolteado = segundaParte.reverse();
    for(let i=0;i<mitad;i++){
        array2.push((primerParte[i]+segundaParteVolteado[i])/2);
    }console.log(array2)
}

if(array.length % 2 == 0){
    Antipodal_avarage(array)
}else{
    array.splice(mitad,1);
    Antipodal_avarage(array)
}