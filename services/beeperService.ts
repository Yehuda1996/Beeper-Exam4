import { Beeper, Status } from "../models/types";
import {v4 as uuidv4} from 'uuid';
import {readFromJsonFile, writeBeeperToJsonFile} from '../DAL/jsonBeepers.js';

// export const createBeeper = async (beeperName: string, created_at: Date, detonated_at: Date, longitude: number, latitude: number): Promise<Beeper> => {
//     const newBeeper = {
//         id: uuidv4(),
//         name: beeperName,
//         status.manufatured = "manufactured",
//         created_at: new Date(),
//         detonated_at: '00:00',
//         longitude: longitude,
//         latitude: latitude,
//     }
//     writeBeeperToJsonFile(newBeeper);
//     return newBeeper;
// }

export const getBeepers = async (): Promise<Beeper[]> => {
    const beepers: Beeper[] = await readFromJsonFile();
    return beepers ?? [];
}

export const getBeeperById = async (beeperId:string): Promise<Beeper> => {
    const beepers: Beeper[] = await readFromJsonFile();
    const beeper = beepers.find(b => b.id === beeperId);
    if(!beeper){
        throw new Error(`Beeper by id ${beeperId} not found.`);
    }
    return beeper;
} 

export const getBeeperByStatus = async (beeperStatus: string): Promise<Beeper> => {
    const beepers: Beeper[] = await readFromJsonFile();
    const beeper = beepers.find(b => b.status === beeperStatus);
    if(!beeper){
        throw new Error(`Beeper by status ${beeperStatus} not found.`);
    }
    return beeper;
}

export const deleteBeeper = async (beeperId: string) => {
    const beepers: Beeper[] = await readFromJsonFile();
    const beeper = beepers.find(b => b.id !== beeperId);
    if(!beeper){
        throw new Error(`Beeper by id ${beeperId} not found.`);
    }
    beepers.filter(b => b.id !== beeperId);
    await writeBeeperToJsonFile(beepers);
}