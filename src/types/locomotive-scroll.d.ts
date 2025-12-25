declare module 'locomotive-scroll' {
  export interface ILocomotiveScrollOptions {
    el?: Element | null;
    name?: string;
    offset?: [number, number];
    repeat?: boolean;
    smooth?: boolean;
    smoothMobile?: boolean;
    direction?: 'vertical' | 'horizontal';
    lerp?: number;
    class?: string;
    scrollbarClass?: string;
    scrollingClass?: string;
    draggingClass?: string;
    smoothClass?: string;
    initClass?: string;
    getDirection?: boolean;
    getSpeed?: boolean;
    multiplier?: number;
    firefoxMultiplier?: number;
    touchMultiplier?: number;
    resetNativeScroll?: boolean;
    tablet?: {
      smooth?: boolean;
      direction?: 'vertical' | 'horizontal';
      breakpoint?: number;
    };
    smartphone?: {
      smooth?: boolean;
      direction?: 'vertical' | 'horizontal';
    };
    reloadOnContextChange?: boolean;
    scrollFromAnywhere?: boolean;
  }

  export interface ILocomotiveScrollInstance {
    init(): void;
    on(event: 'scroll' | 'call', callback: (args: unknown) => void): void;
    update(): void;
    destroy(): void;
    start(): void;
    stop(): void;
    scrollTo(
      target: string | HTMLElement | number,
      options?: {
        offset?: number;
        duration?: number;
        easing?: [number, number, number, number];
        disableLerp?: boolean;
        callback?: () => void;
      }
    ): void;
    scroll: {
      instance: {
        scroll: {
          y: number;
          x: number;
        };
        limit: {
          y: number;
          x: number;
        };
      };
    };
  }

  export default class LocomotiveScroll implements ILocomotiveScrollInstance {
    constructor(options?: ILocomotiveScrollOptions);
    init(): void;
    on(event: 'scroll' | 'call', callback: (args: unknown) => void): void;
    update(): void;
    destroy(): void;
    start(): void;
    stop(): void;
    scrollTo(
      target: string | HTMLElement | number,
      options?: {
        offset?: number;
        duration?: number;
        easing?: [number, number, number, number];
        disableLerp?: boolean;
        callback?: () => void;
      }
    ): void;
    scroll: {
      instance: {
        scroll: {
          y: number;
          x: number;
        };
        limit: {
          y: number;
          x: number;
        };
      };
    };
  }
}
