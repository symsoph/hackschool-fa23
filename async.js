async function newPromiseTyping() {
    console.log("I promise to get to 80 wpm");
    let questionPractice = new Promise((resolve, reject) => {
        setTimeout(() => resolve("found"), 2000)
    })
    
    let isFound = await search;
    console.log(isFound);
}

newPromiseTyping();