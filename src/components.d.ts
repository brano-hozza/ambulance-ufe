/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
export namespace Components {
    interface HozzaAmbulanceWlApp {
        "ambulanceId": string;
        "apiBase": string;
        "basePath": string;
    }
    interface HozzaAmbulanceWlEditor {
        "ambulanceId": string;
        "apiBase": string;
        "entryId": string;
    }
    interface HozzaAmbulanceWlList {
        "ambulanceId": string;
        "apiBase": string;
    }
}
export interface HozzaAmbulanceWlEditorCustomEvent<T> extends CustomEvent<T> {
    detail: T;
    target: HTMLHozzaAmbulanceWlEditorElement;
}
export interface HozzaAmbulanceWlListCustomEvent<T> extends CustomEvent<T> {
    detail: T;
    target: HTMLHozzaAmbulanceWlListElement;
}
declare global {
    interface HTMLHozzaAmbulanceWlAppElement extends Components.HozzaAmbulanceWlApp, HTMLStencilElement {
    }
    var HTMLHozzaAmbulanceWlAppElement: {
        prototype: HTMLHozzaAmbulanceWlAppElement;
        new (): HTMLHozzaAmbulanceWlAppElement;
    };
    interface HTMLHozzaAmbulanceWlEditorElementEventMap {
        "editor-closed": string;
    }
    interface HTMLHozzaAmbulanceWlEditorElement extends Components.HozzaAmbulanceWlEditor, HTMLStencilElement {
        addEventListener<K extends keyof HTMLHozzaAmbulanceWlEditorElementEventMap>(type: K, listener: (this: HTMLHozzaAmbulanceWlEditorElement, ev: HozzaAmbulanceWlEditorCustomEvent<HTMLHozzaAmbulanceWlEditorElementEventMap[K]>) => any, options?: boolean | AddEventListenerOptions): void;
        addEventListener<K extends keyof DocumentEventMap>(type: K, listener: (this: Document, ev: DocumentEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
        addEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
        addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
        removeEventListener<K extends keyof HTMLHozzaAmbulanceWlEditorElementEventMap>(type: K, listener: (this: HTMLHozzaAmbulanceWlEditorElement, ev: HozzaAmbulanceWlEditorCustomEvent<HTMLHozzaAmbulanceWlEditorElementEventMap[K]>) => any, options?: boolean | EventListenerOptions): void;
        removeEventListener<K extends keyof DocumentEventMap>(type: K, listener: (this: Document, ev: DocumentEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
        removeEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
        removeEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
    }
    var HTMLHozzaAmbulanceWlEditorElement: {
        prototype: HTMLHozzaAmbulanceWlEditorElement;
        new (): HTMLHozzaAmbulanceWlEditorElement;
    };
    interface HTMLHozzaAmbulanceWlListElementEventMap {
        "entry-clicked": string;
    }
    interface HTMLHozzaAmbulanceWlListElement extends Components.HozzaAmbulanceWlList, HTMLStencilElement {
        addEventListener<K extends keyof HTMLHozzaAmbulanceWlListElementEventMap>(type: K, listener: (this: HTMLHozzaAmbulanceWlListElement, ev: HozzaAmbulanceWlListCustomEvent<HTMLHozzaAmbulanceWlListElementEventMap[K]>) => any, options?: boolean | AddEventListenerOptions): void;
        addEventListener<K extends keyof DocumentEventMap>(type: K, listener: (this: Document, ev: DocumentEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
        addEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
        addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
        removeEventListener<K extends keyof HTMLHozzaAmbulanceWlListElementEventMap>(type: K, listener: (this: HTMLHozzaAmbulanceWlListElement, ev: HozzaAmbulanceWlListCustomEvent<HTMLHozzaAmbulanceWlListElementEventMap[K]>) => any, options?: boolean | EventListenerOptions): void;
        removeEventListener<K extends keyof DocumentEventMap>(type: K, listener: (this: Document, ev: DocumentEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
        removeEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
        removeEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
    }
    var HTMLHozzaAmbulanceWlListElement: {
        prototype: HTMLHozzaAmbulanceWlListElement;
        new (): HTMLHozzaAmbulanceWlListElement;
    };
    interface HTMLElementTagNameMap {
        "hozza-ambulance-wl-app": HTMLHozzaAmbulanceWlAppElement;
        "hozza-ambulance-wl-editor": HTMLHozzaAmbulanceWlEditorElement;
        "hozza-ambulance-wl-list": HTMLHozzaAmbulanceWlListElement;
    }
}
declare namespace LocalJSX {
    interface HozzaAmbulanceWlApp {
        "ambulanceId"?: string;
        "apiBase"?: string;
        "basePath"?: string;
    }
    interface HozzaAmbulanceWlEditor {
        "ambulanceId"?: string;
        "apiBase"?: string;
        "entryId"?: string;
        "onEditor-closed"?: (event: HozzaAmbulanceWlEditorCustomEvent<string>) => void;
    }
    interface HozzaAmbulanceWlList {
        "ambulanceId"?: string;
        "apiBase"?: string;
        "onEntry-clicked"?: (event: HozzaAmbulanceWlListCustomEvent<string>) => void;
    }
    interface IntrinsicElements {
        "hozza-ambulance-wl-app": HozzaAmbulanceWlApp;
        "hozza-ambulance-wl-editor": HozzaAmbulanceWlEditor;
        "hozza-ambulance-wl-list": HozzaAmbulanceWlList;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "hozza-ambulance-wl-app": LocalJSX.HozzaAmbulanceWlApp & JSXBase.HTMLAttributes<HTMLHozzaAmbulanceWlAppElement>;
            "hozza-ambulance-wl-editor": LocalJSX.HozzaAmbulanceWlEditor & JSXBase.HTMLAttributes<HTMLHozzaAmbulanceWlEditorElement>;
            "hozza-ambulance-wl-list": LocalJSX.HozzaAmbulanceWlList & JSXBase.HTMLAttributes<HTMLHozzaAmbulanceWlListElement>;
        }
    }
}
