import { makeAutoObservable } from "mobx";
import { iUser } from "../models/response/iUser";
import AuthService from "../service/AuthService";

export default class Store{
    user = {} as iUser
    isAuth = false
    constructor() {
        makeAutoObservable(this)        
    }
    setAuth(bool: boolean){
        this.isAuth= bool
    }
    setUser(user: iUser){
        this.user= user
    }
    async login(email: string, password: string){
        try {
            const response = await AuthService.login(email,password)
            console.log(response)
            localStorage.setItem('token', response.data.accessToken)
            this.setAuth(true)
            this.setUser(response.data.user)
        } catch (err) {
            if(err instanceof Error){
                console.log(err)
            }else{
                console.log('Unexpected error',)
            }
        }
    }
    async registration(email: string, password: string){
        try {
            const response = await AuthService.registration(email,password)
            console.log(response)
            localStorage.setItem('token', response.data.accessToken)
            this.setAuth(true)
            this.setUser(response.data.user)
        } catch (err) {
            if(err instanceof Error){
                console.log(err)
            }else{
                console.log('Unexpected error',)
            }
        }
    }
    async logout(){
        try {
            const response = await AuthService.logout()
            console.log(response)
            localStorage.removeItem('token')
            this.setAuth(false)
            this.setUser({} as iUser)
        } catch (err) {
            if(err instanceof Error){
                console.log(err)
            }else{
                console.log('Unexpected error',)
            }
        }
    }
    
}