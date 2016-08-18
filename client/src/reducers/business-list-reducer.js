import {
    BUSINESS_LIST_PENDING,
    BUSINESS_LIST_REJECTED,
    BUSINESS_LIST_FULFILLED,
} from '../constants/business-list-constants';

const initialState = {
    fetching: false,
    fetched: false,
    page: 1,
    data: null,
    dataSize: null,
    error: null,
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case BUSINESS_LIST_PENDING:
            return { ...state, fetching: true };
        case BUSINESS_LIST_REJECTED:
            return { ...state, fetching: false, error: action.payload };
        case BUSINESS_LIST_FULFILLED: {
            const data = action.payload.data;
            const businesses = data[0];
            const count = data[1];
            return { ...state, fetching: false, fetched: true, data: businesses, dataSize: count[0].RecordCount };
        }
        default:
            return state;
    }
};
export default reducer;
