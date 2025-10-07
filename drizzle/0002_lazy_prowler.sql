ALTER TABLE "postc" RENAME TO "users";--> statement-breakpoint
ALTER TABLE "users" DROP CONSTRAINT "postc_email_unique";--> statement-breakpoint
ALTER TABLE "users" ADD CONSTRAINT "users_email_unique" UNIQUE("email");