import { KeyValueCache } from "../cache/KeyValueCache";

export interface DataSourceConfig<TContext> {
  context: TContext;
  cache: KeyValueCache;
}

export abstract class DataSource<TContext = any> {
  initialize?(config: DataSourceConfig<TContext>): void | Promise<void>;
}
