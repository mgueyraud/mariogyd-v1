import React from "react";

import { Container, GradientImage } from "@components";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import aboutMeImage from "@assets/img/placeholders/about-me.jpg";

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: "Atoms/GradientImage",
  component: GradientImage,
} as ComponentMeta<typeof GradientImage>;

//👇 We create a “template” of how args map to rendering
const Template: ComponentStory<typeof GradientImage> = (args) => (
  <Container size="sm">
    <GradientImage {...args} />
  </Container>
);

export const Default = Template.bind({});

Default.args = {
  src: aboutMeImage,
  alt: "About me",
};

export const LeftRotated = Template.bind({});

LeftRotated.args = {
  src: aboutMeImage,
  alt: "About me",
  rotate: "left",
};

export const RightRotated = Template.bind({});

RightRotated.args = {
  src: aboutMeImage,
  alt: "About me",
  rotate: "right",
};
