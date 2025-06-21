import { z } from "zod/v4";

export const weaponTypeEnum = z.enum([
	"rifle",
	"pistol",
	"sniper",
	"shotgun",
	"submachine_gun",
	"machine_gun",
	"knife",
	"gloves",
]);

export const conditionEnum = z.enum([
	"factory_new",
	"minimal_wear",
	"field_tested",
	"well_worn",
	"battle_scarred",
]);

export const rarityEnum = z.enum([
	"consumer_grade",
	"industrial_grade",
	"mil_spec",
	"restricted",
	"classified",
	"covert",
	"contraband",
]);

export const productStatusEnum = z.enum([
	"available",
	"sold",
	"reserved",
	"pending",
	"trade_locked",
]);

export const productSchema = z.object({
	id: z.string(),
	name: z.string(),
	weaponName: z.string(),
	skinName: z.string(),
	weaponType: weaponTypeEnum,
	condition: conditionEnum,
	rarity: rarityEnum,
	price: z.number(),
	floatValue: z.number(),
	isStatTrak: z.boolean(),
	isSouvenir: z.boolean(),
	patternIndex: z.number().nullable(),
	patternName: z.string().nullable(),
	imageUrl: z.url(),
	inspectUrl: z.url().nullable(),
	quantity: z.number().default(1),
	status: productStatusEnum.default("available"),
	tradeLockUntil: z.date().nullable(),
	collection: z.string().nullable(),
	caseOrigin: z.string().nullable(),
	nametag: z.string().nullable(),
	stickers: z.string().nullable(),
	description: z.string().nullable(),
	tags: z.string().nullable(),
	createdAt: z.date(),
	updatedAt: z.date(),
	soldAt: z.date().nullable(),
});

export type Product = z.infer<typeof productSchema>;

export type ProductStatus = z.infer<typeof productStatusEnum>;

export type ProductRarity = z.infer<typeof rarityEnum>;

export type ProductCondition = z.infer<typeof conditionEnum>;

export type ProductWeaponType = z.infer<typeof weaponTypeEnum>;
