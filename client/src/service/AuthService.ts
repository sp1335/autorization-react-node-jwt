import {AxiosResponse} from "axios";
import $api from "../http";
import { AuthResponse } from "../models/response/AuthResponse";
export default class AuthService{
    static async login(email: string, password: string): Promise<AxiosResponse<AuthResponse>>{
        return (await $api.post('/login', {email, password}))
    }
    static async registration(email: string, password: string): Promise<AxiosResponse<AuthResponse>>{
        return (await $api.post('/registration', {email, password}))
    }
    static async logout(): Promise<AxiosResponse<void>>{
        return $api.post('/logout')
    }
}

