ALTER TABLE "users" RENAME TO "postc";--> statement-breakpoint
ALTER TABLE "postc" DROP CONSTRAINT "users_email_unique";--> statement-breakpoint
ALTER TABLE "postc" ADD CONSTRAINT "postc_email_unique" UNIQUE("email");