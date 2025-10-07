CREATE TABLE "products" (
	"id" serial PRIMARY KEY NOT NULL,
	"name" varchar(255) NOT NULL,
	"description" text NOT NULL,
	"price" numeric NOT NULL,
	"discounted_price" numeric NOT NULL,
	"stock" integer NOT NULL,
	"category" varchar(255) NOT NULL,
	"product_id" integer NOT NULL,
	"image_url" text NOT NULL,
	"avg_rating" numeric NOT NULL,
	"no_of_ratings" integer NOT NULL,
	"created_at" timestamp DEFAULT now(),
	"updated_at" timestamp DEFAULT now()
);
