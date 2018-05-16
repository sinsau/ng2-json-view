# ng2-json-view

Lightweight JSON Tree Viewer with very basic functions to view very Large JSON files
Angular 5

  - Can View Very Large JSON data (dynamically)
  - Basic Functionalities

### Install with npm
`npm i ng2-json-view`

#### Usage
Import in module with
```
import { JsonTree } from 'ng2-json-view'
```

```
//Json data
result = {
    "content": "",
    "inList": false,
    "isHeading": false,
    "nodeID": "s1519994311309"
}
```
```
<json-tree [json]="result" [expand]="false" [currExpand]="true" [label]="'object'"></json-tree>
```
[json] the JSON to display
[expand]=true will expand the json in default; optional; default false
[currExpand]=true will Expand the current Node; optional; default false
[label]="'label'" any label to display; optional; default ''
