/**
 * Application specific DI types here
 */
const CORE_DI_TYPES = {
    NetworkInfo: Symbol.for("NetworkInfo")
};

// Export this types to whole application
export { CORE_DI_TYPES };