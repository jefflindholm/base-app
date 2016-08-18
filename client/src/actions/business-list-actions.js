import axios from 'axios';
import { BUSINESS_LIST } from '../constants/business-list-constants';
import { BASE_URL } from '../constants/common';

export function getBusinesses(pageNo) {
    return {
        type: BUSINESS_LIST,
        payload: axios.get(`${BASE_URL}/businesses?page=${pageNo}`),
    };
}
