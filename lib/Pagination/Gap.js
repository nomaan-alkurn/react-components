"use strict";

exports.__esModule = true;

var _classCallCheck2 = require("babel-runtime/helpers/classCallCheck");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _possibleConstructorReturn2 = require("babel-runtime/helpers/possibleConstructorReturn");

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require("babel-runtime/helpers/inherits");

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _classnames = require("classnames");

var _classnames2 = _interopRequireDefault(_classnames);

var _View = require("../core/View");

var _View2 = _interopRequireDefault(_View);

var _ThemedComponent2 = require("../utils/theming/ThemedComponent");

var _ThemedComponent3 = _interopRequireDefault(_ThemedComponent2);

var _styles = require("./styles");

var _styles2 = _interopRequireDefault(_styles);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Gap = function (_ThemedComponent) {
  (0, _inherits3.default)(Gap, _ThemedComponent);

  function Gap(props, context) {
    (0, _classCallCheck3.default)(this, Gap);
    return (0, _possibleConstructorReturn3.default)(this, _ThemedComponent.call(this, props, context, {
      namespace: "Pagination",
      styles: _styles2.default
    }));
  }

  Gap.prototype.render = function render() {
    var theme = this.theme;

    return _react2.default.createElement(_View2.default, { className: (0, _classnames2.default)(theme.page, theme.page_gap) });
  };

  return Gap;
}(_ThemedComponent3.default);

exports.default = Gap;