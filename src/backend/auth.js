import { Account, Client } from "appwrite";
import envConfig from "./config";

class AuthService {
  client = new Client();
  account;
  constructor() {
    this.client
      .setEndpoint(envConfig.appwriteUrl)
      .setProject(envConfig.appwriteProjectId);
    this.account = new Account(this.client);
  }

  //Login Methods Backend
  async authLoginSession({ email, password }) {
    try {
      const session = await this.account.createEmailPasswordSession(
        email,
        password
      );
      return session;
    } catch (error) {
      console.log(error);
    }
  }

  //GET CURRENT USER INFO
  async getCurrentUserInfo() {
    try {
      const currentUser = await this.account.get();
      return currentUser;
    } catch (error) {
      console.log(error);
    }
  }
}

const authServiceAppwriteBackend = new AuthService();
export default authServiceAppwriteBackend;
