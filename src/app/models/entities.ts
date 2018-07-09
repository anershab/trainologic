export interface TreeNode{
    id: number;
    name: string;
    type: string;
    contacts: TreeNode[];
    expanded: boolean;
}