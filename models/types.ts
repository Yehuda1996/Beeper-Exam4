export interface Beeper {
    id: string,
    name: string, 
    status: Status,
    created_at: Date,
    detonated_at: Date | null,
    latitude: number,
    longitude: number
}

export enum Status {
    manufatured = "manufactured",
    assembled = "assembled",
    shipped = "shipped",
    deployed = "deployed",
    detonated = "detonated"
}