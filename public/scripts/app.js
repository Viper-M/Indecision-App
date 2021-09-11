'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Count = function (_React$Component) {
    _inherits(Count, _React$Component);

    function Count(props) {
        _classCallCheck(this, Count);

        var _this = _possibleConstructorReturn(this, (Count.__proto__ || Object.getPrototypeOf(Count)).call(this, props));

        _this.addone = _this.addone.bind(_this);
        _this.minusone = _this.minusone.bind(_this);
        _this.reset = _this.reset.bind(_this);
        _this.state = {
            count: 0
        };
        return _this;
    }

    _createClass(Count, [{
        key: 'addone',
        value: function addone() {
            this.setState(function (state) {
                return {
                    count: state.count + 1
                };
            });
        }
    }, {
        key: 'minusone',
        value: function minusone() {
            this.setState(function (state) {
                return {
                    count: state.count - 1
                };
            });
        }
    }, {
        key: 'reset',
        value: function reset() {
            this.setState(function (state) {
                return {
                    count: 0
                };
            });
        }
    }, {
        key: 'componentDidMount',
        value: function componentDidMount() {
            var string = localStorage.getItem('count');
            var count = parseInt(string, 10);
            console.log(count);

            if (!isNaN(count)) {
                this.setState(function () {
                    return { count: count };
                });
            }
        }
    }, {
        key: 'componentDidUpdate',
        value: function componentDidUpdate(props, state) {
            if (state.count !== this.state.count) {
                localStorage.setItem('count', this.state.count);
            }
        }
    }, {
        key: 'render',
        value: function render() {
            return React.createElement(
                'div',
                null,
                React.createElement(
                    'h1',
                    null,
                    'Count: ',
                    this.state.count
                ),
                React.createElement(
                    'button',
                    { onClick: this.addone },
                    '+1'
                ),
                React.createElement(
                    'button',
                    { onClick: this.minusone },
                    '-1'
                ),
                React.createElement(
                    'button',
                    { onClick: this.reset },
                    'Reset'
                )
            );
        }
    }]);

    return Count;
}(React.Component);

ReactDOM.render(React.createElement(Count, null), approot);
