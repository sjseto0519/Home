export default class SideNavigation {

    public constructor(o: any) {
   
      this.section = o.section;
      this.icon = o.icon;
      this.tooltip = o.tooltip;
    }

    section: boolean;
    icon: string;
    tooltip: string;


}
