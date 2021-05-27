import fetch from 'node-fetch';

export interface IActivity {
    ID: number;
    Title: string;
    DueDate: string;
    Completed: boolean;
}

export interface IRequest {}
export interface IError {
    message: string;
}

export const fetchActivities = (): Promise<IActivity[]> => {
    return fetch('http://fakerestapi.azurewebsites.net/api/Activities')
        .then(res => {
            if(!res.ok) {
                throw new Error(res.statusText)
            }
            return res.json() as Promise<IActivity[]>
        })
}

export default {
    fetchActivities
}