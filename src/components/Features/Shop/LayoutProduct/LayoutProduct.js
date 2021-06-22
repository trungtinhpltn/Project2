import React, { useContext, useRef, useState } from "react";
import { Context } from "../../../ContextAPI/ContextAPI";
import { Link } from "react-router-dom";
import { toSlug, showRate, isWishlist } from "../../../Common/Common";

const useClickOutSide = (ref, setShowDropdown) => {
  useState(() => {
    function handleClickOutSide(e) {
      if (ref.current && !ref.current.contains(e.target)) {
        setShowDropdown(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutSide);
    return () => {
      document.removeEventListener("mousedown", handleClickOutSide);
    };
  }, [ref, setShowDropdown]);
};

export function LayoutProduct({ layout, setLayout, dataFilters, setSort }) {
  const clickOutSide = useRef(null);
  const [showDropdown, setShowDropdown] = useState(false);
  useClickOutSide(clickOutSide, setShowDropdown);
  const { showFilters, setShowFilters } = useContext(Context);
  const [dactive, setDactive] = useState(1);

  return (
    <div className="row justify-content-between mb-3">
      <div className="col d-none d-lg-inline-flex">
        {dataFilters.length} Results Found
      </div>
      <div className="col d-inline-flex d-lg-none filters-icon">
        <span className="icon" onClick={() => setShowFilters(!showFilters)}>
          <i className="fas fa-bars gray icon-font menu-icon-list"></i>
        </span>
      </div>
      <div className="col d-inline-flex justify-content-end featrues">
        <div ref={clickOutSide} className="dropdown open">
          <button
            className="btn btn-outline-primary dropdown-toggle"
            onClick={() => setShowDropdown(!showDropdown)}
            type="button"
            id="triggerId"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
            Featrued
          </button>
          <div
            className={"dropdown-menu" + (showDropdown ? " show" : "")}
            aria-labelledby="triggerId"
          >
            <button
              className={"dropdown-item" + (dactive === 1 ? " active" : "")}
              onClick={() => {
                setDactive(1);
                setShowDropdown(false);
                setSort(0);
              }}
            >
              Featrued
            </button>
            <button
              className={"dropdown-item" + (dactive === 2 ? " active" : "")}
              onClick={() => {
                setDactive(2);
                setShowDropdown(false);
                setSort(-1);
              }}
            >
              Lowest
            </button>
            <button
              className={"dropdown-item" + (dactive === 3 ? " active" : "")}
              onClick={() => {
                setDactive(3);
                setShowDropdown(false);
                setSort(1);
              }}
            >
              Highest
            </button>
          </div>
        </div>
        <div className="btn-group ml-3">
          <button
            type="button"
            className={
              "btn btn-outline-primary layout-product" +
              (layout ? " active" : "")
            }
            onClick={() => setLayout(!layout)}
          >
            <i className="fas fa-border-all" />
          </button>
          <button
            type="button"
            className={
              "btn btn-outline-primary layout-product" +
              (layout ? "" : " active")
            }
            onClick={() => setLayout(!layout)}
          >
            <i className="fas fa-list-ul" />
          </button>
        </div>
      </div>
    </div>
  );
}

export function ProductGrid({ product }) {
  const { handleWishList, handleIsCart } = useContext(Context);

  function IsCart(condition, pID) {
    if (condition) {
      return (
        <Link
          className="btn btn-primary btn-block"
          to="/checkout"
          role="button"
        >
          <span className="icon">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={14}
              height={14}
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
              className="mr-50"
            >
              <circle cx={9} cy={21} r={1} />
              <circle cx={20} cy={21} r={1} />
              <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
            </svg>
          </span>
          <span>View in cart</span>
        </Link>
      );
    } else {
      return (
        <button
          className="btn btn-primary btn-block"
          onClick={() => handleIsCart(pID)}
        >
          <span className="icon">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={14}
              height={14}
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
              className="mr-50"
            >
              <circle cx={9} cy={21} r={1} />
              <circle cx={20} cy={21} r={1} />
              <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
            </svg>
          </span>
          <span>Add to cart</span>
        </button>
      );
    }
  }

  return (
    <div className="col-12 mt-3">
      <div className="layout__grid-product mb-3">
        <div className="grid__product-img">
          <Link to={"/detail/" + toSlug(product.name) + "." + product.id}>
            <img
              className="img-fluid card-img-top"
              src={product.avatar}
              alt={product.name}
              width={200}
            />
          </Link>
        </div>
        <div className="card-body grid__product-body">
          <Link to={"/detail/" + toSlug(product.name) + "." + product.id}>
            <h6 style={{ color: "#6e6b7b" }}>{product.name}</h6>
          </Link>
          <p className="checkout-item-company mb-2">
            By{" "}
            <span className="text-success" style={{ fontWeight: "500" }}>
              {product.company}
            </span>
          </p>
          {showRate(product.rate)}
          <p className="grid__product-description mt-2">
            {product.description}
          </p>
        </div>

        <div className="card-body grid__product-btn">
          <h6 className="mb-2">
            ${(product.price * product.cartQuantity).toFixed(2)}
          </h6>
          <h6 className="mb-3">
            <span className="text-success free__shipping">Free Shipping</span>
          </h6>
          <div
            className="btn btn-light btn-block mb-2"
            onClick={() => handleWishList(product.id)}
          >
            <span className="icon">{isWishlist(product.isWishlist)}</span>
            Wishlist
          </div>
          {IsCart(product.isCart, product.id)}
        </div>
      </div>
    </div>
  );
}
