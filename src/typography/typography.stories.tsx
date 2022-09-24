import { Story, Meta } from '@storybook/react';
import { LoremIpsum } from 'lorem-ipsum';
import React from 'react';
import { Header, Paragraph } from './typography';

const lorem = new LoremIpsum({
  sentencesPerParagraph: {
    max: 8,
    min: 4,
  },
  wordsPerSentence: {
    max: 16,
    min: 4,
  },
});

function TypographyExample() {
  return (
    <div>
      <Header.Large bold>{lorem.generateWords(4)}</Header.Large>
      <Paragraph.Medium>{lorem.generateParagraphs(3)}</Paragraph.Medium>
    </div>
  );
}

export default {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: 'Base Components/Typography',
  component: TypographyExample,
};

export const Simple = TypographyExample.bind({});
