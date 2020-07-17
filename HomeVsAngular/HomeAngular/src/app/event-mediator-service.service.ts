import { Injectable, OnDestroy } from '@angular/core';
import Subscription from '../app/models/Subscription';
import { GuidService } from './guid-service.service';

@Injectable({
  providedIn: 'root'
})
export class EventMediatorService implements OnDestroy {

  constructor(private guidService: GuidService) {

  }

  ngOnDestroy() {

  }

  getSubscriptions(): any {
    return window["subscriptions"];
  }

  setSubscriptions(subs: any) {
    window["subscriptions"] = subs;
  }

  subscribe(name: string, handler: any): Subscription {
    if (!this.getSubscriptions()) {
      this.setSubscriptions({});
    }
    if (!this.getSubscriptions()[name]) {
      this.getSubscriptions()[name] = [];
    }
    const sub = new Subscription(this, this.guidService);
    sub.handler = handler;
    this.getSubscriptions()[name].push(sub);
    return sub;
  }

  publish(name: string, value: string) {
    const sub: Subscription[] = this.getSubscriptions()[name];
    if (sub) {
      let l = sub.length;
      while (l--) {
        sub[l].handler(value);
      }
    }
  }

}
