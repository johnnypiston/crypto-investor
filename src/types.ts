export type ApiInput = DeepReadonly<{
  op: string;
  x: {
    inputs: Array<{
      prev_out: {
        addr: string;
      };
    }>;
    out: Array<{
      addr: string;
      value: number;
    }>;
  };
}>;

type DeepReadonly<T> = {
  readonly [P in keyof T]: DeepReadonly<T[P]>;
};

export type TransactionData = Readonly<{
  from: string;
  to: string;
  sum: number;
}>;
