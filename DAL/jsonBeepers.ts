import jsonfile from 'jsonfile';
import { Beeper } from '../models/types';

const DB_FILE_PATH = process.env.DB_FILE_PATH || './data/db.json';

export const writeBeeperToJsonFile = async (beepers: Beeper[]) => {
    try{
        return await jsonfile.writeFile(DB_FILE_PATH, beepers);
    }
    catch(error){
        console.error(error);
    }
}

export const readFromJsonFile = async () => {
    try{
         return await jsonfile.readFile(DB_FILE_PATH);
    }
    catch(error){
        console.error(error);
        return [];
    }
}