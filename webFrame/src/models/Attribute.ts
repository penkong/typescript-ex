export class Attribute<T> {
  constructor(private data: T) {}
  // type guard if (typeof id === 'number')
  // type assertion overwrite tsc type (something as number)
  // in ts string can be types => type sth = 'apples';
  // in js all object keys are string
  // therefore keys in obj can be and have type
  get = <K extends keyof T>(key: K): T[K] => {
    return this.data[key];
  };

  set(update: T): void {
    Object.assign(this.data, update);
  }
}
