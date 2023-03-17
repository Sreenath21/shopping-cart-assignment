import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import ProductDetails from "../../components/ProductDetails/ProductDetails";

import { fetchProducts } from "../../features/products/productsSlice";
import { fetchCategories } from "../../features/categories/categoriesSlice";

import "./Products.scss";

const Products = () => {
  const [selectedCategoryId, setSelectedCategoryId] = useState(
    window.location.hash.substring(1)
  );
  const {
    loading,
    data: products,
    error,
  } = useSelector((state) => state.products);
  const categories = useSelector((state) => state.categories.data);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProducts());
    dispatch(fetchCategories());
  }, []);

  const onCategoryChange = (category) => {
    setSelectedCategoryId(category);
    window.location.hash = category;
  };

  const filteredProducts =
    selectedCategoryId && products
      ? products.filter((product) => product.category === setSelectedCategoryId)
      : products;

  return (
    <div className="products">
      {loading ? (
        <div className="no-content">Loading...</div>
      ) : error ? (
        <div className="no-content">Something went wrong</div>
      ) : (
        <>
          <ul className="product-categories">
            {categories &&
              categories.map((category) => (
                <li
                  className={
                    selectedCategoryId === category.id ? "category-active" : ""
                  }
                  key={category.id}
                  onClick={() => onCategoryChange(category.id)}
                >
                  {category.name}
                </li>
              ))}
          </ul>

          <select
            value={selectedCategoryId}
            onChange={(e) => onCategoryChange(e.target.value)}
            className="category-dropdown"
          >
            <option value="" disabled>
              ---Select Category---
            </option>
            {categories &&
              categories.map((_) => (
                <option value={_.id} key={_.id}>
                  {_.name}
                </option>
              ))}
          </select>
          <div className="product-list">
            {filteredProducts.length > 0 ? (
              products &&
              filteredProducts.map((prod) => (
                <ProductDetails product={prod} key={prod.id} />
              ))
            ) : (
              <div>Currently unavailable</div>
            )}
          </div>
        </>
      )}
    </div>
  );
};

export default Products;
