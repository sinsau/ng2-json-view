import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';

export interface Map {
  key: string;
  value: any;
}

export interface Node {
  map: Map;
  expand: boolean;
  type: string;
}

@Component({
  selector: 'json-tree',
  templateUrl: './json.tree.html',
  styleUrls: ['./json.tree.css']
})
export class JsonTree implements OnChanges {
  name = 'Angular Library';
  @Input() json: any;
  @Input() expand = false;
  @Input() currExpand = false;
  @Input() label = '';
  nonObject: Node[];
  object: Node[];
  arrayObject: Node[];
  constructor() { }

  ngOnChanges(changes: SimpleChanges) {
    this.cleanArray();
    Object.keys(this.json).forEach(key => {
      this.filterJson(key, this.json[key]);
    });
  }

  private filterJson(key: string, value: any) {
    switch (typeof value) {
      case 'undefined': {
        this.addToNonObject(this.getMap(key, undefined));
        break;
      }
      case 'object': {
        if (value === null) {
          this.addToNonObject(this.getMap(key, null));
        } else if (value instanceof Date) {
          this.addToNonObject(this.getMap(key, value));
        } else if (Array.isArray(value)) {
          this.addToArrayObject(this.getMap(key, value), 'array');
        } else {
          this.addToObject(this.getMap(key, value), 'object');
        }
        break;
      }
      default: {
        this.addToNonObject(this.getMap(key, value));
        break;
      }
    }
  }
  private addToObject(map: Map, type: string) {
    this.object.push(this.getNode(map, type));
  }
  private addToArrayObject(map: Map, type: string) {
    this.arrayObject.push(this.getNode(map, type));
  }
  private getNode(map: Map, type: string) {
    return {
      map,
      expand: this.expand,
      type
    }
  }
  private addToNonObject(map: Map) {
    this.nonObject.push(this.getNode(map, typeof map.value));
  }
  private cleanArray() {
    this.nonObject = [];
    this.object = [];
    this.arrayObject = [];
  }

  private getMap(key: string, value: any): Map {
    return { key: key, value: value };
  }

  getObjectSize(object: any): Number {
    return Object.keys(object).length;
  }

  toggleExpand(node: Node) {
    node.expand = !node.expand;
  }

  toggleCurrExpand() {
    this.currExpand = !this.currExpand;
  }
}
