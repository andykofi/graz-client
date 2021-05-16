import { GET_ACCOUNTS,GET_ACCOUNT ,DELETE_ACCOUNT} from "../actions/types";

const initialState = {
    accounts: [],
    account: {}
};

export default function(state = initialState, action) {
    switch (action.type) {
        case GET_ACCOUNTS:
            return {
                ...state,
                accounts: action.payload
            };
        case GET_ACCOUNT:
            return {
                ...state,
                account: action.payload
            };
        case DELETE_ACCOUNT:
            return {
                ...state,
                accounts: state.accounts.filter(
                    account => account.accountIdentifier !== action.payload
                )
            };
        default:
            return state;
    }
}