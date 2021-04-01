BEGIN TRANSACTION;
CREATE TABLE IF NOT EXISTS "users" (
	"id"	INTEGER NOT NULL,
	"name"	TEXT NOT NULL,
	"country"	TEXT NOT NULL,
	PRIMARY KEY("id")
);
INSERT INTO "users" VALUES (1,'norma','venezuela');
INSERT INTO "users" VALUES (2,'joão','costa');
INSERT INTO "users" VALUES (3,'joão','costa');
COMMIT;
