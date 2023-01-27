import { ActionTypes } from "./actions";
import { produce }  from 'immer'
export interface Cycles {
    id: string,
    task:string, 
    MinutesAmmount:number, 
    startDate: Date,
    InterruptedDate?: Date
    finishedDate?: Date
}
interface CyclesState {
    cycles:Cycles[],
    activeCycleId: string | null, 

}

export function CycleReducer (state: CyclesState, action: any) {
        switch (action.type) {
            case ActionTypes.Add_New_Cycle: { 
              
                return produce(state, (draft) => {
                    draft.cycles.push(action.payload.newCycle)
                    draft.activeCycleId = action.payload.newCycle.id
                }) }
                
                
            case ActionTypes.Interrupt_Actual_Cycle: {
            
                const courrentCycleIndex = state.cycles.findIndex(cycle => {
                    return cycle.id == state.activeCycleId})
                if(courrentCycleIndex < 0) {
                    return state;
                }
                return produce(state, (draft) => {
                    draft.activeCycleId = null;
                    draft.cycles[courrentCycleIndex].InterruptedDate = new Date()
                })
            }
            case ActionTypes.Mark_Cycle_As_Finished: {
                const courrentCycleIndex = state.cycles.findIndex(cycle => {
                    return cycle.id == state.activeCycleId})
                if(courrentCycleIndex < 0) {
                    return state;
                }
                return produce(state, (draft) => {
                    draft.activeCycleId = null;
                    draft.cycles[courrentCycleIndex].finishedDate = new Date()
                }) } 
            default:
                return state
                
        
   
} }
    
