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
        Py2neo is a client library and toolkit for working with Neo4j from within Python applications and from the command line.
      </>
    ),
  },
  {
    title: 'ipy2neo',
    link: '/docs/ipy2neo',
    Svg: require('../../static/img/py2neo_200.svg').default,
    description: (
      <>
        iPy2neo is an interactive console for py2neo that allows much of its functionality to be accessed from outside of a Python application. 
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
        Graphio is a Python library for bulk loading data to Neo4j. Graphio collects multiple sets of nodes and relationships and loads them to Neo4j. 
      </>
    ),
  },
  {
    title: 'community projects',
    link: '/docs/community/projects',
    Svg: require('../../static/img/py2neo_200.svg').default,
    description: (
      <>
        A curated list of projects in the wild that are in some way related to Python and Neo4j. 
      </>
    ),
  },
];

function Feature({title,link, description}) {
  return (
      <div className={clsx('col col--4')}>
        <div className="text--center padding-horiz--md">
          <a href={link}>
            <h1>{title}</h1>
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
