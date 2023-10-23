import { Plus, Beta } from "./Utils";

export class Auth {
	/**
	 * Authenticates the user with Auth0 using the provided access token and optional ID token.
	 * @param access_token The access token to use for authentication.
	 * @param id_token The optional ID token to use for authentication.
	 * @returns A Promise that resolves to the authentication key if successful, or null if unsuccessful.
	 */
	async auth0(access_token: string, id_token?: string): Promise<string | null> {
		const response = await Plus.post("/dj-rest-auth/auth0/", {
			access_token,
			id_token,
		});
		const key = response?.data?.key;
		return key || null;
	}
	/**
	 * Returns a Promise that resolves to a string or null.
	 * Makes a POST request to "/dj-rest-auth/lazy/" with the given UUID.
	 * If the request is successful, returns the "key" property of the response data.
	 * Otherwise, returns null.
	 * @param uuid The UUID to be sent in the request body.
	 * @returns A Promise that resolves to a string or null.
	 */
	async lazy(uuid: string): Promise<string | null> {
		const response = await Beta.post("/chat/auth/lazy/", {
			lazy_uuid: uuid,
		});
		const key = response?.data?.key;
		return key || null;
	}
}
