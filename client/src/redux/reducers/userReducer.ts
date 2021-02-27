import * as actions from '../actions/userActions';

const userInit = {}

const dispatch_user = (state: any = userInit, action: any) => {
    let updatedUser;
    switch(action.type) {
        case actions.SET_USER: 
            updatedUser = action.payload.data;
            return { ...updatedUser };
        case actions.RM_USER: 
            return {...userInit}
        default: return {...state};
    }
}

export default dispatch_user;