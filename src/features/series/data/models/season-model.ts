import { Season } from "@series/domain/entities/season";
import { Episode } from "@series/domain/entities/episode";

export class SeasonModel implements Season {
    seriesTitle: string = '';
    number: number = 0;
    id: string = '';
    title: string = '';
    image: string = '';
    totalCreditPoints: string = '';
    episodes: Episode[] = new Array();

    /**
     * parse season item json to Season object
     * @param seasonJson 
     */
    parse(seasonJson: any): Season {
        this.number = seasonJson["snum"]
        this.id = seasonJson["id"]
        this.title = this.getTitle(seasonJson["lon"]);
        this.seriesTitle = this.getTitle(seasonJson["lostl"]);
        // Hard code as per request in mail
        this.image = "https://resizer-staging-tvpass.azureedge.net/image/A604A743-3A73-4A3D-B02B-839FE0965055/0-16x9.jpg?width=1280"
        return this
    }

    /**
     * getTitle will used to both season / series title from season object
     * @param title as Array
     * @returns title string of season or series, return the first position of title
     * If title array empty or null then it will return empt
     */
    private getTitle(title: Array<any>): string {
        if (title !== null && title !== undefined && title.length > 0) {
            return title[0]["n"]
        } else {
            return ""
        }
    }

}