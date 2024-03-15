import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import {IoSearchOutline} from 'react-icons/io5';
import {AiOutlineShoppingCart} from 'react-icons/ai';
import product_image1 from '../../../../images/product-01-200x200.png'
import product_image2 from '../../../../images/product-02-200x200.png'
import product_image3 from '../../../../images/product-03-200x200.png'
import product_image4 from '../../../../images/product-04-200x200.png'
import './Carousel.css'
const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4
  };

const Carousel = () => {
  return (
    <div className="Carousel">
      <div className="CarouselContainer">
        <h2>Products</h2>
        <Slider {...settings} className="CarouselSlider">
          <div>
          <article className="product">
              <div className="product-body">
                <div className="product-figure"><img src={product_image1}/>
                </div>
                <h5 className="product-title"><a href="single-product.html">Deep Dish Cuddler</a></h5>
                <div className="product-price-wrap">
                  <div className="product-price product-price-old">$30.00</div>
                  <div className="product-price">$23.00</div>
                </div>
              </div>
              <span className="product-badge product-badge-sale">Sale</span>
              <div className="product-button-wrap">
                <div className="product-button">
                  <a className="button button-secondary button-zakaria fl-bigmug-line-search74" href="s#">
                    <IoSearchOutline className="SearchIcon"/>
                  </a>
                  </div>
                <div className="product-button">
                  <a className="button button-secondary button-zakaria fl-bigmug-line-shopping202" href="#">
                    <AiOutlineShoppingCart className="CartIcon"/>
                  </a>
                </div>
              </div>
            </article>
          </div>
          <div>
          <article className="product">
              <div className="product-body">
                <div className="product-figure"><img src={product_image2}/>
                </div>
                <h5 className="product-title"><a href="single-product.html">Deep Dish Cuddler</a></h5>
                <div className="product-price-wrap">
                  <div className="product-price">$23.00</div>
                </div>
              </div>
              <div className="product-button-wrap">
                <div className="product-button"><a className="button button-secondary button-zakaria fl-bigmug-line-search74" href="#">
                <IoSearchOutline className="SearchIcon"/>
                  </a></div>
                <div className="product-button"><a className="button button-secondary button-zakaria fl-bigmug-line-shopping202" href="cart-page.html">
                <AiOutlineShoppingCart className="CartIcon"/>
                </a></div>
              </div>
            </article>
          </div>
          <div>
          <article className="product">
              <div className="product-body">
                <div className="product-figure"><img src={product_image3}/>
                </div>
                <h5 className="product-title"><a href="single-product.html">Deep Dish Cuddler</a></h5>
                <div className="product-price-wrap">
                  <div className="product-price">$23.00</div>
                </div>
              </div><span className="product-badge product-badge-new">NEW</span>
              <div className="product-button-wrap">
                <div className="product-button">
                  <a className="button button-secondary button-zakaria fl-bigmug-line-search74" href="#">
                  <IoSearchOutline className="SearchIcon"/>
                    </a></div>
                <div className="product-button">
                  <a className="button button-secondary button-zakaria fl-bigmug-line-shopping202" href="#">
                  <AiOutlineShoppingCart className="CartIcon"/>
                    </a></div>
              </div>
            </article>
          </div>
          <div>
          <article className="product">
              <div className="product-body">
                <div className="product-figure"><img src={product_image4}/>
                </div>
                <h5 className="product-title"><a href="single-product.html">Deep Dish Cuddler</a></h5>
                <div className="product-price-wrap">
                  <div className="product-price">$23.00</div>
                </div>
              </div>
              <div className="product-button-wrap">
                <div className="product-button">
                  <a className="button button-secondary button-zakaria fl-bigmug-line-search74" href="#">
                  <IoSearchOutline className="SearchIcon"/>
                    </a></div>
                <div className="product-button">
                  <a className="button button-secondary button-zakaria fl-bigmug-line-shopping202" href="#">
                  <AiOutlineShoppingCart className="CartIcon"/>
                    </a></div>
              </div>
            </article>
          </div>
          <div>
          <article className="product">
              <div className="product-body">
                <div className="product-figure"><img src={product_image1}/>
                </div>
                <h5 className="product-title"><a href="single-product.html">Deep Dish Cuddler</a></h5>
                <div className="product-price-wrap">
                  <div className="product-price product-price-old">$30.00</div>
                  <div className="product-price">$23.00</div>
                </div>
              </div>
              <span className="product-badge product-badge-sale">Sale</span>
              <div className="product-button-wrap">
                <div className="product-button">
                  <a className="button button-secondary button-zakaria fl-bigmug-line-search74" href="s#">
                    <IoSearchOutline className="SearchIcon"/>
                  </a>
                  </div>
                <div className="product-button">
                  <a className="button button-secondary button-zakaria fl-bigmug-line-shopping202" href="#">
                    <AiOutlineShoppingCart className="CartIcon"/>
                  </a>
                </div>
              </div>
            </article>
          </div>
          <div>
          <article className="product">
              <div className="product-body">
                <div className="product-figure"><img src={product_image2}/>
                </div>
                <h5 className="product-title"><a href="single-product.html">Deep Dish Cuddler</a></h5>
                <div className="product-price-wrap">
                  <div className="product-price">$23.00</div>
                </div>
              </div>
              <div className="product-button-wrap">
                <div className="product-button"><a className="button button-secondary button-zakaria fl-bigmug-line-search74" href="#">
                <IoSearchOutline className="SearchIcon"/>
                  </a></div>
                <div className="product-button"><a className="button button-secondary button-zakaria fl-bigmug-line-shopping202" href="cart-page.html">
                <AiOutlineShoppingCart className="CartIcon"/>
                </a></div>
              </div>
            </article>
          </div>
          <div>
          <article className="product">
              <div className="product-body">
                <div className="product-figure"><img src={product_image3}/>
                </div>
                <h5 className="product-title"><a href="single-product.html">Deep Dish Cuddler</a></h5>
                <div className="product-price-wrap">
                  <div className="product-price">$23.00</div>
                </div>
              </div><span className="product-badge product-badge-new">NEW</span>
              <div className="product-button-wrap">
                <div className="product-button">
                  <a className="button button-secondary button-zakaria fl-bigmug-line-search74" href="#">
                  <IoSearchOutline className="SearchIcon"/>
                    </a></div>
                <div className="product-button">
                  <a className="button button-secondary button-zakaria fl-bigmug-line-shopping202" href="#">
                  <AiOutlineShoppingCart className="CartIcon"/>
                    </a></div>
              </div>
            </article>
          </div>
          <div>
          <article className="product">
              <div className="product-body">
                <div className="product-figure"><img src={product_image4}/>
                </div>
                <h5 className="product-title"><a href="single-product.html">Deep Dish Cuddler</a></h5>
                <div className="product-price-wrap">
                  <div className="product-price">$23.00</div>
                </div>
              </div>
              <div className="product-button-wrap">
                <div className="product-button">
                  <a className="button button-secondary button-zakaria fl-bigmug-line-search74" href="#">
                  <IoSearchOutline className="SearchIcon"/>
                    </a></div>
                <div className="product-button">
                  <a className="button button-secondary button-zakaria fl-bigmug-line-shopping202" href="#">
                  <AiOutlineShoppingCart className="CartIcon"/>
                    </a></div>
              </div>
            </article>
          </div>
          <div>
          <article className="product">
              <div className="product-body">
                <div className="product-figure"><img src={product_image1}/>
                </div>
                <h5 className="product-title"><a href="single-product.html">Deep Dish Cuddler</a></h5>
                <div className="product-price-wrap">
                  <div className="product-price product-price-old">$30.00</div>
                  <div className="product-price">$23.00</div>
                </div>
              </div>
              <span className="product-badge product-badge-sale">Sale</span>
              <div className="product-button-wrap">
                <div className="product-button">
                  <a className="button button-secondary button-zakaria fl-bigmug-line-search74" href="s#">
                    <IoSearchOutline className="SearchIcon"/>
                  </a>
                  </div>
                <div className="product-button">
                  <a className="button button-secondary button-zakaria fl-bigmug-line-shopping202" href="#">
                    <AiOutlineShoppingCart className="CartIcon"/>
                  </a>
                </div>
              </div>
            </article>
          </div>
          <div>
          <article className="product">
              <div className="product-body">
                <div className="product-figure"><img src={product_image2}/>
                </div>
                <h5 className="product-title"><a href="single-product.html">Deep Dish Cuddler</a></h5>
                <div className="product-price-wrap">
                  <div className="product-price">$23.00</div>
                </div>
              </div>
              <div className="product-button-wrap">
                <div className="product-button"><a className="button button-secondary button-zakaria fl-bigmug-line-search74" href="#">
                <IoSearchOutline className="SearchIcon"/>
                  </a></div>
                <div className="product-button"><a className="button button-secondary button-zakaria fl-bigmug-line-shopping202" href="cart-page.html">
                <AiOutlineShoppingCart className="CartIcon"/>
                </a></div>
              </div>
            </article>
          </div>
          <div>
          <article className="product">
              <div className="product-body">
                <div className="product-figure"><img src={product_image3}/>
                </div>
                <h5 className="product-title"><a href="single-product.html">Deep Dish Cuddler</a></h5>
                <div className="product-price-wrap">
                  <div className="product-price">$23.00</div>
                </div>
              </div><span className="product-badge product-badge-new">NEW</span>
              <div className="product-button-wrap">
                <div className="product-button">
                  <a className="button button-secondary button-zakaria fl-bigmug-line-search74" href="#">
                  <IoSearchOutline className="SearchIcon"/>
                    </a></div>
                <div className="product-button">
                  <a className="button button-secondary button-zakaria fl-bigmug-line-shopping202" href="#">
                  <AiOutlineShoppingCart className="CartIcon"/>
                    </a></div>
              </div>
            </article>
          </div>
          <div>
          <article className="product">
              <div className="product-body">
                <div className="product-figure"><img src={product_image4}/>
                </div>
                <h5 className="product-title"><a href="single-product.html">Deep Dish Cuddler</a></h5>
                <div className="product-price-wrap">
                  <div className="product-price">$23.00</div>
                </div>
              </div>
              <div className="product-button-wrap">
                <div className="product-button">
                  <a className="button button-secondary button-zakaria fl-bigmug-line-search74" href="#">
                  <IoSearchOutline className="SearchIcon"/>
                    </a></div>
                <div className="product-button">
                  <a className="button button-secondary button-zakaria fl-bigmug-line-shopping202" href="#">
                  <AiOutlineShoppingCart className="CartIcon"/>
                    </a></div>
              </div>
            </article>
          </div>
        </Slider>
        </div>
    </div>
  )
}

export default Carousel