/* tslint:disable */
/* eslint-disable */

/* auto-generated by NAPI-RS */

export class ExternalObject<T> {
  readonly '': {
    readonly '': unique symbol
    [K: symbol]: T
  }
}
export function xxh32(input: string | Buffer, seed?: number | undefined | null): number
export function xxh64(input: string | Buffer, seed?: bigint | undefined | null): bigint
export class Xxh32 {
  constructor(seed?: number | undefined | null)
  update(input: string | Buffer): this
  digest(): number
  reset(newState?: number | undefined | null): void
}
export class Xxh64 {
  constructor(seed?: bigint | undefined | null)
  update(input: string | Buffer): this
  digest(): bigint
  reset(newState?: bigint | undefined | null): void
}
export namespace xxh3 {
  export function xxh64(input: string | Buffer, seed?: bigint | undefined | null): bigint
  export function xxh64WithSecret(input: string | Buffer, secret: Buffer): bigint
  export function xxh128(input: string | Buffer, seed?: bigint | undefined | null): bigint
  export function xxh128WithSecret(input: string | Buffer, secret: Buffer): bigint
  export class Xxh3 {
    static withSeed(seed?: bigint | undefined | null): Xxh3
    static withSecret(secret: Buffer): Xxh3
    update(input: string | Buffer): this
    digest(): bigint
    reset(): void
  }
}
