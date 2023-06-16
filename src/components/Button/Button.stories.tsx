import type { Meta, StoryObj } from "@storybook/react";

import Button from "./Button";

const meta = {
  title: "Button",
  component: Button,
  tags: ["autodocs"],
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof Button>;

export const Contained: Story = {
  args: {
    label: "Contained button",
  },
};

export const Outlined: Story = {
  args: {
    label: "Outlined button",
    variant: "outlined",
  },
};

export const Text: Story = {
  args: {
    label: "Text button",
    variant: "text",
  },
};
