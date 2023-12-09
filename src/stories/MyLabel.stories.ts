import { Meta, StoryObj } from '@storybook/react';
import { MyLabel, type Props } from '../components/MyLabel';

const meta: Meta<Props> = {
  title: 'Example/MyLabel',
  component: MyLabel,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    size: { control: 'inline-radio' },
  },
} satisfies Meta<typeof MyLabel>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  args: {
    label: 'Basic label',
  },
};

export const AllCaps: Story = {
  args: {
    label: 'AllCaps label',
    size: 'normal',
    allCaps: true,
  },
};

export const Secondary: Story = {
  args: {
    label: 'Secondary label',
    color: 'text-secondary',
  },
};

export const CustomColor: Story = {
  args: {
    label: 'CustomColor label',
    fontColor: 'red',
  },
};
