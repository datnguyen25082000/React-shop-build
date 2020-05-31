import React from "react";
import DataContext from "../../../contexts/DataContext";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "../Cart/style-cart.css";

export default class Detail extends React.Component {
  static contextType = DataContext;

  render() {
    const detail = this.context.detailProduct;
    const handle = this.context.handle;

    return (
      <div>
        <div className="bg-white detail-tag">
          <div className="card-header">
            <i className="fas fa-info-circle" />
            Detail product
          </div>

          <h1 className="detail-title mb-4">{detail.title}</h1>
          <div className="row">
            <div className="detail-img col-md-4 mb-3">
              <img src={detail.img} alt="imageProduct" />
            </div>
            <div className="detail-pro col-md-8">
              <div className="detail-info">
                <p>{detail.info}</p>
              </div>
              <div className="detail-company">
                <span className="font-weight-bold">Company product: </span>
                <span>{detail.company}</span>
              </div>
              <div className="detail-price">
                <span className="font-weight-bold">Price: </span>
                <span>{detail.price + "$"}</span>
              </div>
              <div className="addCart">
                <button
                  className="mt-3 p-2 mb-3 btn-primary"
                  onClick={() => handle.addCart(detail._id)}
                >
                  <i className="fas fa-cart-plus mr-2" />
                  Add to cart
                </button>
              </div>
              <Link to="/app/cart">
                <div className="addCart gotocart">
                  <button className="mt-3 p-2 mb-3">
                    <i className="fas fa-cart-plus mr-2" />
                    Your cart
                  </button>
                </div>
              </Link>
            </div>
          </div>
        </div>

        <div className="review-product mt-5">
          <div className="card-header">
            <i className="fas fa-info-circle" />
            Review about product
          </div>
          <div className="list-comment">
            <li id="r-41037757" className="par">
              <div class="rh">
                <span>Nguyễn Lê Quốc Ca</span>
              </div>

              <div className="rc">
                <p>
                  <span>
                    <i className="iconcom-txtstar fas fa-star" />
                    <i className="iconcom-txtstar fas fa-star" />
                    <i className="iconcom-txtstar fas fa-star" />
                    <i className="iconcom-txtstar fas fa-star" />
                    <i className="iconcom-txtunstar fas fa-star" />
                  </span>
                  <i>
                    Sản phẩm rất tuyệt vời, ổn trong tầm giá, mình mua vào dịp
                    lễ 30/4 01/05 nên được giảm giá Máy khởi động rất nhanh và
                    phản hồi tác vụ cũng rất nhanh Chạy các tác vụ thông thường
                    như soạn văn bản, lướt web trơn tru, mượt mà, tốc độ
                    download update cũng tương đối nhanh.
                  </i>
                </p>
              </div>
            </li>
            <li id="r-41037757" className="par">
              <div className="rh">
                <span>Nguyễn Lê Quốc Ca</span>
              </div>

              <div className="rc">
                <p>
                  <span>
                    <i className="iconcom-txtstar fas fa-star" />
                    <i className="iconcom-txtstar fas fa-star" />
                    <i className="iconcom-txtstar fas fa-star" />
                    <i className="iconcom-txtstar fas fa-star" />
                    <i className="iconcom-txtstar fas fa-star" />
                  </span>
                  <i>
                    Sản phẩm rất tuyệt vời, ổn trong tầm giá, mình mua vào dịp
                    lễ 30/4 01/05 nên được giảm giá Máy khởi động rất nhanh và
                    phản hồi tác vụ cũng rất nhanh Chạy các tác vụ thông thường
                    như soạn văn bản, lướt web trơn tru, mượt mà, tốc độ
                    download update cũng tương đối nhanh.
                  </i>
                </p>
              </div>
            </li>
            <li id="r-41037757" className="par">
              <div className="rh">
                <span>Nguyễn Lê Quốc Ca</span>
              </div>

              <div className="rc">
                <p>
                  <span>
                    <i className="iconcom-txtstar fas fa-star" />
                    <i className="iconcom-txtstar fas fa-star" />
                    <i className="iconcom-txtstar fas fa-star" />
                    <i className="iconcom-txtunstar fas fa-star" />
                    <i className="iconcom-txtunstar fas fa-star" />
                  </span>
                  <i>
                    Sản phẩm rất tuyệt vời, ổn trong tầm giá, mình mua vào dịp
                    lễ 30/4 01/05 nên được giảm giá Máy khởi động rất nhanh và
                    phản hồi tác vụ cũng rất nhanh Chạy các tác vụ thông thường
                    như soạn văn bản, lướt web trơn tru, mượt mà, tốc độ
                    download update cũng tương đối nhanh.
                  </i>
                </p>
              </div>
            </li>
          </div>
        </div>
      </div>
    );
  }
}
