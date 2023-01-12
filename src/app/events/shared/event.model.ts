export interface Event {
    id: number,
    name: string,
    date: Date,
    time: string,
    price: number,
    imageUrl: string,
    location?: {
        address: string,
        city: string,
        country: string
    },
    onlineUrl?: string,
    sessions: Session[],
}

export interface Session {
    id: number,
    name: string,
    duration: number,
    level: string,
    abstract: string,
    presenter: string,
    voters: string[]
}