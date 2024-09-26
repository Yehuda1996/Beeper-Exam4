export interface Beeper {
    id: string,
    name: string, 
    status: string,
    created_at: Date,
    detonated_at: Date,
    latitude: number,
    longitude: number
}

export enum Status {
    manufatured = "manufatured",
    assembled = "assembled",
    shipped = "shipped",
    deployed = "deployed",
    detonated = "detonated"
}