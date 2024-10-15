function fetchPostData() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Post data fetched")
        }, 2000);
    })
}

function fetchCommentData() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Comment data fetched")
        }, 3000);
    })
}


// async function getBlogData() {
//     try {
//         console.log("Feetching blog data...");
//         const postData = await fetchPostData();
//         const commentData = await fetchCommentData();

//         console.log(postData);
//         console.log(commentData);

//         console.log("fetch done");
//     } catch (error) {
//         console.error("Error fetching blog data", error)
//     }
// }



async function getBlogData() {
    try {
        console.log("Feetching blog data...");
        // const postData = await fetchPostData();    // I will use Promise.all() syntax here. It replaces .then() with an array of promises
        // const commentData = await fetchCommentData();

        const [postData, commentData] = await Promise.all([fetchPostData(), fetchCommentData()])  //Since , here promise.all() syntax returns two different data, so I used array of two different variables to handle that case.


        console.log(postData);
        console.log(commentData);

        console.log("fetch done");
    } catch (error) {
        console.error("Error fetching blog data", error)
    }
}


getBlogData()