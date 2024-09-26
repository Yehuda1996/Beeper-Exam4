import { Beeper, Status } from "../models/types.js";
import {v4 as uuidv4} from 'uuid';
import {readFromJsonFile, writeBeeperToJsonFile} from '../DAL/jsonBeepers.js';

export const createBeeper = async (beeperName: string): Promise<Beeper> => {
    const beepers: Beeper[] = await readFromJsonFile();
    const newBeeper: Beeper = {
        id: uuidv4(),
        name: beeperName,
        status: Status.manufatured,
        created_at: new Date(),
        detonated_at: null,
        latitude: 0,
        longitude: 0,
    }
    beepers.push(newBeeper)
    await writeBeeperToJsonFile(beepers);
    return newBeeper;
}

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

export const getBeeperByStatus = async (beeperStatus: Status): Promise<Beeper> => {
    const beepers: Beeper[] = await readFromJsonFile();
    const beeper = beepers.find(b => b.status === beeperStatus);
    if(!beeper){
        throw new Error(`Beeper by status ${beeperStatus} not found.`);
    }
    return beeper;
}

export const deleteBeeper = async (beeperId: string) => {
    const beepers: Beeper[] = await readFromJsonFile();
    const beeper = beepers.find(b => b.id === beeperId);
    if(!beeper){
        throw new Error(`Beeper by id ${beeperId} not found.`);
    }
    const deletedBeeper = beepers.filter(b => b.id !== beeperId);
    await writeBeeperToJsonFile(deletedBeeper);
}

export const updateBeeperStatus = async (beeperId: string) => {
    const beepers: Beeper[] = await readFromJsonFile();
    const beeper = beepers.find(b => b.id === beeperId);
    if(!beeper){
        throw new Error(`Beeper by id ${beeperId} not found.`);
    }
    
}