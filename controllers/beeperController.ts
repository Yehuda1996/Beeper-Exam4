import { Request, Response } from "express";
import { Beeper, Status } from "../models/types.js";
import { getBeepers, getBeeperById, getBeeperByStatus, deleteBeeper } from '../services/beeperService.js';

export const getALLBeepers = async (req: Request, res: Response) => {
    try{
        const beepers = await getBeepers();
        res.status(200).json(beepers);
    }
    catch(error){
        res.status(404).json({message: error});
    }
}

export const getBeeperWithId = async (req: Request, res: Response) => {
    try{
        const beeperId = req.params.id;
        if(!beeperId){
            res.status(404).json({error: "Id is required"});
        }
        const beeper = await getBeeperById(beeperId);
        res.status(200).json({BeeperId: beeper});
    }
    catch(error){
        res.status(500).json({message: error});
    }
}

export const getBeeperWithStatus = async (req: Request, res: Response) => {
    try{
        const beeperStatus = req.params.status;
        if(!beeperStatus){
            res.status(404).json({error: "Status is required"});
        }
        const beeper = await getBeeperByStatus(beeperStatus);
        res.status(200).json({BeeperStatus: beeper});
    }
    catch(error){
        res.status(500).json({message: error});
    }
}

export const deleteBeeperById = async (req: Request, res: Response) => {
    try{
        const beeperId = req.params.id;
        if(!beeperId){
            res.status(404).json({error: "Id is required"});
        }
        const beeper = await deleteBeeper(beeperId);
        res.status(200).json({"The beeper has been deleted": beeper} );
    }
    catch(error){
        res.status(500).json({message: error});
    }
}