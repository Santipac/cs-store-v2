import { z } from "zod/v4";
export declare const weaponTypeEnum: z.ZodEnum<{
	rifle: "rifle";
	pistol: "pistol";
	sniper: "sniper";
	shotgun: "shotgun";
	submachine_gun: "submachine_gun";
	machine_gun: "machine_gun";
	knife: "knife";
	gloves: "gloves";
}>;
export declare const conditionEnum: z.ZodEnum<{
	factory_new: "factory_new";
	minimal_wear: "minimal_wear";
	field_tested: "field_tested";
	well_worn: "well_worn";
	battle_scarred: "battle_scarred";
}>;
export declare const rarityEnum: z.ZodEnum<{
	consumer_grade: "consumer_grade";
	industrial_grade: "industrial_grade";
	mil_spec: "mil_spec";
	restricted: "restricted";
	classified: "classified";
	covert: "covert";
	contraband: "contraband";
}>;
export declare const productStatusEnum: z.ZodEnum<{
	available: "available";
	sold: "sold";
	reserved: "reserved";
	pending: "pending";
	trade_locked: "trade_locked";
}>;
export declare const productSchema: z.ZodObject<
	{
		id: z.ZodString;
		name: z.ZodString;
		weaponName: z.ZodString;
		skinName: z.ZodString;
		weaponType: z.ZodEnum<{
			rifle: "rifle";
			pistol: "pistol";
			sniper: "sniper";
			shotgun: "shotgun";
			submachine_gun: "submachine_gun";
			machine_gun: "machine_gun";
			knife: "knife";
			gloves: "gloves";
		}>;
		condition: z.ZodEnum<{
			factory_new: "factory_new";
			minimal_wear: "minimal_wear";
			field_tested: "field_tested";
			well_worn: "well_worn";
			battle_scarred: "battle_scarred";
		}>;
		rarity: z.ZodEnum<{
			consumer_grade: "consumer_grade";
			industrial_grade: "industrial_grade";
			mil_spec: "mil_spec";
			restricted: "restricted";
			classified: "classified";
			covert: "covert";
			contraband: "contraband";
		}>;
		price: z.ZodNumber;
		floatValue: z.ZodNumber;
		isStatTrak: z.ZodBoolean;
		isSouvenir: z.ZodBoolean;
		patternIndex: z.ZodNullable<z.ZodNumber>;
		patternName: z.ZodNullable<z.ZodString>;
		imageUrl: z.ZodURL;
		inspectUrl: z.ZodURL;
		quantity: z.ZodDefault<z.ZodNumber>;
		status: z.ZodDefault<
			z.ZodEnum<{
				available: "available";
				sold: "sold";
				reserved: "reserved";
				pending: "pending";
				trade_locked: "trade_locked";
			}>
		>;
		tradeLockUntil: z.ZodDate;
		collection: z.ZodString;
		caseOrigin: z.ZodString;
		nametag: z.ZodString;
		stickers: z.ZodString;
		description: z.ZodString;
		tags: z.ZodString;
		createdAt: z.ZodDate;
		updatedAt: z.ZodDate;
		soldAt: z.ZodDate;
	},
	z.core.$strip
>;
export declare const productCategorySchema: z.ZodObject<
	{
		id: z.ZodString;
		name: z.ZodString;
		slug: z.ZodString;
		description: z.ZodString;
		imageUrl: z.ZodURL;
		createdAt: z.ZodDate;
		updatedAt: z.ZodDate;
	},
	z.core.$strip
>;
export type Product = z.infer<typeof productSchema>;
export type ProductCategory = z.infer<typeof productCategorySchema>;
export type ProductStatus = z.infer<typeof productStatusEnum>;
export type ProductRarity = z.infer<typeof rarityEnum>;
export type ProductCondition = z.infer<typeof conditionEnum>;
export type ProductWeaponType = z.infer<typeof weaponTypeEnum>;
//# sourceMappingURL=schemas.d.ts.map
