import { Meta, StoryObj } from '@storybook/react';
import TabMenu from './Tab';

const meta: Meta = {
  title: 'UI-Implement/TabMenu',
  component: TabMenu,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  // argTypes 설정
  argTypes: {
    tabs: { control: { type: 'array', separator: ',' } },
    initialTab: { control: 'number' },
  },
};

export default meta;

// 스토리 정의
type Story = StoryObj<typeof meta>;

// AccordionTest 스토리
export const defaultTest: Story = {
  args: {
    tabs: ['Tab 1', 'Tab 2', 'Tab 3'],
    initialTab: 0,
  },
}

// InitialTab2 스토리
export const InitialTab2: Story = {
  args: {
    tabs: ['Tab A', 'Tab B', 'Tab C'],
    initialTab: 1,
  },
}