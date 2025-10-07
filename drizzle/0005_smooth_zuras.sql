DROP TABLE "order_products" CASCADE;--> statement-breakpoint
ALTER TABLE "orders" ADD COLUMN "order_id" integer NOT NULL;--> statement-breakpoint
ALTER TABLE "orders" ADD COLUMN "product_id" integer NOT NULL;--> statement-breakpoint
ALTER TABLE "orders" ADD COLUMN "quantity" integer NOT NULL;--> statement-breakpoint
ALTER TABLE "orders" ADD COLUMN "price" numeric NOT NULL;