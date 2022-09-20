import { ArrowRightOutlined } from "@ant-design/icons";
import { MessageDisplay } from "components/common";
import { FadeTransform } from "react-animation-components";
import { Swiper, SwiperSlide } from "swiper/react";
import Typing from "react-typing-animation";
import { Autoplay, Navigation } from "swiper";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { ProductShowcaseGrid } from "components/product";
import {
  FEATURED_PRODUCTS,
  RECOMMENDED_PRODUCTS,
  SHOP,
} from "constants/routes";
import {
  useDocumentTitle,
  useFeaturedProducts,
  useRecommendedProducts,
  useScrollTop,
} from "hooks";
import bannerImg from "images/banner-girl.png";
import bannerImg2 from "images/Lsesame.png";
import bannerImg3 from "images/product.png";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useEffect } from "react";

const Home = () => {
  useScrollTop();
  const [isSlide, setIsSlide] = useState(true);
  const [isTextDone, setIsTextDone] = useState(false);
  const [isActive, setIsActive] = useState(true);

  useEffect(() => {
    console.log(isTextDone);
  }, [isTextDone]);
  const activeIndexChange = () => {
    setIsSlide(false);
    setTimeout(() => {
      setIsSlide(true);
    }, 10);
  };

  const {
    featuredProducts,
    fetchFeaturedProducts,
    isLoading: isLoadingFeatured,
    error: errorFeatured,
  } = useFeaturedProducts(6);
  const {
    recommendedProducts,
    fetchRecommendedProducts,
    isLoading: isLoadingRecommended,
    error: errorRecommended,
  } = useRecommendedProducts(6);
  
  return (
    <main className="content">
      <div className="home">
        <Swiper
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: 5500,
            disableOnInteraction: false,
          }}
          onSwiper={(swiper) => console.log(swiper)}
          navigation={true}
          watchSlidesProgress
          onActiveIndexChange={activeIndexChange}
          modules={[Navigation]}
        >
          <SwiperSlide className="banner">
            {!isSlide == false ? (
              <>
                <div className="banner-desc">
                  <FadeTransform
                    in={isSlide}
                    transformProps={{
                      enterTransform: "translateX(100px)",
                      exitTransform: "translateX(-100px)",
                    }}
                  >

                      <h1
                        style={{ width: 550, textAlign: "left" }}
                        className="text-thin"
                      >
                        You can&nbsp;
                        <strong>
                          buy
                          <Typing speed={0} loop>
                          <Typing.Reset count={4} delay={5} />
                          anything
                            <Typing.Backspace count={20} delay={700} />
                            Sesame Oil
                            <Typing.Backspace count={20} delay={700} />
                            Cardamom
                            <Typing.Backspace count={20} delay={700} />
                            Baba Coriander
                            <Typing.Backspace count={20} delay={700} />
                            Date Fruit
                            <Typing.Backspace count={20} delay={700} />
                            Flaxseed Oil
                            <Typing.Backspace count={20} delay={700} />
                            Cloves
                            <Typing.Backspace count={20} delay={700} />                    
                            Olive Oil
                            <Typing.Backspace count={20} delay={700} />
                            Split Mung Beans
                            <Typing.Backspace count={20} delay={700} />
                            Ginger Powder
                            <Typing.Backspace count={20} delay={700} />
                          </Typing>
                        </strong>
                        with&nbsp;
                        <strong>Saba Shop</strong>
                      </h1>

                  </FadeTransform>
                  <FadeTransform
                    in={isSlide}
                    delay={50}
                    transformProps={{
                      enterTransform: "translateX(100px)",
                      exitTransform: "translateX(-100px)",
                    }}
                  >
                    <p>
                      Sometimes it's really hard finding a traditional product
                      that you want, Saba Shop will help you with your journey.
                    </p>
                    <br />
                  </FadeTransform>
                  <FadeTransform
                    in={isSlide}
                    delay={100}
                    transformProps={{
                      enterTransform: "translateX(100px)",
                      exitTransform: "translateX(-100px)",
                    }}
                  >
                    <Link to={SHOP} className="button">
                      Shop Now &nbsp;
                      <ArrowRightOutlined />
                    </Link>
                  </FadeTransform>
                </div>
                <FadeTransform
                  className="banner-img"
                  in={isSlide}
                  transformProps={{
                    enterTransform: "translateX(-100px)",
                    exitTransform: "translateX(100px)",
                  }}
                >
                  <img src={bannerImg} alt="" />
                </FadeTransform>
              </>
            ) : null}
          </SwiperSlide>
          <SwiperSlide className="banner2">
            {!isSlide == false ? (
              <>
                <FadeTransform
                  className="banner-img2"
                  in={isSlide}
                  transformProps={{
                    enterTransform: "translateY(100px)",
                    exitTransform: "translateY(-130px)",
                  }}
                >
                  <img src={bannerImg3} alt="" />
                </FadeTransform>
                <div className="banner-desc2">
                  <FadeTransform
                    in={isSlide}
                    transformProps={{
                      enterTransform: "translateY(-10px)",
                      exitTransform: "translateY(100px)",
                    }}
                  >
                    <h1 style={{ textAlign: "center" }} className="banner-text">
                      <strong>Buy</strong>
                      &nbsp;everything with&nbsp;
                      <strong>Saba Shop</strong>
                    </h1>
                  </FadeTransform>
                  <FadeTransform
                    in={isSlide}
                    delay={50}
                    transformProps={{
                      enterTransform: "translateY(-10px)",
                      exitTransform: "translateY(100px)",
                    }}
                  >
                    <p style={{ color: "white", textAlign: "center" }}>
                      Sometimes it's really hard finding a traditional product
                      that you want, Saba Shop will help you with your journey.
                    </p>
                    <br />
                  </FadeTransform>
                  <FadeTransform
                    in={isSlide}
                    delay={100}
                    transformProps={{
                      enterTransform: "translateY(-10px)",
                      exitTransform: "translateY(100px)",
                    }}
                  >
                    <Link to={SHOP} className="banner-button">
                      Shop Now &nbsp;
                      <ArrowRightOutlined />
                    </Link>
                  </FadeTransform>
                </div>
                <FadeTransform
                  className="banner-img2"
                  in={isSlide}
                  transformProps={{
                    enterTransform: "translateY(100px)",
                    exitTransform: "translateY(-130px)",
                  }}
                >
                  <img src={bannerImg2} alt="" />
                </FadeTransform>
              </>
            ) : null}
          </SwiperSlide>
          <SwiperSlide>Slide 3</SwiperSlide>
          <SwiperSlide>Slide 4</SwiperSlide>
          <SwiperSlide>Slide 5</SwiperSlide>
          <SwiperSlide>Slide 6</SwiperSlide>
          <SwiperSlide>Slide 7</SwiperSlide>
          <SwiperSlide>Slide 8</SwiperSlide>
        </Swiper>
        <div className="display">
          <div className="display-header">
            <h1>Featured Products</h1>
            <Link to={FEATURED_PRODUCTS}>See All</Link>
          </div>
          {errorFeatured && !isLoadingFeatured ? (
            <MessageDisplay
              message={errorFeatured}
              action={fetchFeaturedProducts}
              buttonLabel="Try Again"
            />
          ) : (
            <ProductShowcaseGrid
              products={featuredProducts}
              skeletonCount={6}
            />
          )}
        </div>
        <div className="display">
          <div className="display-header">
            <h1>Recommended Products</h1>
            <Link to={RECOMMENDED_PRODUCTS}>See All</Link>
          </div>
          {errorRecommended && !isLoadingRecommended ? (
            <MessageDisplay
              message={errorRecommended}
              action={fetchRecommendedProducts}
              buttonLabel="Try Again"
            />
          ) : (
            <ProductShowcaseGrid
              products={recommendedProducts}
              skeletonCount={6}
            />
          )}
        </div>
      </div>
    </main>
  );
};

export default Home;
