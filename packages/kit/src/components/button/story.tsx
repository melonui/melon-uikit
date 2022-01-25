import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import Button from ".";

export default {
  title: "kit/button",
  component: Button,
} as ComponentMeta<typeof Button>;

export const primary: ComponentStory<typeof Button> = () => (
  <Button>Button</Button>
);
