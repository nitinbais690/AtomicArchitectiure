import "reflect-metadata";
import { inject, injectable } from "inversify";
import { Failure, ServerFailure } from "@core/api/failure";
import { UseCase } from "@core/use-case/use-case";
import { SERIES_DI_TYPES } from "@series/di/series-di-types";
import { Season } from "@series/domain/entities/season";
import { SeriesRepository } from "@series/domain/repositories/series-repository";

@injectable()
export class GetSeasons implements UseCase<Array<Season>, SeasonRequestParams> {
  @inject(SERIES_DI_TYPES.SeriesRepository)
  private seriesRepository: SeriesRepository | undefined;

  async execute(params: SeasonRequestParams): Promise<Season[] | Failure> {
    if (this.seriesRepository !== undefined) {
      return await this.seriesRepository.getSeasons(
        params.seriesId,
        params.pageNumber
      );
    }
    return new ServerFailure();
  }
}

export class SeasonRequestParams {
  seriesId: string;
  pageNumber: number;

  constructor(seriesId: string, pageNumber: number) {
    this.seriesId = seriesId;
    this.pageNumber = pageNumber;
  }
}
