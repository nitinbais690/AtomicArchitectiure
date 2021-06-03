import "reflect-metadata";
import { inject, injectable } from "inversify";
import { Failure, ServerFailure } from "@core/api/failure";
import { CORE_DI_TYPES } from "@core/di/core-di-types";
import { NetworkInfo } from "@core/network/network-info";
import { SERIES_DI_TYPES } from "@series/di/series-di-types";
import { Season } from "@series/domain/entities/season";
import { Episode } from "@series/domain/entities/episode";
import { SeriesRepository } from "@series/domain/repositories/series-repository";
import { SeriesRemoteDataSource } from "@series/data/data-sources/series-remote-data-source";

@injectable()
export class SeriesRepositoryImpl implements SeriesRepository {
  @inject(SERIES_DI_TYPES.SeriesRemoteDataSource)
  private remoteDataSource: SeriesRemoteDataSource | undefined;

  @inject(CORE_DI_TYPES.NetworkInfo)
  private networkInfo!: NetworkInfo | undefined;

  async getSeasons(
    seriesId: string,
    pageNumber: number
  ): Promise<Array<Season> | Failure> {
    if (
      this.networkInfo !== undefined &&
      (await this.networkInfo.isConnected()) &&
      this.remoteDataSource !== undefined
    ) {
      return this.remoteDataSource.getSeasons(seriesId, pageNumber);
    }
    // Return as server failure if network not available
    return new ServerFailure();
  }

  async getEpisodes(
    seriesId: string,
    seasonId: string,
    pageNumber: number
  ): Promise<Array<Episode> | Failure> {
    if (
      this.networkInfo !== undefined &&
      (await this.networkInfo.isConnected()) &&
      this.remoteDataSource !== undefined
    ) {
      return this.remoteDataSource.getEpisodes(seriesId, seasonId, pageNumber);
    }
    // Return as server failure if network not available
    return new ServerFailure();
  }
}
