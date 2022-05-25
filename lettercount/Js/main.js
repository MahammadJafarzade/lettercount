function letter_count(str){
    let obj={};
    for(const letter of str) 
    {
    if(obj[letter]==undefined){
        obj[letter]=1;
    }
    else{
        obj[letter]+=1;
    }
}
return obj;
}
console.log(letter_count('mehemmed')); 