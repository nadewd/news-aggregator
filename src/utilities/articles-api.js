import sendRequest from "./send-request";
const BASE_URL = '/api/saved';

export async function addSavedArticle(article) {
    return await sendRequest(BASE_URL, "POST", article)
}

export async function getAll() {
    return await sendRequest(BASE_URL)
}

// This function is never actually used in SEI CAFE,
// it's only provided here to remind you to follow
// RESTful routing, etc.
export async function getById(id) {
  return sendRequest(`${BASE_URL}/${id}`);
}

