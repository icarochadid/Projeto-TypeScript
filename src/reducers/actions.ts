import { Cycles } from "./cycle";

export enum ActionTypes{
    Add_New_Cycle = 'Add-New-Cycle',
    Interrupt_Actual_Cycle = 'Interrupt-Actual-Cycle',
    Mark_Cycle_As_Finished = 'Mark-Cycle-As-Finished'
}
export function AddNewCycleAction(newCycle: Cycles){
    return {type: ActionTypes.Add_New_Cycle,
        payload: {
             newCycle
        } 
    }
}
export function MarkCycleAsFinishedAction() {
    return {type: ActionTypes.Mark_Cycle_As_Finished,}
}
export function InterruptActualCycleAction() {
   return { type: ActionTypes.Interrupt_Actual_Cycle,}
}