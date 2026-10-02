//// [tests/cases/compiler/declarationEmitAlternativeContainingModules.ts] ////

//// [internal.d.ts]
export interface Shape {
    kind: string;
}
export declare function makeShape(): Shape;

//// [index.d.ts]
export { makeShape } from "./internal";
export type { Shape } from "./internal";

//// [aliased.d.ts]
export { Shape as RenamedShape } from "./internal";

//// [index.d.ts]
declare namespace legacy {
    interface Options {
        verbose: boolean;
    }
}
declare function legacy(): legacy.Options;
export = legacy;

//// [index.d.ts]
import legacy = require("legacy");
export { makeShape as create } from "shapes/internal";
export declare function makeLegacy(): legacy.Options;

//// [index.ts]
import { create, makeLegacy } from "factory";
export const shape = create();
export const shapes = [create(), create()];
export const options = makeLegacy();




//// [index.d.ts]
export declare const shape: import("shapes").Shape;
export declare const shapes: import("shapes").Shape[];
export declare const options: import("legacy").Options;
