/**
 * Copyright (c) 2019-present Verum Technologies
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React from 'react';
import classnames from 'classnames';
import Layout from '@theme/Layout';
import CodeBlock from '@theme/CodeBlock';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';

import styles from './styles.module.css';

const features = [
  {
    title: <>Fast Development</>,
    imageUrl: 'img/to_the_stars.svg',
    description: (
      <>
        Rapido makes it fast to spin up an app and start developing features
        right away. No tedious boilerplate work. Just run a single command and
        start developing features immediately.
      </>
    ),
  },
  {
    title: <>Powerful Tools</>,
    imageUrl: 'img/be_the_hero.svg',
    description: (
      <>
        The Rapido toolset uses Expo, Styled Components, React Navigation and
        other amazing projects under the hood to power your app. Rapido tools
        are broken up into multiple packages to serve different common needs
        such as navigation, device storage, component library, etc.
      </>
    ),
  },
  {
    title: <>No Lock-In</>,
    imageUrl: 'img/digital_nomad.svg',
    description: (
      <>
        All Rapido tools are broken up into multiple packages and are all
        optional. You can use as much or as little of the Rapido toolset to
        serve your needs. The core scripts package is ejectable if advanced
        configuration is desired.
      </>
    ),
  },
];

const instructions = [
  {
    title: <>Get Started In Seconds</>,
    description: (
      <>To create a new Rapido project called my-app, run this command:</>
    ),
    code: 'npx @rapido/init my-app',
  },
  {
    title: <>Easy To Maintain</>,
    description: (
      <>
        When new versions of Rapido tools are released, you can upgrade using a
        single command:
      </>
    ),
    code: 'yarn run upgrade',
  },
];

function Feature({ imageUrl, title, description }) {
  const imgUrl = useBaseUrl(imageUrl);
  return (
    <div className={classnames('col col--4', styles.feature)}>
      {imgUrl && (
        <div className="text--center">
          <img className={styles.featureImage} src={imgUrl} alt={title} />
        </div>
      )}
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}

function Instruction({ title, description, code }) {
  return (
    <div className={classnames('col col--4 col--offset-1', styles.instruction)}>
      <h3>{title}</h3>
      <p>{description}</p>
      {code && <CodeBlock className="language-sh">{code}</CodeBlock>}
    </div>
  );
}

function Home() {
  const context = useDocusaurusContext();
  const { siteConfig = {} } = context;
  return (
    <Layout
      title={siteConfig.title}
      description="Description will go into a meta tag in <head />"
    >
      <header className={classnames('hero hero--dark', styles.heroBanner)}>
        <div className="container">
          <img
            alt="Rapido Logo"
            src={useBaseUrl('img/logo.svg')}
            className={classnames(styles.heroBannerLogo, 'margin-vert--md')}
          />
          <h1 className="hero__title">{siteConfig.title}</h1>
          <p className="hero__subtitle">{siteConfig.tagline}</p>
          <div className={styles.buttons}>
            <Link
              className={classnames(
                'button button--outline button--primary button--lg',
                styles.getStarted
              )}
              to={useBaseUrl('docs/getting-started')}
            >
              Get Started
            </Link>
          </div>
        </div>
      </header>
      <main>
        {features && features.length && (
          <section className={styles.features}>
            <div className="container">
              <div className="row">
                {features.map((props, idx) => (
                  <Feature key={idx} {...props} />
                ))}
              </div>
            </div>
          </section>
        )}
        {instructions && instructions.length && (
          <section className={styles.instructions}>
            <div className="container">
              <div className="row">
                {instructions.map((props, idx) => (
                  <Instruction key={idx} {...props} />
                ))}
              </div>
            </div>
          </section>
        )}
      </main>
    </Layout>
  );
}

export default Home;
