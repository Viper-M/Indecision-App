"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _reactDom = require("react-dom");

var _reactDom2 = _interopRequireDefault(_reactDom);

var _action = require("./components/action");

var _action2 = _interopRequireDefault(_action);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Indecision = function (_React$Component) {
    _inherits(Indecision, _React$Component);

    function Indecision(props) {
        _classCallCheck(this, Indecision);

        var _this = _possibleConstructorReturn(this, (Indecision.__proto__ || Object.getPrototypeOf(Indecision)).call(this, props));

        _this.removeall = _this.removeall.bind(_this);
        _this.deleteone = _this.deleteone.bind(_this);
        _this.whatdo = _this.whatdo.bind(_this);
        _this.addoption = _this.addoption.bind(_this);
        _this.state = {
            options: ['one']
        };
        return _this;
    }

    _createClass(Indecision, [{
        key: "removeall",
        value: function removeall() {
            this.setState(function () {
                return {
                    options: []
                };
            });
        }
    }, {
        key: "deleteone",
        value: function deleteone(optiontoremove) {
            this.setState(function (state) {
                return {
                    options: state.options.filter(function (option) {
                        return optiontoremove !== option;
                    })
                };
            });
        }
    }, {
        key: "whatdo",
        value: function whatdo() {
            var number = Math.floor(Math.random() * this.state.options.length);
            alert(this.state.options[number]);
        }
    }, {
        key: "addoption",
        value: function addoption(option) {
            this.setState(function (state) {
                return {
                    options: state.options.concat(option)
                };
            });
        }
    }, {
        key: "render",
        value: function render() {
            return _react2.default.createElement(
                "div",
                null,
                _react2.default.createElement(Header, { title: "Indecision App" }),
                _react2.default.createElement(_action2.default, { hasoption: this.state.options.length > 0, options: this.state.options, removeall: this.removeall, whatdo: this.whatdo }),
                _react2.default.createElement(Options, { options: this.state.options, deleteone: this.deleteone }),
                _react2.default.createElement(Addoption, { addoption: this.addoption })
            );
        }
    }]);

    return Indecision;
}(_react2.default.Component);

var Header = function (_React$Component2) {
    _inherits(Header, _React$Component2);

    function Header() {
        _classCallCheck(this, Header);

        return _possibleConstructorReturn(this, (Header.__proto__ || Object.getPrototypeOf(Header)).apply(this, arguments));
    }

    _createClass(Header, [{
        key: "render",
        value: function render() {
            return _react2.default.createElement(
                "div",
                null,
                _react2.default.createElement(
                    "h1",
                    null,
                    this.props.title
                )
            );
        }
    }]);

    return Header;
}(_react2.default.Component);

var Options = function (_React$Component3) {
    _inherits(Options, _React$Component3);

    function Options() {
        _classCallCheck(this, Options);

        return _possibleConstructorReturn(this, (Options.__proto__ || Object.getPrototypeOf(Options)).apply(this, arguments));
    }

    _createClass(Options, [{
        key: "render",
        value: function render() {
            var _this4 = this;

            return _react2.default.createElement(
                "div",
                null,
                this.props.options.map(function (option) {
                    return _react2.default.createElement(
                        "div",
                        null,
                        " ",
                        option,
                        " ",
                        _react2.default.createElement(
                            "button",
                            { onClick: function onClick(e) {
                                    _this4.props.deleteone(option);
                                } },
                            " Remove"
                        ),
                        " "
                    );
                })
            );
        }
    }]);

    return Options;
}(_react2.default.Component);

var Addoption = function (_React$Component4) {
    _inherits(Addoption, _React$Component4);

    function Addoption(props) {
        _classCallCheck(this, Addoption);

        var _this5 = _possibleConstructorReturn(this, (Addoption.__proto__ || Object.getPrototypeOf(Addoption)).call(this, props));

        _this5.addoption = _this5.addoption.bind(_this5);
        return _this5;
    }

    _createClass(Addoption, [{
        key: "addoption",
        value: function addoption() {
            var option = document.getElementById('input').value;

            this.props.addoption(option);
            document.getElementById('input').value = '';
        }
    }, {
        key: "render",
        value: function render() {
            return _react2.default.createElement(
                "div",
                null,
                _react2.default.createElement("input", { id: "input" }),
                _react2.default.createElement(
                    "button",
                    { onClick: this.addoption },
                    "Add"
                )
            );
        }
    }]);

    return Addoption;
}(_react2.default.Component);

_reactDom2.default.render(_react2.default.createElement(Indecision, null), document.getElementById('approot'));
