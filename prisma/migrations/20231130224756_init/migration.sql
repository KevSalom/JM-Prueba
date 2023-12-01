-- CreateTable
CREATE TABLE "Client" (
    "clientId" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "address" TEXT NOT NULL,
    "phoneNumber" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "registrationDate" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Client_pkey" PRIMARY KEY ("clientId")
);

-- CreateTable
CREATE TABLE "Invoice" (
    "invoiceId" TEXT NOT NULL,
    "issueDate" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "totalAmount" DOUBLE PRECISION NOT NULL,
    "description" TEXT NOT NULL,
    "paymentStatus" TEXT NOT NULL,
    "clientId" TEXT NOT NULL,

    CONSTRAINT "Invoice_pkey" PRIMARY KEY ("invoiceId")
);

-- CreateIndex
CREATE UNIQUE INDEX "Client_email_key" ON "Client"("email");

-- AddForeignKey
ALTER TABLE "Invoice" ADD CONSTRAINT "Invoice_clientId_fkey" FOREIGN KEY ("clientId") REFERENCES "Client"("clientId") ON DELETE RESTRICT ON UPDATE CASCADE;
