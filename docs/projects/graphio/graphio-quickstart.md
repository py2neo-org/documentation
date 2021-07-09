---
id: graphio-quick
title: Graphio Quickstart
sidebar_position: 2
slug: /graphio/quickstart
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


### Install

Use pip to install:

```
pip install -U graphio
```

## Example

Iterate over a file that contains people and the movies they like and extract nodes and relationships. Contents of example file ‘people.tsv’:

```
Alice; Matrix,Titanic
Peter; Matrix,Forrest Gump
John; Forrest Gump,Titanic
```

The goal is to create the follwing data in Neo4j:


* `(Person)` nodes


* `(Movie)` nodes


* `(Person)-[:LIKES]->(Movie)` relationships

```
# under the hood py2neo is used to connect to Neo4j
# you always need a py2neo.Graph instance
from py2neo import Graph
graph = Graph()

from graphio import NodeSet, RelationshipSet

# define data sets
people = NodeSet(['Person'], merge_keys=['name'])
movies = NodeSet(['Movie'], merge_keys=['title'])
person_likes_movie = RelationshipSet('LIKES', ['Person'], ['Movie'], ['name'], ['title'])

with open('people.tsv') as my_file:
   for line in my_file:
      # prepare data from the line
      name, titles = line.split(';')
      # split up the movies
      titles = titles.strip().split(',')

      # add one (Person) node per line
      people.add_node({'name': name})

      # add (Movie) nodes and :LIKES relationships
      for title in titles:
         movies.add_node({'title': title})
         person_likes_movie.add_relationship({'name': name}, {'title': title}, {'source': 'my_file'})


# create the nodes in NodeSet, needs a py2neo.Graph instance
people.create(graph)
movies.create(graph)
person_likes_movie.create(graph)
```

The code in the example should be easy to understand:


1. Define the data sets you want to add.


2. Iterate over a data source, transform the data and add to the data sets.


3. Store data in Neo4j.

**NOTE**: The example does create mulitple nodes with the same properties. You have to take care of uniqueness yourself.