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
// alternative

function pattern1(sign, number) {
    let array = [];
    for (let i = 0; i < number; i++) {
      array.push(sign);
    }
    return array.join("-");
  }
console.log(pattern1("$", 5))
console.log(pattern1("$", 17))
console.log(pattern1("@", 3))

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
//alternative 

const evenNumbersOnly1 = (array) => array.filter((value) => typeof value === "number" && value % 2 === 0);
console.log(evenNumbersOnly1([1, 2, 3, 4, 5, 6, 7]))
console.log(evenNumbersOnly1(["Czasem", 12, "Słońce", 3, "czasem", 600, "deszcz"]))
console.log(evenNumbersOnly1([{}, {}, [], [], "abc", 2]))
console.log(evenNumbersOnly1(["a", null, true, undefined, {}, []]))
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

//alternative

const isPasswordCorrect1 = (password) => (/^(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#\/,.;:?&]{6,}$/.test(password) ? true : false);
console.log(isPasswordCorrect1("infoShare")); // false
console.log(isPasswordCorrect1("qwerty123")); // false
console.log(isPasswordCorrect1("qwerty123!")); // true
console.log(isPasswordCorrect1("!qw12")); // false