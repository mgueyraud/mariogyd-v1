import React from "react";

import { Container, Project } from "@components";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import blockMaster from "@assets/img/placeholders/block-master.png";

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: "Organisms/Project",
  component: Project,
} as ComponentMeta<typeof Project>;

const project = {
  number: "01",
  title: "Block Master",
  languages: ["Styled Components", "React", "Javascript"],
  description:
    "A block buster website (like Netflix) where it fetches movies from tmdb(The movie DB) so the user can see and select one movie to see more details about that movie.",
  cta: "https://github.com/mgueyraud/block-master/",
  imageSource: blockMaster,
};

//👇 We create a “template” of how args map to rendering
const Template: ComponentStory<typeof Project> = (args) => (
  <Container size="md">
    <Project {...args} />
  </Container>
);

export const Even = Template.bind({});

Even.args = {
  ...project,
  is: "even",
};

export const Odd = Template.bind({});

Odd.args = {
  ...project,
  is: "odd",
};
