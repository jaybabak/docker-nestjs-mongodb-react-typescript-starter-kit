import LocalStorageService from "../../../lib/LocalStorageService/LocalStorageService";

enum Locals {
  ACCESS_TOKEN = 'access_token',
  REFRESH_TOKEN = 'refresh_token'
}
/**
 * The TokenStorageService which is used for setting and getting access tokens.
 */
export class TokenStorage extends LocalStorageService<Locals> {

  private static instance?: TokenStorage;

  private constructor() {
    super();
  }

  public static getInstance(): TokenStorage {
    if (!this.instance) {
      this.instance = new TokenStorage();
    }

    return this.instance;
  }

  public getAccessToken() {
    return this.get(Locals.ACCESS_TOKEN);
  }
  
  public setAccessToken(accessToken: string): void {
    this.set(Locals.ACCESS_TOKEN, accessToken);
  }

  public getRefreshToken(): string | null {
    return this.get(Locals.REFRESH_TOKEN);
  }
  
  public setRefreshToken(refreshToken: string): void {
    this.set(Locals.REFRESH_TOKEN, refreshToken);
  }

  public clear(): void {
    this.clearItems([Locals.ACCESS_TOKEN, Locals.REFRESH_TOKEN]);
  }

}