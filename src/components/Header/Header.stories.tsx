import type { Meta, StoryObj } from "@storybook/react";

import Header from "./Header";

const meta = {
  title: "Header",
  component: Header,
  tags: ["autodocs"],
} satisfies Meta<typeof Header>;

export default meta;
type Story = StoryObj<typeof Header>;

export const Default: Story = {
  args: {
    applicationName: "Application Name",
  },
};
