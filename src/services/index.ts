import axios from 'axios';
import {API_ENDPOINT} from '../config/env.dev';

export const API = axios.create({
  baseURL: API_ENDPOINT,
});
