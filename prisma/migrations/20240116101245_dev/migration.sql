/*
  Warnings:

  - You are about to drop the column `Status` on the `Job` table. All the data in the column will be lost.
  - Added the required column `status` to the `Job` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Job" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    "clerkId" TEXT NOT NULL,
    "location" TEXT NOT NULL,
    "mode" TEXT NOT NULL,
    "position" TEXT NOT NULL,
    "status" TEXT NOT NULL
);
INSERT INTO "new_Job" ("clerkId", "createdAt", "id", "location", "mode", "position", "updatedAt") SELECT "clerkId", "createdAt", "id", "location", "mode", "position", "updatedAt" FROM "Job";
DROP TABLE "Job";
ALTER TABLE "new_Job" RENAME TO "Job";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
