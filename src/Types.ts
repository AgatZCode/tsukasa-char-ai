export type Role = "system" | "user";
/**
 * Represents the data needed to create a character.
 */
export type CreateCharacter = {
	title: string;
	name: string;
	identifier: string;
	categories: string[];
	visibility: string;
	copyable: boolean;
	description: string;
	greeting: string;
	definition: string;
	avatar_rel_path: string;
	img_gen_enabled: boolean;
	base_img_prompt: string;
	strip_img_prompt_from_msg: boolean;
	voice_id: string;
};
