CREATE TYPE "public"."condition" AS ENUM('factory_new', 'minimal_wear', 'field_tested', 'well_worn', 'battle_scarred');--> statement-breakpoint
CREATE TYPE "public"."product_status" AS ENUM('available', 'sold', 'reserved', 'pending', 'trade_locked');--> statement-breakpoint
CREATE TYPE "public"."rarity" AS ENUM('consumer_grade', 'industrial_grade', 'mil_spec', 'restricted', 'classified', 'covert', 'contraband');--> statement-breakpoint
CREATE TYPE "public"."weapon_type" AS ENUM('rifle', 'pistol', 'sniper', 'shotgun', 'submachine_gun', 'machine_gun', 'knife', 'gloves');--> statement-breakpoint
CREATE TABLE "product" (
	"id" text PRIMARY KEY NOT NULL,
	"name" text NOT NULL,
	"weapon_name" text NOT NULL,
	"skin_name" text NOT NULL,
	"weapon_type" "weapon_type" NOT NULL,
	"condition" "condition" NOT NULL,
	"rarity" "rarity" NOT NULL,
	"price" real NOT NULL,
	"float_value" real NOT NULL,
	"is_stat_trak" boolean DEFAULT false NOT NULL,
	"is_souvenir" boolean DEFAULT false NOT NULL,
	"pattern_index" integer,
	"pattern_name" text,
	"image_url" text NOT NULL,
	"inspect_url" text,
	"quantity" integer DEFAULT 1 NOT NULL,
	"status" "product_status" DEFAULT 'available' NOT NULL,
	"trade_lock_until" timestamp,
	"collection" text,
	"case_origin" text,
	"nametag" text,
	"stickers" text,
	"description" text,
	"tags" text,
	"created_at" timestamp NOT NULL,
	"updated_at" timestamp NOT NULL,
	"sold_at" timestamp
);
--> statement-breakpoint
CREATE TABLE "product_category" (
	"id" text PRIMARY KEY NOT NULL,
	"name" text NOT NULL,
	"slug" text NOT NULL,
	"description" text,
	"image_url" text,
	"created_at" timestamp NOT NULL,
	"updated_at" timestamp NOT NULL,
	CONSTRAINT "product_category_slug_unique" UNIQUE("slug")
);
--> statement-breakpoint
CREATE TABLE "product_category_relation" (
	"id" text PRIMARY KEY NOT NULL,
	"product_id" text NOT NULL,
	"category_id" text NOT NULL,
	"created_at" timestamp NOT NULL
);
--> statement-breakpoint
ALTER TABLE "product_category_relation" ADD CONSTRAINT "product_category_relation_product_id_product_id_fk" FOREIGN KEY ("product_id") REFERENCES "public"."product"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "product_category_relation" ADD CONSTRAINT "product_category_relation_category_id_product_category_id_fk" FOREIGN KEY ("category_id") REFERENCES "public"."product_category"("id") ON DELETE cascade ON UPDATE no action;