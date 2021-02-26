import axios, { AxiosResponse, AxiosError } from 'axios';
import { IMongoUser } from '../../types/User';

// actions
export const SET_USER: string = 'set-user';
export const RM_USER: string = 'remove-user';
export const GET_USER: string = 'get-user';

export const fetchUser = () => {
    return async (dispatch: any) => {
        try {
            const res: AxiosResponse<any> = await axios.get('/getuser');
            dispatch({
                type: SET_USER,
                payload: {
                    data: res.data
                }
            });
        }
        catch(err: any) {
            console.error(err)
        }
    }
}