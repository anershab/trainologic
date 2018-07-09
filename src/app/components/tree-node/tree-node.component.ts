import { Component, OnInit, Input } from '@angular/core';
import { TreeNode } from 'src/app/models/entities';

@Component({
  selector: 'app-tree-node',
  templateUrl: './tree-node.component.html',
  styleUrls: ['./tree-node.component.scss']
})
export class TreeNodeComponent implements OnInit {

  @Input() data: TreeNode[];

  constructor() { }

  ngOnInit() {

  }


  onClick(item: TreeNode) {  
    if (item.type === 'Group'){
      item.expanded = !item.expanded;
    }
  }
  
}
