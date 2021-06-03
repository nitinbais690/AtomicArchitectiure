/**
 * Configure the DI symbols as per Inversify lib recommendation
 * This constant object is Series feature
 */
const SERIES_DI_TYPES = {
    SeriesRemoteDataSource: Symbol.for("SeriesRemoteDataSource"),
    SeriesRepository: Symbol.for("SeriesRepository"),
    GetEpisodes: Symbol.for("GetEpisodes"),
    GetSeasons: Symbol.for("GetSeasons")
};

// Export the Series DI types for series feature classes
export { SERIES_DI_TYPES };