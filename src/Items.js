import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Paginator from 'paginator';

class Items extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.selectItem = this.selectItem.bind(this);
  }

  componentWillMount() {
    const { itemResultsPerItem, defaultItem } = this.props;

    this.build({
      itemResultsPerItem,
      currentItem: defaultItem !== undefined ? defaultItem : 1
    });
  }

  build({ itemResultsPerItem, currentItem }) {
    const { items } = this.props;

    const totalResults = items.length;
    const perPage = itemResultsPerItem !== undefined ? itemResultsPerItem : 1;
    const currentPage = currentItem;

    const length = totalResults / perPage;
    const paginator = new Paginator(perPage, length);
    const paginationInfo = paginator.build(totalResults, currentPage);

    this.setState((prevState, props) => ({
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
    }));
  }

  selectItem(item) {
    const { itemResultsPerItem } = this.props;

    this.build({ itemResultsPerItem, currentItem: item });
  }

  render() {
    const { items, itemResultsPerItem, render, children } = this.props;
    const item = items[this.state.info.currentItem - 1];

    const props = {
      item,
      selectItem: this.selectItem,
      info: this.state.info
    };

    return this.props.children
      ? this.props.children(props)
      : this.props.render(props);
  }
}

Items.propTypes = {
  items: PropTypes.array.isRequired,
  itemResultsPerItem: PropTypes.number,
  defaultItem: PropTypes.number,
  render: PropTypes.func,
  children: PropTypes.func
};

export default Items;
