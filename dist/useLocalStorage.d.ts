export declare function useLocalStorage(keyOrObj?: any, defaultVal?: string): any[] & {
    set: (keyOrObj: string | {}, val?: string | undefined) => void;
    remove: (...keys: any[]) => void;
    clear: () => void;
};
