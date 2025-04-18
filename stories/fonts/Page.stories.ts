import type { Meta, StoryObj } from '@storybook/react';

import { Page } from './Page';

const meta = {
  title: 'Fonts/Instalation',
  component: Page,
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/configure/story-layout
    layout: 'fullscreen',
  },
} satisfies Meta<typeof Page>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Web: Story = {};

// More on interaction testing: https://storybook.js.org/docs/writing-tests/interaction-testing
// export const Mobile: Story = {};
