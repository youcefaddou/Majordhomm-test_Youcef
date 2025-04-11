
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model Coordinate
 * 
 */
export type Coordinate = $Result.DefaultSelection<Prisma.$CoordinatePayload>
/**
 * Model Disponibility
 * 
 */
export type Disponibility = $Result.DefaultSelection<Prisma.$DisponibilityPayload>
/**
 * Model Meeting
 * 
 */
export type Meeting = $Result.DefaultSelection<Prisma.$MeetingPayload>
/**
 * Model Message
 * 
 */
export type Message = $Result.DefaultSelection<Prisma.$MessagePayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Coordinates
 * const coordinates = await prisma.coordinate.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Coordinates
   * const coordinates = await prisma.coordinate.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.coordinate`: Exposes CRUD operations for the **Coordinate** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Coordinates
    * const coordinates = await prisma.coordinate.findMany()
    * ```
    */
  get coordinate(): Prisma.CoordinateDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.disponibility`: Exposes CRUD operations for the **Disponibility** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Disponibilities
    * const disponibilities = await prisma.disponibility.findMany()
    * ```
    */
  get disponibility(): Prisma.DisponibilityDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.meeting`: Exposes CRUD operations for the **Meeting** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Meetings
    * const meetings = await prisma.meeting.findMany()
    * ```
    */
  get meeting(): Prisma.MeetingDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.message`: Exposes CRUD operations for the **Message** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Messages
    * const messages = await prisma.message.findMany()
    * ```
    */
  get message(): Prisma.MessageDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.6.0
   * Query Engine version: f676762280b54cd07c770017ed3711ddde35f37a
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    Coordinate: 'Coordinate',
    Disponibility: 'Disponibility',
    Meeting: 'Meeting',
    Message: 'Message'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "coordinate" | "disponibility" | "meeting" | "message"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Coordinate: {
        payload: Prisma.$CoordinatePayload<ExtArgs>
        fields: Prisma.CoordinateFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CoordinateFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CoordinatePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CoordinateFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CoordinatePayload>
          }
          findFirst: {
            args: Prisma.CoordinateFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CoordinatePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CoordinateFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CoordinatePayload>
          }
          findMany: {
            args: Prisma.CoordinateFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CoordinatePayload>[]
          }
          create: {
            args: Prisma.CoordinateCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CoordinatePayload>
          }
          createMany: {
            args: Prisma.CoordinateCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.CoordinateDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CoordinatePayload>
          }
          update: {
            args: Prisma.CoordinateUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CoordinatePayload>
          }
          deleteMany: {
            args: Prisma.CoordinateDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CoordinateUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.CoordinateUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CoordinatePayload>
          }
          aggregate: {
            args: Prisma.CoordinateAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCoordinate>
          }
          groupBy: {
            args: Prisma.CoordinateGroupByArgs<ExtArgs>
            result: $Utils.Optional<CoordinateGroupByOutputType>[]
          }
          count: {
            args: Prisma.CoordinateCountArgs<ExtArgs>
            result: $Utils.Optional<CoordinateCountAggregateOutputType> | number
          }
        }
      }
      Disponibility: {
        payload: Prisma.$DisponibilityPayload<ExtArgs>
        fields: Prisma.DisponibilityFieldRefs
        operations: {
          findUnique: {
            args: Prisma.DisponibilityFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DisponibilityPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.DisponibilityFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DisponibilityPayload>
          }
          findFirst: {
            args: Prisma.DisponibilityFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DisponibilityPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.DisponibilityFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DisponibilityPayload>
          }
          findMany: {
            args: Prisma.DisponibilityFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DisponibilityPayload>[]
          }
          create: {
            args: Prisma.DisponibilityCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DisponibilityPayload>
          }
          createMany: {
            args: Prisma.DisponibilityCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.DisponibilityDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DisponibilityPayload>
          }
          update: {
            args: Prisma.DisponibilityUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DisponibilityPayload>
          }
          deleteMany: {
            args: Prisma.DisponibilityDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.DisponibilityUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.DisponibilityUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DisponibilityPayload>
          }
          aggregate: {
            args: Prisma.DisponibilityAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDisponibility>
          }
          groupBy: {
            args: Prisma.DisponibilityGroupByArgs<ExtArgs>
            result: $Utils.Optional<DisponibilityGroupByOutputType>[]
          }
          count: {
            args: Prisma.DisponibilityCountArgs<ExtArgs>
            result: $Utils.Optional<DisponibilityCountAggregateOutputType> | number
          }
        }
      }
      Meeting: {
        payload: Prisma.$MeetingPayload<ExtArgs>
        fields: Prisma.MeetingFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MeetingFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MeetingPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MeetingFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MeetingPayload>
          }
          findFirst: {
            args: Prisma.MeetingFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MeetingPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MeetingFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MeetingPayload>
          }
          findMany: {
            args: Prisma.MeetingFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MeetingPayload>[]
          }
          create: {
            args: Prisma.MeetingCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MeetingPayload>
          }
          createMany: {
            args: Prisma.MeetingCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.MeetingDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MeetingPayload>
          }
          update: {
            args: Prisma.MeetingUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MeetingPayload>
          }
          deleteMany: {
            args: Prisma.MeetingDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.MeetingUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.MeetingUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MeetingPayload>
          }
          aggregate: {
            args: Prisma.MeetingAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMeeting>
          }
          groupBy: {
            args: Prisma.MeetingGroupByArgs<ExtArgs>
            result: $Utils.Optional<MeetingGroupByOutputType>[]
          }
          count: {
            args: Prisma.MeetingCountArgs<ExtArgs>
            result: $Utils.Optional<MeetingCountAggregateOutputType> | number
          }
        }
      }
      Message: {
        payload: Prisma.$MessagePayload<ExtArgs>
        fields: Prisma.MessageFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MessageFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessagePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MessageFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessagePayload>
          }
          findFirst: {
            args: Prisma.MessageFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessagePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MessageFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessagePayload>
          }
          findMany: {
            args: Prisma.MessageFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessagePayload>[]
          }
          create: {
            args: Prisma.MessageCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessagePayload>
          }
          createMany: {
            args: Prisma.MessageCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.MessageDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessagePayload>
          }
          update: {
            args: Prisma.MessageUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessagePayload>
          }
          deleteMany: {
            args: Prisma.MessageDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.MessageUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.MessageUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessagePayload>
          }
          aggregate: {
            args: Prisma.MessageAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMessage>
          }
          groupBy: {
            args: Prisma.MessageGroupByArgs<ExtArgs>
            result: $Utils.Optional<MessageGroupByOutputType>[]
          }
          count: {
            args: Prisma.MessageCountArgs<ExtArgs>
            result: $Utils.Optional<MessageCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    coordinate?: CoordinateOmit
    disponibility?: DisponibilityOmit
    meeting?: MeetingOmit
    message?: MessageOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type CoordinateCountOutputType
   */

  export type CoordinateCountOutputType = {
    meetings: number
  }

  export type CoordinateCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    meetings?: boolean | CoordinateCountOutputTypeCountMeetingsArgs
  }

  // Custom InputTypes
  /**
   * CoordinateCountOutputType without action
   */
  export type CoordinateCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CoordinateCountOutputType
     */
    select?: CoordinateCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CoordinateCountOutputType without action
   */
  export type CoordinateCountOutputTypeCountMeetingsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MeetingWhereInput
  }


  /**
   * Count Type DisponibilityCountOutputType
   */

  export type DisponibilityCountOutputType = {
    meetings: number
  }

  export type DisponibilityCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    meetings?: boolean | DisponibilityCountOutputTypeCountMeetingsArgs
  }

  // Custom InputTypes
  /**
   * DisponibilityCountOutputType without action
   */
  export type DisponibilityCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DisponibilityCountOutputType
     */
    select?: DisponibilityCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * DisponibilityCountOutputType without action
   */
  export type DisponibilityCountOutputTypeCountMeetingsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MeetingWhereInput
  }


  /**
   * Count Type MeetingCountOutputType
   */

  export type MeetingCountOutputType = {
    disponibilities: number
  }

  export type MeetingCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    disponibilities?: boolean | MeetingCountOutputTypeCountDisponibilitiesArgs
  }

  // Custom InputTypes
  /**
   * MeetingCountOutputType without action
   */
  export type MeetingCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MeetingCountOutputType
     */
    select?: MeetingCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * MeetingCountOutputType without action
   */
  export type MeetingCountOutputTypeCountDisponibilitiesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DisponibilityWhereInput
  }


  /**
   * Count Type MessageCountOutputType
   */

  export type MessageCountOutputType = {
    meetings: number
  }

  export type MessageCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    meetings?: boolean | MessageCountOutputTypeCountMeetingsArgs
  }

  // Custom InputTypes
  /**
   * MessageCountOutputType without action
   */
  export type MessageCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MessageCountOutputType
     */
    select?: MessageCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * MessageCountOutputType without action
   */
  export type MessageCountOutputTypeCountMeetingsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MeetingWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Coordinate
   */

  export type AggregateCoordinate = {
    _count: CoordinateCountAggregateOutputType | null
    _avg: CoordinateAvgAggregateOutputType | null
    _sum: CoordinateSumAggregateOutputType | null
    _min: CoordinateMinAggregateOutputType | null
    _max: CoordinateMaxAggregateOutputType | null
  }

  export type CoordinateAvgAggregateOutputType = {
    id: number | null
  }

  export type CoordinateSumAggregateOutputType = {
    id: number | null
  }

  export type CoordinateMinAggregateOutputType = {
    id: number | null
    gender: string | null
    lastName: string | null
    firstName: string | null
    email: string | null
    phone: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CoordinateMaxAggregateOutputType = {
    id: number | null
    gender: string | null
    lastName: string | null
    firstName: string | null
    email: string | null
    phone: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CoordinateCountAggregateOutputType = {
    id: number
    gender: number
    lastName: number
    firstName: number
    email: number
    phone: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type CoordinateAvgAggregateInputType = {
    id?: true
  }

  export type CoordinateSumAggregateInputType = {
    id?: true
  }

  export type CoordinateMinAggregateInputType = {
    id?: true
    gender?: true
    lastName?: true
    firstName?: true
    email?: true
    phone?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CoordinateMaxAggregateInputType = {
    id?: true
    gender?: true
    lastName?: true
    firstName?: true
    email?: true
    phone?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CoordinateCountAggregateInputType = {
    id?: true
    gender?: true
    lastName?: true
    firstName?: true
    email?: true
    phone?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type CoordinateAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Coordinate to aggregate.
     */
    where?: CoordinateWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Coordinates to fetch.
     */
    orderBy?: CoordinateOrderByWithRelationInput | CoordinateOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CoordinateWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Coordinates from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Coordinates.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Coordinates
    **/
    _count?: true | CoordinateCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CoordinateAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CoordinateSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CoordinateMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CoordinateMaxAggregateInputType
  }

  export type GetCoordinateAggregateType<T extends CoordinateAggregateArgs> = {
        [P in keyof T & keyof AggregateCoordinate]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCoordinate[P]>
      : GetScalarType<T[P], AggregateCoordinate[P]>
  }




  export type CoordinateGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CoordinateWhereInput
    orderBy?: CoordinateOrderByWithAggregationInput | CoordinateOrderByWithAggregationInput[]
    by: CoordinateScalarFieldEnum[] | CoordinateScalarFieldEnum
    having?: CoordinateScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CoordinateCountAggregateInputType | true
    _avg?: CoordinateAvgAggregateInputType
    _sum?: CoordinateSumAggregateInputType
    _min?: CoordinateMinAggregateInputType
    _max?: CoordinateMaxAggregateInputType
  }

  export type CoordinateGroupByOutputType = {
    id: number
    gender: string
    lastName: string
    firstName: string
    email: string
    phone: string
    createdAt: Date
    updatedAt: Date
    _count: CoordinateCountAggregateOutputType | null
    _avg: CoordinateAvgAggregateOutputType | null
    _sum: CoordinateSumAggregateOutputType | null
    _min: CoordinateMinAggregateOutputType | null
    _max: CoordinateMaxAggregateOutputType | null
  }

  type GetCoordinateGroupByPayload<T extends CoordinateGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CoordinateGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CoordinateGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CoordinateGroupByOutputType[P]>
            : GetScalarType<T[P], CoordinateGroupByOutputType[P]>
        }
      >
    >


  export type CoordinateSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    gender?: boolean
    lastName?: boolean
    firstName?: boolean
    email?: boolean
    phone?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    meetings?: boolean | Coordinate$meetingsArgs<ExtArgs>
    _count?: boolean | CoordinateCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["coordinate"]>



  export type CoordinateSelectScalar = {
    id?: boolean
    gender?: boolean
    lastName?: boolean
    firstName?: boolean
    email?: boolean
    phone?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type CoordinateOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "gender" | "lastName" | "firstName" | "email" | "phone" | "createdAt" | "updatedAt", ExtArgs["result"]["coordinate"]>
  export type CoordinateInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    meetings?: boolean | Coordinate$meetingsArgs<ExtArgs>
    _count?: boolean | CoordinateCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $CoordinatePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Coordinate"
    objects: {
      meetings: Prisma.$MeetingPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      gender: string
      lastName: string
      firstName: string
      email: string
      phone: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["coordinate"]>
    composites: {}
  }

  type CoordinateGetPayload<S extends boolean | null | undefined | CoordinateDefaultArgs> = $Result.GetResult<Prisma.$CoordinatePayload, S>

  type CoordinateCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CoordinateFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CoordinateCountAggregateInputType | true
    }

  export interface CoordinateDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Coordinate'], meta: { name: 'Coordinate' } }
    /**
     * Find zero or one Coordinate that matches the filter.
     * @param {CoordinateFindUniqueArgs} args - Arguments to find a Coordinate
     * @example
     * // Get one Coordinate
     * const coordinate = await prisma.coordinate.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CoordinateFindUniqueArgs>(args: SelectSubset<T, CoordinateFindUniqueArgs<ExtArgs>>): Prisma__CoordinateClient<$Result.GetResult<Prisma.$CoordinatePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Coordinate that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CoordinateFindUniqueOrThrowArgs} args - Arguments to find a Coordinate
     * @example
     * // Get one Coordinate
     * const coordinate = await prisma.coordinate.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CoordinateFindUniqueOrThrowArgs>(args: SelectSubset<T, CoordinateFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CoordinateClient<$Result.GetResult<Prisma.$CoordinatePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Coordinate that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CoordinateFindFirstArgs} args - Arguments to find a Coordinate
     * @example
     * // Get one Coordinate
     * const coordinate = await prisma.coordinate.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CoordinateFindFirstArgs>(args?: SelectSubset<T, CoordinateFindFirstArgs<ExtArgs>>): Prisma__CoordinateClient<$Result.GetResult<Prisma.$CoordinatePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Coordinate that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CoordinateFindFirstOrThrowArgs} args - Arguments to find a Coordinate
     * @example
     * // Get one Coordinate
     * const coordinate = await prisma.coordinate.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CoordinateFindFirstOrThrowArgs>(args?: SelectSubset<T, CoordinateFindFirstOrThrowArgs<ExtArgs>>): Prisma__CoordinateClient<$Result.GetResult<Prisma.$CoordinatePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Coordinates that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CoordinateFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Coordinates
     * const coordinates = await prisma.coordinate.findMany()
     * 
     * // Get first 10 Coordinates
     * const coordinates = await prisma.coordinate.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const coordinateWithIdOnly = await prisma.coordinate.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CoordinateFindManyArgs>(args?: SelectSubset<T, CoordinateFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CoordinatePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Coordinate.
     * @param {CoordinateCreateArgs} args - Arguments to create a Coordinate.
     * @example
     * // Create one Coordinate
     * const Coordinate = await prisma.coordinate.create({
     *   data: {
     *     // ... data to create a Coordinate
     *   }
     * })
     * 
     */
    create<T extends CoordinateCreateArgs>(args: SelectSubset<T, CoordinateCreateArgs<ExtArgs>>): Prisma__CoordinateClient<$Result.GetResult<Prisma.$CoordinatePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Coordinates.
     * @param {CoordinateCreateManyArgs} args - Arguments to create many Coordinates.
     * @example
     * // Create many Coordinates
     * const coordinate = await prisma.coordinate.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CoordinateCreateManyArgs>(args?: SelectSubset<T, CoordinateCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Coordinate.
     * @param {CoordinateDeleteArgs} args - Arguments to delete one Coordinate.
     * @example
     * // Delete one Coordinate
     * const Coordinate = await prisma.coordinate.delete({
     *   where: {
     *     // ... filter to delete one Coordinate
     *   }
     * })
     * 
     */
    delete<T extends CoordinateDeleteArgs>(args: SelectSubset<T, CoordinateDeleteArgs<ExtArgs>>): Prisma__CoordinateClient<$Result.GetResult<Prisma.$CoordinatePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Coordinate.
     * @param {CoordinateUpdateArgs} args - Arguments to update one Coordinate.
     * @example
     * // Update one Coordinate
     * const coordinate = await prisma.coordinate.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CoordinateUpdateArgs>(args: SelectSubset<T, CoordinateUpdateArgs<ExtArgs>>): Prisma__CoordinateClient<$Result.GetResult<Prisma.$CoordinatePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Coordinates.
     * @param {CoordinateDeleteManyArgs} args - Arguments to filter Coordinates to delete.
     * @example
     * // Delete a few Coordinates
     * const { count } = await prisma.coordinate.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CoordinateDeleteManyArgs>(args?: SelectSubset<T, CoordinateDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Coordinates.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CoordinateUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Coordinates
     * const coordinate = await prisma.coordinate.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CoordinateUpdateManyArgs>(args: SelectSubset<T, CoordinateUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Coordinate.
     * @param {CoordinateUpsertArgs} args - Arguments to update or create a Coordinate.
     * @example
     * // Update or create a Coordinate
     * const coordinate = await prisma.coordinate.upsert({
     *   create: {
     *     // ... data to create a Coordinate
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Coordinate we want to update
     *   }
     * })
     */
    upsert<T extends CoordinateUpsertArgs>(args: SelectSubset<T, CoordinateUpsertArgs<ExtArgs>>): Prisma__CoordinateClient<$Result.GetResult<Prisma.$CoordinatePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Coordinates.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CoordinateCountArgs} args - Arguments to filter Coordinates to count.
     * @example
     * // Count the number of Coordinates
     * const count = await prisma.coordinate.count({
     *   where: {
     *     // ... the filter for the Coordinates we want to count
     *   }
     * })
    **/
    count<T extends CoordinateCountArgs>(
      args?: Subset<T, CoordinateCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CoordinateCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Coordinate.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CoordinateAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CoordinateAggregateArgs>(args: Subset<T, CoordinateAggregateArgs>): Prisma.PrismaPromise<GetCoordinateAggregateType<T>>

    /**
     * Group by Coordinate.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CoordinateGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends CoordinateGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CoordinateGroupByArgs['orderBy'] }
        : { orderBy?: CoordinateGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, CoordinateGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCoordinateGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Coordinate model
   */
  readonly fields: CoordinateFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Coordinate.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CoordinateClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    meetings<T extends Coordinate$meetingsArgs<ExtArgs> = {}>(args?: Subset<T, Coordinate$meetingsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MeetingPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Coordinate model
   */
  interface CoordinateFieldRefs {
    readonly id: FieldRef<"Coordinate", 'Int'>
    readonly gender: FieldRef<"Coordinate", 'String'>
    readonly lastName: FieldRef<"Coordinate", 'String'>
    readonly firstName: FieldRef<"Coordinate", 'String'>
    readonly email: FieldRef<"Coordinate", 'String'>
    readonly phone: FieldRef<"Coordinate", 'String'>
    readonly createdAt: FieldRef<"Coordinate", 'DateTime'>
    readonly updatedAt: FieldRef<"Coordinate", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Coordinate findUnique
   */
  export type CoordinateFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Coordinate
     */
    select?: CoordinateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Coordinate
     */
    omit?: CoordinateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CoordinateInclude<ExtArgs> | null
    /**
     * Filter, which Coordinate to fetch.
     */
    where: CoordinateWhereUniqueInput
  }

  /**
   * Coordinate findUniqueOrThrow
   */
  export type CoordinateFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Coordinate
     */
    select?: CoordinateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Coordinate
     */
    omit?: CoordinateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CoordinateInclude<ExtArgs> | null
    /**
     * Filter, which Coordinate to fetch.
     */
    where: CoordinateWhereUniqueInput
  }

  /**
   * Coordinate findFirst
   */
  export type CoordinateFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Coordinate
     */
    select?: CoordinateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Coordinate
     */
    omit?: CoordinateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CoordinateInclude<ExtArgs> | null
    /**
     * Filter, which Coordinate to fetch.
     */
    where?: CoordinateWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Coordinates to fetch.
     */
    orderBy?: CoordinateOrderByWithRelationInput | CoordinateOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Coordinates.
     */
    cursor?: CoordinateWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Coordinates from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Coordinates.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Coordinates.
     */
    distinct?: CoordinateScalarFieldEnum | CoordinateScalarFieldEnum[]
  }

  /**
   * Coordinate findFirstOrThrow
   */
  export type CoordinateFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Coordinate
     */
    select?: CoordinateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Coordinate
     */
    omit?: CoordinateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CoordinateInclude<ExtArgs> | null
    /**
     * Filter, which Coordinate to fetch.
     */
    where?: CoordinateWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Coordinates to fetch.
     */
    orderBy?: CoordinateOrderByWithRelationInput | CoordinateOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Coordinates.
     */
    cursor?: CoordinateWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Coordinates from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Coordinates.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Coordinates.
     */
    distinct?: CoordinateScalarFieldEnum | CoordinateScalarFieldEnum[]
  }

  /**
   * Coordinate findMany
   */
  export type CoordinateFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Coordinate
     */
    select?: CoordinateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Coordinate
     */
    omit?: CoordinateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CoordinateInclude<ExtArgs> | null
    /**
     * Filter, which Coordinates to fetch.
     */
    where?: CoordinateWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Coordinates to fetch.
     */
    orderBy?: CoordinateOrderByWithRelationInput | CoordinateOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Coordinates.
     */
    cursor?: CoordinateWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Coordinates from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Coordinates.
     */
    skip?: number
    distinct?: CoordinateScalarFieldEnum | CoordinateScalarFieldEnum[]
  }

  /**
   * Coordinate create
   */
  export type CoordinateCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Coordinate
     */
    select?: CoordinateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Coordinate
     */
    omit?: CoordinateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CoordinateInclude<ExtArgs> | null
    /**
     * The data needed to create a Coordinate.
     */
    data: XOR<CoordinateCreateInput, CoordinateUncheckedCreateInput>
  }

  /**
   * Coordinate createMany
   */
  export type CoordinateCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Coordinates.
     */
    data: CoordinateCreateManyInput | CoordinateCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Coordinate update
   */
  export type CoordinateUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Coordinate
     */
    select?: CoordinateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Coordinate
     */
    omit?: CoordinateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CoordinateInclude<ExtArgs> | null
    /**
     * The data needed to update a Coordinate.
     */
    data: XOR<CoordinateUpdateInput, CoordinateUncheckedUpdateInput>
    /**
     * Choose, which Coordinate to update.
     */
    where: CoordinateWhereUniqueInput
  }

  /**
   * Coordinate updateMany
   */
  export type CoordinateUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Coordinates.
     */
    data: XOR<CoordinateUpdateManyMutationInput, CoordinateUncheckedUpdateManyInput>
    /**
     * Filter which Coordinates to update
     */
    where?: CoordinateWhereInput
    /**
     * Limit how many Coordinates to update.
     */
    limit?: number
  }

  /**
   * Coordinate upsert
   */
  export type CoordinateUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Coordinate
     */
    select?: CoordinateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Coordinate
     */
    omit?: CoordinateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CoordinateInclude<ExtArgs> | null
    /**
     * The filter to search for the Coordinate to update in case it exists.
     */
    where: CoordinateWhereUniqueInput
    /**
     * In case the Coordinate found by the `where` argument doesn't exist, create a new Coordinate with this data.
     */
    create: XOR<CoordinateCreateInput, CoordinateUncheckedCreateInput>
    /**
     * In case the Coordinate was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CoordinateUpdateInput, CoordinateUncheckedUpdateInput>
  }

  /**
   * Coordinate delete
   */
  export type CoordinateDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Coordinate
     */
    select?: CoordinateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Coordinate
     */
    omit?: CoordinateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CoordinateInclude<ExtArgs> | null
    /**
     * Filter which Coordinate to delete.
     */
    where: CoordinateWhereUniqueInput
  }

  /**
   * Coordinate deleteMany
   */
  export type CoordinateDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Coordinates to delete
     */
    where?: CoordinateWhereInput
    /**
     * Limit how many Coordinates to delete.
     */
    limit?: number
  }

  /**
   * Coordinate.meetings
   */
  export type Coordinate$meetingsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Meeting
     */
    select?: MeetingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Meeting
     */
    omit?: MeetingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MeetingInclude<ExtArgs> | null
    where?: MeetingWhereInput
    orderBy?: MeetingOrderByWithRelationInput | MeetingOrderByWithRelationInput[]
    cursor?: MeetingWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MeetingScalarFieldEnum | MeetingScalarFieldEnum[]
  }

  /**
   * Coordinate without action
   */
  export type CoordinateDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Coordinate
     */
    select?: CoordinateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Coordinate
     */
    omit?: CoordinateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CoordinateInclude<ExtArgs> | null
  }


  /**
   * Model Disponibility
   */

  export type AggregateDisponibility = {
    _count: DisponibilityCountAggregateOutputType | null
    _avg: DisponibilityAvgAggregateOutputType | null
    _sum: DisponibilitySumAggregateOutputType | null
    _min: DisponibilityMinAggregateOutputType | null
    _max: DisponibilityMaxAggregateOutputType | null
  }

  export type DisponibilityAvgAggregateOutputType = {
    id: number | null
  }

  export type DisponibilitySumAggregateOutputType = {
    id: number | null
  }

  export type DisponibilityMinAggregateOutputType = {
    id: number | null
    date: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type DisponibilityMaxAggregateOutputType = {
    id: number | null
    date: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type DisponibilityCountAggregateOutputType = {
    id: number
    date: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type DisponibilityAvgAggregateInputType = {
    id?: true
  }

  export type DisponibilitySumAggregateInputType = {
    id?: true
  }

  export type DisponibilityMinAggregateInputType = {
    id?: true
    date?: true
    createdAt?: true
    updatedAt?: true
  }

  export type DisponibilityMaxAggregateInputType = {
    id?: true
    date?: true
    createdAt?: true
    updatedAt?: true
  }

  export type DisponibilityCountAggregateInputType = {
    id?: true
    date?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type DisponibilityAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Disponibility to aggregate.
     */
    where?: DisponibilityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Disponibilities to fetch.
     */
    orderBy?: DisponibilityOrderByWithRelationInput | DisponibilityOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: DisponibilityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Disponibilities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Disponibilities.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Disponibilities
    **/
    _count?: true | DisponibilityCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: DisponibilityAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: DisponibilitySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DisponibilityMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DisponibilityMaxAggregateInputType
  }

  export type GetDisponibilityAggregateType<T extends DisponibilityAggregateArgs> = {
        [P in keyof T & keyof AggregateDisponibility]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDisponibility[P]>
      : GetScalarType<T[P], AggregateDisponibility[P]>
  }




  export type DisponibilityGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DisponibilityWhereInput
    orderBy?: DisponibilityOrderByWithAggregationInput | DisponibilityOrderByWithAggregationInput[]
    by: DisponibilityScalarFieldEnum[] | DisponibilityScalarFieldEnum
    having?: DisponibilityScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DisponibilityCountAggregateInputType | true
    _avg?: DisponibilityAvgAggregateInputType
    _sum?: DisponibilitySumAggregateInputType
    _min?: DisponibilityMinAggregateInputType
    _max?: DisponibilityMaxAggregateInputType
  }

  export type DisponibilityGroupByOutputType = {
    id: number
    date: Date
    createdAt: Date
    updatedAt: Date
    _count: DisponibilityCountAggregateOutputType | null
    _avg: DisponibilityAvgAggregateOutputType | null
    _sum: DisponibilitySumAggregateOutputType | null
    _min: DisponibilityMinAggregateOutputType | null
    _max: DisponibilityMaxAggregateOutputType | null
  }

  type GetDisponibilityGroupByPayload<T extends DisponibilityGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DisponibilityGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DisponibilityGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DisponibilityGroupByOutputType[P]>
            : GetScalarType<T[P], DisponibilityGroupByOutputType[P]>
        }
      >
    >


  export type DisponibilitySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    date?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    meetings?: boolean | Disponibility$meetingsArgs<ExtArgs>
    _count?: boolean | DisponibilityCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["disponibility"]>



  export type DisponibilitySelectScalar = {
    id?: boolean
    date?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type DisponibilityOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "date" | "createdAt" | "updatedAt", ExtArgs["result"]["disponibility"]>
  export type DisponibilityInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    meetings?: boolean | Disponibility$meetingsArgs<ExtArgs>
    _count?: boolean | DisponibilityCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $DisponibilityPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Disponibility"
    objects: {
      meetings: Prisma.$MeetingPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      date: Date
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["disponibility"]>
    composites: {}
  }

  type DisponibilityGetPayload<S extends boolean | null | undefined | DisponibilityDefaultArgs> = $Result.GetResult<Prisma.$DisponibilityPayload, S>

  type DisponibilityCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<DisponibilityFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: DisponibilityCountAggregateInputType | true
    }

  export interface DisponibilityDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Disponibility'], meta: { name: 'Disponibility' } }
    /**
     * Find zero or one Disponibility that matches the filter.
     * @param {DisponibilityFindUniqueArgs} args - Arguments to find a Disponibility
     * @example
     * // Get one Disponibility
     * const disponibility = await prisma.disponibility.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends DisponibilityFindUniqueArgs>(args: SelectSubset<T, DisponibilityFindUniqueArgs<ExtArgs>>): Prisma__DisponibilityClient<$Result.GetResult<Prisma.$DisponibilityPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Disponibility that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {DisponibilityFindUniqueOrThrowArgs} args - Arguments to find a Disponibility
     * @example
     * // Get one Disponibility
     * const disponibility = await prisma.disponibility.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends DisponibilityFindUniqueOrThrowArgs>(args: SelectSubset<T, DisponibilityFindUniqueOrThrowArgs<ExtArgs>>): Prisma__DisponibilityClient<$Result.GetResult<Prisma.$DisponibilityPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Disponibility that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DisponibilityFindFirstArgs} args - Arguments to find a Disponibility
     * @example
     * // Get one Disponibility
     * const disponibility = await prisma.disponibility.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends DisponibilityFindFirstArgs>(args?: SelectSubset<T, DisponibilityFindFirstArgs<ExtArgs>>): Prisma__DisponibilityClient<$Result.GetResult<Prisma.$DisponibilityPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Disponibility that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DisponibilityFindFirstOrThrowArgs} args - Arguments to find a Disponibility
     * @example
     * // Get one Disponibility
     * const disponibility = await prisma.disponibility.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends DisponibilityFindFirstOrThrowArgs>(args?: SelectSubset<T, DisponibilityFindFirstOrThrowArgs<ExtArgs>>): Prisma__DisponibilityClient<$Result.GetResult<Prisma.$DisponibilityPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Disponibilities that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DisponibilityFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Disponibilities
     * const disponibilities = await prisma.disponibility.findMany()
     * 
     * // Get first 10 Disponibilities
     * const disponibilities = await prisma.disponibility.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const disponibilityWithIdOnly = await prisma.disponibility.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends DisponibilityFindManyArgs>(args?: SelectSubset<T, DisponibilityFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DisponibilityPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Disponibility.
     * @param {DisponibilityCreateArgs} args - Arguments to create a Disponibility.
     * @example
     * // Create one Disponibility
     * const Disponibility = await prisma.disponibility.create({
     *   data: {
     *     // ... data to create a Disponibility
     *   }
     * })
     * 
     */
    create<T extends DisponibilityCreateArgs>(args: SelectSubset<T, DisponibilityCreateArgs<ExtArgs>>): Prisma__DisponibilityClient<$Result.GetResult<Prisma.$DisponibilityPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Disponibilities.
     * @param {DisponibilityCreateManyArgs} args - Arguments to create many Disponibilities.
     * @example
     * // Create many Disponibilities
     * const disponibility = await prisma.disponibility.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends DisponibilityCreateManyArgs>(args?: SelectSubset<T, DisponibilityCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Disponibility.
     * @param {DisponibilityDeleteArgs} args - Arguments to delete one Disponibility.
     * @example
     * // Delete one Disponibility
     * const Disponibility = await prisma.disponibility.delete({
     *   where: {
     *     // ... filter to delete one Disponibility
     *   }
     * })
     * 
     */
    delete<T extends DisponibilityDeleteArgs>(args: SelectSubset<T, DisponibilityDeleteArgs<ExtArgs>>): Prisma__DisponibilityClient<$Result.GetResult<Prisma.$DisponibilityPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Disponibility.
     * @param {DisponibilityUpdateArgs} args - Arguments to update one Disponibility.
     * @example
     * // Update one Disponibility
     * const disponibility = await prisma.disponibility.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends DisponibilityUpdateArgs>(args: SelectSubset<T, DisponibilityUpdateArgs<ExtArgs>>): Prisma__DisponibilityClient<$Result.GetResult<Prisma.$DisponibilityPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Disponibilities.
     * @param {DisponibilityDeleteManyArgs} args - Arguments to filter Disponibilities to delete.
     * @example
     * // Delete a few Disponibilities
     * const { count } = await prisma.disponibility.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends DisponibilityDeleteManyArgs>(args?: SelectSubset<T, DisponibilityDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Disponibilities.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DisponibilityUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Disponibilities
     * const disponibility = await prisma.disponibility.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends DisponibilityUpdateManyArgs>(args: SelectSubset<T, DisponibilityUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Disponibility.
     * @param {DisponibilityUpsertArgs} args - Arguments to update or create a Disponibility.
     * @example
     * // Update or create a Disponibility
     * const disponibility = await prisma.disponibility.upsert({
     *   create: {
     *     // ... data to create a Disponibility
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Disponibility we want to update
     *   }
     * })
     */
    upsert<T extends DisponibilityUpsertArgs>(args: SelectSubset<T, DisponibilityUpsertArgs<ExtArgs>>): Prisma__DisponibilityClient<$Result.GetResult<Prisma.$DisponibilityPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Disponibilities.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DisponibilityCountArgs} args - Arguments to filter Disponibilities to count.
     * @example
     * // Count the number of Disponibilities
     * const count = await prisma.disponibility.count({
     *   where: {
     *     // ... the filter for the Disponibilities we want to count
     *   }
     * })
    **/
    count<T extends DisponibilityCountArgs>(
      args?: Subset<T, DisponibilityCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DisponibilityCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Disponibility.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DisponibilityAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends DisponibilityAggregateArgs>(args: Subset<T, DisponibilityAggregateArgs>): Prisma.PrismaPromise<GetDisponibilityAggregateType<T>>

    /**
     * Group by Disponibility.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DisponibilityGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends DisponibilityGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DisponibilityGroupByArgs['orderBy'] }
        : { orderBy?: DisponibilityGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, DisponibilityGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDisponibilityGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Disponibility model
   */
  readonly fields: DisponibilityFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Disponibility.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__DisponibilityClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    meetings<T extends Disponibility$meetingsArgs<ExtArgs> = {}>(args?: Subset<T, Disponibility$meetingsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MeetingPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Disponibility model
   */
  interface DisponibilityFieldRefs {
    readonly id: FieldRef<"Disponibility", 'Int'>
    readonly date: FieldRef<"Disponibility", 'DateTime'>
    readonly createdAt: FieldRef<"Disponibility", 'DateTime'>
    readonly updatedAt: FieldRef<"Disponibility", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Disponibility findUnique
   */
  export type DisponibilityFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Disponibility
     */
    select?: DisponibilitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Disponibility
     */
    omit?: DisponibilityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DisponibilityInclude<ExtArgs> | null
    /**
     * Filter, which Disponibility to fetch.
     */
    where: DisponibilityWhereUniqueInput
  }

  /**
   * Disponibility findUniqueOrThrow
   */
  export type DisponibilityFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Disponibility
     */
    select?: DisponibilitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Disponibility
     */
    omit?: DisponibilityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DisponibilityInclude<ExtArgs> | null
    /**
     * Filter, which Disponibility to fetch.
     */
    where: DisponibilityWhereUniqueInput
  }

  /**
   * Disponibility findFirst
   */
  export type DisponibilityFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Disponibility
     */
    select?: DisponibilitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Disponibility
     */
    omit?: DisponibilityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DisponibilityInclude<ExtArgs> | null
    /**
     * Filter, which Disponibility to fetch.
     */
    where?: DisponibilityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Disponibilities to fetch.
     */
    orderBy?: DisponibilityOrderByWithRelationInput | DisponibilityOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Disponibilities.
     */
    cursor?: DisponibilityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Disponibilities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Disponibilities.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Disponibilities.
     */
    distinct?: DisponibilityScalarFieldEnum | DisponibilityScalarFieldEnum[]
  }

  /**
   * Disponibility findFirstOrThrow
   */
  export type DisponibilityFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Disponibility
     */
    select?: DisponibilitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Disponibility
     */
    omit?: DisponibilityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DisponibilityInclude<ExtArgs> | null
    /**
     * Filter, which Disponibility to fetch.
     */
    where?: DisponibilityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Disponibilities to fetch.
     */
    orderBy?: DisponibilityOrderByWithRelationInput | DisponibilityOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Disponibilities.
     */
    cursor?: DisponibilityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Disponibilities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Disponibilities.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Disponibilities.
     */
    distinct?: DisponibilityScalarFieldEnum | DisponibilityScalarFieldEnum[]
  }

  /**
   * Disponibility findMany
   */
  export type DisponibilityFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Disponibility
     */
    select?: DisponibilitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Disponibility
     */
    omit?: DisponibilityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DisponibilityInclude<ExtArgs> | null
    /**
     * Filter, which Disponibilities to fetch.
     */
    where?: DisponibilityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Disponibilities to fetch.
     */
    orderBy?: DisponibilityOrderByWithRelationInput | DisponibilityOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Disponibilities.
     */
    cursor?: DisponibilityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Disponibilities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Disponibilities.
     */
    skip?: number
    distinct?: DisponibilityScalarFieldEnum | DisponibilityScalarFieldEnum[]
  }

  /**
   * Disponibility create
   */
  export type DisponibilityCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Disponibility
     */
    select?: DisponibilitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Disponibility
     */
    omit?: DisponibilityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DisponibilityInclude<ExtArgs> | null
    /**
     * The data needed to create a Disponibility.
     */
    data: XOR<DisponibilityCreateInput, DisponibilityUncheckedCreateInput>
  }

  /**
   * Disponibility createMany
   */
  export type DisponibilityCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Disponibilities.
     */
    data: DisponibilityCreateManyInput | DisponibilityCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Disponibility update
   */
  export type DisponibilityUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Disponibility
     */
    select?: DisponibilitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Disponibility
     */
    omit?: DisponibilityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DisponibilityInclude<ExtArgs> | null
    /**
     * The data needed to update a Disponibility.
     */
    data: XOR<DisponibilityUpdateInput, DisponibilityUncheckedUpdateInput>
    /**
     * Choose, which Disponibility to update.
     */
    where: DisponibilityWhereUniqueInput
  }

  /**
   * Disponibility updateMany
   */
  export type DisponibilityUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Disponibilities.
     */
    data: XOR<DisponibilityUpdateManyMutationInput, DisponibilityUncheckedUpdateManyInput>
    /**
     * Filter which Disponibilities to update
     */
    where?: DisponibilityWhereInput
    /**
     * Limit how many Disponibilities to update.
     */
    limit?: number
  }

  /**
   * Disponibility upsert
   */
  export type DisponibilityUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Disponibility
     */
    select?: DisponibilitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Disponibility
     */
    omit?: DisponibilityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DisponibilityInclude<ExtArgs> | null
    /**
     * The filter to search for the Disponibility to update in case it exists.
     */
    where: DisponibilityWhereUniqueInput
    /**
     * In case the Disponibility found by the `where` argument doesn't exist, create a new Disponibility with this data.
     */
    create: XOR<DisponibilityCreateInput, DisponibilityUncheckedCreateInput>
    /**
     * In case the Disponibility was found with the provided `where` argument, update it with this data.
     */
    update: XOR<DisponibilityUpdateInput, DisponibilityUncheckedUpdateInput>
  }

  /**
   * Disponibility delete
   */
  export type DisponibilityDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Disponibility
     */
    select?: DisponibilitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Disponibility
     */
    omit?: DisponibilityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DisponibilityInclude<ExtArgs> | null
    /**
     * Filter which Disponibility to delete.
     */
    where: DisponibilityWhereUniqueInput
  }

  /**
   * Disponibility deleteMany
   */
  export type DisponibilityDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Disponibilities to delete
     */
    where?: DisponibilityWhereInput
    /**
     * Limit how many Disponibilities to delete.
     */
    limit?: number
  }

  /**
   * Disponibility.meetings
   */
  export type Disponibility$meetingsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Meeting
     */
    select?: MeetingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Meeting
     */
    omit?: MeetingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MeetingInclude<ExtArgs> | null
    where?: MeetingWhereInput
    orderBy?: MeetingOrderByWithRelationInput | MeetingOrderByWithRelationInput[]
    cursor?: MeetingWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MeetingScalarFieldEnum | MeetingScalarFieldEnum[]
  }

  /**
   * Disponibility without action
   */
  export type DisponibilityDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Disponibility
     */
    select?: DisponibilitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Disponibility
     */
    omit?: DisponibilityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DisponibilityInclude<ExtArgs> | null
  }


  /**
   * Model Meeting
   */

  export type AggregateMeeting = {
    _count: MeetingCountAggregateOutputType | null
    _avg: MeetingAvgAggregateOutputType | null
    _sum: MeetingSumAggregateOutputType | null
    _min: MeetingMinAggregateOutputType | null
    _max: MeetingMaxAggregateOutputType | null
  }

  export type MeetingAvgAggregateOutputType = {
    id: number | null
    coordinateId: number | null
    messageId: number | null
  }

  export type MeetingSumAggregateOutputType = {
    id: number | null
    coordinateId: number | null
    messageId: number | null
  }

  export type MeetingMinAggregateOutputType = {
    id: number | null
    createdAt: Date | null
    updatedAt: Date | null
    coordinateId: number | null
    messageId: number | null
  }

  export type MeetingMaxAggregateOutputType = {
    id: number | null
    createdAt: Date | null
    updatedAt: Date | null
    coordinateId: number | null
    messageId: number | null
  }

  export type MeetingCountAggregateOutputType = {
    id: number
    createdAt: number
    updatedAt: number
    coordinateId: number
    messageId: number
    _all: number
  }


  export type MeetingAvgAggregateInputType = {
    id?: true
    coordinateId?: true
    messageId?: true
  }

  export type MeetingSumAggregateInputType = {
    id?: true
    coordinateId?: true
    messageId?: true
  }

  export type MeetingMinAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    coordinateId?: true
    messageId?: true
  }

  export type MeetingMaxAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    coordinateId?: true
    messageId?: true
  }

  export type MeetingCountAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    coordinateId?: true
    messageId?: true
    _all?: true
  }

  export type MeetingAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Meeting to aggregate.
     */
    where?: MeetingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Meetings to fetch.
     */
    orderBy?: MeetingOrderByWithRelationInput | MeetingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MeetingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Meetings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Meetings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Meetings
    **/
    _count?: true | MeetingCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: MeetingAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: MeetingSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MeetingMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MeetingMaxAggregateInputType
  }

  export type GetMeetingAggregateType<T extends MeetingAggregateArgs> = {
        [P in keyof T & keyof AggregateMeeting]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMeeting[P]>
      : GetScalarType<T[P], AggregateMeeting[P]>
  }




  export type MeetingGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MeetingWhereInput
    orderBy?: MeetingOrderByWithAggregationInput | MeetingOrderByWithAggregationInput[]
    by: MeetingScalarFieldEnum[] | MeetingScalarFieldEnum
    having?: MeetingScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MeetingCountAggregateInputType | true
    _avg?: MeetingAvgAggregateInputType
    _sum?: MeetingSumAggregateInputType
    _min?: MeetingMinAggregateInputType
    _max?: MeetingMaxAggregateInputType
  }

  export type MeetingGroupByOutputType = {
    id: number
    createdAt: Date
    updatedAt: Date
    coordinateId: number
    messageId: number
    _count: MeetingCountAggregateOutputType | null
    _avg: MeetingAvgAggregateOutputType | null
    _sum: MeetingSumAggregateOutputType | null
    _min: MeetingMinAggregateOutputType | null
    _max: MeetingMaxAggregateOutputType | null
  }

  type GetMeetingGroupByPayload<T extends MeetingGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MeetingGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MeetingGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MeetingGroupByOutputType[P]>
            : GetScalarType<T[P], MeetingGroupByOutputType[P]>
        }
      >
    >


  export type MeetingSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    coordinateId?: boolean
    messageId?: boolean
    coordinate?: boolean | CoordinateDefaultArgs<ExtArgs>
    message?: boolean | MessageDefaultArgs<ExtArgs>
    disponibilities?: boolean | Meeting$disponibilitiesArgs<ExtArgs>
    _count?: boolean | MeetingCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["meeting"]>



  export type MeetingSelectScalar = {
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    coordinateId?: boolean
    messageId?: boolean
  }

  export type MeetingOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "createdAt" | "updatedAt" | "coordinateId" | "messageId", ExtArgs["result"]["meeting"]>
  export type MeetingInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    coordinate?: boolean | CoordinateDefaultArgs<ExtArgs>
    message?: boolean | MessageDefaultArgs<ExtArgs>
    disponibilities?: boolean | Meeting$disponibilitiesArgs<ExtArgs>
    _count?: boolean | MeetingCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $MeetingPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Meeting"
    objects: {
      coordinate: Prisma.$CoordinatePayload<ExtArgs>
      message: Prisma.$MessagePayload<ExtArgs>
      disponibilities: Prisma.$DisponibilityPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      createdAt: Date
      updatedAt: Date
      coordinateId: number
      messageId: number
    }, ExtArgs["result"]["meeting"]>
    composites: {}
  }

  type MeetingGetPayload<S extends boolean | null | undefined | MeetingDefaultArgs> = $Result.GetResult<Prisma.$MeetingPayload, S>

  type MeetingCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<MeetingFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: MeetingCountAggregateInputType | true
    }

  export interface MeetingDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Meeting'], meta: { name: 'Meeting' } }
    /**
     * Find zero or one Meeting that matches the filter.
     * @param {MeetingFindUniqueArgs} args - Arguments to find a Meeting
     * @example
     * // Get one Meeting
     * const meeting = await prisma.meeting.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends MeetingFindUniqueArgs>(args: SelectSubset<T, MeetingFindUniqueArgs<ExtArgs>>): Prisma__MeetingClient<$Result.GetResult<Prisma.$MeetingPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Meeting that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {MeetingFindUniqueOrThrowArgs} args - Arguments to find a Meeting
     * @example
     * // Get one Meeting
     * const meeting = await prisma.meeting.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MeetingFindUniqueOrThrowArgs>(args: SelectSubset<T, MeetingFindUniqueOrThrowArgs<ExtArgs>>): Prisma__MeetingClient<$Result.GetResult<Prisma.$MeetingPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Meeting that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MeetingFindFirstArgs} args - Arguments to find a Meeting
     * @example
     * // Get one Meeting
     * const meeting = await prisma.meeting.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends MeetingFindFirstArgs>(args?: SelectSubset<T, MeetingFindFirstArgs<ExtArgs>>): Prisma__MeetingClient<$Result.GetResult<Prisma.$MeetingPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Meeting that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MeetingFindFirstOrThrowArgs} args - Arguments to find a Meeting
     * @example
     * // Get one Meeting
     * const meeting = await prisma.meeting.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends MeetingFindFirstOrThrowArgs>(args?: SelectSubset<T, MeetingFindFirstOrThrowArgs<ExtArgs>>): Prisma__MeetingClient<$Result.GetResult<Prisma.$MeetingPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Meetings that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MeetingFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Meetings
     * const meetings = await prisma.meeting.findMany()
     * 
     * // Get first 10 Meetings
     * const meetings = await prisma.meeting.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const meetingWithIdOnly = await prisma.meeting.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends MeetingFindManyArgs>(args?: SelectSubset<T, MeetingFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MeetingPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Meeting.
     * @param {MeetingCreateArgs} args - Arguments to create a Meeting.
     * @example
     * // Create one Meeting
     * const Meeting = await prisma.meeting.create({
     *   data: {
     *     // ... data to create a Meeting
     *   }
     * })
     * 
     */
    create<T extends MeetingCreateArgs>(args: SelectSubset<T, MeetingCreateArgs<ExtArgs>>): Prisma__MeetingClient<$Result.GetResult<Prisma.$MeetingPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Meetings.
     * @param {MeetingCreateManyArgs} args - Arguments to create many Meetings.
     * @example
     * // Create many Meetings
     * const meeting = await prisma.meeting.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends MeetingCreateManyArgs>(args?: SelectSubset<T, MeetingCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Meeting.
     * @param {MeetingDeleteArgs} args - Arguments to delete one Meeting.
     * @example
     * // Delete one Meeting
     * const Meeting = await prisma.meeting.delete({
     *   where: {
     *     // ... filter to delete one Meeting
     *   }
     * })
     * 
     */
    delete<T extends MeetingDeleteArgs>(args: SelectSubset<T, MeetingDeleteArgs<ExtArgs>>): Prisma__MeetingClient<$Result.GetResult<Prisma.$MeetingPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Meeting.
     * @param {MeetingUpdateArgs} args - Arguments to update one Meeting.
     * @example
     * // Update one Meeting
     * const meeting = await prisma.meeting.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends MeetingUpdateArgs>(args: SelectSubset<T, MeetingUpdateArgs<ExtArgs>>): Prisma__MeetingClient<$Result.GetResult<Prisma.$MeetingPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Meetings.
     * @param {MeetingDeleteManyArgs} args - Arguments to filter Meetings to delete.
     * @example
     * // Delete a few Meetings
     * const { count } = await prisma.meeting.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends MeetingDeleteManyArgs>(args?: SelectSubset<T, MeetingDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Meetings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MeetingUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Meetings
     * const meeting = await prisma.meeting.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends MeetingUpdateManyArgs>(args: SelectSubset<T, MeetingUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Meeting.
     * @param {MeetingUpsertArgs} args - Arguments to update or create a Meeting.
     * @example
     * // Update or create a Meeting
     * const meeting = await prisma.meeting.upsert({
     *   create: {
     *     // ... data to create a Meeting
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Meeting we want to update
     *   }
     * })
     */
    upsert<T extends MeetingUpsertArgs>(args: SelectSubset<T, MeetingUpsertArgs<ExtArgs>>): Prisma__MeetingClient<$Result.GetResult<Prisma.$MeetingPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Meetings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MeetingCountArgs} args - Arguments to filter Meetings to count.
     * @example
     * // Count the number of Meetings
     * const count = await prisma.meeting.count({
     *   where: {
     *     // ... the filter for the Meetings we want to count
     *   }
     * })
    **/
    count<T extends MeetingCountArgs>(
      args?: Subset<T, MeetingCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MeetingCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Meeting.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MeetingAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends MeetingAggregateArgs>(args: Subset<T, MeetingAggregateArgs>): Prisma.PrismaPromise<GetMeetingAggregateType<T>>

    /**
     * Group by Meeting.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MeetingGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends MeetingGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MeetingGroupByArgs['orderBy'] }
        : { orderBy?: MeetingGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, MeetingGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMeetingGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Meeting model
   */
  readonly fields: MeetingFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Meeting.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MeetingClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    coordinate<T extends CoordinateDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CoordinateDefaultArgs<ExtArgs>>): Prisma__CoordinateClient<$Result.GetResult<Prisma.$CoordinatePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    message<T extends MessageDefaultArgs<ExtArgs> = {}>(args?: Subset<T, MessageDefaultArgs<ExtArgs>>): Prisma__MessageClient<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    disponibilities<T extends Meeting$disponibilitiesArgs<ExtArgs> = {}>(args?: Subset<T, Meeting$disponibilitiesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DisponibilityPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Meeting model
   */
  interface MeetingFieldRefs {
    readonly id: FieldRef<"Meeting", 'Int'>
    readonly createdAt: FieldRef<"Meeting", 'DateTime'>
    readonly updatedAt: FieldRef<"Meeting", 'DateTime'>
    readonly coordinateId: FieldRef<"Meeting", 'Int'>
    readonly messageId: FieldRef<"Meeting", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Meeting findUnique
   */
  export type MeetingFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Meeting
     */
    select?: MeetingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Meeting
     */
    omit?: MeetingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MeetingInclude<ExtArgs> | null
    /**
     * Filter, which Meeting to fetch.
     */
    where: MeetingWhereUniqueInput
  }

  /**
   * Meeting findUniqueOrThrow
   */
  export type MeetingFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Meeting
     */
    select?: MeetingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Meeting
     */
    omit?: MeetingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MeetingInclude<ExtArgs> | null
    /**
     * Filter, which Meeting to fetch.
     */
    where: MeetingWhereUniqueInput
  }

  /**
   * Meeting findFirst
   */
  export type MeetingFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Meeting
     */
    select?: MeetingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Meeting
     */
    omit?: MeetingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MeetingInclude<ExtArgs> | null
    /**
     * Filter, which Meeting to fetch.
     */
    where?: MeetingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Meetings to fetch.
     */
    orderBy?: MeetingOrderByWithRelationInput | MeetingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Meetings.
     */
    cursor?: MeetingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Meetings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Meetings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Meetings.
     */
    distinct?: MeetingScalarFieldEnum | MeetingScalarFieldEnum[]
  }

  /**
   * Meeting findFirstOrThrow
   */
  export type MeetingFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Meeting
     */
    select?: MeetingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Meeting
     */
    omit?: MeetingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MeetingInclude<ExtArgs> | null
    /**
     * Filter, which Meeting to fetch.
     */
    where?: MeetingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Meetings to fetch.
     */
    orderBy?: MeetingOrderByWithRelationInput | MeetingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Meetings.
     */
    cursor?: MeetingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Meetings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Meetings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Meetings.
     */
    distinct?: MeetingScalarFieldEnum | MeetingScalarFieldEnum[]
  }

  /**
   * Meeting findMany
   */
  export type MeetingFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Meeting
     */
    select?: MeetingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Meeting
     */
    omit?: MeetingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MeetingInclude<ExtArgs> | null
    /**
     * Filter, which Meetings to fetch.
     */
    where?: MeetingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Meetings to fetch.
     */
    orderBy?: MeetingOrderByWithRelationInput | MeetingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Meetings.
     */
    cursor?: MeetingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Meetings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Meetings.
     */
    skip?: number
    distinct?: MeetingScalarFieldEnum | MeetingScalarFieldEnum[]
  }

  /**
   * Meeting create
   */
  export type MeetingCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Meeting
     */
    select?: MeetingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Meeting
     */
    omit?: MeetingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MeetingInclude<ExtArgs> | null
    /**
     * The data needed to create a Meeting.
     */
    data: XOR<MeetingCreateInput, MeetingUncheckedCreateInput>
  }

  /**
   * Meeting createMany
   */
  export type MeetingCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Meetings.
     */
    data: MeetingCreateManyInput | MeetingCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Meeting update
   */
  export type MeetingUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Meeting
     */
    select?: MeetingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Meeting
     */
    omit?: MeetingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MeetingInclude<ExtArgs> | null
    /**
     * The data needed to update a Meeting.
     */
    data: XOR<MeetingUpdateInput, MeetingUncheckedUpdateInput>
    /**
     * Choose, which Meeting to update.
     */
    where: MeetingWhereUniqueInput
  }

  /**
   * Meeting updateMany
   */
  export type MeetingUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Meetings.
     */
    data: XOR<MeetingUpdateManyMutationInput, MeetingUncheckedUpdateManyInput>
    /**
     * Filter which Meetings to update
     */
    where?: MeetingWhereInput
    /**
     * Limit how many Meetings to update.
     */
    limit?: number
  }

  /**
   * Meeting upsert
   */
  export type MeetingUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Meeting
     */
    select?: MeetingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Meeting
     */
    omit?: MeetingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MeetingInclude<ExtArgs> | null
    /**
     * The filter to search for the Meeting to update in case it exists.
     */
    where: MeetingWhereUniqueInput
    /**
     * In case the Meeting found by the `where` argument doesn't exist, create a new Meeting with this data.
     */
    create: XOR<MeetingCreateInput, MeetingUncheckedCreateInput>
    /**
     * In case the Meeting was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MeetingUpdateInput, MeetingUncheckedUpdateInput>
  }

  /**
   * Meeting delete
   */
  export type MeetingDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Meeting
     */
    select?: MeetingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Meeting
     */
    omit?: MeetingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MeetingInclude<ExtArgs> | null
    /**
     * Filter which Meeting to delete.
     */
    where: MeetingWhereUniqueInput
  }

  /**
   * Meeting deleteMany
   */
  export type MeetingDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Meetings to delete
     */
    where?: MeetingWhereInput
    /**
     * Limit how many Meetings to delete.
     */
    limit?: number
  }

  /**
   * Meeting.disponibilities
   */
  export type Meeting$disponibilitiesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Disponibility
     */
    select?: DisponibilitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Disponibility
     */
    omit?: DisponibilityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DisponibilityInclude<ExtArgs> | null
    where?: DisponibilityWhereInput
    orderBy?: DisponibilityOrderByWithRelationInput | DisponibilityOrderByWithRelationInput[]
    cursor?: DisponibilityWhereUniqueInput
    take?: number
    skip?: number
    distinct?: DisponibilityScalarFieldEnum | DisponibilityScalarFieldEnum[]
  }

  /**
   * Meeting without action
   */
  export type MeetingDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Meeting
     */
    select?: MeetingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Meeting
     */
    omit?: MeetingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MeetingInclude<ExtArgs> | null
  }


  /**
   * Model Message
   */

  export type AggregateMessage = {
    _count: MessageCountAggregateOutputType | null
    _avg: MessageAvgAggregateOutputType | null
    _sum: MessageSumAggregateOutputType | null
    _min: MessageMinAggregateOutputType | null
    _max: MessageMaxAggregateOutputType | null
  }

  export type MessageAvgAggregateOutputType = {
    id: number | null
  }

  export type MessageSumAggregateOutputType = {
    id: number | null
  }

  export type MessageMinAggregateOutputType = {
    id: number | null
    content: string | null
    subject: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type MessageMaxAggregateOutputType = {
    id: number | null
    content: string | null
    subject: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type MessageCountAggregateOutputType = {
    id: number
    content: number
    subject: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type MessageAvgAggregateInputType = {
    id?: true
  }

  export type MessageSumAggregateInputType = {
    id?: true
  }

  export type MessageMinAggregateInputType = {
    id?: true
    content?: true
    subject?: true
    createdAt?: true
    updatedAt?: true
  }

  export type MessageMaxAggregateInputType = {
    id?: true
    content?: true
    subject?: true
    createdAt?: true
    updatedAt?: true
  }

  export type MessageCountAggregateInputType = {
    id?: true
    content?: true
    subject?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type MessageAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Message to aggregate.
     */
    where?: MessageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Messages to fetch.
     */
    orderBy?: MessageOrderByWithRelationInput | MessageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MessageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Messages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Messages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Messages
    **/
    _count?: true | MessageCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: MessageAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: MessageSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MessageMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MessageMaxAggregateInputType
  }

  export type GetMessageAggregateType<T extends MessageAggregateArgs> = {
        [P in keyof T & keyof AggregateMessage]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMessage[P]>
      : GetScalarType<T[P], AggregateMessage[P]>
  }




  export type MessageGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MessageWhereInput
    orderBy?: MessageOrderByWithAggregationInput | MessageOrderByWithAggregationInput[]
    by: MessageScalarFieldEnum[] | MessageScalarFieldEnum
    having?: MessageScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MessageCountAggregateInputType | true
    _avg?: MessageAvgAggregateInputType
    _sum?: MessageSumAggregateInputType
    _min?: MessageMinAggregateInputType
    _max?: MessageMaxAggregateInputType
  }

  export type MessageGroupByOutputType = {
    id: number
    content: string
    subject: string
    createdAt: Date
    updatedAt: Date
    _count: MessageCountAggregateOutputType | null
    _avg: MessageAvgAggregateOutputType | null
    _sum: MessageSumAggregateOutputType | null
    _min: MessageMinAggregateOutputType | null
    _max: MessageMaxAggregateOutputType | null
  }

  type GetMessageGroupByPayload<T extends MessageGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MessageGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MessageGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MessageGroupByOutputType[P]>
            : GetScalarType<T[P], MessageGroupByOutputType[P]>
        }
      >
    >


  export type MessageSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    content?: boolean
    subject?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    meetings?: boolean | Message$meetingsArgs<ExtArgs>
    _count?: boolean | MessageCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["message"]>



  export type MessageSelectScalar = {
    id?: boolean
    content?: boolean
    subject?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type MessageOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "content" | "subject" | "createdAt" | "updatedAt", ExtArgs["result"]["message"]>
  export type MessageInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    meetings?: boolean | Message$meetingsArgs<ExtArgs>
    _count?: boolean | MessageCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $MessagePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Message"
    objects: {
      meetings: Prisma.$MeetingPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      content: string
      subject: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["message"]>
    composites: {}
  }

  type MessageGetPayload<S extends boolean | null | undefined | MessageDefaultArgs> = $Result.GetResult<Prisma.$MessagePayload, S>

  type MessageCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<MessageFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: MessageCountAggregateInputType | true
    }

  export interface MessageDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Message'], meta: { name: 'Message' } }
    /**
     * Find zero or one Message that matches the filter.
     * @param {MessageFindUniqueArgs} args - Arguments to find a Message
     * @example
     * // Get one Message
     * const message = await prisma.message.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends MessageFindUniqueArgs>(args: SelectSubset<T, MessageFindUniqueArgs<ExtArgs>>): Prisma__MessageClient<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Message that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {MessageFindUniqueOrThrowArgs} args - Arguments to find a Message
     * @example
     * // Get one Message
     * const message = await prisma.message.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MessageFindUniqueOrThrowArgs>(args: SelectSubset<T, MessageFindUniqueOrThrowArgs<ExtArgs>>): Prisma__MessageClient<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Message that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MessageFindFirstArgs} args - Arguments to find a Message
     * @example
     * // Get one Message
     * const message = await prisma.message.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends MessageFindFirstArgs>(args?: SelectSubset<T, MessageFindFirstArgs<ExtArgs>>): Prisma__MessageClient<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Message that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MessageFindFirstOrThrowArgs} args - Arguments to find a Message
     * @example
     * // Get one Message
     * const message = await prisma.message.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends MessageFindFirstOrThrowArgs>(args?: SelectSubset<T, MessageFindFirstOrThrowArgs<ExtArgs>>): Prisma__MessageClient<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Messages that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MessageFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Messages
     * const messages = await prisma.message.findMany()
     * 
     * // Get first 10 Messages
     * const messages = await prisma.message.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const messageWithIdOnly = await prisma.message.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends MessageFindManyArgs>(args?: SelectSubset<T, MessageFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Message.
     * @param {MessageCreateArgs} args - Arguments to create a Message.
     * @example
     * // Create one Message
     * const Message = await prisma.message.create({
     *   data: {
     *     // ... data to create a Message
     *   }
     * })
     * 
     */
    create<T extends MessageCreateArgs>(args: SelectSubset<T, MessageCreateArgs<ExtArgs>>): Prisma__MessageClient<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Messages.
     * @param {MessageCreateManyArgs} args - Arguments to create many Messages.
     * @example
     * // Create many Messages
     * const message = await prisma.message.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends MessageCreateManyArgs>(args?: SelectSubset<T, MessageCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Message.
     * @param {MessageDeleteArgs} args - Arguments to delete one Message.
     * @example
     * // Delete one Message
     * const Message = await prisma.message.delete({
     *   where: {
     *     // ... filter to delete one Message
     *   }
     * })
     * 
     */
    delete<T extends MessageDeleteArgs>(args: SelectSubset<T, MessageDeleteArgs<ExtArgs>>): Prisma__MessageClient<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Message.
     * @param {MessageUpdateArgs} args - Arguments to update one Message.
     * @example
     * // Update one Message
     * const message = await prisma.message.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends MessageUpdateArgs>(args: SelectSubset<T, MessageUpdateArgs<ExtArgs>>): Prisma__MessageClient<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Messages.
     * @param {MessageDeleteManyArgs} args - Arguments to filter Messages to delete.
     * @example
     * // Delete a few Messages
     * const { count } = await prisma.message.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends MessageDeleteManyArgs>(args?: SelectSubset<T, MessageDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Messages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MessageUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Messages
     * const message = await prisma.message.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends MessageUpdateManyArgs>(args: SelectSubset<T, MessageUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Message.
     * @param {MessageUpsertArgs} args - Arguments to update or create a Message.
     * @example
     * // Update or create a Message
     * const message = await prisma.message.upsert({
     *   create: {
     *     // ... data to create a Message
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Message we want to update
     *   }
     * })
     */
    upsert<T extends MessageUpsertArgs>(args: SelectSubset<T, MessageUpsertArgs<ExtArgs>>): Prisma__MessageClient<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Messages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MessageCountArgs} args - Arguments to filter Messages to count.
     * @example
     * // Count the number of Messages
     * const count = await prisma.message.count({
     *   where: {
     *     // ... the filter for the Messages we want to count
     *   }
     * })
    **/
    count<T extends MessageCountArgs>(
      args?: Subset<T, MessageCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MessageCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Message.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MessageAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends MessageAggregateArgs>(args: Subset<T, MessageAggregateArgs>): Prisma.PrismaPromise<GetMessageAggregateType<T>>

    /**
     * Group by Message.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MessageGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends MessageGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MessageGroupByArgs['orderBy'] }
        : { orderBy?: MessageGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, MessageGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMessageGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Message model
   */
  readonly fields: MessageFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Message.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MessageClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    meetings<T extends Message$meetingsArgs<ExtArgs> = {}>(args?: Subset<T, Message$meetingsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MeetingPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Message model
   */
  interface MessageFieldRefs {
    readonly id: FieldRef<"Message", 'Int'>
    readonly content: FieldRef<"Message", 'String'>
    readonly subject: FieldRef<"Message", 'String'>
    readonly createdAt: FieldRef<"Message", 'DateTime'>
    readonly updatedAt: FieldRef<"Message", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Message findUnique
   */
  export type MessageFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Message
     */
    omit?: MessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageInclude<ExtArgs> | null
    /**
     * Filter, which Message to fetch.
     */
    where: MessageWhereUniqueInput
  }

  /**
   * Message findUniqueOrThrow
   */
  export type MessageFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Message
     */
    omit?: MessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageInclude<ExtArgs> | null
    /**
     * Filter, which Message to fetch.
     */
    where: MessageWhereUniqueInput
  }

  /**
   * Message findFirst
   */
  export type MessageFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Message
     */
    omit?: MessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageInclude<ExtArgs> | null
    /**
     * Filter, which Message to fetch.
     */
    where?: MessageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Messages to fetch.
     */
    orderBy?: MessageOrderByWithRelationInput | MessageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Messages.
     */
    cursor?: MessageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Messages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Messages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Messages.
     */
    distinct?: MessageScalarFieldEnum | MessageScalarFieldEnum[]
  }

  /**
   * Message findFirstOrThrow
   */
  export type MessageFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Message
     */
    omit?: MessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageInclude<ExtArgs> | null
    /**
     * Filter, which Message to fetch.
     */
    where?: MessageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Messages to fetch.
     */
    orderBy?: MessageOrderByWithRelationInput | MessageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Messages.
     */
    cursor?: MessageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Messages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Messages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Messages.
     */
    distinct?: MessageScalarFieldEnum | MessageScalarFieldEnum[]
  }

  /**
   * Message findMany
   */
  export type MessageFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Message
     */
    omit?: MessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageInclude<ExtArgs> | null
    /**
     * Filter, which Messages to fetch.
     */
    where?: MessageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Messages to fetch.
     */
    orderBy?: MessageOrderByWithRelationInput | MessageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Messages.
     */
    cursor?: MessageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Messages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Messages.
     */
    skip?: number
    distinct?: MessageScalarFieldEnum | MessageScalarFieldEnum[]
  }

  /**
   * Message create
   */
  export type MessageCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Message
     */
    omit?: MessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageInclude<ExtArgs> | null
    /**
     * The data needed to create a Message.
     */
    data: XOR<MessageCreateInput, MessageUncheckedCreateInput>
  }

  /**
   * Message createMany
   */
  export type MessageCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Messages.
     */
    data: MessageCreateManyInput | MessageCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Message update
   */
  export type MessageUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Message
     */
    omit?: MessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageInclude<ExtArgs> | null
    /**
     * The data needed to update a Message.
     */
    data: XOR<MessageUpdateInput, MessageUncheckedUpdateInput>
    /**
     * Choose, which Message to update.
     */
    where: MessageWhereUniqueInput
  }

  /**
   * Message updateMany
   */
  export type MessageUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Messages.
     */
    data: XOR<MessageUpdateManyMutationInput, MessageUncheckedUpdateManyInput>
    /**
     * Filter which Messages to update
     */
    where?: MessageWhereInput
    /**
     * Limit how many Messages to update.
     */
    limit?: number
  }

  /**
   * Message upsert
   */
  export type MessageUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Message
     */
    omit?: MessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageInclude<ExtArgs> | null
    /**
     * The filter to search for the Message to update in case it exists.
     */
    where: MessageWhereUniqueInput
    /**
     * In case the Message found by the `where` argument doesn't exist, create a new Message with this data.
     */
    create: XOR<MessageCreateInput, MessageUncheckedCreateInput>
    /**
     * In case the Message was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MessageUpdateInput, MessageUncheckedUpdateInput>
  }

  /**
   * Message delete
   */
  export type MessageDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Message
     */
    omit?: MessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageInclude<ExtArgs> | null
    /**
     * Filter which Message to delete.
     */
    where: MessageWhereUniqueInput
  }

  /**
   * Message deleteMany
   */
  export type MessageDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Messages to delete
     */
    where?: MessageWhereInput
    /**
     * Limit how many Messages to delete.
     */
    limit?: number
  }

  /**
   * Message.meetings
   */
  export type Message$meetingsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Meeting
     */
    select?: MeetingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Meeting
     */
    omit?: MeetingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MeetingInclude<ExtArgs> | null
    where?: MeetingWhereInput
    orderBy?: MeetingOrderByWithRelationInput | MeetingOrderByWithRelationInput[]
    cursor?: MeetingWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MeetingScalarFieldEnum | MeetingScalarFieldEnum[]
  }

  /**
   * Message without action
   */
  export type MessageDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Message
     */
    omit?: MessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const CoordinateScalarFieldEnum: {
    id: 'id',
    gender: 'gender',
    lastName: 'lastName',
    firstName: 'firstName',
    email: 'email',
    phone: 'phone',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type CoordinateScalarFieldEnum = (typeof CoordinateScalarFieldEnum)[keyof typeof CoordinateScalarFieldEnum]


  export const DisponibilityScalarFieldEnum: {
    id: 'id',
    date: 'date',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type DisponibilityScalarFieldEnum = (typeof DisponibilityScalarFieldEnum)[keyof typeof DisponibilityScalarFieldEnum]


  export const MeetingScalarFieldEnum: {
    id: 'id',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    coordinateId: 'coordinateId',
    messageId: 'messageId'
  };

  export type MeetingScalarFieldEnum = (typeof MeetingScalarFieldEnum)[keyof typeof MeetingScalarFieldEnum]


  export const MessageScalarFieldEnum: {
    id: 'id',
    content: 'content',
    subject: 'subject',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type MessageScalarFieldEnum = (typeof MessageScalarFieldEnum)[keyof typeof MessageScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const CoordinateOrderByRelevanceFieldEnum: {
    gender: 'gender',
    lastName: 'lastName',
    firstName: 'firstName',
    email: 'email',
    phone: 'phone'
  };

  export type CoordinateOrderByRelevanceFieldEnum = (typeof CoordinateOrderByRelevanceFieldEnum)[keyof typeof CoordinateOrderByRelevanceFieldEnum]


  export const MessageOrderByRelevanceFieldEnum: {
    content: 'content',
    subject: 'subject'
  };

  export type MessageOrderByRelevanceFieldEnum = (typeof MessageOrderByRelevanceFieldEnum)[keyof typeof MessageOrderByRelevanceFieldEnum]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    
  /**
   * Deep Input Types
   */


  export type CoordinateWhereInput = {
    AND?: CoordinateWhereInput | CoordinateWhereInput[]
    OR?: CoordinateWhereInput[]
    NOT?: CoordinateWhereInput | CoordinateWhereInput[]
    id?: IntFilter<"Coordinate"> | number
    gender?: StringFilter<"Coordinate"> | string
    lastName?: StringFilter<"Coordinate"> | string
    firstName?: StringFilter<"Coordinate"> | string
    email?: StringFilter<"Coordinate"> | string
    phone?: StringFilter<"Coordinate"> | string
    createdAt?: DateTimeFilter<"Coordinate"> | Date | string
    updatedAt?: DateTimeFilter<"Coordinate"> | Date | string
    meetings?: MeetingListRelationFilter
  }

  export type CoordinateOrderByWithRelationInput = {
    id?: SortOrder
    gender?: SortOrder
    lastName?: SortOrder
    firstName?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    meetings?: MeetingOrderByRelationAggregateInput
    _relevance?: CoordinateOrderByRelevanceInput
  }

  export type CoordinateWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: CoordinateWhereInput | CoordinateWhereInput[]
    OR?: CoordinateWhereInput[]
    NOT?: CoordinateWhereInput | CoordinateWhereInput[]
    gender?: StringFilter<"Coordinate"> | string
    lastName?: StringFilter<"Coordinate"> | string
    firstName?: StringFilter<"Coordinate"> | string
    email?: StringFilter<"Coordinate"> | string
    phone?: StringFilter<"Coordinate"> | string
    createdAt?: DateTimeFilter<"Coordinate"> | Date | string
    updatedAt?: DateTimeFilter<"Coordinate"> | Date | string
    meetings?: MeetingListRelationFilter
  }, "id">

  export type CoordinateOrderByWithAggregationInput = {
    id?: SortOrder
    gender?: SortOrder
    lastName?: SortOrder
    firstName?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: CoordinateCountOrderByAggregateInput
    _avg?: CoordinateAvgOrderByAggregateInput
    _max?: CoordinateMaxOrderByAggregateInput
    _min?: CoordinateMinOrderByAggregateInput
    _sum?: CoordinateSumOrderByAggregateInput
  }

  export type CoordinateScalarWhereWithAggregatesInput = {
    AND?: CoordinateScalarWhereWithAggregatesInput | CoordinateScalarWhereWithAggregatesInput[]
    OR?: CoordinateScalarWhereWithAggregatesInput[]
    NOT?: CoordinateScalarWhereWithAggregatesInput | CoordinateScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Coordinate"> | number
    gender?: StringWithAggregatesFilter<"Coordinate"> | string
    lastName?: StringWithAggregatesFilter<"Coordinate"> | string
    firstName?: StringWithAggregatesFilter<"Coordinate"> | string
    email?: StringWithAggregatesFilter<"Coordinate"> | string
    phone?: StringWithAggregatesFilter<"Coordinate"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Coordinate"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Coordinate"> | Date | string
  }

  export type DisponibilityWhereInput = {
    AND?: DisponibilityWhereInput | DisponibilityWhereInput[]
    OR?: DisponibilityWhereInput[]
    NOT?: DisponibilityWhereInput | DisponibilityWhereInput[]
    id?: IntFilter<"Disponibility"> | number
    date?: DateTimeFilter<"Disponibility"> | Date | string
    createdAt?: DateTimeFilter<"Disponibility"> | Date | string
    updatedAt?: DateTimeFilter<"Disponibility"> | Date | string
    meetings?: MeetingListRelationFilter
  }

  export type DisponibilityOrderByWithRelationInput = {
    id?: SortOrder
    date?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    meetings?: MeetingOrderByRelationAggregateInput
  }

  export type DisponibilityWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: DisponibilityWhereInput | DisponibilityWhereInput[]
    OR?: DisponibilityWhereInput[]
    NOT?: DisponibilityWhereInput | DisponibilityWhereInput[]
    date?: DateTimeFilter<"Disponibility"> | Date | string
    createdAt?: DateTimeFilter<"Disponibility"> | Date | string
    updatedAt?: DateTimeFilter<"Disponibility"> | Date | string
    meetings?: MeetingListRelationFilter
  }, "id">

  export type DisponibilityOrderByWithAggregationInput = {
    id?: SortOrder
    date?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: DisponibilityCountOrderByAggregateInput
    _avg?: DisponibilityAvgOrderByAggregateInput
    _max?: DisponibilityMaxOrderByAggregateInput
    _min?: DisponibilityMinOrderByAggregateInput
    _sum?: DisponibilitySumOrderByAggregateInput
  }

  export type DisponibilityScalarWhereWithAggregatesInput = {
    AND?: DisponibilityScalarWhereWithAggregatesInput | DisponibilityScalarWhereWithAggregatesInput[]
    OR?: DisponibilityScalarWhereWithAggregatesInput[]
    NOT?: DisponibilityScalarWhereWithAggregatesInput | DisponibilityScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Disponibility"> | number
    date?: DateTimeWithAggregatesFilter<"Disponibility"> | Date | string
    createdAt?: DateTimeWithAggregatesFilter<"Disponibility"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Disponibility"> | Date | string
  }

  export type MeetingWhereInput = {
    AND?: MeetingWhereInput | MeetingWhereInput[]
    OR?: MeetingWhereInput[]
    NOT?: MeetingWhereInput | MeetingWhereInput[]
    id?: IntFilter<"Meeting"> | number
    createdAt?: DateTimeFilter<"Meeting"> | Date | string
    updatedAt?: DateTimeFilter<"Meeting"> | Date | string
    coordinateId?: IntFilter<"Meeting"> | number
    messageId?: IntFilter<"Meeting"> | number
    coordinate?: XOR<CoordinateScalarRelationFilter, CoordinateWhereInput>
    message?: XOR<MessageScalarRelationFilter, MessageWhereInput>
    disponibilities?: DisponibilityListRelationFilter
  }

  export type MeetingOrderByWithRelationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    coordinateId?: SortOrder
    messageId?: SortOrder
    coordinate?: CoordinateOrderByWithRelationInput
    message?: MessageOrderByWithRelationInput
    disponibilities?: DisponibilityOrderByRelationAggregateInput
  }

  export type MeetingWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: MeetingWhereInput | MeetingWhereInput[]
    OR?: MeetingWhereInput[]
    NOT?: MeetingWhereInput | MeetingWhereInput[]
    createdAt?: DateTimeFilter<"Meeting"> | Date | string
    updatedAt?: DateTimeFilter<"Meeting"> | Date | string
    coordinateId?: IntFilter<"Meeting"> | number
    messageId?: IntFilter<"Meeting"> | number
    coordinate?: XOR<CoordinateScalarRelationFilter, CoordinateWhereInput>
    message?: XOR<MessageScalarRelationFilter, MessageWhereInput>
    disponibilities?: DisponibilityListRelationFilter
  }, "id">

  export type MeetingOrderByWithAggregationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    coordinateId?: SortOrder
    messageId?: SortOrder
    _count?: MeetingCountOrderByAggregateInput
    _avg?: MeetingAvgOrderByAggregateInput
    _max?: MeetingMaxOrderByAggregateInput
    _min?: MeetingMinOrderByAggregateInput
    _sum?: MeetingSumOrderByAggregateInput
  }

  export type MeetingScalarWhereWithAggregatesInput = {
    AND?: MeetingScalarWhereWithAggregatesInput | MeetingScalarWhereWithAggregatesInput[]
    OR?: MeetingScalarWhereWithAggregatesInput[]
    NOT?: MeetingScalarWhereWithAggregatesInput | MeetingScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Meeting"> | number
    createdAt?: DateTimeWithAggregatesFilter<"Meeting"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Meeting"> | Date | string
    coordinateId?: IntWithAggregatesFilter<"Meeting"> | number
    messageId?: IntWithAggregatesFilter<"Meeting"> | number
  }

  export type MessageWhereInput = {
    AND?: MessageWhereInput | MessageWhereInput[]
    OR?: MessageWhereInput[]
    NOT?: MessageWhereInput | MessageWhereInput[]
    id?: IntFilter<"Message"> | number
    content?: StringFilter<"Message"> | string
    subject?: StringFilter<"Message"> | string
    createdAt?: DateTimeFilter<"Message"> | Date | string
    updatedAt?: DateTimeFilter<"Message"> | Date | string
    meetings?: MeetingListRelationFilter
  }

  export type MessageOrderByWithRelationInput = {
    id?: SortOrder
    content?: SortOrder
    subject?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    meetings?: MeetingOrderByRelationAggregateInput
    _relevance?: MessageOrderByRelevanceInput
  }

  export type MessageWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: MessageWhereInput | MessageWhereInput[]
    OR?: MessageWhereInput[]
    NOT?: MessageWhereInput | MessageWhereInput[]
    content?: StringFilter<"Message"> | string
    subject?: StringFilter<"Message"> | string
    createdAt?: DateTimeFilter<"Message"> | Date | string
    updatedAt?: DateTimeFilter<"Message"> | Date | string
    meetings?: MeetingListRelationFilter
  }, "id">

  export type MessageOrderByWithAggregationInput = {
    id?: SortOrder
    content?: SortOrder
    subject?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: MessageCountOrderByAggregateInput
    _avg?: MessageAvgOrderByAggregateInput
    _max?: MessageMaxOrderByAggregateInput
    _min?: MessageMinOrderByAggregateInput
    _sum?: MessageSumOrderByAggregateInput
  }

  export type MessageScalarWhereWithAggregatesInput = {
    AND?: MessageScalarWhereWithAggregatesInput | MessageScalarWhereWithAggregatesInput[]
    OR?: MessageScalarWhereWithAggregatesInput[]
    NOT?: MessageScalarWhereWithAggregatesInput | MessageScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Message"> | number
    content?: StringWithAggregatesFilter<"Message"> | string
    subject?: StringWithAggregatesFilter<"Message"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Message"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Message"> | Date | string
  }

  export type CoordinateCreateInput = {
    gender: string
    lastName: string
    firstName: string
    email: string
    phone: string
    createdAt?: Date | string
    updatedAt?: Date | string
    meetings?: MeetingCreateNestedManyWithoutCoordinateInput
  }

  export type CoordinateUncheckedCreateInput = {
    id?: number
    gender: string
    lastName: string
    firstName: string
    email: string
    phone: string
    createdAt?: Date | string
    updatedAt?: Date | string
    meetings?: MeetingUncheckedCreateNestedManyWithoutCoordinateInput
  }

  export type CoordinateUpdateInput = {
    gender?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    meetings?: MeetingUpdateManyWithoutCoordinateNestedInput
  }

  export type CoordinateUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    gender?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    meetings?: MeetingUncheckedUpdateManyWithoutCoordinateNestedInput
  }

  export type CoordinateCreateManyInput = {
    id?: number
    gender: string
    lastName: string
    firstName: string
    email: string
    phone: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CoordinateUpdateManyMutationInput = {
    gender?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CoordinateUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    gender?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DisponibilityCreateInput = {
    date: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    meetings?: MeetingCreateNestedManyWithoutDisponibilitiesInput
  }

  export type DisponibilityUncheckedCreateInput = {
    id?: number
    date: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    meetings?: MeetingUncheckedCreateNestedManyWithoutDisponibilitiesInput
  }

  export type DisponibilityUpdateInput = {
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    meetings?: MeetingUpdateManyWithoutDisponibilitiesNestedInput
  }

  export type DisponibilityUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    meetings?: MeetingUncheckedUpdateManyWithoutDisponibilitiesNestedInput
  }

  export type DisponibilityCreateManyInput = {
    id?: number
    date: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type DisponibilityUpdateManyMutationInput = {
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DisponibilityUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MeetingCreateInput = {
    createdAt?: Date | string
    updatedAt?: Date | string
    coordinate: CoordinateCreateNestedOneWithoutMeetingsInput
    message: MessageCreateNestedOneWithoutMeetingsInput
    disponibilities?: DisponibilityCreateNestedManyWithoutMeetingsInput
  }

  export type MeetingUncheckedCreateInput = {
    id?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    coordinateId: number
    messageId: number
    disponibilities?: DisponibilityUncheckedCreateNestedManyWithoutMeetingsInput
  }

  export type MeetingUpdateInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    coordinate?: CoordinateUpdateOneRequiredWithoutMeetingsNestedInput
    message?: MessageUpdateOneRequiredWithoutMeetingsNestedInput
    disponibilities?: DisponibilityUpdateManyWithoutMeetingsNestedInput
  }

  export type MeetingUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    coordinateId?: IntFieldUpdateOperationsInput | number
    messageId?: IntFieldUpdateOperationsInput | number
    disponibilities?: DisponibilityUncheckedUpdateManyWithoutMeetingsNestedInput
  }

  export type MeetingCreateManyInput = {
    id?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    coordinateId: number
    messageId: number
  }

  export type MeetingUpdateManyMutationInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MeetingUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    coordinateId?: IntFieldUpdateOperationsInput | number
    messageId?: IntFieldUpdateOperationsInput | number
  }

  export type MessageCreateInput = {
    content: string
    subject: string
    createdAt?: Date | string
    updatedAt?: Date | string
    meetings?: MeetingCreateNestedManyWithoutMessageInput
  }

  export type MessageUncheckedCreateInput = {
    id?: number
    content: string
    subject: string
    createdAt?: Date | string
    updatedAt?: Date | string
    meetings?: MeetingUncheckedCreateNestedManyWithoutMessageInput
  }

  export type MessageUpdateInput = {
    content?: StringFieldUpdateOperationsInput | string
    subject?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    meetings?: MeetingUpdateManyWithoutMessageNestedInput
  }

  export type MessageUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    content?: StringFieldUpdateOperationsInput | string
    subject?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    meetings?: MeetingUncheckedUpdateManyWithoutMessageNestedInput
  }

  export type MessageCreateManyInput = {
    id?: number
    content: string
    subject: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MessageUpdateManyMutationInput = {
    content?: StringFieldUpdateOperationsInput | string
    subject?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MessageUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    content?: StringFieldUpdateOperationsInput | string
    subject?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type MeetingListRelationFilter = {
    every?: MeetingWhereInput
    some?: MeetingWhereInput
    none?: MeetingWhereInput
  }

  export type MeetingOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CoordinateOrderByRelevanceInput = {
    fields: CoordinateOrderByRelevanceFieldEnum | CoordinateOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type CoordinateCountOrderByAggregateInput = {
    id?: SortOrder
    gender?: SortOrder
    lastName?: SortOrder
    firstName?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CoordinateAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type CoordinateMaxOrderByAggregateInput = {
    id?: SortOrder
    gender?: SortOrder
    lastName?: SortOrder
    firstName?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CoordinateMinOrderByAggregateInput = {
    id?: SortOrder
    gender?: SortOrder
    lastName?: SortOrder
    firstName?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CoordinateSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type DisponibilityCountOrderByAggregateInput = {
    id?: SortOrder
    date?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type DisponibilityAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type DisponibilityMaxOrderByAggregateInput = {
    id?: SortOrder
    date?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type DisponibilityMinOrderByAggregateInput = {
    id?: SortOrder
    date?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type DisponibilitySumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type CoordinateScalarRelationFilter = {
    is?: CoordinateWhereInput
    isNot?: CoordinateWhereInput
  }

  export type MessageScalarRelationFilter = {
    is?: MessageWhereInput
    isNot?: MessageWhereInput
  }

  export type DisponibilityListRelationFilter = {
    every?: DisponibilityWhereInput
    some?: DisponibilityWhereInput
    none?: DisponibilityWhereInput
  }

  export type DisponibilityOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type MeetingCountOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    coordinateId?: SortOrder
    messageId?: SortOrder
  }

  export type MeetingAvgOrderByAggregateInput = {
    id?: SortOrder
    coordinateId?: SortOrder
    messageId?: SortOrder
  }

  export type MeetingMaxOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    coordinateId?: SortOrder
    messageId?: SortOrder
  }

  export type MeetingMinOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    coordinateId?: SortOrder
    messageId?: SortOrder
  }

  export type MeetingSumOrderByAggregateInput = {
    id?: SortOrder
    coordinateId?: SortOrder
    messageId?: SortOrder
  }

  export type MessageOrderByRelevanceInput = {
    fields: MessageOrderByRelevanceFieldEnum | MessageOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type MessageCountOrderByAggregateInput = {
    id?: SortOrder
    content?: SortOrder
    subject?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type MessageAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type MessageMaxOrderByAggregateInput = {
    id?: SortOrder
    content?: SortOrder
    subject?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type MessageMinOrderByAggregateInput = {
    id?: SortOrder
    content?: SortOrder
    subject?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type MessageSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type MeetingCreateNestedManyWithoutCoordinateInput = {
    create?: XOR<MeetingCreateWithoutCoordinateInput, MeetingUncheckedCreateWithoutCoordinateInput> | MeetingCreateWithoutCoordinateInput[] | MeetingUncheckedCreateWithoutCoordinateInput[]
    connectOrCreate?: MeetingCreateOrConnectWithoutCoordinateInput | MeetingCreateOrConnectWithoutCoordinateInput[]
    createMany?: MeetingCreateManyCoordinateInputEnvelope
    connect?: MeetingWhereUniqueInput | MeetingWhereUniqueInput[]
  }

  export type MeetingUncheckedCreateNestedManyWithoutCoordinateInput = {
    create?: XOR<MeetingCreateWithoutCoordinateInput, MeetingUncheckedCreateWithoutCoordinateInput> | MeetingCreateWithoutCoordinateInput[] | MeetingUncheckedCreateWithoutCoordinateInput[]
    connectOrCreate?: MeetingCreateOrConnectWithoutCoordinateInput | MeetingCreateOrConnectWithoutCoordinateInput[]
    createMany?: MeetingCreateManyCoordinateInputEnvelope
    connect?: MeetingWhereUniqueInput | MeetingWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type MeetingUpdateManyWithoutCoordinateNestedInput = {
    create?: XOR<MeetingCreateWithoutCoordinateInput, MeetingUncheckedCreateWithoutCoordinateInput> | MeetingCreateWithoutCoordinateInput[] | MeetingUncheckedCreateWithoutCoordinateInput[]
    connectOrCreate?: MeetingCreateOrConnectWithoutCoordinateInput | MeetingCreateOrConnectWithoutCoordinateInput[]
    upsert?: MeetingUpsertWithWhereUniqueWithoutCoordinateInput | MeetingUpsertWithWhereUniqueWithoutCoordinateInput[]
    createMany?: MeetingCreateManyCoordinateInputEnvelope
    set?: MeetingWhereUniqueInput | MeetingWhereUniqueInput[]
    disconnect?: MeetingWhereUniqueInput | MeetingWhereUniqueInput[]
    delete?: MeetingWhereUniqueInput | MeetingWhereUniqueInput[]
    connect?: MeetingWhereUniqueInput | MeetingWhereUniqueInput[]
    update?: MeetingUpdateWithWhereUniqueWithoutCoordinateInput | MeetingUpdateWithWhereUniqueWithoutCoordinateInput[]
    updateMany?: MeetingUpdateManyWithWhereWithoutCoordinateInput | MeetingUpdateManyWithWhereWithoutCoordinateInput[]
    deleteMany?: MeetingScalarWhereInput | MeetingScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type MeetingUncheckedUpdateManyWithoutCoordinateNestedInput = {
    create?: XOR<MeetingCreateWithoutCoordinateInput, MeetingUncheckedCreateWithoutCoordinateInput> | MeetingCreateWithoutCoordinateInput[] | MeetingUncheckedCreateWithoutCoordinateInput[]
    connectOrCreate?: MeetingCreateOrConnectWithoutCoordinateInput | MeetingCreateOrConnectWithoutCoordinateInput[]
    upsert?: MeetingUpsertWithWhereUniqueWithoutCoordinateInput | MeetingUpsertWithWhereUniqueWithoutCoordinateInput[]
    createMany?: MeetingCreateManyCoordinateInputEnvelope
    set?: MeetingWhereUniqueInput | MeetingWhereUniqueInput[]
    disconnect?: MeetingWhereUniqueInput | MeetingWhereUniqueInput[]
    delete?: MeetingWhereUniqueInput | MeetingWhereUniqueInput[]
    connect?: MeetingWhereUniqueInput | MeetingWhereUniqueInput[]
    update?: MeetingUpdateWithWhereUniqueWithoutCoordinateInput | MeetingUpdateWithWhereUniqueWithoutCoordinateInput[]
    updateMany?: MeetingUpdateManyWithWhereWithoutCoordinateInput | MeetingUpdateManyWithWhereWithoutCoordinateInput[]
    deleteMany?: MeetingScalarWhereInput | MeetingScalarWhereInput[]
  }

  export type MeetingCreateNestedManyWithoutDisponibilitiesInput = {
    create?: XOR<MeetingCreateWithoutDisponibilitiesInput, MeetingUncheckedCreateWithoutDisponibilitiesInput> | MeetingCreateWithoutDisponibilitiesInput[] | MeetingUncheckedCreateWithoutDisponibilitiesInput[]
    connectOrCreate?: MeetingCreateOrConnectWithoutDisponibilitiesInput | MeetingCreateOrConnectWithoutDisponibilitiesInput[]
    connect?: MeetingWhereUniqueInput | MeetingWhereUniqueInput[]
  }

  export type MeetingUncheckedCreateNestedManyWithoutDisponibilitiesInput = {
    create?: XOR<MeetingCreateWithoutDisponibilitiesInput, MeetingUncheckedCreateWithoutDisponibilitiesInput> | MeetingCreateWithoutDisponibilitiesInput[] | MeetingUncheckedCreateWithoutDisponibilitiesInput[]
    connectOrCreate?: MeetingCreateOrConnectWithoutDisponibilitiesInput | MeetingCreateOrConnectWithoutDisponibilitiesInput[]
    connect?: MeetingWhereUniqueInput | MeetingWhereUniqueInput[]
  }

  export type MeetingUpdateManyWithoutDisponibilitiesNestedInput = {
    create?: XOR<MeetingCreateWithoutDisponibilitiesInput, MeetingUncheckedCreateWithoutDisponibilitiesInput> | MeetingCreateWithoutDisponibilitiesInput[] | MeetingUncheckedCreateWithoutDisponibilitiesInput[]
    connectOrCreate?: MeetingCreateOrConnectWithoutDisponibilitiesInput | MeetingCreateOrConnectWithoutDisponibilitiesInput[]
    upsert?: MeetingUpsertWithWhereUniqueWithoutDisponibilitiesInput | MeetingUpsertWithWhereUniqueWithoutDisponibilitiesInput[]
    set?: MeetingWhereUniqueInput | MeetingWhereUniqueInput[]
    disconnect?: MeetingWhereUniqueInput | MeetingWhereUniqueInput[]
    delete?: MeetingWhereUniqueInput | MeetingWhereUniqueInput[]
    connect?: MeetingWhereUniqueInput | MeetingWhereUniqueInput[]
    update?: MeetingUpdateWithWhereUniqueWithoutDisponibilitiesInput | MeetingUpdateWithWhereUniqueWithoutDisponibilitiesInput[]
    updateMany?: MeetingUpdateManyWithWhereWithoutDisponibilitiesInput | MeetingUpdateManyWithWhereWithoutDisponibilitiesInput[]
    deleteMany?: MeetingScalarWhereInput | MeetingScalarWhereInput[]
  }

  export type MeetingUncheckedUpdateManyWithoutDisponibilitiesNestedInput = {
    create?: XOR<MeetingCreateWithoutDisponibilitiesInput, MeetingUncheckedCreateWithoutDisponibilitiesInput> | MeetingCreateWithoutDisponibilitiesInput[] | MeetingUncheckedCreateWithoutDisponibilitiesInput[]
    connectOrCreate?: MeetingCreateOrConnectWithoutDisponibilitiesInput | MeetingCreateOrConnectWithoutDisponibilitiesInput[]
    upsert?: MeetingUpsertWithWhereUniqueWithoutDisponibilitiesInput | MeetingUpsertWithWhereUniqueWithoutDisponibilitiesInput[]
    set?: MeetingWhereUniqueInput | MeetingWhereUniqueInput[]
    disconnect?: MeetingWhereUniqueInput | MeetingWhereUniqueInput[]
    delete?: MeetingWhereUniqueInput | MeetingWhereUniqueInput[]
    connect?: MeetingWhereUniqueInput | MeetingWhereUniqueInput[]
    update?: MeetingUpdateWithWhereUniqueWithoutDisponibilitiesInput | MeetingUpdateWithWhereUniqueWithoutDisponibilitiesInput[]
    updateMany?: MeetingUpdateManyWithWhereWithoutDisponibilitiesInput | MeetingUpdateManyWithWhereWithoutDisponibilitiesInput[]
    deleteMany?: MeetingScalarWhereInput | MeetingScalarWhereInput[]
  }

  export type CoordinateCreateNestedOneWithoutMeetingsInput = {
    create?: XOR<CoordinateCreateWithoutMeetingsInput, CoordinateUncheckedCreateWithoutMeetingsInput>
    connectOrCreate?: CoordinateCreateOrConnectWithoutMeetingsInput
    connect?: CoordinateWhereUniqueInput
  }

  export type MessageCreateNestedOneWithoutMeetingsInput = {
    create?: XOR<MessageCreateWithoutMeetingsInput, MessageUncheckedCreateWithoutMeetingsInput>
    connectOrCreate?: MessageCreateOrConnectWithoutMeetingsInput
    connect?: MessageWhereUniqueInput
  }

  export type DisponibilityCreateNestedManyWithoutMeetingsInput = {
    create?: XOR<DisponibilityCreateWithoutMeetingsInput, DisponibilityUncheckedCreateWithoutMeetingsInput> | DisponibilityCreateWithoutMeetingsInput[] | DisponibilityUncheckedCreateWithoutMeetingsInput[]
    connectOrCreate?: DisponibilityCreateOrConnectWithoutMeetingsInput | DisponibilityCreateOrConnectWithoutMeetingsInput[]
    connect?: DisponibilityWhereUniqueInput | DisponibilityWhereUniqueInput[]
  }

  export type DisponibilityUncheckedCreateNestedManyWithoutMeetingsInput = {
    create?: XOR<DisponibilityCreateWithoutMeetingsInput, DisponibilityUncheckedCreateWithoutMeetingsInput> | DisponibilityCreateWithoutMeetingsInput[] | DisponibilityUncheckedCreateWithoutMeetingsInput[]
    connectOrCreate?: DisponibilityCreateOrConnectWithoutMeetingsInput | DisponibilityCreateOrConnectWithoutMeetingsInput[]
    connect?: DisponibilityWhereUniqueInput | DisponibilityWhereUniqueInput[]
  }

  export type CoordinateUpdateOneRequiredWithoutMeetingsNestedInput = {
    create?: XOR<CoordinateCreateWithoutMeetingsInput, CoordinateUncheckedCreateWithoutMeetingsInput>
    connectOrCreate?: CoordinateCreateOrConnectWithoutMeetingsInput
    upsert?: CoordinateUpsertWithoutMeetingsInput
    connect?: CoordinateWhereUniqueInput
    update?: XOR<XOR<CoordinateUpdateToOneWithWhereWithoutMeetingsInput, CoordinateUpdateWithoutMeetingsInput>, CoordinateUncheckedUpdateWithoutMeetingsInput>
  }

  export type MessageUpdateOneRequiredWithoutMeetingsNestedInput = {
    create?: XOR<MessageCreateWithoutMeetingsInput, MessageUncheckedCreateWithoutMeetingsInput>
    connectOrCreate?: MessageCreateOrConnectWithoutMeetingsInput
    upsert?: MessageUpsertWithoutMeetingsInput
    connect?: MessageWhereUniqueInput
    update?: XOR<XOR<MessageUpdateToOneWithWhereWithoutMeetingsInput, MessageUpdateWithoutMeetingsInput>, MessageUncheckedUpdateWithoutMeetingsInput>
  }

  export type DisponibilityUpdateManyWithoutMeetingsNestedInput = {
    create?: XOR<DisponibilityCreateWithoutMeetingsInput, DisponibilityUncheckedCreateWithoutMeetingsInput> | DisponibilityCreateWithoutMeetingsInput[] | DisponibilityUncheckedCreateWithoutMeetingsInput[]
    connectOrCreate?: DisponibilityCreateOrConnectWithoutMeetingsInput | DisponibilityCreateOrConnectWithoutMeetingsInput[]
    upsert?: DisponibilityUpsertWithWhereUniqueWithoutMeetingsInput | DisponibilityUpsertWithWhereUniqueWithoutMeetingsInput[]
    set?: DisponibilityWhereUniqueInput | DisponibilityWhereUniqueInput[]
    disconnect?: DisponibilityWhereUniqueInput | DisponibilityWhereUniqueInput[]
    delete?: DisponibilityWhereUniqueInput | DisponibilityWhereUniqueInput[]
    connect?: DisponibilityWhereUniqueInput | DisponibilityWhereUniqueInput[]
    update?: DisponibilityUpdateWithWhereUniqueWithoutMeetingsInput | DisponibilityUpdateWithWhereUniqueWithoutMeetingsInput[]
    updateMany?: DisponibilityUpdateManyWithWhereWithoutMeetingsInput | DisponibilityUpdateManyWithWhereWithoutMeetingsInput[]
    deleteMany?: DisponibilityScalarWhereInput | DisponibilityScalarWhereInput[]
  }

  export type DisponibilityUncheckedUpdateManyWithoutMeetingsNestedInput = {
    create?: XOR<DisponibilityCreateWithoutMeetingsInput, DisponibilityUncheckedCreateWithoutMeetingsInput> | DisponibilityCreateWithoutMeetingsInput[] | DisponibilityUncheckedCreateWithoutMeetingsInput[]
    connectOrCreate?: DisponibilityCreateOrConnectWithoutMeetingsInput | DisponibilityCreateOrConnectWithoutMeetingsInput[]
    upsert?: DisponibilityUpsertWithWhereUniqueWithoutMeetingsInput | DisponibilityUpsertWithWhereUniqueWithoutMeetingsInput[]
    set?: DisponibilityWhereUniqueInput | DisponibilityWhereUniqueInput[]
    disconnect?: DisponibilityWhereUniqueInput | DisponibilityWhereUniqueInput[]
    delete?: DisponibilityWhereUniqueInput | DisponibilityWhereUniqueInput[]
    connect?: DisponibilityWhereUniqueInput | DisponibilityWhereUniqueInput[]
    update?: DisponibilityUpdateWithWhereUniqueWithoutMeetingsInput | DisponibilityUpdateWithWhereUniqueWithoutMeetingsInput[]
    updateMany?: DisponibilityUpdateManyWithWhereWithoutMeetingsInput | DisponibilityUpdateManyWithWhereWithoutMeetingsInput[]
    deleteMany?: DisponibilityScalarWhereInput | DisponibilityScalarWhereInput[]
  }

  export type MeetingCreateNestedManyWithoutMessageInput = {
    create?: XOR<MeetingCreateWithoutMessageInput, MeetingUncheckedCreateWithoutMessageInput> | MeetingCreateWithoutMessageInput[] | MeetingUncheckedCreateWithoutMessageInput[]
    connectOrCreate?: MeetingCreateOrConnectWithoutMessageInput | MeetingCreateOrConnectWithoutMessageInput[]
    createMany?: MeetingCreateManyMessageInputEnvelope
    connect?: MeetingWhereUniqueInput | MeetingWhereUniqueInput[]
  }

  export type MeetingUncheckedCreateNestedManyWithoutMessageInput = {
    create?: XOR<MeetingCreateWithoutMessageInput, MeetingUncheckedCreateWithoutMessageInput> | MeetingCreateWithoutMessageInput[] | MeetingUncheckedCreateWithoutMessageInput[]
    connectOrCreate?: MeetingCreateOrConnectWithoutMessageInput | MeetingCreateOrConnectWithoutMessageInput[]
    createMany?: MeetingCreateManyMessageInputEnvelope
    connect?: MeetingWhereUniqueInput | MeetingWhereUniqueInput[]
  }

  export type MeetingUpdateManyWithoutMessageNestedInput = {
    create?: XOR<MeetingCreateWithoutMessageInput, MeetingUncheckedCreateWithoutMessageInput> | MeetingCreateWithoutMessageInput[] | MeetingUncheckedCreateWithoutMessageInput[]
    connectOrCreate?: MeetingCreateOrConnectWithoutMessageInput | MeetingCreateOrConnectWithoutMessageInput[]
    upsert?: MeetingUpsertWithWhereUniqueWithoutMessageInput | MeetingUpsertWithWhereUniqueWithoutMessageInput[]
    createMany?: MeetingCreateManyMessageInputEnvelope
    set?: MeetingWhereUniqueInput | MeetingWhereUniqueInput[]
    disconnect?: MeetingWhereUniqueInput | MeetingWhereUniqueInput[]
    delete?: MeetingWhereUniqueInput | MeetingWhereUniqueInput[]
    connect?: MeetingWhereUniqueInput | MeetingWhereUniqueInput[]
    update?: MeetingUpdateWithWhereUniqueWithoutMessageInput | MeetingUpdateWithWhereUniqueWithoutMessageInput[]
    updateMany?: MeetingUpdateManyWithWhereWithoutMessageInput | MeetingUpdateManyWithWhereWithoutMessageInput[]
    deleteMany?: MeetingScalarWhereInput | MeetingScalarWhereInput[]
  }

  export type MeetingUncheckedUpdateManyWithoutMessageNestedInput = {
    create?: XOR<MeetingCreateWithoutMessageInput, MeetingUncheckedCreateWithoutMessageInput> | MeetingCreateWithoutMessageInput[] | MeetingUncheckedCreateWithoutMessageInput[]
    connectOrCreate?: MeetingCreateOrConnectWithoutMessageInput | MeetingCreateOrConnectWithoutMessageInput[]
    upsert?: MeetingUpsertWithWhereUniqueWithoutMessageInput | MeetingUpsertWithWhereUniqueWithoutMessageInput[]
    createMany?: MeetingCreateManyMessageInputEnvelope
    set?: MeetingWhereUniqueInput | MeetingWhereUniqueInput[]
    disconnect?: MeetingWhereUniqueInput | MeetingWhereUniqueInput[]
    delete?: MeetingWhereUniqueInput | MeetingWhereUniqueInput[]
    connect?: MeetingWhereUniqueInput | MeetingWhereUniqueInput[]
    update?: MeetingUpdateWithWhereUniqueWithoutMessageInput | MeetingUpdateWithWhereUniqueWithoutMessageInput[]
    updateMany?: MeetingUpdateManyWithWhereWithoutMessageInput | MeetingUpdateManyWithWhereWithoutMessageInput[]
    deleteMany?: MeetingScalarWhereInput | MeetingScalarWhereInput[]
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type MeetingCreateWithoutCoordinateInput = {
    createdAt?: Date | string
    updatedAt?: Date | string
    message: MessageCreateNestedOneWithoutMeetingsInput
    disponibilities?: DisponibilityCreateNestedManyWithoutMeetingsInput
  }

  export type MeetingUncheckedCreateWithoutCoordinateInput = {
    id?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    messageId: number
    disponibilities?: DisponibilityUncheckedCreateNestedManyWithoutMeetingsInput
  }

  export type MeetingCreateOrConnectWithoutCoordinateInput = {
    where: MeetingWhereUniqueInput
    create: XOR<MeetingCreateWithoutCoordinateInput, MeetingUncheckedCreateWithoutCoordinateInput>
  }

  export type MeetingCreateManyCoordinateInputEnvelope = {
    data: MeetingCreateManyCoordinateInput | MeetingCreateManyCoordinateInput[]
    skipDuplicates?: boolean
  }

  export type MeetingUpsertWithWhereUniqueWithoutCoordinateInput = {
    where: MeetingWhereUniqueInput
    update: XOR<MeetingUpdateWithoutCoordinateInput, MeetingUncheckedUpdateWithoutCoordinateInput>
    create: XOR<MeetingCreateWithoutCoordinateInput, MeetingUncheckedCreateWithoutCoordinateInput>
  }

  export type MeetingUpdateWithWhereUniqueWithoutCoordinateInput = {
    where: MeetingWhereUniqueInput
    data: XOR<MeetingUpdateWithoutCoordinateInput, MeetingUncheckedUpdateWithoutCoordinateInput>
  }

  export type MeetingUpdateManyWithWhereWithoutCoordinateInput = {
    where: MeetingScalarWhereInput
    data: XOR<MeetingUpdateManyMutationInput, MeetingUncheckedUpdateManyWithoutCoordinateInput>
  }

  export type MeetingScalarWhereInput = {
    AND?: MeetingScalarWhereInput | MeetingScalarWhereInput[]
    OR?: MeetingScalarWhereInput[]
    NOT?: MeetingScalarWhereInput | MeetingScalarWhereInput[]
    id?: IntFilter<"Meeting"> | number
    createdAt?: DateTimeFilter<"Meeting"> | Date | string
    updatedAt?: DateTimeFilter<"Meeting"> | Date | string
    coordinateId?: IntFilter<"Meeting"> | number
    messageId?: IntFilter<"Meeting"> | number
  }

  export type MeetingCreateWithoutDisponibilitiesInput = {
    createdAt?: Date | string
    updatedAt?: Date | string
    coordinate: CoordinateCreateNestedOneWithoutMeetingsInput
    message: MessageCreateNestedOneWithoutMeetingsInput
  }

  export type MeetingUncheckedCreateWithoutDisponibilitiesInput = {
    id?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    coordinateId: number
    messageId: number
  }

  export type MeetingCreateOrConnectWithoutDisponibilitiesInput = {
    where: MeetingWhereUniqueInput
    create: XOR<MeetingCreateWithoutDisponibilitiesInput, MeetingUncheckedCreateWithoutDisponibilitiesInput>
  }

  export type MeetingUpsertWithWhereUniqueWithoutDisponibilitiesInput = {
    where: MeetingWhereUniqueInput
    update: XOR<MeetingUpdateWithoutDisponibilitiesInput, MeetingUncheckedUpdateWithoutDisponibilitiesInput>
    create: XOR<MeetingCreateWithoutDisponibilitiesInput, MeetingUncheckedCreateWithoutDisponibilitiesInput>
  }

  export type MeetingUpdateWithWhereUniqueWithoutDisponibilitiesInput = {
    where: MeetingWhereUniqueInput
    data: XOR<MeetingUpdateWithoutDisponibilitiesInput, MeetingUncheckedUpdateWithoutDisponibilitiesInput>
  }

  export type MeetingUpdateManyWithWhereWithoutDisponibilitiesInput = {
    where: MeetingScalarWhereInput
    data: XOR<MeetingUpdateManyMutationInput, MeetingUncheckedUpdateManyWithoutDisponibilitiesInput>
  }

  export type CoordinateCreateWithoutMeetingsInput = {
    gender: string
    lastName: string
    firstName: string
    email: string
    phone: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CoordinateUncheckedCreateWithoutMeetingsInput = {
    id?: number
    gender: string
    lastName: string
    firstName: string
    email: string
    phone: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CoordinateCreateOrConnectWithoutMeetingsInput = {
    where: CoordinateWhereUniqueInput
    create: XOR<CoordinateCreateWithoutMeetingsInput, CoordinateUncheckedCreateWithoutMeetingsInput>
  }

  export type MessageCreateWithoutMeetingsInput = {
    content: string
    subject: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MessageUncheckedCreateWithoutMeetingsInput = {
    id?: number
    content: string
    subject: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MessageCreateOrConnectWithoutMeetingsInput = {
    where: MessageWhereUniqueInput
    create: XOR<MessageCreateWithoutMeetingsInput, MessageUncheckedCreateWithoutMeetingsInput>
  }

  export type DisponibilityCreateWithoutMeetingsInput = {
    date: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type DisponibilityUncheckedCreateWithoutMeetingsInput = {
    id?: number
    date: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type DisponibilityCreateOrConnectWithoutMeetingsInput = {
    where: DisponibilityWhereUniqueInput
    create: XOR<DisponibilityCreateWithoutMeetingsInput, DisponibilityUncheckedCreateWithoutMeetingsInput>
  }

  export type CoordinateUpsertWithoutMeetingsInput = {
    update: XOR<CoordinateUpdateWithoutMeetingsInput, CoordinateUncheckedUpdateWithoutMeetingsInput>
    create: XOR<CoordinateCreateWithoutMeetingsInput, CoordinateUncheckedCreateWithoutMeetingsInput>
    where?: CoordinateWhereInput
  }

  export type CoordinateUpdateToOneWithWhereWithoutMeetingsInput = {
    where?: CoordinateWhereInput
    data: XOR<CoordinateUpdateWithoutMeetingsInput, CoordinateUncheckedUpdateWithoutMeetingsInput>
  }

  export type CoordinateUpdateWithoutMeetingsInput = {
    gender?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CoordinateUncheckedUpdateWithoutMeetingsInput = {
    id?: IntFieldUpdateOperationsInput | number
    gender?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MessageUpsertWithoutMeetingsInput = {
    update: XOR<MessageUpdateWithoutMeetingsInput, MessageUncheckedUpdateWithoutMeetingsInput>
    create: XOR<MessageCreateWithoutMeetingsInput, MessageUncheckedCreateWithoutMeetingsInput>
    where?: MessageWhereInput
  }

  export type MessageUpdateToOneWithWhereWithoutMeetingsInput = {
    where?: MessageWhereInput
    data: XOR<MessageUpdateWithoutMeetingsInput, MessageUncheckedUpdateWithoutMeetingsInput>
  }

  export type MessageUpdateWithoutMeetingsInput = {
    content?: StringFieldUpdateOperationsInput | string
    subject?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MessageUncheckedUpdateWithoutMeetingsInput = {
    id?: IntFieldUpdateOperationsInput | number
    content?: StringFieldUpdateOperationsInput | string
    subject?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DisponibilityUpsertWithWhereUniqueWithoutMeetingsInput = {
    where: DisponibilityWhereUniqueInput
    update: XOR<DisponibilityUpdateWithoutMeetingsInput, DisponibilityUncheckedUpdateWithoutMeetingsInput>
    create: XOR<DisponibilityCreateWithoutMeetingsInput, DisponibilityUncheckedCreateWithoutMeetingsInput>
  }

  export type DisponibilityUpdateWithWhereUniqueWithoutMeetingsInput = {
    where: DisponibilityWhereUniqueInput
    data: XOR<DisponibilityUpdateWithoutMeetingsInput, DisponibilityUncheckedUpdateWithoutMeetingsInput>
  }

  export type DisponibilityUpdateManyWithWhereWithoutMeetingsInput = {
    where: DisponibilityScalarWhereInput
    data: XOR<DisponibilityUpdateManyMutationInput, DisponibilityUncheckedUpdateManyWithoutMeetingsInput>
  }

  export type DisponibilityScalarWhereInput = {
    AND?: DisponibilityScalarWhereInput | DisponibilityScalarWhereInput[]
    OR?: DisponibilityScalarWhereInput[]
    NOT?: DisponibilityScalarWhereInput | DisponibilityScalarWhereInput[]
    id?: IntFilter<"Disponibility"> | number
    date?: DateTimeFilter<"Disponibility"> | Date | string
    createdAt?: DateTimeFilter<"Disponibility"> | Date | string
    updatedAt?: DateTimeFilter<"Disponibility"> | Date | string
  }

  export type MeetingCreateWithoutMessageInput = {
    createdAt?: Date | string
    updatedAt?: Date | string
    coordinate: CoordinateCreateNestedOneWithoutMeetingsInput
    disponibilities?: DisponibilityCreateNestedManyWithoutMeetingsInput
  }

  export type MeetingUncheckedCreateWithoutMessageInput = {
    id?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    coordinateId: number
    disponibilities?: DisponibilityUncheckedCreateNestedManyWithoutMeetingsInput
  }

  export type MeetingCreateOrConnectWithoutMessageInput = {
    where: MeetingWhereUniqueInput
    create: XOR<MeetingCreateWithoutMessageInput, MeetingUncheckedCreateWithoutMessageInput>
  }

  export type MeetingCreateManyMessageInputEnvelope = {
    data: MeetingCreateManyMessageInput | MeetingCreateManyMessageInput[]
    skipDuplicates?: boolean
  }

  export type MeetingUpsertWithWhereUniqueWithoutMessageInput = {
    where: MeetingWhereUniqueInput
    update: XOR<MeetingUpdateWithoutMessageInput, MeetingUncheckedUpdateWithoutMessageInput>
    create: XOR<MeetingCreateWithoutMessageInput, MeetingUncheckedCreateWithoutMessageInput>
  }

  export type MeetingUpdateWithWhereUniqueWithoutMessageInput = {
    where: MeetingWhereUniqueInput
    data: XOR<MeetingUpdateWithoutMessageInput, MeetingUncheckedUpdateWithoutMessageInput>
  }

  export type MeetingUpdateManyWithWhereWithoutMessageInput = {
    where: MeetingScalarWhereInput
    data: XOR<MeetingUpdateManyMutationInput, MeetingUncheckedUpdateManyWithoutMessageInput>
  }

  export type MeetingCreateManyCoordinateInput = {
    id?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    messageId: number
  }

  export type MeetingUpdateWithoutCoordinateInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    message?: MessageUpdateOneRequiredWithoutMeetingsNestedInput
    disponibilities?: DisponibilityUpdateManyWithoutMeetingsNestedInput
  }

  export type MeetingUncheckedUpdateWithoutCoordinateInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    messageId?: IntFieldUpdateOperationsInput | number
    disponibilities?: DisponibilityUncheckedUpdateManyWithoutMeetingsNestedInput
  }

  export type MeetingUncheckedUpdateManyWithoutCoordinateInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    messageId?: IntFieldUpdateOperationsInput | number
  }

  export type MeetingUpdateWithoutDisponibilitiesInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    coordinate?: CoordinateUpdateOneRequiredWithoutMeetingsNestedInput
    message?: MessageUpdateOneRequiredWithoutMeetingsNestedInput
  }

  export type MeetingUncheckedUpdateWithoutDisponibilitiesInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    coordinateId?: IntFieldUpdateOperationsInput | number
    messageId?: IntFieldUpdateOperationsInput | number
  }

  export type MeetingUncheckedUpdateManyWithoutDisponibilitiesInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    coordinateId?: IntFieldUpdateOperationsInput | number
    messageId?: IntFieldUpdateOperationsInput | number
  }

  export type DisponibilityUpdateWithoutMeetingsInput = {
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DisponibilityUncheckedUpdateWithoutMeetingsInput = {
    id?: IntFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DisponibilityUncheckedUpdateManyWithoutMeetingsInput = {
    id?: IntFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MeetingCreateManyMessageInput = {
    id?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    coordinateId: number
  }

  export type MeetingUpdateWithoutMessageInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    coordinate?: CoordinateUpdateOneRequiredWithoutMeetingsNestedInput
    disponibilities?: DisponibilityUpdateManyWithoutMeetingsNestedInput
  }

  export type MeetingUncheckedUpdateWithoutMessageInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    coordinateId?: IntFieldUpdateOperationsInput | number
    disponibilities?: DisponibilityUncheckedUpdateManyWithoutMeetingsNestedInput
  }

  export type MeetingUncheckedUpdateManyWithoutMessageInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    coordinateId?: IntFieldUpdateOperationsInput | number
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}