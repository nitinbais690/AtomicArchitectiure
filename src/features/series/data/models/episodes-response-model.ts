import { Episode } from "@series/domain/entities/episode";
import { EpisodeModel } from "./episode-model";

export class EpisodesResponseModel {

    episodes: Array<Episode> = new Array()

    /**
     * Parse the episodes list to require to content
     * @param json full json from episodes API
     * @returns Array of Episode as parsed object
     */
    parse(json: any): Array<Episode> {
        let data = json["data"]
        if (data !== null && Array.isArray(data)) {
            for (let item of data) {
                let episode = new EpisodeModel().parseEpisode(item)
                this.episodes.push(episode)
            }
        }
        return this.episodes
    }
}