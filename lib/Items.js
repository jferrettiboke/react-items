'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _paginator = require('paginator');

var _paginator2 = _interopRequireDefault(_paginator);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Items = function (_Component) {
  _inherits(Items, _Component);

  function Items(props) {
    _classCallCheck(this, Items);

    var _this = _possibleConstructorReturn(this, (Items.__proto__ || Object.getPrototypeOf(Items)).call(this, props));

    _this.state = {};
    _this.selectItem = _this.selectItem.bind(_this);
    return _this;
  }

  _createClass(Items, [{
    key: 'componentWillMount',
    value: function componentWillMount() {
      var _props = this.props,
          itemResultsPerItem = _props.itemResultsPerItem,
          defaultItem = _props.defaultItem;


      this.build({
        itemResultsPerItem: itemResultsPerItem,
        currentItem: defaultItem !== undefined ? defaultItem : 1
      });
    }
  }, {
    key: 'build',
    value: function build(_ref) {
      var itemResultsPerItem = _ref.itemResultsPerItem,
          currentItem = _ref.currentItem;
      var items = this.props.items;


      var totalResults = items.length;
      var perPage = itemResultsPerItem !== undefined ? itemResultsPerItem : 1;
      var currentPage = currentItem;

      var length = totalResults / perPage;
      var paginator = new _paginator2.default(perPage, length);
      var paginationInfo = paginator.build(totalResults, currentPage);

      this.setState(function (prevState, props) {
        return {
          info: {
            firstItem: paginationInfo.first_page,
            previousItem: paginationInfo.previous_page,
            currentItem: paginationInfo.current_page,
            nextItem: paginationInfo.next_page,
            lastItem: paginationInfo.last_page,
            hasPreviousItem: paginationInfo.has_previous_page,
            hasNextItem: paginationInfo.has_next_page,
            //items: paginationInfo.pages,
            totalItems: paginationInfo.total_pages,
            totalResults: paginationInfo.total_results,
            totalItemResults: paginationInfo.results,
            firstItemResult: paginationInfo.first_result,
            lastItemResult: paginationInfo.last_result
          }
        };
      });
    }
  }, {
    key: 'selectItem',
    value: function selectItem(item) {
      var itemResultsPerItem = this.props.itemResultsPerItem;


      this.build({ itemResultsPerItem: itemResultsPerItem, currentItem: item });
    }
  }, {
    key: 'render',
    value: function render() {
      var _props2 = this.props,
          items = _props2.items,
          itemResultsPerItem = _props2.itemResultsPerItem,
          render = _props2.render,
          children = _props2.children;

      var item = items[this.state.info.currentItem - 1];

      var props = {
        item: item,
        selectItem: this.selectItem,
        info: this.state.info
      };

      return this.props.children ? this.props.children(props) : this.props.render(props);
    }
  }]);

  return Items;
}(_react.Component);

Items.propTypes = {
  items: _propTypes2.default.array.isRequired,
  itemResultsPerItem: _propTypes2.default.number,
  defaultItem: _propTypes2.default.number,
  render: _propTypes2.default.func,
  children: _propTypes2.default.func
};

exports.default = Items;