import axios from 'axios';

const BASE_URL = 'https://deserts-store.b.goit.study/api/feedbacks/';

export const limit = 10;

export async function getFeedbacksResponse(page = 1) {
  try {
    const { data } = await axios(BASE_URL, {
      params: {
        limit,
        page,
      },
    });
    return data;
  } catch (error) {
    console.log(error.message);
  }
}
