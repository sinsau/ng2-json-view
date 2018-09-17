import { Component } from '@angular/core';

@Component({
  selector: 'demo-app',
  templateUrl: './app.component.html'
})
export class AppComponent {
    result = {
        'content': '',
        'inList': false,
        'isHeading': false,
        'nodeID': 's1519994311309kjsbjkdnlsdnflkdsnflksdnflkdsnflkdsfnlksdfnlkfnlklkdfndfnslkdfnlkdfnlkdfnlkfnlkf',
        'cool' : [
            {
                'a': 1,
                'b': 1
            },
            {
                'a': 1,
                'b': 1
            }
        ],
        'obj': {
            'o': 'o2',
            'o1': {k1: ['val1', 123, {'a': 'b'}]},
            'o2': {a: [true, 'two', 3]}
        }
    };
  constructor() {
  }
}
