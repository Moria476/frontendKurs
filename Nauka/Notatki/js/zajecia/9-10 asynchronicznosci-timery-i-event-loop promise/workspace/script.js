//
// const func = () => {} //deklaracja
// func() // wywołanie fukncji


// setTimeout()

// setTimeout(() => {
//   console.log("Czesc, to ja");
// }, 3000);
//
//
// const sayHelloFunction = () => {
//   console.log('czesc to ja numer 2')
// }
//
// setTimeout(sayHelloFunction, 4000)
//
//
// const getName = () => {
//   return 'Jan'
// }
//
// const name = getName();

//
// const mySetTimeout =  (func, time) => {
//   // odkładam funkcje, żeby ją wykonać po TIME
//
//   return Math.random() * 100;
// }
//
//
// mySetTimeout(() => {
//   console.log('to niby działa')
// }, 3000);
//
//



//
// const timeoutId = setTimeout(() => {
//   console.log('Czesc, to ja')
// }, 2000);
//
// clearTimeout(timeoutId)
//
// console.log(timeoutId)


//
// for(let i = 0; i < 5; i++) {
//   setTimeout(function() {
//     console.log(i);
//   }, 500);
// }
//
// console.log('i', i)


// const box = document.querySelector('.box');
// let marginLeft = 0
//
// setInterval(() => {
//   box.style.transform = `translateX(${marginLeft}px)`
//   marginLeft++;
// }, 10)

//
// //data ma promise
// const data = fetch('https://jsonplaceholder.typicode.com/posts');
// // console.log(73, data)
// // console.log(fetch)
// console.log(1)
// // data.th
//
// data.then((response) => {
//   return response.json()
// }).then(body => {
//   console.log(body)
// })
//
//
// console.log(2)








// promise.then(() => ...).catch(() => ...)
//
// promise.then(() => ..., () => ...)

// // Warstwa tworzenia promise - FETCH
// const isReadyPromise = new Promise((resolve, reject) => {
//   const a = 2;
//   const b = 2;
//
//   setTimeout(() => {
//     // to zajmuje czas
//     const sum = a + b;
//
//     resolve(sum);
//   }, 5000);
// });

// console.log(83, isReadyPromise);



//
// isReadyPromise
//   .then((calculationResult) => {
//     console.log(1, "JUPI UDALO SIE", calculationResult)
//     // throw new Error('lipa')
//   },
//   //   (sum) => {
//   //   console.log(2, 'No jednak nie, ', sum)
//   // }
//   )
//   .catch((reason) => {
//     console.log(3, "O kurde, jednak lipa", reason)
//   })
//   .finally(() => {
//     console.log("TO SIE WYKONA ZAWSZE ")
//   })


//
// const anotherPromise = isReadyPromise
//   .then((sum) => {
//     console.log(sum)
//     return 'aaaaa';
// }).then(() => {
//   return 'bbb';
// }).then(() =>{
//   return 'ccc';
// })
//
// console.log('anotherPromise', anotherPromise)

// anotherPromise.then(result => {
//   cons
// })


//   .then((anotherSum) => {
//   console.log('kolejny then', anotherSum)
// })


//
// try {
//   throw new Error('aaa')
// } catch  {
//   console.log(125, 'oo mam blad')
// }


const timeArea = document.querySelector('#time')
const startButton = document.querySelector('#start')
const stopButton = document.querySelector('#stop')
const resetButton = document.querySelector('#reset')

let timerId;

const displayTimeValue = (timeValue) => {
  console.log(172, timeValue)
  timeArea.innerText = timeValue
}

const startTimer = () => {
  let timeValue = 0;

  timerId = setInterval(() => {
    console.log(179, timeValue)
    timeValue++;
    displayTimeValue(timeValue);
  }, 1000)
}

const stopTimer = () => {
  if (timerId) {
    clearInterval(timerId)
    timerId = null;
  }
}

startButton.addEventListener('click', () => {
  startTimer();
})

stopButton.addEventListener('click', () => {
  stopTimer();
});

resetButton.addEventListener('click', () => {
  displayTimeValue(0);

  stopTimer();
  startTimer();
})








