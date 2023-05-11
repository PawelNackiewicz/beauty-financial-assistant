import type { Meta, StoryObj } from '@storybook/react';

import { Button } from './Button';

const meta: Meta<typeof Button> = {
  title: 'Button',
  component: Button,
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Outlined: Story = {
  render: () => <Button label='Outlined' variant='outlined' onClick={() => null} />,
};

export const Contained: Story = {
  render: () => <Button label='Contained' variant='contained' onClick={() => null} />,
};