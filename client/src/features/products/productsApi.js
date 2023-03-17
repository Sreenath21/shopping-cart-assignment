import axios from "axios";

export const fetchProductsData = async () => {
  const { data } = await axios.get("http://localhost:8080/products");
  return data;
};
