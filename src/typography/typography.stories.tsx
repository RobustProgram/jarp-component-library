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

function AllExamples({ bold }: { bold?: boolean }) {
  return (
    <div>
      <Header.ExtraLarge bold={bold}>
        The quick brown fox jumps over the lazy dog
      </Header.ExtraLarge>
      <Header.Large bold={bold}>
        The quick brown fox jumps over the lazy dog
      </Header.Large>
      <Header.Medium bold={bold}>
        The quick brown fox jumps over the lazy dog
      </Header.Medium>
      <Header.Small bold={bold}>
        The quick brown fox jumps over the lazy dog
      </Header.Small>
      <Header.ExtraSmall bold={bold}>
        The quick brown fox jumps over the lazy dog
      </Header.ExtraSmall>
      <Paragraph.Medium>
        The quick brown fox jumps over the lazy dog
      </Paragraph.Medium>
    </div>
  );
}

function ParagraphExample() {
  return (
    <div>
      <Header.Large bold>{lorem.generateWords(4)}</Header.Large>
      <Paragraph.Medium>{lorem.generateSentences(16)}</Paragraph.Medium>
      <Paragraph.Medium>{lorem.generateSentences(14)}</Paragraph.Medium>
      <Paragraph.Medium>{lorem.generateSentences(18)}</Paragraph.Medium>
      <Header.Large bold>{lorem.generateWords(4)}</Header.Large>
      <Paragraph.Medium>{lorem.generateSentences(1)}</Paragraph.Medium>
    </div>
  );
}

export default {
  title: 'Base Components/Typography',
  component: AllExamples,
};

export const WithAllExamples = AllExamples.bind({});
WithAllExamples.args = {
  bold: true,
};

export const ExampleWithParagraphs = ParagraphExample.bind({});
