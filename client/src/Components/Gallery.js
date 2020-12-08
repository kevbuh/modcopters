import React from "react";
import "../css/Gallery.css";
import { Link } from "react-router-dom";

function Gallery() {
  return (
    <div className="featured__all">
      <div className="featured__title">Gallery</div>

      <div className="featured__pics">
        <Link to="/shop">
          <div className="featured__pic">
            <img
              src="https://images.unsplash.com/photo-1488263590619-bc1fff43b6c1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1567&q=80"
              alt="k"
            />
          </div>
        </Link>

        <Link to="/shop">
          <div className="featured__pic">
            <img
              src="https://images.unsplash.com/photo-1499808624579-3471e371ce50?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80"
              alt="k"
            />
          </div>
        </Link>

        <Link to="/shop">
          <div className="featured__pic">
            <img
              src="https://images.unsplash.com/photo-1533063319369-0de118afe00a?ixlib=rb-1.2.1&auto=format&fit=crop&w=1694&q=80"
              alt="k"
            />
          </div>
        </Link>

        <Link to="/shop">
          <div className="featured__pic">
            <img
              src="https://images.unsplash.com/photo-1527977966376-1c8408f9f108?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1100&q=80"
              alt="k"
            />
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Gallery;
