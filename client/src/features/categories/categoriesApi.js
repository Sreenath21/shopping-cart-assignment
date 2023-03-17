import axios from "axios";

export const fetchCategoriesData = async () => {
  const { data } = await axios.get("http://localhost:8080/categories");
  return data;
};
