export interface NavItem {
  children?: NavItem[],
  isActive?: boolean;
  route?: string;
  text: string;
}
