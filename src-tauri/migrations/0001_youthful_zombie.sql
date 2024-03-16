ALTER TABLE users ADD `age` integer DEFAULT 18;--> statement-breakpoint
ALTER TABLE users ADD `email` text;--> statement-breakpoint
ALTER TABLE users ADD `created_at` text DEFAULT 'CURRENT_TIMESTAMP';--> statement-breakpoint
ALTER TABLE users ADD `updated_at` text DEFAULT 'CURRENT_TIMESTAMP';--> statement-breakpoint
ALTER TABLE users ADD `deleted_at` text DEFAULT 'NULL';--> statement-breakpoint
ALTER TABLE users ADD `city` text DEFAULT 'NULL';--> statement-breakpoint
CREATE UNIQUE INDEX `users_email_unique` ON `users` (`email`);