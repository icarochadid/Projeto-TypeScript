import { HandPalm, Play } from "phosphor-react";
import { createContext, useContext, useEffect, useState } from "react";
import {useForm, FormProvider } from 'react-hook-form'
import {zodResolver} from '@hookform/resolvers/zod'
import {differenceInSeconds} from 'date-fns'
import * as zod from 'zod'
import {HomeContainner, StartCountDownButton, 
        StopCountDownButton} from "./home-styles";
import { TypeOf } from "zod";
import { NewCycleForm } from "./components/NewCycleForm";
import { CountDown } from "./components/CountDown";
import { CyclesContext } from "../../Context/CyclesContext";


export function Home(){
    const {handleNewCycle, InterruptCourrentCycle, ActiveCycles} =useContext(CyclesContext)
    const newCycleFormValidationSchema = zod.object({
        task: zod.string().min(1, 'Por favor, digite o nome do seu projeto'),
        MinutesAmmount: zod.number()
        .min(1, 'O tempo deve ser igual ou superior a 5 minutos')
        .max(60, 'O tempo deve ser igual ou inferior a 60 minutos')
    });
        type NewCycleFormData = zod.infer<typeof newCycleFormValidationSchema>
    const CycleForm = useForm<NewCycleFormData>({
        resolver: zodResolver(newCycleFormValidationSchema),
        defaultValues: {
            task: '',
            MinutesAmmount: 0, 
        }
    });

    const { handleSubmit, watch, reset} = CycleForm

   
    
    const task = watch('task')
    const isTaskDisabled = !task;
    
    function createNewCycle(data: NewCycleFormData) {
        handleNewCycle(data)
        reset()
    }
   
    return (
        <HomeContainner>
         <form action="" onSubmit={handleSubmit(createNewCycle)} >
        
       <FormProvider {...CycleForm}>
        <NewCycleForm/>
        </FormProvider>
        <CountDown/>
        
           {ActiveCycles ? (
             <StopCountDownButton type="button" onClick={InterruptCourrentCycle}>
             <HandPalm size={25} />
             Interromper
         </StopCountDownButton> 
           ) :( <StartCountDownButton type="submit" disabled={isTaskDisabled}>
           <Play size={25} />
           Começar
       </StartCountDownButton> )}
    </form>   
        </HomeContainner>
    )
}