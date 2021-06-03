import { Failure } from "@core/api/failure";
import { Episode } from "@series/domain/entities/episode";

export interface Season {
    id: string
    number: number
    seriesTitle: string
    title: string
    image: string
    totalCreditPoints: string
    episodes: Array<Episode> | Failure
}