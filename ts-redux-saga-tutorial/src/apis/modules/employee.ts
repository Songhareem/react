import fetch from 'node-fetch';

export interface IEmployee {
  id: string
  employee_name: string
  employee_salary: string
  employee_age: string
  profile_image: string
}

export interface IRequest {}
export interface IResponse {
  status: string;
  data: IEmployee[];
}
export interface IError {
    message: string;
}

export const fetchActivities = (): Promise<IResponse> => {
    return fetch('http://dummy.restapiexample.com/api/v1/employees')
        .then(res => {
            if(!res.ok) {
                throw new Error(res.statusText)
            }
            return res.json() as Promise<IResponse>
        })
}

export default {
    fetchActivities
}