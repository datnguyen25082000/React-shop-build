import React, { Component } from "react";
import {
  Nav,
  NavItem,
  NavLink,
  Progress,
  TabContent,
  TabPane,
  ListGroup,
  ListGroupItem
} from "reactstrap";
import PropTypes from "prop-types";
import classNames from "classnames";
import { AppSwitch } from "@coreui/react";

const propTypes = {
  children: PropTypes.node
};

const defaultProps = {};

class DefaultAside extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      activeTab: "1"
    };
  }

  toggle(tab) {
    if (this.state.activeTab !== tab) {
      this.setState({
        activeTab: tab
      });
    }
  }

  render() {
    // eslint-disable-next-line
    const { children, ...attributes } = this.props;

    return (
      <React.Fragment>
        <Nav tabs>
          <NavItem>
            <NavLink
              className={classNames({ active: this.state.activeTab === "1" })}
              onClick={() => {
                this.toggle("1");
              }}
            >
              <i className="fas fa-cogs" />
            </NavLink>
          </NavItem>

          <NavItem>
            <NavLink
              className={classNames({ active: this.state.activeTab === "2" })}
              onClick={() => {
                this.toggle("2");
              }}
            >
              <i className="fas fa-list" />
            </NavLink>
          </NavItem>
        </Nav>

        <TabContent activeTab={this.state.activeTab}>
          <TabPane tabId="2" className="p-3">
            <div className="message">
              <div>
                <small className="text-muted">Lukasz Holeczek</small>
                <small className="text-muted float-right mt-1">1:52 PM</small>
              </div>
              <div className="text-truncate font-weight-bold">
                Lorem ipsum dolor sit amet
              </div>
              <small className="text-muted">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor incididunt...
              </small>
            </div>
            <hr />
            <div className="message">
              <div>
                <small className="text-muted">Lukasz Holeczek</small>
                <small className="text-muted float-right mt-1">2:52 PM</small>
              </div>
              <div className="text-truncate font-weight-bold">
                Lorem ipsum dolor sit amet
              </div>
              <small className="text-muted">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor incididunt...
              </small>
            </div>
            <hr />
            <div className="message">
              <div>
                <small className="text-muted">Lukasz Holeczek</small>
                <small className="text-muted float-right mt-1">3:52 PM</small>
              </div>
              <div className="text-truncate font-weight-bold">
                Lorem ipsum dolor sit amet
              </div>
              <small className="text-muted">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor incididunt...
              </small>
            </div>
            <hr />
            <div className="message">
              <div>
                <small className="text-muted">Lukasz Holeczek</small>
                <small className="text-muted float-right mt-1">4:50 PM</small>
              </div>
              <div className="text-truncate font-weight-bold">
                Lorem ipsum dolor sit amet
              </div>
              <small className="text-muted">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor incididunt...
              </small>
            </div>
            <hr />
          </TabPane>

          <TabPane tabId="1" className="p-3">
            <h6 className="text-primary">Settings</h6>

            <div className="aside-options">
              <div className="clearfix mt-4">
                <small>
                  <b>Option 1</b>
                </small>
                <AppSwitch
                  className={"float-right"}
                  variant={"pill"}
                  label
                  color={"success"}
                  defaultChecked
                  size={"sm"}
                />
              </div>
              <div>
                <small className="text-muted">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                </small>
              </div>
            </div>

            <div className="aside-options">
              <div className="clearfix mt-3">
                <small>
                  <b>Option 2</b>
                </small>
                <AppSwitch
                  className={"float-right"}
                  variant={"pill"}
                  label
                  color={"success"}
                  size={"sm"}
                />
              </div>
              <div>
                <small className="text-muted">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                </small>
              </div>
            </div>

            <div className="aside-options">
              <div className="clearfix mt-3">
                <small>
                  <b>Option 3</b>
                </small>
                <AppSwitch
                  className={"float-right"}
                  variant={"pill"}
                  label
                  color={"success"}
                  defaultChecked
                  size={"sm"}
                />
              </div>
            </div>

            <hr />
            <h6 className="text-primary">Theme</h6>

            <div className="aside-options">
              <div className="clearfix mt-3">
                <small>
                  <b>Dark</b>
                </small>
                <AppSwitch
                  className={"float-right"}
                  variant={"pill"}
                  label
                  color={"success"}
                  defaultChecked
                  size={"sm"}
                />
              </div>
            </div>
          </TabPane>
        </TabContent>
      </React.Fragment>
    );
  }
}

DefaultAside.propTypes = propTypes;
DefaultAside.defaultProps = defaultProps;

export default DefaultAside;
