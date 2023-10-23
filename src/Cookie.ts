import { Beta } from "./Utils";

export class Cookie {
	/**
	 * Retrieves a cookie from the specified URL.
	 * @param url - The URL to retrieve the cookie from.
	 * @returns A Promise that resolves with the retrieved cookie, or null if no cookie was found.
	 */
	async get_cookie(url: string): Promise<string | null> {
		const { headers } = await Beta.get(url);
		const first_cookie = headers?.["set-cookie"]?.[0];
		const second_cookie = headers?.["set-cookie"]?.[1];
		const cookie =
			second_cookie?.split(";")[0] + "; " + first_cookie?.split(";")[0];
		return cookie || null;
	}
}
