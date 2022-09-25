import { Story, Meta } from '@storybook/react';
import React from 'react';
import { Button, ButtonProps, ButtonType } from './button';

export default {
  title: 'Base Components/Button',
  component: Button,
} as Meta;

const Template: Story<ButtonProps> = (args) => <Button {...args} />;

export const Default = Template.bind({});
Default.args = {
  children: 'Click Me',
};

export const Primary = Template.bind({});
Primary.args = {
  children: 'Click Me',
  variant: ButtonType.PRIMARY,
};

export const Error = Template.bind({});
Error.args = {
  children: 'Click Me',
  variant: ButtonType.ERROR,
};

export const Disabled = Template.bind({});
Disabled.args = {
  children: 'Click Me',
  disabled: true,
  variant: ButtonType.PRIMARY,
};
