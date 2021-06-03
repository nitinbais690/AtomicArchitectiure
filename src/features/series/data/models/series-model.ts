import { Season } from "@series/domain/entities/season";
import { Series } from "@series/domain/entities/series";
import { SeasonModel } from "./season-model";

export class SeriesModel implements Series {

    seasons: Season[] = Array();

    /**
     * Parse the seasons data from Season API
     * @param json response JSON from seasons API
     * @returns Array of Season which are parse to Season object
     */
    parse(json: any): Season[] {
        let data = json["data"]
        if (data !== null && Array.isArray(data)) {
            for (let item of data) {
                let season = new SeasonModel().parse(item)
                this.seasons.push(season)
            }
        }
        return this.seasons
    }
}