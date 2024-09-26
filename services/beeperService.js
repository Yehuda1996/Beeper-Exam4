var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { Status } from "../models/types.js";
import { v4 as uuidv4 } from 'uuid';
import { readFromJsonFile, writeBeeperToJsonFile } from '../DAL/jsonBeepers.js';
export const createBeeper = (beeperName) => __awaiter(void 0, void 0, void 0, function* () {
    const beepers = yield readFromJsonFile();
    const newBeeper = {
        id: uuidv4(),
        name: beeperName,
        status: Status.manufatured,
        created_at: new Date(),
        detonated_at: null,
        latitude: 0,
        longitude: 0,
    };
    beepers.push(newBeeper);
    yield writeBeeperToJsonFile(beepers);
    return newBeeper;
});
export const getBeepers = () => __awaiter(void 0, void 0, void 0, function* () {
    const beepers = yield readFromJsonFile();
    return beepers !== null && beepers !== void 0 ? beepers : [];
});
export const getBeeperById = (beeperId) => __awaiter(void 0, void 0, void 0, function* () {
    const beepers = yield readFromJsonFile();
    const beeper = beepers.find(b => b.id === beeperId);
    if (!beeper) {
        throw new Error(`Beeper by id ${beeperId} not found.`);
    }
    return beeper;
});
export const getBeeperByStatus = (beeperStatus) => __awaiter(void 0, void 0, void 0, function* () {
    const beepers = yield readFromJsonFile();
    const beeper = beepers.find(b => b.status === beeperStatus);
    if (!beeper) {
        throw new Error(`Beeper by status ${beeperStatus} not found.`);
    }
    return beeper;
});
export const deleteBeeper = (beeperId) => __awaiter(void 0, void 0, void 0, function* () {
    const beepers = yield readFromJsonFile();
    const beeper = beepers.find(b => b.id === beeperId);
    if (!beeper) {
        throw new Error(`Beeper by id ${beeperId} not found.`);
    }
    const deletedBeeper = beepers.filter(b => b.id !== beeperId);
    yield writeBeeperToJsonFile(deletedBeeper);
});
