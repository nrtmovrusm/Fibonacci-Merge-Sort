// function fibs(number) {
//     let list = [0, 1];
//     let num1 = 0;
//     let num2 = 1;

//     for (let i = 0; i< number-2; i++) {
//         let num3 = num1 + num2;
//         console.log(num3);
//         list.push(num3);
//         num1 = num2; 
//         num2 = num3;
//     }
//     return list;
// }


// function fibsRec(number) {
//     let list = [];

//     // gives Fibonacci number at nth index 
//     function buildFibs(n) {
//         let value = 0;
//         if (n <= 0) {
//             return;
//         }
//         if (n == 1) {
//             return value += 0;
//         } else if (n == 2) {
//             return value += 1;
//         }
//         return value += (buildFibs(n-1) + buildFibs(n-2));
//     }

//     for (let i=0; i<number; i++) {
//         list.push(buildFibs(i+1));
//     }
//     return list;
// }

