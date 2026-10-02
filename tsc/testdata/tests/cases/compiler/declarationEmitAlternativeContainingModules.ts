// @module: commonjs
// @target: es2015
// @declaration: true
// @emitDeclarationOnly: true

// index.ts imports none of the modules that export the types in its inferred declarations,
// so declaration emit searches every module in the program for one to reference them through.

// @filename: /node_modules/shapes/internal.d.ts
export interface Shape {
    kind: string;
}
export declare function makeShape(): Shape;

// @filename: /node_modules/shapes/index.d.ts
export { makeShape } from "./internal";
export type { Shape } from "./internal";

// @filename: /node_modules/shapes/aliased.d.ts
export { Shape as RenamedShape } from "./internal";

// @filename: /node_modules/legacy/index.d.ts
declare namespace legacy {
    interface Options {
        verbose: boolean;
    }
}
declare function legacy(): legacy.Options;
export = legacy;

// @filename: /node_modules/factory/index.d.ts
import legacy = require("legacy");
export { makeShape as create } from "shapes/internal";
export declare function makeLegacy(): legacy.Options;

// @filename: /index.ts
import { create, makeLegacy } from "factory";
export const shape = create();
export const shapes = [create(), create()];
export const options = makeLegacy();
