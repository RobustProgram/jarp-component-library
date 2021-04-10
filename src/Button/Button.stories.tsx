import React from 'react';
import { Story, Meta } from '@storybook/react';

import Button from './Button';
import { ButtonProps } from './Button.types';

export default {
  title: 'Example/Button',
  component: Button,
} as Meta;

const Template: Story<ButtonProps> = (children) => <Button>{children}</Button>;

export const Primary = Template.bind({});
Primary.children = 'Click Me';
