import React from 'react';
import clsx from 'clsx';
import styles from './HomepageFeatures.module.css';

const FeatureList = [
  {
    title: 'py2neo',
    link: '/docs/py2neo',
    Svg: require('../../static/img/py2neo_200.svg').default,
    description: (
      <>
        Py2neo is a client library and toolkit for working with Neo4j from within Python applications and from the command line. The library supports both Bolt and HTTP and provides a high level API, an OGM, admin tools, an interactive console, a Cypher lexer for Pygments, and many other bells and whistles.
      </>
    ),
  },
  {
    title: 'ipy2neo',
    link: '/docs/ipy2neo',
    Svg: require('../../static/img/py2neo_200.svg').default,
    description: (
      <>
        iPy2neo is an interactive console for py2neo that allows much of its functionality to be accessed from outside of a Python application. This tool includes an interactive console that can be used for running Cypher queries and facilities for managing auth files and has multi-database support. Currently iPy2neo is part of the main Py2neo library but this is on track to becoming a separate project.
      </>
    ),
  },
  {
    title: 'grolt',
    link: '/docs/grolt',
    Svg: require('../../static/img/py2neo_200.svg').default,
    description: (
      <>
        Grolt is an interactive Docker-based tool for running Neo4j servers and clusters in development. You will need an appropriate Neo4j licence to use Grolt.
      </>
    ),
  },
  {
    title: 'proxy2neo',
    link: '/docs/proxy2neo',
    Svg: require('../../static/img/py2neo_200.svg').default,
    description: (
      <>
        Proxy2neo is a proxy server for Py2neo. Like iPy2neo this is currently part of the main Py2neo library but there are plans to separate this into a stand-alone project.
      </>
    ),
  },
  {
    title: 'graphio',
    link: '/docs/graphio',
    Svg: require('../../static/img/py2neo_200.svg').default,
    description: (
      <>
        Graphio is a Python library for bulk loading data to Neo4j. Graphio collects multiple sets of nodes and relationships and loads them to Neo4j. A common example is parsing a set of Excel files to create a Neo4j prototype. Graphio only loads data, it is not meant for querying Neo4j and returning data.
      </>
    ),
  },
  {
    title: 'Community Projects',
    link: '/docs/community/projects',
    Svg: require('../../static/img/py2neo_200.svg').default,
    description: (
      <>
        A curated list of projects in the wild that are in some way related to Python and Neo4j. 
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
