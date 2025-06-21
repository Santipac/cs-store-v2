import { z } from "zod/v4";
import {
	conditionEnum,
	productStatusEnum,
	rarityEnum,
	weaponTypeEnum,
} from "./schemas";

// Schema for API validation - keeps optional fields with defaults
export const createProductSchema = z.object({
	name: z.string().min(1, "Product name is required"),
	weaponName: z.string().min(1, "Weapon name is required"),
	skinName: z.string().min(1, "Skin name is required"),
	weaponType: z.literal(weaponTypeEnum.options, {
		message: "Select a weapon type",
	}),
	condition: z.literal(conditionEnum.options, {
		message: "Select a condition",
	}),
	rarity: z.literal(rarityEnum.options, {
		message: "Select a rarity",
	}),
	price: z.number().min(0, "Price must be positive"),
	floatValue: z.number().min(0).max(1, "Float value must be between 0 and 1"),
	isStatTrak: z.boolean(),
	isSouvenir: z.boolean(),
	patternIndex: z.number(),
	patternName: z.string(),
	imageUrl: z.string(),
	inspectUrl: z.string(),
	quantity: z.number().min(1, "Quantity must be at least 1"),
	status: z.literal(productStatusEnum.options, {
		message: "Select a status",
	}),
	tradeLockUntil: z.date(),
	collection: z.string(),
	caseOrigin: z.string(),
	nametag: z.string(),
	stickers: z.string(),
	description: z.string(),
	tags: z.string(),
	soldAt: z.date(),
});

export type CreateProductDto = z.infer<typeof createProductSchema>;
