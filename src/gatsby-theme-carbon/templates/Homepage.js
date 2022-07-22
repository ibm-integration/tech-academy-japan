import React from 'react';
import { HomepageBanner, HomepageCallout } from 'gatsby-theme-carbon';
import HomepageTemplate from 'gatsby-theme-carbon/src/templates/Homepage';
import { calloutLink } from './Homepage.module.scss';

import Carbon from '../../images/hursley.jpg';

const FirstLeftText = () => <p>This page is designed to be a single point of access for all Assets about SKO Technical Academy - Integration</p>;

const FirstRightText = () => (
  <p>
    Welcome to the right place to advance your skills to plan, design, build and execute POC within Integration Portfolio.
  </p>
);

const SecondLeftText = () => <p>Cloud Pak for Integration</p>;

const SecondRightText = () => (
  <p>
    An AI-powered integration software solution.
  </p>
);

const BannerText = () => <h1>SKO Technical Academy Japan - Integration</h1>;

const customProps = {
  Banner: <HomepageBanner renderText={BannerText} image={Carbon} />,
  FirstCallout: (
    <HomepageCallout
      backgroundColor="#030303"
      color="white"
      leftText={FirstLeftText}
      rightText={FirstRightText}
    />
  ),
  SecondCallout: (
    <HomepageCallout
      leftText={SecondLeftText}
      rightText={SecondRightText}
      color="white"
      backgroundColor="#061f80"
    />
  ),
};

// spreading the original props gives us props.children (mdx content)
function ShadowedHomepage(props) {
  return <HomepageTemplate {...props} {...customProps} />;
}

export default ShadowedHomepage;
