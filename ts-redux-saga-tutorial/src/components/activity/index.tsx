import React from 'react';
import { IActivity } from '../../apis/modules/activity';

interface IProps extends IActivity{}

const Activity: React.FC<IProps> = ({ ID, Title, DueDate, Completed }) => {
    return <div>
        <span>{ID}</span>
        <span>{Title}</span>
        <span>{DueDate}</span>
        <span>{Completed}</span>
    </div>
}

export default Activity;