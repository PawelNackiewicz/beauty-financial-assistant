import type { Meta, StoryObj } from '@storybook/react';

import { Input } from './Input';
import { useForm } from 'react-hook-form';

const meta: Meta<typeof Input> = {
    title: 'Input',
    component: Input,
};

export default meta;
type Story = StoryObj<typeof Input>;

export const Primary: Story = {
    render: () => <FormWrapper />
};

type FormInputs = {
    fieldId?: string,
    number?: number
}

const FormWrapper = () => {
    const { register } = useForm<FormInputs>();
    return (
        <form>
            <Input fieldId='fieldId' label='Input' register={register} placeholder='placeholder' />
            <Input fieldId='number' label='Number' register={register} placeholder='0' type='number' />
        </form>
    )
}