# Const Enum Error

`src/main.ts` imports a `const enum` from `common.d.ts`. While `tsc` will replace the reference to the enum with the constant value, `ts-loader` doesn't, thereby causing the import to remain and `webpack` subsequently fails.

This only happens when using the `transpileOnly` option of `ts-loader`.

When using the `isolatedModules` options with `tsc`, error `TS1209` will be displayed, which is similar, and might be related.

## With `tsc`

```
npm run tsc
```

Completes successfully, without errors.

See output in `dist/tsc`.

## With `ts-loader`

```
npm run webpack
```

Completes with an error:

```
ERROR in ./src/main.ts
Module not found: Error: Can't resolve './common' in 'C:\Users\Schmulik\Documents\GitHub\schmuli\ts-loader-e
nums\src'
 @ ./src/main.ts 3:15-34
```

See output in `dist/webpack`.

## With `tsc --isolatedModules`

```
npm run tsc:isolated
```

Compiles with an error:

```
error TS1209: Ambient const enums are not allowed when the '--isolatedModules' flag i
s provided.
```

See output in `dist/tsc-isolated`.
