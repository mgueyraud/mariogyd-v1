import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Header } from "@partials";

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: "Organisms/Header",
  component: Header,
} as ComponentMeta<typeof Header>;

//👇 We create a “template” of how args map to rendering
const Template: ComponentStory<typeof Header> = (args) => <Header />;

export const Default = Template.bind({});
