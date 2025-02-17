function fetchPostData(){
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("post data fetched");
        }, 2000);
    });
};


function fetchCommentData(){
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Comment post data fetched");
        }, 2000);
    });
};


async function getBlogData()
{
    try {
        console.log("fetched blog data");

        // const postData = await fetchPostData();
        // const commentData = await fetchCommentData();
        // console.log(postData);
        // console.log(commentData);

        const [postData, commentData] = await Promise.all([
            fetchPostData(), 
            fetchCommentData()]);
            
        console.log(postData);
        console.log(commentData);

        console.log("fetched complete");
        } catch (error) {
        console.log("Error fetching blog data", error);
    }
}

getBlogData();