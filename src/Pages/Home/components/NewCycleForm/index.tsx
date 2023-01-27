import {} from 'styled-components'
import {  FormContainner, MinutesAmmountInput, TaskInput } from './styles'
import * as zod from 'zod'
import { useForm, useFormContext } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import {useContext} from 'react'
import { CyclesContext } from '../../../../Context/CyclesContext';


export function NewCycleForm() {
    const {ActiveCycles} = useContext(CyclesContext)
    const {register}  = useFormContext()
    return (
       
            <FormContainner>
                <div>
                    <label htmlFor="task">Vou trabalhar em</label>
                    <TaskInput id="task" type='text' 
                    placeholder="Dê um nome para o seu projeto" 
                    list="task-sugestions"
                    {...register ('task')}
                    disabled={!!ActiveCycles}/>
                    <datalist id="task-sugestions" >
                        <option value="Projeto1"/>
                        <option value="Projeto2"/>
                        <option value="Projeto3"/>
                    </datalist>
                    <label htmlFor="minutesAmmount">durante</label>
                    <MinutesAmmountInput type="number" id="minutesAmmount" placeholder="00" min={0} 
                    max={60} {...register ('MinutesAmmount' , 
                    {valueAsNumber: true})}  disabled={!!ActiveCycles}/>
                    <span>minutos.</span>
                </div>           
                </FormContainner>
                 
    )
}