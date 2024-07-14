import axios from 'axios';
import { registerType } from '../components/Home/modalRegister/ModalRegister';

const api = axios.create({
    baseURL: import.meta.env.VITE_APP_BASE_URL_API,
    headers: {
        Authorization: 'Basic ' + import.meta.env.VITE_APP_TOKEN_REST
    },
    validateStatus(_status) {
        return true
    }
});

export const useApi = () => ({
    
    register: async (props: registerType) => {
        const response = await api.post('/adduser', props);
        return response.data;        
    },
    validateMail: async (props: number) => {
        const response = await api.post('/validatemail', {userId:props});
        return response.data;
    }
})