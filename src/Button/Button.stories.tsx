import React from 'react';
import { Story, Meta } from '@storybook/react';

import Button from './Button';
import { ButtonProps } from './Button.types';

export default {
  title: 'Example/Button',
  component: Button,
} as Meta;

const Template: Story<ButtonProps> = (args) => <Button {...args} />;

export const Default = Template.bind({});
Default.args = {
  label: 'Click Me',
};

export const Primary = Template.bind({});
Primary.args = {
  primary: true,
  error: false,
  label: 'Click Me',
};

export const Error = Template.bind({});
Error.args = {
  primary: false,
  error: true,
  label: 'Click Me',
};
