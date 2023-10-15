import sendRequest from "./send-request";
const BASE_URL = '/api/articles';

export async function getAll() {
  return sendRequest(BASE_URL);
}

export async function getById(id) {
  return sendRequest(`${BASE_URL}/${id}`);
}
