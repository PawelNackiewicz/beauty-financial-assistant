import type { Meta, StoryObj } from '@storybook/react';

import { Button } from './Button';

const meta: Meta<typeof Button> = {
  title: 'Button',
  component: Button,
};

export default meta;
type Story = StoryObj<typeof Button>;

export const AllVariants: Story = {
  render: () => (
    <div>
      <p>Primary</p>
      <div className='flex gap-4'>
        <Button label='Outlined' variant='outlined' color='primary' onClick={() => null} />
        <Button label='Contained' variant='contained' color='primary' onClick={() => null} />
      </div>
      <p>Secondary</p>
      <div className='flex gap-4'>
        <Button label='Outlined' variant='outlined' color='secondary' onClick={() => null} />
        <Button label='Contained' variant='contained' color='secondary' onClick={() => null} />
      </div>
      <p>Success</p>
      <div className='flex gap-4'>
        <Button label='Outlined' variant='outlined' color='success' onClick={() => null} />
        <Button label='Contained' variant='contained' color='success' onClick={() => null} />
      </div>
      <p>Error</p>
      <div className='flex gap-4'>
        <Button label='Outlined' variant='outlined' color='error' onClick={() => null} />
        <Button label='Contained' variant='contained' color='error' onClick={() => null} />
      </div>
    </div>
  ),
};
export const OutlinedPrimary: Story = {
  render: () => <Button label='Outlined' variant='outlined' color='primary' onClick={() => null} />,
};

export const ContainedPrimary: Story = {
  render: () => <Button label='Contained' variant='contained' color='primary' onClick={() => null} />,
};

export const OutlinedSecondary: Story = {
  render: () => <Button label='Outlined' variant='outlined' color='secondary' onClick={() => null} />,
};

export const ContainedSecondary: Story = {
  render: () => <Button label='Contained' variant='contained' color='secondary' onClick={() => null} />,
};

export const OutlinedSuccess: Story = {
  render: () => <Button label='Outlined' variant='outlined' color='success' onClick={() => null} />,
};

export const ContainedSuccess: Story = {
  render: () => <Button label='Contained' variant='contained' color='success' onClick={() => null} />,
};

export const OutlinedError: Story = {
  render: () => <Button label='Outlined' variant='outlined' color='error' onClick={() => null} />,
};

export const ContainedError: Story = {
  render: () => <Button label='Contained' variant='contained' color='error' onClick={() => null} />,
};