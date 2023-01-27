import { createContext, ReactNode, useEffect, useReducer, useState } from "react";
import {AddNewCycleAction, InterruptActualCycleAction, MarkCycleAsFinishedAction } from "../reducers/actions";
import{ CycleReducer, Cycles} from '../reducers/cycle'
interface CyclesContextType {
    cycles: Cycles[];  
    ActiveCycles: Cycles | undefined;
    activeCycleId: string | null;
    amountSecondsPassed: number;
    MarkCycleAsFinished: () => void;
    setSecondsPassed: (seconds: number) => void;
    handleNewCycle: (data: CreateCycleData) => void;
    InterruptCourrentCycle: ()=> void
}
interface CreateCycleData{
task: string,
MinutesAmmount: number
}
interface CycleChildrenProps {
    children: ReactNode
}

export const CyclesContext = createContext({} as CyclesContextType)
export function CyclesContextProvider({children}: CycleChildrenProps){

    const [cyclesState, dispatch] = useReducer(CycleReducer,  
        {cycles: [], activeCycleId:null})
    useEffect(()=> {
        const stateJSON = JSON.stringify(cyclesState) 
        localStorage.setItem('@Ignite-timer:Cycles-state-1.0.0', stateJSON)
    }, [cyclesState])
    const [amountSecondsPassed, setAmountSecondsPassed] = useState(0)
    const {cycles, activeCycleId} = cyclesState;
    const ActiveCycles = cycles.find((cycle) => cycle.id == activeCycleId)
    function setSecondsPassed(seconds: number) {
        setAmountSecondsPassed(seconds)
    }
    function MarkCycleAsFinished() {
    dispatch(MarkCycleAsFinishedAction())
  }   
    function handleNewCycle(data:CreateCycleData) {
    const newCycle:Cycles  = {
        id: String(new Date().getTime()),
        task: data.task,
        MinutesAmmount: data.MinutesAmmount,
        startDate: new Date(),
        }
       
    dispatch(AddNewCycleAction(newCycle))
    setAmountSecondsPassed(0);
} 
    function InterruptCourrentCycle() {
    dispatch(InterruptActualCycleAction())
            document.title = 'Ignite Timer'
   }

    return (
        <CyclesContext.Provider 
        value={{cycles, ActiveCycles, 
        activeCycleId, 
        MarkCycleAsFinished, 
        amountSecondsPassed, 
        setSecondsPassed, handleNewCycle, InterruptCourrentCycle}}>
            {children}
        </CyclesContext.Provider>
    )
}