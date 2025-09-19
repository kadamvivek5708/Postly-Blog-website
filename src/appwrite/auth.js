//This id a Production Grade Code with Future Proof

import conf from '../conf/conf';
import {Client , Account , ID} from 'appwrite';

export class AuthService{
    client = new Client();
    account;

    constructor(){
        this.client
            .setEndpoint(conf.appwriteUrl)
            .setProject(conf.appwriteProjectId);
            this.account = new Account(this.client);
    }

    async createAccount({email, password, name}){
        try {
            const userAccount = await this.account.create(ID.unique(), email,password,name);
            if (userAccount) {
                //call another method
                return this.login({email,password})
            } else {
                return userAccount;
            }
        } catch (error) {
            throw error;
        }
    }

    async login({email, password}){
        try {
            const userLogin = await this.account.createEmailSession(email, password);
            return userLogin;
        } catch (error) {
            throw error;
        }
    }

    async getCurrentUser(){
        try {
            const status = await this.account.get();
            return status;
        } catch (error) {
            console.log( error );
            return null;
        }
    }

    async logout(){
        try {
            await this.account.deleteSessions()
        } catch (error) {
            throw error;
        }
    }
}

const authService = new AuthService();

export default authService;
