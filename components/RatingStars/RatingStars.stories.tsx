import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import RatingStars from './index'

export default {
  title: 'UI/Display/RatingStars',
  component: RatingStars,
} as ComponentMeta<typeof RatingStars>

const Template: ComponentStory<typeof RatingStars> = (args) => <RatingStars {...args} />

export const Default = Template.bind({});
Default.args = {
  rating: 5,
  reviews: 13
}

export const Example2 = Template.bind({});
Example2.args = {
  rating: 5,
  reviews: 13,
  starColor: 'red',
  backgroundStarColor: 'grey'
}
