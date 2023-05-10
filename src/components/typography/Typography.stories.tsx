import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';

import { Typography } from './Typography';

const meta: Meta<typeof Typography> = {
    title: 'Typography',
    component: Typography,
};

export default meta;

export const AllVariants = () => {
    return <>
        <Typography variant="h1">header 1</Typography>
        <Typography variant="h2">header 2</Typography>
        <Typography variant="h3">header 3</Typography>
        <Typography variant="body1">body 1</Typography>
        <Typography variant="body2">body 2</Typography>
    </>
}
