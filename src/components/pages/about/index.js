import React, { Component } from 'react';
import Hero from './Hero';
import Skills from './Skills';
import Experiences from './Experiences';
import Story from './Story';
import CallToAction from './CallToAction';
import Section from '../../section/Section';

class About extends Component {
  render() {
    return (
      <div className="text-center">
        <Hero />

        <Section>
          <h2>Skills</h2>
          <Skills />
        </Section>

        <Section useSecondaryBackground>
          <h2>Experience</h2>
          <Experiences />
        </Section>

        <Section>
          <h2>My Story</h2>
          <Story />
        </Section>

        <Section useSecondaryBackground>
          <CallToAction />
        </Section>
      </div>
    );
  }
}

export default About;
