import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import Carousel from "../../components/Carousel/Carousel";
import { fetchCategories } from "../../features/categories/categoriesSlice";
import { fetchBanners } from "../../features/banner/bannerSlice";

import "./Home.scss";

const Home = () => {
  const {
    loading,
    data: categories,
    error,
  } = useSelector((state) => state.categories);
  const banners = useSelector((state) => state.banner.data);
  const dispatch = useDispatch();
  // const navigate = useNavigate();

  useEffect(() => {
    dispatch(fetchBanners());
    dispatch(fetchCategories());
  }, []);

  const handleExplore = (categoryId) => {
    // navigate(`/products#${categoryId}`)
  };

  return (
    <div className="home">
      {loading ? (
        <div className="no-content">Loading...</div>
      ) : error ? (
        <div className="no-content">Some error occured</div>
      ) : (
        <>
          {banners && <Carousel data={banners} />}
          <ul className="category-list">
            {categories.map((category) => (
              <li key={category.id} className="category">
                <div className="category-details">
                  <div className="category-title">{category.name}</div>
                  <div className="category-description">
                    {category.description}
                  </div>

                  <button
                    type="button"
                    className="category-explore-button"
                    onClick={() => handleExplore(category.id)}
                    tabIndex={0}
                    disabled={!category.enabled}
                    onKeyDown={() => handleExplore(category.id)}
                  >
                    Explore {category.name}
                  </button>
                </div>

                <div className="category-right">
                  <img
                    className="category-image"
                    src={category.imageUrl}
                    alt={category.name}
                    height="150"
                    width="200"
                  />
                </div>
              </li>
            ))}
          </ul>
        </>
      )}
    </div>
  );
};

export default Home;
