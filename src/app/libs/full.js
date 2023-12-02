[{
    "clientId": "6bf2b3ea-1dfa-45fd-8377-9ed754334716",
    "name": "Sebastián Herrera",
    "email": "sebastian.h@email.com",
    "image": "https://res.cloudinary.com/dqoi2ez7t/image/upload/v1701388206/Kevin/d5694ysgsduq4emvnk9t.svg",
    "registrationDate": "2023-12-01T02:36:40.436Z",
    "invoices": []
    },
    {
    "clientId": "f4a1c2dd-6ee1-4c0e-a7e4-7afeda2b8dd3",
    "name": "Camila Torres",
    "email": "camila.t@email.com",
    "image": "https://res.cloudinary.com/dqoi2ez7t/image/upload/v1701388201/Kevin/gpdbiifroxo445baohj5.svg",
    "registrationDate": "2023-12-01T02:37:15.050Z",
    "invoices": []
    },
    {
    "clientId": "cd803800-86ac-463c-9bc3-e4cd4740e625",
    "name": "Andrés Sánchez",
    "email": "andres.s@email.com",
    "image": "https://res.cloudinary.com/dqoi2ez7t/image/upload/v1701388205/Kevin/lboqka4rzbdz4kxrke9i.svg",
    "registrationDate": "2023-12-01T02:46:19.978Z",
    "invoices": []
    },
    {
    "clientId": "aabf478a-fb93-4dcf-9fa1-ae28446b0027",
    "name": "Valentina Pérez",
    "email": "valentina.p@email.com",
    "image": "https://res.cloudinary.com/dqoi2ez7t/image/upload/v1701388201/Kevin/lmgvbwirvjuoyrwmy9gm.svg",
    "registrationDate": "2023-12-01T02:47:05.609Z",
    "invoices": []
    },
    {
    "clientId": "eb7780da-a3e0-48a8-baec-4f11ea17a324",
    "name": "Juan Lopez",
    "email": "juan.lopez@email.com",
    "image": "https://res.cloudinary.com/dqoi2ez7t/image/upload/v1701388205/Kevin/gmrd2gdgxwwhdewnipzh.svg",
    "registrationDate": "2023-12-01T02:48:01.898Z",
    "invoices": [
    {
    "invoiceId": "e25270cb-ff98-47c1-8fb5-c580050c7991",
    "issueDate": "2023-12-01T03:29:35.275Z",
    "totalAmount": 900,
    "services": "Analytics and Reporting",
    "paymentStatus": "PENDING",
    "clientId": "eb7780da-a3e0-48a8-baec-4f11ea17a324"
    }
    ]
    },
    {
    "clientId": "66239535-c154-4853-b797-9e936fbd08cc",
    "name": "Alicia Martínez",
    "email": "alicia.m@email.com",
    "image": "https://res.cloudinary.com/dqoi2ez7t/image/upload/v1701388201/Kevin/gpdbiifroxo445baohj5.svg",
    "registrationDate": "2023-12-01T02:48:28.436Z",
    "invoices": []
    }]


    // model Client {
    //     clientId         String    @id @default(uuid())
    //     name             String
    //     email            String    @unique
    //     image            String
    //     registrationDate DateTime  @default(now())
    //     invoices         Invoice[]
    //   }
      
    //   model Invoice {
    //     invoiceId        String    @id @default(uuid())
    //     isActive         Boolean   @default(true)
    //     issueDate        DateTime  @default(now())
    //     totalAmount      Float
    //     services         String
    //     paymentStatus    PaymentStatus
    //     clientId         String
    //     client           Client    @relation(fields: [clientId], references: [clientId])
    //   }
      