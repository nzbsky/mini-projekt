const BASE_URL = "http://localhost:3000"


export async function fetchPosts() {
    const resp = await etch(`${BASE_URL}/posts`);
    return await resp.json();

}

export async function createPostPost(postToAdd) {
    const options = {
        method: "POST",
        body: JSON.stringify(postToAdd),
        headers: {
            "Content-Type": "application/json; charset=UTF-8",
        },
    };
    const resp = await etch(`${BASE_URL}/posts`);
    return await resp.json();

}

export async function updatePostPostPost(postToUpdate , id) {
    const options = {
        method: "putch",
        body: JSON.stringify(postToUpdate),
        headers: {
            "Content-Type": "application/json; charset=UTF-8",
        },
    };
    const resp = await etch(`${BASE_URL}/posts/${id}` ,options );
    return await resp.json();

}

