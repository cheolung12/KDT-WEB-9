// // setTimeout(code, delay);
// console.log(1);
// setTimeout(() => console.log(2), 2000);
// console.log(3);

// // 콜백함수
// const goMart = () => {
//     console.log("마트에서 뭐사지");
// }

// const pickDrink = (callback) => {
//     setTimeout(()=>{
//         console.log("고민 끝!");
//         product = '제로 콜라';
//         price = 2000;
//         callback(product, price);
//     }, 3000)
// }

// const pay = (product, price) => {
//     console.log(`상품명: ${product}, 가격: ${price}`);
// }

// let product;
// let price;
// goMart();
// pickDrink(pay);

// Promise
// const promise1 = (flag) => {
//   return new Promise((resolve, reject) => {
//     if (flag) {
//       resolve(
//         "promise 상태는 fulfilled! then으로 연결됩니다. \n이 때의 flag가 true입니다."
//       );
//     } else {
//       reject(
//         "promise 상태는 rejected! catch로 연결됩니다.  \n이 때의 flag가 false입니다."
//       );
//     }
//   });
// };

// promise1(true)
//   .then((result) => {
//     console.log(result);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

// promise1(false)
//   .then((result) => {
//     console.log(result);
//   })
//   .catch(console.log);

// promise 사용
const goMart = () => {
    console.log("마트에서 뭐사지");
}

const pickDrink = () => {
    return new Promise((res, rej) => {
        setTimeout(()=>{
            console.log("고민 끝!");
            product = '제로 콜라';
            price = 2000;
            res();
    }, 2000);
    });
}

const pay = () => {
    console.log(`상품명: ${product}, 가격: ${price}`);
}

// let product;
// let price;
// goMart();
// pickDrink().then(pay);
const exec = async () => {
    goMart();
    await pickDrink();
    pay();
}
exec();




const add = (n1, n2) => {
    return new Promise((resolve, reject) => {
        let result = n1 + n2;
        resolve(result);
    });
}
const mul = (n) => {
    return new Promise((resolve, reject) => {
        let result = n * 2;
        resolve(result);
    });
}
const sub = (n) => {
    return new Promise((resolve, reject) => {
        let result = n - 1;
        resolve(result);
    });
}

add(4,3)
    .then((res) => {
        console.log(`1 : ${res}`);
        return mul(res);
    })
    .then((res) => {
        console.log(`2 : ${res}`);
        return sub(res);
    })
    .then((res) => {
        console.log(`3 : ${res}`);
    });

