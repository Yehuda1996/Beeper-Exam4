var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { getBeepers, getBeeperById, getBeeperByStatus, deleteBeeper, createBeeper, updateBeeperStatus } from '../services/beeperService.js';
export const getALLBeepers = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const beepers = yield getBeepers();
        res.status(200).json(beepers);
    }
    catch (error) {
        res.status(404).json({ message: error });
    }
});
export const getBeeperWithId = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const beeperId = req.params.id;
        if (!beeperId) {
            res.status(404).json({ error: "Id is required" });
        }
        const beeper = yield getBeeperById(beeperId);
        res.status(200).json({ BeeperId: beeper });
    }
    catch (error) {
        res.status(500).json({ message: error });
    }
});
export const getBeeperWithStatus = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const beeperStatus = req.params.status;
        if (!beeperStatus) {
            res.status(404).json({ error: "Status is required" });
        }
        const beeper = yield getBeeperByStatus(beeperStatus);
        res.status(200).json({ BeeperStatus: beeper });
    }
    catch (error) {
        res.status(500).json({ message: error });
    }
});
export const deleteBeeperById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const beeperId = req.params.id;
        if (!beeperId) {
            res.status(404).json({ error: "Id is required" });
        }
        const beeper = yield deleteBeeper(beeperId);
        res.status(200).json({ "The beeper has been deleted": beeper });
    }
    catch (error) {
        res.status(500).json({ message: error });
    }
});
export const creatingBeeper = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { name } = req.body;
        if (!name) {
            res.status(400).json({ error: "Name is required" });
        }
        const newBeeper = yield createBeeper(name);
        res.status(201).json({ NewBeeper: newBeeper });
    }
    catch (error) {
        res.status(500).json({ message: error });
    }
});
export const updateBeeper = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const beeperId = req.params.id;
        const { lat, lon } = req.body;
        if (!beeperId) {
            res.status(404).json({ error: "Id is required" });
        }
        const beeper = yield getBeeperById(beeperId);
        const updatedBeeper = yield updateBeeperStatus(beeperId, lat, lon);
        res.status(200).json({ UpdatedBeeper: updatedBeeper });
    }
    catch (error) {
        res.status(500).json({ message: error });
    }
});
