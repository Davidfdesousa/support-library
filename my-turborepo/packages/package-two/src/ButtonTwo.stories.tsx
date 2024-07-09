import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import { ButtonTwo, ButtonPropsTwo } from './ButtonTwo';

export default {
  title: 'ButtonTWO',
  component: ButtonTwo,
} as Meta;

const Template: StoryFn<ButtonPropsTwo> = (args) => <ButtonTwo {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  label: 'ButtonTWO',
};
