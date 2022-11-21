//task1
let count=0;
let star="*";
do{
console.log(star);
star+="*";
count++;
}while(count < 5);

//task2

const pattern=(char, int) =>{
let count = 1;
let word=char;
while(count < int)
{
    word+="-"+char;
    count++;
    };
    console.log(word);
}
pattern("$", 5);
pattern("$", 17);
pattern("@", 3);

//task3

const evenNumbersOnly = (array) =>{
    arrayEven=[];
    for(i=0; i<array.length; i++){
    if(array[i]%2===0&&array[i]!==0&&array[i]!==null){
    arrayEven.push(array[i]);
    }
}
    const result = arrayEven.filter(value => JSON.stringify(value) !== '[]');
    return result;
}


console.log(evenNumbersOnly([1, 2, 3, 4, 5, 6, 7])); 
console.log(evenNumbersOnly(["Czasem", 12, "Słońce", 3, "czasem", 600, "deszcz"])); 
console.log(evenNumbersOnly([{}, {}, [], [], "abc", 2])); 
console.log(evenNumbersOnly(["a", null, true, undefined, {}, []])); 

//task 4



//2. zawiera przynajmniej jeden znak specjalny
//3. zawiera przynajmniej jedną liczbę


const isPasswordCorrect = (password) => {
const array =password.split("");
let isValidLength = false;
let isValidNumber = false;
let isValidChar = false;

//if statement is there minimal lenght of characters in our password
if(password.length>=6){
    isValidLength=true;
}
//loop checking is there any numbers in our password
for(i=0; i<array.length;i++){
    if(!(isNaN(+array[i]))){
        isValidNumber=true;
        //array[i]=(+array[i]); 
    }
} 
//loop checking is there any special characters in our password
for(j=0; j<array.length;j++){
    if(array[j]===" "||
        array[j]==="!"||
        array[j]==='"'||
        array[j]==="#"||
        array[j]==="$"||
        array[j]==="%"||
        array[j]==="&"||
        array[j]==="'"||
        array[j]==="("||
        array[j]===")"||
        array[j]==="*"||
        array[j]==="+"||
        array[j]===","||
        array[j]==="-"||
        array[j]==="."||
        array[j]==="/"||
        array[j]===":"||
        array[j]===";"||
        array[j]==="<"||
        array[j]==="="||
        array[j]===">"||
        array[j]==="?"||
        array[j]==="@"||
        array[j]==="["||
        array[j]==="\\"||
        array[j]==="]"||
        array[j]==="^"||
        array[j]==="_"||
        array[j]==="`"||
        array[j]==="{"||
        array[j]==="|"||
        array[j]==="{"||
        array[j]==="}"||
        array[j]==="~"
    ){
        isValidChar=true;
    }
} 
if(isValidLength===true&&isValidNumber===true&&isValidChar===true){
console.log("true")    
return true;
}else
{
    console.log("false") 
    return false;
}
}

isPasswordCorrect("infoShare"); // false
isPasswordCorrect("qwerty123"); // false
isPasswordCorrect("qwerty123!"); // true
isPasswordCorrect("!qw12"); // false
