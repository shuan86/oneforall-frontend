import { getRequest } from "../modules/sendRequest";

export const getNews = async (startIndex, endIndex) => {
  const data = { startIndex, endIndex };

  const result = await getRequest("/newses", data);
  if (result && result.status == 200) {
    return result.data;
  }
  return null;
};
