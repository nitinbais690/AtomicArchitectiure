import { Episode } from "@series/domain/entities/episode";
import Constants from "@constants/Constants";

export class EpisodeModel implements Episode {
  id: string = "";
  episodeNo: number = 0;
  title: string = "";
  shortDescription: string = "";
  description: string = "";
  image: string = "";
  genres: string[] = new Array();
  creditPoints: number = 0;
  duration: number = 0;
  airedDate: string = "";
  year: number = 0;
  seasonNo: number = 0;
  status: string = "";

  /**
   * Parse the episode json item from API to application Episode object
   * @param item
   * @returns Episode object
   */
  parseEpisode(item: any): Episode {
    this.id = item[Constants.id];
    this.episodeNo = item[Constants.epnum];
    this.seasonNo = item[Constants.snum];
    this.title = this.getContent(item[Constants.lon]);
    this.shortDescription = this.getContent(item[Constants.lod]);
    this.description = this.getContent(item[Constants.lold]);
    this.genres = this.getContent(item[Constants.log]);
    this.creditPoints = item[Constants.creditPointsKey];
    this.duration = item[Constants.durationKey];
    this.airedDate = item[Constants.airedDateKey];
    this.year = item[Constants.yearKey];
    this.status = item[Constants.statusKey];
    // Hard code the image as per request in mail
    this.image =
      "https://resizer-staging-tvpass.azureedge.net/image/0B8E168A-674A-49E9-A4E9-3AC985D486F3/0-16x9.jpg?width=276";
    return this;
  }

  /**
   * getContent will used parse content from content array
   * @param content as Array
   * @returns appropriate content from "n" field and if array empty will return null
   */
  private getContent(content: Array<any>): any {
    if (content !== null && content !== undefined && content.length > 0) {
      return content[0]["n"];
    } else {
      return null;
    }
  }
}
