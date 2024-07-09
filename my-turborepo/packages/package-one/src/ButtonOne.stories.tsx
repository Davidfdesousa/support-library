import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import { ButtonOne, ButtonPropsOne } from './ButtonOne';

export default {
  title: 'ButtonONE',
  component: ButtonOne,
} as Meta;

const Template: StoryFn<ButtonPropsOne> = (args) => <ButtonOne {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  label: 'ButtonONE',
};
