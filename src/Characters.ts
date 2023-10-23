import { Beta } from "./Utils";
import { CreateCharacter } from "./Types";

export class Characters {
	constructor() {
		this.get_character = this.get_character.bind(this);
		this.create_character = this.create_character.bind(this);
	}
	/**
	 * Parses an object and returns a new object with only the non-null values.
	 * @param obj - The object to parse.
	 * @returns A new object with only the non-null values.
	 */
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	parse_data(obj: { [key: string]: any }): { [key: string]: any } {
		// eslint-disable-next-line @typescript-eslint/no-explicit-any
		const data: { [key: string]: any } = {};
		for (const [key, value] of Object.entries(obj)) {
			if (value !== null) {
				data[key] = value;
			}
		}
		return data;
	}
	/**
	 * Retrieves character information from the server.
	 * @param id - The external ID of the character to retrieve.
	 * @returns An object containing the character information, or an error object if the request fails.
	 */
	async get_character(id: string): Promise<object> {
		const { data } = await Beta.request({
			method: "POST",
			url: "/chat/character/info/",
			data: {
				external_id: id,
			},
		});
		const { status, character } = data;
		if (status !== "OK") {
			return { error: true, message: "failed to get character info" };
		}
		return {
			...character,
		};
	}
	/**
	 * Creates a new character with the given options.
	 * @param opts The options for creating the character.
	 * @returns A Promise that resolves with the created character, or an error object if the creation failed.
	 */
	async create_character(opts: CreateCharacter): Promise<unknown> {
		const options = {
			...opts,
		};
		const { data } = await Beta.request({
			method: "POST",
			url: "/chat/character/create/",
			data: { ...options },
		});
		const { status, character } = data;
		if (status !== "OK") {
			return { error: true, message: "failed to create character" };
		}
		return {
			...character,
		};
	}
}
