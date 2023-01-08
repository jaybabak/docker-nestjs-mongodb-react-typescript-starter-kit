import HttpClient from "../../../lib/HttpClient/HttpClient";
import { UserInterface } from "../../../interfaces/UserInterface";

/**
 * The abstract class to extend from for each of the various service classes that require Api Client.
 */
export default class ApiClient extends HttpClient {

  public static instance?: ApiClient;

  constructor(baseUrl = process.env.REACT_APP_BASE_URL) {
    super(baseUrl);
  }

  public async getHomepage(): Promise<UserInterface | any> {
    try {
      const response = await this.get('/');
      return response.data;
    } catch (error) {
      throw error;
    }
  }

}