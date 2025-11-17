import type { Meta, StoryObj } from "@storybook/react-vite";
import { View } from "./View";
import { Button } from "@ui/Button";

const meta: Meta<typeof View> = {
  title: "Components/Layout/View",
  component: View,
  argTypes: {
    display: {
      control: "object",
      description: "Supports both string and responsive object",
    },
    gap: { control: "text" },
    p: { control: "text" },
    bg: { control: "text" },
  },
  parameters: { layout: "centered" },
};

export default meta;
type Story = StoryObj<typeof View>;

export const Flex: Story = {
  args: {
    gap: "4",
  },

  render: () => (
    <View display="flex" gap="4" p="4" bg="var(--surface-card)" radius="2">
      <Button>Save</Button>
      <Button variant="secondary">Cancel</Button>
    </View>
  ),
};

export const Grid: Story = {
  render: () => (
    <View
      display="grid"
      gridTemplateColumns="repeat(3, 1fr)"
      gap="12px"
      p="16px"
      bg="var(--surface-card)"
      radius="8px"
      style={{ width: 480 }}
    >
      <div style={{ height: 80, background: "var(--surface-modal)" }} />
      <div style={{ height: 80, background: "var(--surface-modal)" }} />
      <div style={{ height: 80, background: "var(--surface-modal)" }} />
    </View>
  ),
};

export const ResponsiveDisplay: Story = {
  render: () => (
    <View
      display={{ s: "grid", m: "flex", l: "flex" }}
      gridTemplateColumns={{ s: "1fr 1fr", m: undefined, l: undefined }}
      gap="4"
      p="4"
      bg="var(--surface-card)"
      radius="2"
    >
      <Button fullWidth>Button 1</Button>
      <Button fullWidth>Button 2</Button>
    </View>
  ),
};

export const ResponsiveSpacing: Story = {
  render: () => (
    <View
      p={{ s: "8px", m: "16px", l: "32px" }}
      bg="var(--surface-card)"
      radius="12px"
      style={{ width: 300 }}
    >
      Resize viewport to see padding change.
    </View>
  ),
};
