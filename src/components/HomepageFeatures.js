import React from 'react';
import clsx from 'clsx';
import styles from './HomepageFeatures.module.css';

const FeatureList = [
  {
    title: 'py2neo',
    link: 'https://py2neo.org/2021.1/',
    Svg: require('../../static/img/py2neo_200.svg').default,
    description: (
      <>
        Py2neo is a client library and toolkit for working with Neo4j from within Python applications and from the command line. The library supports both Bolt and HTTP and provides a high level API, an OGM, admin tools, an interactive console, a Cypher lexer for Pygments, and many other bells and whistles.
      </>
    ),
  },
  {
    title: 'ipy2neo',
    link: 'https://test.com',
    Svg: require('../../static/img/py2neo_200.svg').default,
    description: (
      <>
        Docusaurus lets you focus on your docs, and we&apos;ll do the chores. Go
        ahead and move your docs into the <code>docs</code> directory.
      </>
    ),
  },
  {
    title: 'grolt',
    link: 'https://test.com',
    Svg: require('../../static/img/py2neo_200.svg').default,
    description: (
      <>
        Extend or customize your website layout by reusing React. Docusaurus can
        be extended while reusing the same header and footer.
      </>
    ),
  },
  {
    title: 'proxy2neo',
    link: 'https://test.com',
    Svg: require('../../static/img/py2neo_200.svg').default,
    description: (
      <>
        Extend or customize your website layout by reusing React. Docusaurus can
        be extended while reusing the same header and footer.
      </>
    ),
  },
  {
    title: 'graphio',
    link: 'https://test.com',
    Svg: require('../../static/img/py2neo_200.svg').default,
    description: (
      <>
        Extend or customize your website layout by reusing React. Docusaurus can
        be extended while reusing the same header and footer.
      </>
    ),
  },
];

function Feature({Svg, title,link, description}) {
  return (
      <div className={clsx('col col--4')}>
        <div className="text--center">
        <a href={link}>
          <Svg className={styles.featureSvg} alt={title} />
        </a>
        </div>
        <div className="text--center padding-horiz--md">
        <a href={link}>
          <h3>{title}</h3>
          <p>{description}</p>
        </a>
        </div>
      </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
