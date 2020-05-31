import React, { Component } from "react";
import { Link, NavLink } from "react-router-dom";
import {
  Badge,
  UncontrolledDropdown,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
  Nav,
  NavItem
} from "reactstrap";
import PropTypes from "prop-types";
import "../style-default/style-footer.css";

import {
  AppAsideToggler,
  AppNavbarBrand,
  AppSidebarToggler
} from "@coreui/react";
import logo from "../../assets/img/brand/logo.png";
import DataContext from "../../contexts/DataContext";

const propTypes = {
  children: PropTypes.node
};

const defaultProps = {};

class DefaultHeader extends Component {
  static contextType = DataContext;

  handleSearch = () => {
    document.getElementById("form-search").classList.toggle("search-display");
    document
      .getElementById("search-icon")
      .classList.toggle("search-icon-display");
  };


  render() {
    // eslint-disable-next-line
    const { children, ...attributes } = this.props;

    return (
      <React.Fragment>
        <AppSidebarToggler className="d-lg-none" display="md" mobile />
        <AppNavbarBrand
          full={{ src: logo, width: 80, height: 50, alt: " Shop " }}
          minimized={{ src: logo, width: 30, height: 30, alt: "Shop-Logo" }}
        />
        <AppSidebarToggler className="d-md-down-none" display="lg" />

        <Nav className="d-md-down-none" navbar>
          <NavItem className="px-3">
            <NavLink to="/app/productList" className="nav-link">
              Products
            </NavLink>
          </NavItem>
          <NavItem className="px-3">
            <Link to="/users" className="nav-link">
              My shop
            </Link>
          </NavItem>
          <NavItem className="px-3">
            <NavLink to="#" className="nav-link">
              Contact me
            </NavLink>
          </NavItem>
        </Nav>

        <Nav className="ml-auto" navbar>
          <NavItem className="d-md-down-none">
            <NavLink to="/app/cart" className="nav-link">
              <i className="fas fa-cart-plus pb-1 cart-icon" />
              <Badge pill color="danger">
                {this.context.cart.length}
              </Badge>
            </NavLink>
          </NavItem>

          <UncontrolledDropdown nav direction="down">
            <DropdownToggle nav>
              <NavItem className="d-md-down-none">
                <i className="fas fa-bell" />
                <Badge pill color="danger">
                  4
                </Badge>
              </NavItem>
            </DropdownToggle>
            <DropdownMenu right>
              <DropdownItem header tag="div" className="text-center">
                <strong>Announcement</strong>
              </DropdownItem>
              <DropdownItem>
                <div className="message">
                  <div>
                    <small className="text-muted">Lukasz Holeczek</small>
                    <small className="text-muted float-right mt-1">
                      1:52 PM
                    </small>
                  </div>
                  <div className="text-truncate font-weight-bold">
                    Lorem ipsum dolor sit amet
                  </div>
                  <small className="text-muted">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                    sed do eiusmod tempor incididunt...
                  </small>
                </div>
              </DropdownItem>
              <DropdownItem>
                <div className="message">
                  <div>
                    <small className="text-muted">Lukasz Holeczek</small>
                    <small className="text-muted float-right mt-1">
                      1:52 PM
                    </small>
                  </div>
                  <div className="text-truncate font-weight-bold">
                    Lorem ipsum dolor sit amet
                  </div>
                  <small className="text-muted">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                    sed do eiusmod tempor incididunt...
                  </small>
                </div>
              </DropdownItem>
              <DropdownItem>
                <div className="message">
                  <div>
                    <small className="text-muted">Lukasz Holeczek</small>
                    <small className="text-muted float-right mt-1">
                      1:52 PM
                    </small>
                  </div>
                  <div className="text-truncate font-weight-bold">
                    Lorem ipsum dolor sit amet
                  </div>
                  <small className="text-muted">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                    sed do eiusmod tempor incididunt...
                  </small>
                </div>
              </DropdownItem>
              <DropdownItem>
                <div className="message">
                  <div>
                    <small className="text-muted">Lukasz Holeczek</small>
                    <small className="text-muted float-right mt-1">
                      1:52 PM
                    </small>
                  </div>
                  <div className="text-truncate font-weight-bold">
                    Lorem ipsum dolor sit amet
                  </div>
                  <small className="text-muted">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                    sed do eiusmod tempor incididunt...
                  </small>
                </div>
              </DropdownItem>
            </DropdownMenu>
          </UncontrolledDropdown>

          <NavItem className="d-md-down-none mr-1">
            <form className="form-search" id="form-search">
              <input
                type="text"
                placeholder="product name"
                className="input-search py-3"
              />
              <input
                type="submit"
                value="search"
                className="btn-primary py-1 px-2"
              />
            </form>

            <i
              className="fas fa-search search-icon"
              id="search-icon"
              onClick={this.handleSearch}
            />
          </NavItem>

          <UncontrolledDropdown nav direction="down">
            <DropdownToggle nav>
              <img
                src={"../../assets/img/avatars/6.jpg"}
                className="img-avatar"
                alt="avatar_img"
              />
            </DropdownToggle>
            <DropdownMenu right>
              <DropdownItem header tag="div" className="text-center">
                <strong>Account</strong>
              </DropdownItem>
              <DropdownItem>
                <i className="fas fa-bell" /> Updates
                <Badge color="info">42</Badge>
              </DropdownItem>
              <DropdownItem>
                <i className="fas fa-envelope-o" /> Messages
                <Badge color="success">42</Badge>
              </DropdownItem>
              <DropdownItem>
                <i className="fas fa-tasks" /> Tasks
                <Badge color="danger">42</Badge>
              </DropdownItem>
              <DropdownItem>
                <i className="fas fa-comments" /> Comments
                <Badge color="warning">42</Badge>
              </DropdownItem>
              <DropdownItem header tag="div" className="text-center">
                <strong>Settings</strong>
              </DropdownItem>
              <DropdownItem>
                <i className="fas fa-user" /> Profile
              </DropdownItem>
              <DropdownItem>
                <i className="fas fa-wrench" /> Settings
              </DropdownItem>
              <DropdownItem header tag="div" className="text-center">
                <strong>Status</strong>
              </DropdownItem>
              <DropdownItem onClick={this.props.onLogout}>
                <i className="fas fa-lock" /> Logout
              </DropdownItem>
            </DropdownMenu>
          </UncontrolledDropdown>
        </Nav>
        <AppAsideToggler className="d-md-down-none" />
        {/*<AppAsideToggler className="d-lg-none" mobile />*/}
      </React.Fragment>
    );
  }
}

DefaultHeader.propTypes = propTypes;
DefaultHeader.defaultProps = defaultProps;

export default DefaultHeader;
