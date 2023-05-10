import type { Meta, StoryObj } from '@storybook/react';

import { Navigation } from './Navigation';

const meta: Meta<typeof Navigation> = {
    title: 'Navigation',
    component: Navigation,
};

export default meta;
type Story = StoryObj<typeof Navigation>;

export const Primary: Story = {
    render: () => <Navigation />,
    parameters: {
        nextjs: {
            appDirectory: true,
            navigation: {
                pathname: "/blog",
            },
        }
    }
};