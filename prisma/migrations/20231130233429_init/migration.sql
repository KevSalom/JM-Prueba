/*
  Warnings:

  - You are about to drop the column `address` on the `Client` table. All the data in the column will be lost.
  - You are about to drop the column `phoneNumber` on the `Client` table. All the data in the column will be lost.
  - You are about to drop the column `description` on the `Invoice` table. All the data in the column will be lost.
  - Made the column `name` on table `Client` required. This step will fail if there are existing NULL values in that column.
  - Made the column `email` on table `Client` required. This step will fail if there are existing NULL values in that column.
  - Added the required column `services` to the `Invoice` table without a default value. This is not possible if the table is not empty.
  - Made the column `issueDate` on table `Invoice` required. This step will fail if there are existing NULL values in that column.
  - Made the column `totalAmount` on table `Invoice` required. This step will fail if there are existing NULL values in that column.
  - Made the column `paymentStatus` on table `Invoice` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "Client" DROP COLUMN "address",
DROP COLUMN "phoneNumber",
ALTER COLUMN "name" SET NOT NULL,
ALTER COLUMN "email" SET NOT NULL;

-- AlterTable
ALTER TABLE "Invoice" DROP COLUMN "description",
ADD COLUMN     "services" TEXT NOT NULL,
ALTER COLUMN "issueDate" SET NOT NULL,
ALTER COLUMN "totalAmount" SET NOT NULL,
ALTER COLUMN "paymentStatus" SET NOT NULL;
