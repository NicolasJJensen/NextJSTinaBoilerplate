import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import ProductCard from './index'

export default {
  title: 'UI/Display/ProductCard',
  component: ProductCard,
} as ComponentMeta<typeof ProductCard>

const Template: ComponentStory<typeof ProductCard> = (args) => <ProductCard {...args} />;

export const Default = Template.bind({});
Default.args = {
  id: '1',
  title: 'Product 1',
  description: 'An example product for testing purposes',
  images: [
    {
      id: '1',
      src: 'https://source.unsplash.com/featured?shirt',
      altText: 'A Shirt'
    },
    {
      id: '2',
      src: 'https://source.unsplash.com/featured?shorts',
      altText: 'Shorts'
    }
  ],
  loading: false
}

export const Example2 = Template.bind({});
Example2.args = {
  id: '1',
  title: 'Product 2',
  description: 'An example product for testing purposes with a different description',
  images: [
    {
      id: '1',
      src: 'https://source.unsplash.com/featured?pants',
      altText: 'Pants'
    },
    {
      id: '2',
      src: 'https://source.unsplash.com/featured?hat',
      altText: 'hat'
    }
  ],
  loading: false
}
