export enum DelayLength {
    SHORT = 500,
    MEDIUM = 1000,
    LONG = 2000,
}

export const delay = (ms: DelayLength) => {
    return new Promise((resolve) => setTimeout(resolve, ms));
};
