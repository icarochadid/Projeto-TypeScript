import { useContext } from "react";
import { CyclesContext } from "../../Context/CyclesContext";
import { HistoryContainner, HistoryList, Status } from "./history-styles";
import {formatDistanceToNow} from 'date-fns';
import ptBR from "date-fns/esm/locale/pt-BR/index.js";  

export function History() {
    const{ cycles } = useContext(CyclesContext)
    return ( 
        <HistoryContainner>
            <h1>Meu Histórico</h1>
            
            <HistoryList>
                <table>
                    <thead>
                        <tr>
                            <th>Tarefa</th>
                            <th>Duração</th>
                            <th>Início</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody>
                  {cycles.map(cycle=>{
                        return( 
                            <tr key={cycle.id} >
                            <td>{cycle.task}</td>
                            <td>{cycle.MinutesAmmount} Minutos</td>
                            <td>{formatDistanceToNow(cycle.startDate, {
                                locale:ptBR,
                                addSuffix: true, 
                            })}</td>
                            <td>{cycle.finishedDate && (<Status  statusColor="green" >Concluído</Status>)}
                                {cycle.InterruptedDate && (<Status  statusColor="red" >Interrompido</Status>)}
                                {(!cycle.finishedDate && !cycle.InterruptedDate) &&
                                (<Status  statusColor="yellow" >Em andamento</Status>)}
                            </td>
                        </tr>
                        )
                    })}
                    </tbody>
                   
                </table>
            </HistoryList>
        </HistoryContainner>
    )
}