import axios from "axios";

export interface IDolar{
    code: string;
    codein: string;
    name: string;
    low: string;
}


export const api = axios.get("https://economia.awesomeapi.com.br/all/USD-BRL")