import { Season } from "@series/domain/entities/season";
import { Failure, RequestFailure, ServerFailure } from "@core/api/failure";
import appApi, { HTTP_OK, SUCCESS, SERVER_ERROR } from "@core/api/api";
import { SeriesModel } from "@series/data/models/series-model";
import { EpisodesResponseModel } from "@series/data/models/episodes-response-model";
import "reflect-metadata";
import { injectable } from "inversify";
import Constants from "@constants/Constants";
export interface SeriesRemoteDataSource {
  /**
   * Fetch seasons using unique series Id
   * @param seriesId Series Id of selected series
   * @param pageNumber Page number of current API call
   * @returns Array of Seasons if data fetch success
   * If status code 500 then it will return ServerFailure otherwise it will be RequestFailure
   */
  getSeasons(
    seriesId: string,
    pageNumber: number
  ): Promise<Array<Season> | Failure>;

  /**
   * Fetch episodes for selected season
   * @param seriesId Series id of selected series
   * @param seasonId Selected season id
   * @param pageNumber Page number of current API
   */
  getEpisodes(
    seriesId: string,
    seasonId: string,
    pageNumber: number
  ): Promise<Array<Season> | Failure>;
}

@injectable()
export class SeriesRemoteDataSourceImpl implements SeriesRemoteDataSource {
  /**
   * pageSize mentioned as constant here to not allow developer to change.
   */
  readonly pageSize: number = Constants.pageSize;

  async getSeasons(
    seriesId: string,
    pageNumber: number
  ): Promise<Season[] | Failure> {
    let response = await appApi.get(`series/${seriesId}/seasons`, {
      params: {
        pageNumber: pageNumber,
        pageSize: this.pageSize,
      },
    });

    try {
      if (response.status == HTTP_OK) {
        if (response.data.header.message === SUCCESS) {
          return new SeriesModel().parse(response.data);
        }
      } else if (response.status == SERVER_ERROR) {
        return new ServerFailure();
      }
    } catch (error) {
      return new RequestFailure();
    }

    return new RequestFailure();
  }

  async getEpisodes(
    seriesId: string,
    seasonId: string,
    pageNumber: number
  ): Promise<Array<Season> | Failure> {
    let response = await appApi.get(`series/${seriesId}/episodes`, {
      params: {
        seasonId: seasonId,
        pageNumber: pageNumber,
        pageSize: this.pageSize,
      },
    });

    try {
      if (response.status == HTTP_OK) {
        if (response.data.header.message === SUCCESS) {
          return new EpisodesResponseModel().parse(response.data);
        }
      } else if (response.status == SERVER_ERROR) {
        return new ServerFailure();
      }
    } catch (error) {
      return new RequestFailure();
    }

    return new RequestFailure();
  }
}
