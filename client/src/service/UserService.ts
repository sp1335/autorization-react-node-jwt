import {AxiosResponse} from "axios";
import $api from "../http";
import { AuthResponse } from "../models/response/AuthResponse";
import { iUser } from "../models/response/iUser";

export default class UserService{
    static fetchUsers():Promise<AxiosResponse<iUser[]>>{
        return $api.get<iUser[]>('/users')
    }
}

