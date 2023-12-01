/*
  Warnings:

  - The `paymentStatus` column on the `Invoice` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- CreateEnum
CREATE TYPE "PaymentStatus" AS ENUM ('PENDING', 'PAID');

-- AlterTable
ALTER TABLE "Client" ALTER COLUMN "name" DROP NOT NULL,
ALTER COLUMN "phoneNumber" DROP NOT NULL,
ALTER COLUMN "email" DROP NOT NULL;

-- AlterTable
ALTER TABLE "Invoice" ALTER COLUMN "issueDate" DROP NOT NULL,
ALTER COLUMN "totalAmount" DROP NOT NULL,
DROP COLUMN "paymentStatus",
ADD COLUMN     "paymentStatus" "PaymentStatus";
