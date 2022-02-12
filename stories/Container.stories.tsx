import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Container } from "@components";

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: "Atoms/Container",
  component: Container,
} as ComponentMeta<typeof Container>;

const fillComponent = (
  <div style={{ width: "100%", height: "30px", background: "red" }}></div>
);

//👇 We create a “template” of how args map to rendering
const Template: ComponentStory<typeof Container> = (args) => (
  <Container {...args}>{fillComponent}</Container>
);

export const Default = Template.bind({});

export const Large = Template.bind({});

Large.args = {
  size: "lg",
};

export const Medium = Template.bind({});

Medium.args = {
  size: "md",
};

export const Small = Template.bind({});

Small.args = {
  size: "sm",
};
