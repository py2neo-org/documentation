---
id: py2neo
title: Py2neo
sidebar_position: 1
slug: /py2neo
---
import Docs from '../full-documentation.md';

<Docs />

Py2neo is a client library and toolkit for working with Neo4j from within Python applications and from the command line. The library supports both Bolt and HTTP and provides a high level API, an OGM, admin tools, an interactive console, a Cypher lexer for Pygments, and many other bells and whistles.

## Releases & Versioning

As of 2020, py2neo has switched to [Calendar Versioning](https://calver.org), using a scheme of ``YYYY.N.M``.
Here, ``N`` is an incrementing zero-based number for each year, and ``M`` is a revision within that version (also zero-based).

No compatibility guarantees are given between versions, but as a general rule, a change in ``M`` should require little-to-no work within client applications,
whereas a change in ``N`` may require some work. A change to the year is likely to require a more significant amount of work to upgrade.

Note that py2neo is developed on a rolling basis, so patches are not made to old versions.
Users will instead need to install the latest release to adopt bug fixes.

## Requirements

The following versions of Python and Neo4j (all editions) are supported:

- Python 2.7 / 3.4 / 3.5 / 3.6 / 3.7 / 3.8 / 3.9
- Neo4j 3.4 / 3.5 / 4.0 / 4.1 / 4.2 / 4.3 (the latest point release of each version is recommended)

Py2neo provides support for the multi-database functionality added in Neo4j 4.0.
More about this can be found in the documentation for the :class:`.Graph` class.

Note that Py2neo is developed and tested under **Linux** using standard CPython distributions.
While other operating systems and Python distributions may work, support for these is not available.

## Installation

To install the latest release of py2neo, simply use:

```
    pip install --upgrade py2neo
```

To install the latest stable code from the GitHub master branch, use:

```
    pip install git+https://github.com/technige/py2neo.git@master#egg=py2neo
```

## Quickstart

## Examples
