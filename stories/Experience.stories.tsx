import React from "react";

import { Container, Experience } from "@components";
import { ComponentStory, ComponentMeta } from "@storybook/react";

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: "Organisms/Experience",
  component: Experience,
} as ComponentMeta<typeof Experience>;

const experience = {
  title: "Frontend Engineer",
  company: "Lithium",
  start: "July 2021",
  end: "Now",
  description:
    "Outsourced to an US Company called Tonic3, currently working on a product for Avery Dennison clients, with React and Typescript.",
};

//👇 We create a “template” of how args map to rendering
const Template: ComponentStory<typeof Experience> = (args) => (
  <Container size="sm">
    <Experience {...args} />
    <Experience {...args} />
    <Experience {...args} />
  </Container>
);

export const Default = Template.bind({});

Default.args = {
  ...experience,
};
