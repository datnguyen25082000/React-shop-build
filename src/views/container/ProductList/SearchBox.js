import React, { Component } from "react";
import "./style-product.css";

class SearchBox extends Component {
  render() {
    return (
      <div>
        <div className="card-header">
          <i className="fas fa-filter" />
          Filter box
        </div>
        <div className="list-filter search-box">
          <div className="list-filter-main">
            <form
              id="form-filter"
              className="form-inline"
              method="GET"
              action="filter/"
            >
              <div className="list-filter-item">
                <label for="filter-sort">Sort by</label>
                <select className="form-control" id="filter-sort" name="sort">
                  <option value="updatetime">Time to update</option>
                  <option value="posttime">Posted time</option>
                  <option value="year">Year of manufacture</option>
                </select>
              </div>
              <div className="list-filter-item">
                <label for="filter-eptype">Form of purchase</label>
                <select
                  className="form-control"
                  id="filter-eptype"
                  name="eptype"
                >
                  <option value="">all</option>
                  <option value="single">installment purchase</option>
                  <option value="serial">Direct purchase</option>
                </select>
              </div>
              <div className="list-filter-item">
                <label for="filter-language">Star</label>
                <select
                  className="form-control"
                  id="filter-language"
                  name="language"
                >
                  <option value="">all</option>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5">5</option>
                </select>
              </div>
              <div className="list-filter-item">
                <label for="filter-category">Price</label>
                <select
                  id="filter-category"
                  name="category"
                  className="form-control"
                >
                  <option value="">all</option>

                  <option data-slug="phim-hanh-dong" value="1">
                    0$ - 5$
                  </option>
                  <option data-slug="phim-hanh-dong" value="1">
                    5$ - 10$
                  </option>
                  <option data-slug="phim-hanh-dong" value="1">
                    10$ - 20$
                  </option>
                  <option data-slug="phim-hanh-dong" value="1">
                    20$ - 50$
                  </option>
                  <option data-slug="phim-hanh-dong" value="1">
                    > 50$
                  </option>
                </select>
              </div>
              <div className="list-filter-item">
                <label for="filter-country">Country</label>
                <select
                  className="form-control"
                  id="filter-country"
                  name="country"
                >
                  <option value="">all</option>

                  <option value="vn">VietNam</option>

                  <option value="cn">China</option>

                  <option value="us">USA</option>

                  <option value="kr" defaultValue="">
                    korea
                  </option>

                  <option value="jp">Japan</option>

                  <option value="hk">HongKong</option>

                  <option value="in">India</option>

                  <option value="fr">France</option>

                  <option value="uk">England</option>

                  <option value="ca">Canada</option>
                </select>
              </div>

              <div className="list-filter-item">
                <label for="filter-year">Release year</label>
                <select id="filter-year" name="year" className="form-control">
                  <option value="">all</option>

                  <option value="2020">2020</option>

                  <option value="2019">2019</option>

                  <option value="2018">2018</option>

                  <option value="2017">2017</option>

                  <option value="2016">2016</option>

                  <option value="-2016">Before 2016</option>
                </select>
              </div>
              <button
                type="submit"
                id="btn--filter"
                className="btn btn-red btn-filter btn-primary"
              >
                <span>Filter products</span>
              </button>
              <div className="clear" />
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default SearchBox;
