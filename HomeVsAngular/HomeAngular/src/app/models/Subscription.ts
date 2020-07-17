import { GuidService } from '../guid-service.service';
import { EventMediatorService } from '../event-mediator-service.service';

export default class Subscription {

  public constructor(eventService: EventMediatorService, guidService: GuidService) {

    this.id = guidService.guid();
      
    }

    id: string;
  handler: any;


}
