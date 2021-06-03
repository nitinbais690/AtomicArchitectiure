import "reflect-metadata";
import { inject, injectable } from "inversify";
import { Failure, ServerFailure } from "@core/api/failure";
import { UseCase } from "@core/use-case/use-case";
import { SERIES_DI_TYPES } from "@series/di/series-di-types";
import { Episode } from "@series/domain/entities/episode";
import { SeriesRepository } from "@series/domain/repositories/series-repository";

@injectable()
export class GetEpisodes
  implements UseCase<Array<Episode>, EpisodeRequestParams> {
  @inject(SERIES_DI_TYPES.SeriesRepository)
  private seriesRepository: SeriesRepository | undefined;

  async execute(params: EpisodeRequestParams): Promise<Episode[] | Failure> {
    if (this.seriesRepository !== undefined) {
      return await this.seriesRepository.getEpisodes(
        params.seriesId,
        params.seasonId,
        params.pageNumber
      );
    }
    return new ServerFailure();
  }
}

export class EpisodeRequestParams {
  seriesId: string;
  seasonId: string;
  pageNumber: number;

  constructor(seriesId: string, seasonId: string, pageNumber: number) {
    this.seriesId = seriesId;
    this.seasonId = seasonId;
    this.pageNumber = pageNumber;
  }
}
