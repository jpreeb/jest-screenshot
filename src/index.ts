declare global {
    namespace jest {
        interface Matchers<R> {
            toMatchImageSnapshot(): R;
        }
    }
}

export { setupJestScreenshot } from "./jest-screenshot";
export {
    toMatchImageSnapshot,
    ToMatchImageSnapshotConfiguration,
} from "./to-match-image-snapshot";
