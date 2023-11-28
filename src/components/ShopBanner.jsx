import React from 'react'

const ShopBanner = () => {
  return (
    <>
        <div className="hero">
  <div className="container">
    <div className="row justify-content-between">
      <div className="col-lg-5">
        <div className="intro-excerpt">
          <h1>Shop</h1>
          <p className="mb-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni, libero deserunt? Aliquam quisquam recusandae dolorum!</p>
          <p><a href className="btn btn-secondary me-2">Shop Now</a><a href="#" className="btn btn-white-outline">Explore</a></p>
        </div>
      </div>
      <div className="col-lg-7">
        <div className="hero-img-wrap">
          <img src="assets/images/couch.png" className="img-fluid" />
        </div>
      </div>
    </div>
  </div>
</div>
    </>
  )
}

export default ShopBanner