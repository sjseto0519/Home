export default class Event {

    public constructor(o: any) {
   
      this.name = o.name;
      this.handler = o.handler;
    }

    name: string;
    handler: string;


}
