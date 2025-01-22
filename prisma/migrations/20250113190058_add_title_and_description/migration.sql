/*
  Warnings:

  - You are about to drop the column `is_done` on the `todos` table. All the data in the column will be lost.
  - You are about to drop the column `task` on the `todos` table. All the data in the column will be lost.
  - Added the required column `title` to the `todos` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "todos" DROP COLUMN "is_done",
DROP COLUMN "task",
ADD COLUMN     "completed" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "title" TEXT NOT NULL;
