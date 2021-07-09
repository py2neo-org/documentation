---
id: graphio
title: About Graphio
sidebar_position: 1
slug: /graphio
---

Graphio is a Python library for bulk loading data to Neo4j. Graphio collects
multiple sets of nodes and relationships and loads them to Neo4j. A common example is parsing a set of Excel files
to create a Neo4j prototype. Graphio only loads data, it is not meant for querying Neo4j and returning data.

Graphio works with `NodeSet` and `RelationshipSet` classes which are groups of nodes
and relationships with similiar properties. Graphio can load these data sets to Neo4j using `CREATE` or `MERGE` operations.

Graphio uses py2neo in several places. Part of the bulk data loading logic developed for graphio was merged into py2neo.
While py2neo is a comprehensive Neo4j library including object-graph mapping, graphio is made to quickly build a Neo4j database from existing data sets.

## Version

[![image](https://img.shields.io/pypi/v/graphio)](https://pypi.org/project/graphio)


## Install


```
pip install -U graphio
```