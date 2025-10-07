ALTER TABLE "users" ADD COLUMN "guid" uuid DEFAULT gen_random_uuid() NOT NULL;--> statement-breakpoint
ALTER TABLE "users" ADD CONSTRAINT "users_guid_unique" UNIQUE("guid");