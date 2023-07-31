function call(name) {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log(name);
      resolve(name);
    }, 1000);
    
  });
}

function back() {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("back");
      resolve("back");
    }, 1000);
    
  });
}

function hell() {
  return new Promise((resolve) => {
    setTimeout(() => {
        resolve("callback hell");
    }, 1000);
  });
}

call('kim')
    .then((name) => {
        console.log(`${name} 반가워`);
        return back();
    })
    .then((txt) => {
        console.log(`${txt} 을 실행했구나`);
        return hell();
    })
    .then((msg) => {
        console.log(`여기는 ${msg}`);
    })

    

async function exec() {
    let name = await call('kim');
    console.log(`${name} 반가워`);
    let txt = await back();
    console.log(`${txt} 을 실행했구나`);
    let msg = await hell();
    console.log(`여기는 ${msg}`);
} 

exec();