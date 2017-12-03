import React from 'react';
import { storiesOf, addDecorator } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import Items from '../src';

addDecorator(storyFn => (
  <div className="min-h-screen flex items-center justify-center">
    <div className="w-2/3">{storyFn()}</div>
  </div>
));

storiesOf('Examples', module)
  .add('accordion', () => {
    const Accordion = ({ categories }) => (
      <Items
        items={categories}
        render={({ item, selectItem, info }) => {
          return (
            <div className="overflow-hidden rounded border-l border-t border-r border-grey-dark">
              {categories.map((category, key) => (
                <div
                  className="border-b border-grey-dark"
                  key={key}
                  onClick={() => selectItem(key + 1)}
                >
                  <div
                    className={`p-3 bg-grey-darker text-white cursor-pointer ${info.currentItem ===
                      key + 1 && 'font-bold'}`}
                  >
                    {category.title}
                  </div>
                  <div
                    className={`p-3 bg-grey-light ${
                      info.currentItem === key + 1 ? 'block' : 'hidden'
                    }`}
                  >
                    {category.content}
                  </div>
                </div>
              ))}
            </div>
          );
        }}
      />
    );

    return (
      <Accordion
        categories={[
          {
            title: 'Getting Started',
            content:
              'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et harum architecto numquam at eligendi! Facilis veniam, illum aperiam excepturi autem. Odit quod sapiente deserunt quos esse veniam magni facere qui!'
          },
          {
            title: 'The Basics',
            content:
              'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Excepturi minima repudiandae adipisci impedit fugit culpa neque nulla quae quis repellendus nesciunt, laudantium, optio ut. Perferendis fugit aperiam veritatis inventore temporibus.'
          },
          {
            title: 'Digging Deeper',
            content:
              'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Unde minus iste quod saepe exercitationem aliquam ad, accusantium, animi molestiae quos mollitia ex. Qui quae, amet in. Recusandae consequuntur est perferendis.'
          }
        ]}
      />
    );
  })

  .add('carousel (coming soon)', () => <div>Coming soon!</div>)

  .add('pagination (coming soon!)', () => <div>Coming soon!</div>)

  .add('slider', () => {
    const Slider = ({ slides }) => (
      <Items
        items={slides}
        render={({ item, selectItem, info }) => (
          <div>
            <div className="relative overflow-hidden">
              <div
                className="absolute w-full h-full text-5xl text-white font-bold"
                style={{ top: '50%', marginTop: -25 }}
              >
                {info.hasPreviousItem && (
                  <div
                    onClick={() => selectItem(info.previousItem)}
                    className="z-10 absolute flex items-center justify-center cursor-pointer ml-3"
                    style={{
                      height: 50,
                      width: 50,
                      left: 0
                    }}
                  >
                    {'<'}
                  </div>
                )}
                {info.hasNextItem && (
                  <div
                    onClick={() => selectItem(info.nextItem)}
                    className="z-10 absolute flex items-center justify-center cursor-pointer mr-3"
                    style={{
                      height: 50,
                      width: 50,
                      right: 0
                    }}
                  >
                    {'>'}
                  </div>
                )}
              </div>
              <div
                className="flex"
                style={{
                  width: `${100 * slides.length}%`,
                  transform: `translateX(${-1 *
                    (info.currentItem - 1) *
                    (100 / slides.length)}%)`,
                  transition: 'transform 0.25s, -webkit-transform 0.25s'
                }}
              >
                {slides.map((slide, key) => (
                  <div
                    key={key}
                    className={`bg-${
                      slide.color
                    }-light p-4 w-full h-64 flex items-center justify-center text-5xl text-white`}
                  >
                    Slide {key + 1}
                  </div>
                ))}
              </div>
            </div>
            <div className="mt-4 flex justify-center items-center">
              {slides.map((slide, key) => (
                <div
                  key={key}
                  onClick={() => selectItem(key + 1)}
                  className={[
                    'mx-1 rounded-full cursor-pointer',
                    `${
                      info.currentItem === key + 1
                        ? 'w-3 h-3 bg-grey-darkest'
                        : 'w-2 h-2 bg-grey'
                    }`
                  ].join(' ')}
                />
              ))}
            </div>
          </div>
        )}
      />
    );

    return (
      <Slider
        slides={[
          { content: 'Slide 1', color: 'green' },
          { content: 'Slide 2', color: 'blue' },
          { content: 'Slide 3', color: 'yellow' },
          { content: 'Slide 4', color: 'red' },
          { content: 'Slide 5', color: 'grey' }
        ]}
      />
    );
  })

  .add('steps', () => {
    const Steps = ({ steps }) => (
      <Items
        items={steps}
        render={({ item, selectItem, info }) => (
          <div>
            <div className="flex justify-center relative">
              <div
                className="h-px border-b border-grey-darkest absolute w-full"
                style={{ top: '50%' }}
              />
              {steps.map((step, key) => (
                <div
                  key={key}
                  onClick={() => selectItem(key + 1)}
                  className={[
                    'p-6 m-8 cursor-pointer rounded z-10',
                    `${
                      info.currentItem === key + 1
                        ? 'bg-grey-darkest text-white'
                        : 'bg-grey-lighter'
                    }`
                  ].join(' ')}
                >
                  <div className="text-xs uppercase tracking-wide">
                    Step {key + 1}
                  </div>
                  <div className="mt-1 text-2xl">{step.title}</div>
                </div>
              ))}
            </div>
            <div className="p-6">{item.content}</div>
          </div>
        )}
      />
    );

    return (
      <Steps
        steps={[
          { title: 'Sign up', content: <h1>Sign up form</h1> },
          { title: 'Post it', content: <h1>Post it for everyone</h1> },
          { title: 'Share it', content: <h1>Share it!</h1> }
        ]}
      />
    );
  })

  .add('tabs (simple)', () => {
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

    return (
      <Tabs
        tabs={[
          { title: 'Tab 1', content: 'Content 1' },
          { title: 'Tab 2', content: 'Content 2' },
          { title: 'Tab 3', content: 'Content 3' }
        ]}
      />
    );
  })

  .add('tabs (with styles)', () => {
    const Tabs = ({ tabs }) => (
      <Items
        items={tabs}
        render={({ item, selectItem, info }) => (
          <div className="rounded overflow-hidden">
            <div className="flex">
              {tabs.map((tab, key) => (
                <div
                  key={key}
                  onClick={() => selectItem(key + 1)}
                  className={[
                    `p-6 cursor-pointer flex-1 flex justify-center bg-${
                      tab.color
                    }-light text-white`,
                    `${info.currentItem === key + 1 && `font-bold`}`
                  ].join(' ')}
                >
                  {tab.title}
                </div>
              ))}
            </div>
            <div className={`p-6 bg-${item.color}-light text-white`}>
              {item.content}
            </div>
          </div>
        )}
      />
    );

    return (
      <Tabs
        tabs={[
          { title: 'Tab 1', content: 'Content 1', color: 'red' },
          { title: 'Tab 2', content: 'Content 2', color: 'yellow' },
          { title: 'Tab 3', content: 'Content 3', color: 'blue' }
        ]}
      />
    );
  });
