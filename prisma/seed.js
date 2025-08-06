import { PrismaClient } from "@prisma/client";
import bcrypt from 'bcrypt';

const prisma = new PrismaClient();

async function main() {
    console.log("Starting seed...");

    // Clear old data
    await prisma.vote.deleteMany({});
    await prisma.comment.deleteMany({});
    await prisma.product.deleteMany({});
    await prisma.user.deleteMany({});

    // Create Users
    const passwordHash = await bcrypt.hash("password123", 10);

    const admin = await prisma.user.create({
        data: {
            name: "admin",
            email: "admin@example.com",
            password: passwordHash,
            role: "ADMIN",
        },
    });

    const user1 = await prisma.user.create({
        data: {
            name: "John Doe",
            email: "john@example.com",
            password: passwordHash,
            role: "USER",
        },
    });

    const user2 = await prisma.user.create({
        data: {
            name: "jane Smith",
            email: "jane@example.com",
            password: passwordHash,
            role: "USER",
        },
    });

    // Create Products
    const product1 = await prisma.product.create({
        data: {
            title: "AI-Powered Note App",
            description: "A note-taking app with AI summarization features.",
            link: "https://example.com/ai-notes",
            creatorId: user1.id,
        },
    });

    const product2 = await prisma.product.create({
        data: {
            title: "Eco-Friendly Water Bottle",
            description: "Smart water bottle that tracks hydration.",
            link: "https://example.com/water-bottle",
            creatorId: user2.id,
        },
    });

    // Create Comments
    await prisma.comment.createMany({
        data: [
            {
                content: "This is amazing! Would love a mobile version.",
                productId: product1.id,
                authorId: user2.id,
            },
            {
                content: "Great idea! Could integrate with fitness trackers.",
                productId: product2.id,
                authorId: user1.id,
            },
        ],
    });

    // Create Votes
    await prisma.vote.createMany({
        data: [
            {productId: product1.id, userId: user2.id},
            {productId: product2.id, userId: user1.id},
        ],
    });

    console.log("Seeding completed!");
}

main()
    .catch((e) => {
        console.error("Seed failed", e);
        process.exit(1);
    })
    .finally(async () => {
        await prisma.$disconnect();
    });
