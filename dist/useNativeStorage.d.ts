/**
 * TODO:
 * THIS DOES NOT CURRENTLY WORK
 */
export declare function useNativeStorage(keyOrObj?: any, defaultVal?: string): any[] & {
    set: (keyOrObj: string | {}, val?: string | undefined) => void;
    remove: (...keys: any[]) => void;
    clear: () => void;
};
