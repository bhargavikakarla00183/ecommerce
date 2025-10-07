CREATE TABLE "order_products" (
	"id" serial PRIMARY KEY NOT NULL,
	"order_id" integer NOT NULL,
	"product_id" integer NOT NULL,
	"quantity" integer NOT NULL,
	"price" numeric NOT NULL
);
--> statement-breakpoint
CREATE TABLE "orders" (
	"id" serial PRIMARY KEY NOT NULL,
	"user_id" integer NOT NULL,
	"total_amount" numeric NOT NULL,
	"street" varchar(255),
	"city" varchar(100),
	"state" varchar(100),
	"postal_code" varchar(20),
	"country" varchar(100),
	"order_status" varchar(20) DEFAULT 'pending',
	"payment_status" varchar(20) DEFAULT 'pending',
	"created_at" timestamp DEFAULT now(),
	"updated_at" timestamp DEFAULT now()
);
