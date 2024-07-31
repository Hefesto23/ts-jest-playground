export function toUpperCase(str: string): string {
  return str.toUpperCase();
}

export type StringInfo = {
    lowercase: string;
    uppercase: string;
    characters: string[];
    extraInfo: Object | undefined;
}

export function calculateStringChar(obj: StringInfo): number {
  return obj.characters.length;
}

export function executeCbWithMsg(cb): void {
  const msg = 'Hello World';
  cb(msg);
}

export class MathOperations {
    public add(a: number, b: number): number {
        return a + b;
    }
    public sub(a: number, b: number): number{
        return a - b;
    }
    public multiply(a: number, b: number): number {
        return a * b;
    }
    public divide(a: number, b: number): number {
        return a / b;
    }
}