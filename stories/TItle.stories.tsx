import React from "react";

import { Container, Title } from "@components";
import { ComponentStory, ComponentMeta } from "@storybook/react";

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: "Atoms/Title",
  component: Title,
} as ComponentMeta<typeof Title>;

//👇 We create a “template” of how args map to rendering
const Template: ComponentStory<typeof Title> = (args) => (
  <Container size="sm">
    <Title {...args} />
  </Container>
);

export const Default = Template.bind({});

Default.args = {
  children: "This is a title",
};
