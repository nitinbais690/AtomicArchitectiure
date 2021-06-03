import { Failure } from "@core/api/failure";
import { Episode } from "@series/domain/entities/episode";
import { Season } from "@series/domain/entities/season";

export interface SeriesRepository {
    
    /**
     * Fetch seasons for selected series
     * @param seriesId Selected series id
     * @param pageNumber Page number of current API call
     */
    getSeasons(seriesId: string, pageNumber: number): Promise<Array<Season> | Failure>

    /**
     * Get episodes for selected season
     * @param seriesId Selected series id
     * @param seasonId Selected season id
     * @param pageNumber Current API call page number
     */
    getEpisodes(seriesId: string, seasonId: string, pageNumber: number): Promise<Array<Episode> | Failure>
}