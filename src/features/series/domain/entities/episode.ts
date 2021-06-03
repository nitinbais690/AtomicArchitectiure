export interface Episode {
    id: string
    episodeNo: number
    title: string
    shortDescription: string
    description: string
    image: string
    genres: Array<string>
    creditPoints: number
    duration: number
    airedDate: string
    year: number
    seasonNo: number
    status: string
}