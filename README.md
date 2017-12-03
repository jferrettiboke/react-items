# 🏇🏽 react-items

[![npm](https://img.shields.io/npm/v/react-items.svg)]()
[![license](https://img.shields.io/github/license/jferrettiboke/react-items.svg)]()

## Description

Primitives to build simple, flexible, highly customizable and powerful React
components such as tabs, pagination, steps, slider, carousel, accordion menu,
etc.

## Live Playground

For examples in action, go to
[https://jferrettiboke.github.io/react-items/](https://jferrettiboke.github.io/react-items/).

Or...

1. Clone this repository
2. `cd react-items`
3. `npm run storybook` or `yarn run storybook`
4. Go to [http://localhost:6006](http://localhost:6006)

## Getting Started

### Installation

With NPM: `npm install react-items --save`.

With Yarn: `yarn add react-items`.

### Usage

```js
import Items from 'react-items';

const Tabs = ({ tabs }) => (
  <Items
    items={tabs}
    render={({ item, selectItem, info }) => {
      return (
        <div>
          <div>
            {tabs.map((tab, key) => (
              <div
                key={key}
                style={{
                  fontWeight: info.currentItem === key + 1 && 'bold'
                }}
                onClick={() => selectItem(key + 1)}
              >
                {tab.title}
              </div>
            ))}
          </div>
          <div>{item.content}</div>
        </div>
      );
    }}
  />
);

const App = () => (
  <Tabs
    tabs={[
      { title: 'Tab 1', content: 'Content 1' },
      { title: 'Tab 2', content: 'Content 2' },
      { title: 'Tab 3', content: 'Content 3' }
    ]}
  />
);
```

## Props

### items

```js
items: PropTypes.array.isRequired;
```

An array of all the items you pass to `Items`. This can be anything, from
strings and numbers to objects and other arrays. Of course, you can mix them.
This prop is required.

In a tabs example context, `items` would be all the tabs you pass down. In a
slider example context, `items` would be all the slides you pass down. You got
it?

### defaultItem

```js
defaultItem: PropTypes.number;
```

This is the default item you want to set as current item. By default,
`defaultItem` is `1` and it is equal to index `0` of `items` prop.

### render

This is a function which returns some props.

```js
<Items items={[...]} render={({ item, selectItem, info }) => {
  // Render your UI
}} />
```

#### item

This is the selected current item in your array of items. By default, the
current item will be `1` that is the item with index `0` of your items passed
down to `items` prop.

#### selectItem

A function to select an item of your items.

This function only accepts a single argument which is required. This argument is
the item you want to select.

`selectItem(2)`

This means you want to select item `2`, which is one left in your items array
(index `1`).

#### info

The render prop `info` is an object with all the information about items.

| Name            | Description                                | Type    |
| --------------- | ------------------------------------------ | ------- |
| firstItem       | The first item.                            | Number  |
| previousItem    | The previous item to the current block.    | Number  |
| currentItem     | The current selected item.                 | Number  |
| nextItem        | The next item from the current item.       | Number  |
| lastItem        | The last item.                             | Number  |
| hasPreviousItem | Check if current item has a previous item. | Boolean |
| hasNextItem     | Check if current item has a next item.     | Boolean |
| totalItems      | Total items.                               | Number  |
| totalResults    | Total results. No matter items.            | Number  |
| totalItemResult | Total results for the current item.        | Number  |
| firstItemResult | First result for current item.             | Number  |
| lastItemResult  | Last result for current item.              | Number  |

### children

This prop returns totally the same than `render` prop. The only difference is
that you will render the props as children props.

```js
<Items items={[...]} />
  {({ item, selectItem, info }) => {
    // Render your UI
  }}
</Items>
```

## Inspiration

I was heavily inspired by [downshift](https://github.com/paypal/downshift), the
awesome React component to build simple, flexible, WAI-ARIA compliant React
autocomplete/dropdown/select/combobox components.

Of course, you could combine `react-items` with `downshift` to build really
awesome and magic stuff.

## Community Examples

I can't wait to see what you build with `react-items` out there. Please, feel
free to send a PR to show your awesome examples.

* Your awesome example (link)
* Your awesome example (link)
* Your awesome example (link)

## Contributing

Do you know how to improve it? Feel free to contribute to this project.

## License

MIT.
