import axios from 'axios';
import { AsyncStorage } from 'react-native'
let url = ` http://pasarqita.muhammadrisano.online`

export const getStore = () => {
    return {
        type: 'GET_STORE',
        payload: axios.get(`${url}/store`,
            {
                headers: {
                    "authorization": "semangat-team-faraday"
                }
            })
    }
}

export const getStoreId = (id_store) => {
    return {
        type: 'GET_STOREID', id_store,
        payload: axios.get(`${url}/store/${id_store}`,
            {
                headers: {
                    "authorization": "semangat-team-faraday"
                }
            })
    }
}

export const postStore = () => {
    return {
        type: 'POST_STORE',
        payload: axios.post(`${url}/store`,
            {
                headers: {
                    "authorization": "semangat-team-faraday"
                }
            })
    }
}

export const editStore = (data, id_store) => {
    return {
        type: 'PATCH_STORE', id_store,
        payload: axios.patch(`${url}/store/${id_store}`,
            {
                headers: {
                    "authorization": "semangat-team-faraday"
                }
            })
    }
}

export const deleteStore = (id_store) => {
    return {
        type: 'PATCH_STORE', id_store,
        payload: axios.delete(`${url}/store/${id_store}`,
            {
                headers: {
                    "authorization": "semangat-team-faraday"
                }
            })
    }
}
