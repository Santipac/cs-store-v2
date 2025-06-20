import {
	boolean,
	integer,
	pgEnum,
	pgTable,
	real,
	text,
	timestamp,
} from "drizzle-orm/pg-core";

export const weaponTypeEnum = pgEnum("weapon_type", [
	"rifle",
	"pistol",
	"sniper",
	"shotgun",
	"submachine_gun",
	"machine_gun",
	"knife",
	"gloves",
]);

export const conditionEnum = pgEnum("condition", [
	"factory_new",
	"minimal_wear",
	"field_tested",
	"well_worn",
	"battle_scarred",
]);

export const rarityEnum = pgEnum("rarity", [
	"consumer_grade",
	"industrial_grade",
	"mil_spec",
	"restricted",
	"classified",
	"covert",
	"contraband",
]);

export const productStatusEnum = pgEnum("product_status", [
	"available",
	"sold",
	"reserved",
	"pending",
	"trade_locked",
]);

export const product = pgTable("product", {
	id: text("id").primaryKey(),
	name: text("name").notNull(), // e.g., "AK-47 | Redline"
	weaponName: text("weapon_name").notNull(), // e.g., "AK-47"
	skinName: text("skin_name").notNull(), // e.g., "Redline"
	weaponType: weaponTypeEnum("weapon_type").notNull(),
	condition: conditionEnum("condition").notNull(),
	rarity: rarityEnum("rarity").notNull(),

	price: real("price").notNull(),

	// Float value (0.0 to 1.0, determines wear)
	floatValue: real("float_value").notNull(),

	isStatTrak: boolean("is_stat_trak").default(false).notNull(),

	isSouvenir: boolean("is_souvenir").default(false).notNull(),

	patternIndex: integer("pattern_index"), // Pattern #661 Case Hardened = "Blue Gem"
	patternName: text("pattern_name"), // e.g., "Blue Gem", "Case Hardened"

	imageUrl: text("image_url").notNull(),
	inspectUrl: text("inspect_url"),

	quantity: integer("quantity").default(1).notNull(),
	status: productStatusEnum("status").default("available").notNull(),

	// Trade lock information
	tradeLockUntil: timestamp("trade_lock_until"), // Fecha hasta cuando está bloqueado el trade

	// Collection information
	collection: text("collection"), // e.g., "The Phoenix Collection"
	caseOrigin: text("case_origin"), // e.g., "Phoenix Case"

	// Special features
	nametag: text("nametag"), // Custom name tag if applied
	stickers: text("stickers"),

	// SEO and description
	description: text("description"),
	tags: text("tags"), // JSON array of search tags

	// Metadata
	createdAt: timestamp("created_at").notNull(),
	updatedAt: timestamp("updated_at").notNull(),
	soldAt: timestamp("sold_at"),
});

// Table for product categories/collections
export const productCategory = pgTable("product_category", {
	id: text("id").primaryKey(),
	name: text("name").notNull(),
	slug: text("slug").notNull().unique(),
	description: text("description"),
	imageUrl: text("image_url"),
	createdAt: timestamp("created_at").notNull(),
	updatedAt: timestamp("updated_at").notNull(),
});

// Junction table for product-category relationships
export const productCategoryRelation = pgTable("product_category_relation", {
	id: text("id").primaryKey(),
	productId: text("product_id")
		.notNull()
		.references(() => product.id, { onDelete: "cascade" }),
	categoryId: text("category_id")
		.notNull()
		.references(() => productCategory.id, { onDelete: "cascade" }),
	createdAt: timestamp("created_at").notNull(),
});
