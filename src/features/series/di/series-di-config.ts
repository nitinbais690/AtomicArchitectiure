import "reflect-metadata";
import { ContainerModule, interfaces } from "inversify";
import { SeriesRemoteDataSource, SeriesRemoteDataSourceImpl, } from "@series/data/data-sources/series-remote-data-source";
import { SeriesRepositoryImpl } from "@series/data/repositories/series-repository-impl";
import { SeriesRepository } from "@series/domain/repositories/series-repository";
import { GetEpisodes } from "@series/domain/use-cases/get-episodes";
import { GetSeasons } from "@series/domain/use-cases/get-seasons";
import { SERIES_DI_TYPES } from "@series/di/series-di-types";

/**
 * Configure Series feature specific DI dependency here
 * Series DI has configured as DI Container Module
 */
let seriesDIContainer = new ContainerModule((bind: interfaces.Bind) => {
  bind<SeriesRemoteDataSource>(SERIES_DI_TYPES.SeriesRemoteDataSource).to(
    SeriesRemoteDataSourceImpl
  );
  bind<SeriesRepository>(SERIES_DI_TYPES.SeriesRepository).to(
    SeriesRepositoryImpl
  );
  bind<GetEpisodes>(SERIES_DI_TYPES.GetEpisodes).to(GetEpisodes);
  bind<GetSeasons>(SERIES_DI_TYPES.GetSeasons).to(GetSeasons);
});

export default seriesDIContainer;
