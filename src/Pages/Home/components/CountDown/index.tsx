import { differenceInSeconds, setSeconds } from 'date-fns'
import { useContext, useState, useEffect } from 'react'
import {} from 'styled-components'
import { CyclesContext } from '../../../../Context/CyclesContext'
import { CountDownContainner, Separator } from './styles'


export function CountDown(){
const {ActiveCycles, 
    activeCycleId, 
    MarkCycleAsFinished, 
    amountSecondsPassed,
    setSecondsPassed} = useContext(CyclesContext)
const totalSeconds = ActiveCycles ? ActiveCycles.MinutesAmmount * 60 : 0
const currentSeconds = ActiveCycles ? totalSeconds - amountSecondsPassed : 0
const minutesAmount = Math.floor( currentSeconds / 60)
const secondsAmount = Math.floor( currentSeconds % 60)
const Minutes = String(minutesAmount).padStart(2, '0')
const seconds = String(secondsAmount).padStart(2,'0')
useEffect(() => {
    let interval:number; 
    if(ActiveCycles) {
       interval = setInterval(()=> {
        const SecondsDifference = differenceInSeconds(new Date(), ActiveCycles.startDate)

        if(SecondsDifference >= totalSeconds) {
            MarkCycleAsFinished();
            setSecondsPassed(totalSeconds)
            clearInterval(interval) 
        } else {
            setSecondsPassed(SecondsDifference) }
        }, 1000) 
    } 
    return () => {
        if(ActiveCycles) {
        clearInterval(interval)}
    }
}, [ActiveCycles, totalSeconds, activeCycleId, MarkCycleAsFinished, setSecondsPassed])
useEffect(()=>{
    if(ActiveCycles){
    document.title = `${Minutes}:${seconds}`}
}, [ActiveCycles, Minutes, seconds])


return(
    <CountDownContainner>
    <span>{Minutes[0]}</span>
    <span>{Minutes[1]}</span>
    <Separator>:</Separator>
    <span>{seconds[0]}</span>
    <span>{seconds[1]}</span>
</CountDownContainner>
)
}