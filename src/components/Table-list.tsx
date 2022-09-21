import React, {FunctionComponent, useState, useEffect} from 'react'
import formatDate from '../helpers/formate-date';
import formatType from '../helpers/format-type';
import { Stairs } from 'tabler-icons-react';

import '../assets/style.css';
import Survey from '../models/survey';
import SURVEYS from '../data/mock-survey'

type Props = {
    survey?: Survey,
  };

const TableList: FunctionComponent<Props> = () => {

 const [surveys, setSurveys] = useState<Survey[]>([])

useEffect(() => {
    setSurveys(SURVEYS);

}, [])

  return (
    <div>
        <table>
            <thead>
                <tr>
                    <th>Survey Name</th>
                    <th>Created By</th>
                    <th>Responses</th>
                    <th>Launch Date</th>
                    <th>Close Date</th>
                    <th>Status</th>
                    <th> </th>
                </tr>
            </thead>
            <tbody>
                {surveys.map(survey => (
                     <tr key={survey.id}>
                     <td>{survey.surveyName}</td>
                     <td>{survey.createdBy}</td>
                     <td>{survey.response}</td>
                     <td>{formatDate(survey.launchDate)}</td>
                     <td>{formatDate(survey.closedDate)}</td>
                     <td>
                         {survey.types.map(type => (
                             <span key={type} style={{background:`${formatType(type)}`}} className='type-style'> {type} </span> 
                         ))}  
                     </td>
                     <td><Stairs size={20} strokeWidth={1} color={'black'}/></td>
                 </tr>
                ))}
            </tbody>
         </table>
       
    </div>
  )
}

export default TableList