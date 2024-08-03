import moment from 'moment';
import uuid from 'uuid';
export class Utils {
  public static toUpperCase(str: string): string {
    return str.toUpperCase();
  }

  public static generateUUIDWithPattern(): string {
    return 'id-' + uuid.v1();
  }

  public static mapObject(obj: any): any {
    return Object.keys(obj).map(key => ({ [key]: obj[key] }));
  }

  public static returnDate(): string {
    return moment().format('DD/MM/YYYY, h:mm:ss a');
  }
}

export function timesTwo(x: number): number {
  return x * 2;
}