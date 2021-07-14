import React, { FunctionComponent } from 'react'; // importing FunctionComponent
import Mermaid from '@theme/Mermaid'

const OverviewDiagram: FunctionComponent = () => <aside>

<Mermaid chart={`
  graph LR
    py2([py2neo])-->|connects|Neo[("Neo4j")]
    graphio(graphio)-->|loads data into|Neo
    py2-->proxy
    proxy([proxy2neo])-->|connects via proxy|Neo
    ipy([ipy2neo])-->|commandline|py2
    grolt([grolt])-->|server manager|Neo
    %%===STYLES===%%
    classDef default classFill fill:#4a94c6;
    %% ===LINKS===%%
    click py2 "/docs/py2neo"
    click graphio "/docs/graphio"
    click proxy "/docs/proxy2neo"
    click ipy "/docs/ipy2neo"
    click grolt "/docs/grolt"
    `}/>


</aside>

export default OverviewDiagram;
