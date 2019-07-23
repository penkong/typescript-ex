type Callback = () => void;

export class Eventing {
  // type annotation
  events: { [key: string]: Callback[] } = {};

  // adding eventing for framework
  // equal as addEventListener
  // register an event
  on = (eventName: string, callback: Callback): void => {
    const handlers = this.events[eventName] || [];
    handlers.push(callback);
    this.events[eventName] = handlers;
  };
  // trigger (call) an event or call it
  trigger = (eventName: string): void => {
    const handlers = this.events[eventName];
    if (!handlers || handlers.length === 0) return;
    handlers.forEach(callback => {
      callback();
    });
  };
}
