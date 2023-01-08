import ApiClient from "../ApiClient";
import { AxiosRequestConfig } from "axios";
import { LoginFormInterface } from "../../../../interfaces/LoginFormInterface";
import { RegisterFormInterface } from "../../../../interfaces/RegisterFormInterface";
import { UserInterface } from "../../../../interfaces/UserInterface";

/**
 * The Authorization service which can be used to authenticate, register and grab user info.
 */
export class AuthClient extends ApiClient {
  public static instance?: AuthClient;

  constructor(baseUrl = process.env.REACT_APP_BASE_URL) {
    super(baseUrl);
  }

  public static getInstance(baseUrl = process.env.REACT_APP_BASE_URL): AuthClient {
    if (!this.instance) {
      this.instance = new AuthClient(baseUrl);
    }

    return this.instance;
  }

  public async getUser(): Promise<UserInterface | any> {
    try {
      const response = await this.get('/profile');
      return response.data;
    } catch (error) {
      throw error;
    }
  }

  public async authenticateUser(user: LoginFormInterface): Promise<UserInterface | any> {
    const options:AxiosRequestConfig = {
      data: {
        email: user.email,
        password: user.password,
      },
    };

    try {
      const response = await this.post('/auth/login', options);
      return response.data;
    } catch (error) {
      throw error;
    }
  }

  public async registerUser(form: RegisterFormInterface): Promise<UserInterface | any> {
    const options:AxiosRequestConfig = {
      data: {
        firstName: form.firstName,
        lastName: form.lastName,
        email: form.email,
        password: form.password,
      },
    };

    try {
      const response = await this.post('/register', options);
      return response.data;
    } catch (error) {
      throw error;
    }
  }

}