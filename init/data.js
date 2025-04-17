const sampleListings = [
    {
        title: "Cozy Beach House",
        description: "A beautiful beach house with stunning ocean views.",
        image: {
            url: "https://media.istockphoto.com/id/1393885905/photo/real-estate-agent-showing-a-mature-couple-a-new-house.webp?a=1&b=1&s=612x612&w=0&k=20&c=SfzQAe0JIktuSO-aORmlohSmMY6kQqZ3IHwJbpHd2yQ=",
            filename: "listingimage",
        },
        price: 250,
        location: "Goa",
        Country: "India",
    },
    {
        title: "Mountain Cabin Retreat",
        description: "A peaceful retreat in the heart of the mountains.",
        image: {
            url: "https://media.istockphoto.com/id/157383124/photo/rocking-chairs-on-the-patio-outside-a-mountain-cabin.jpg?s=1024x1024&w=is&k=20&c=sVrRbgyrEiymvkOglZW4n-j4uOkOZniMJf-6Bn4JWNA=",
            filename: "listingimage",
        },
        price: 180,
        location: "Manali",
        Country: "India",
    },
    {
        title: "Luxury City Apartment",
        description: "A modern apartment located in the heart of the city.",
        image: {
            url: "https://media.istockphoto.com/id/496620933/photo/apartments-in-gurgaon.webp?a=1&b=1&s=612x612&w=0&k=20&c=CUxHcyZ_6v_T6wCSqUbl87vGxGO5i9cX4K57hFkMYhg=",
            filename: "listingimage",
        },
        price: 400,
        location: "Mumbai",
        Country: "India",
    },
    {
        title: "Desert Safari Camp",
        description: "Experience the desert like never before with this safari camp.",
        image: {
            url: "https://media.istockphoto.com/id/677059814/photo/one-man-camping-at-night-with-phone.webp?a=1&b=1&s=612x612&w=0&k=20&c=CJwDjPV0Cg8KiTF7kWu1EOJHgUcp-Inh2uJDKUfK3A4=",
            filename: "listingimage",
        },
        price: 150,
        location: "Jaisalmer",
        Country: "India",
    },
    {
        title: "Countryside Cottage",
        description: "A quiet and relaxing cottage in the countryside.",
        image: {
            url: " https://media.istockphoto.com/id/517377998/photo/beautiful-sunset-at-tropical-beach.webp?a=1&b=1&s=612x612&w=0&k=20&c=olrlEEA-E9Z5iR2C2McItU1I4PqsC2hgmOn7rFL9Qyc=",
            filename: "listingimage",
        },
        price: 200,
        location: "Coorg",
        Country: "India",
    },
    {
        title: "Riverside Villa",
        description: "A luxurious villa located next to a beautiful river.",
        image: {
            url: "https://media.istockphoto.com/id/184867163/photo/luxury-hotel-swiming-pool.webp?a=1&b=1&s=612x612&w=0&k=20&c=T3exPX0YqUk-pMoeCVThv21GgfbXfiasl8Us4ts29G4=",
            filename: "listingimage",
        },
        price: 350,
        location: "Rishikesh",
        Country: "India",
    },
    {
        title: "Himalayan View Homestay",
        description: "Wake up to breathtaking Himalayan views in this cozy homestay.",
        image: {
            url: "https://images.unsplash.com/photo-1651478880955-38850da0870d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8bW91bnRhaW5zJTIwdmlsbGF8ZW58MHx8MHx8fDA%3D",
            filename: "listingimage",
        },
        price: 220,
        location: "Darjeeling",
        Country: "India",
    },
    {
        title: "Tropical Jungle Lodge",
        description: "Stay surrounded by lush tropical jungle and wildlife.",
        image: {
            url: "https://media.istockphoto.com/id/529004127/photo/tropical-home-in-the-jungle-at-sunset.webp?a=1&b=1&s=612x612&w=0&k=20&c=AhEJHWlpBWZcPlfvXzEy7iGHs-lQIpzuZ-HHsGX5lx0=",
            filename: "listingimage",
        },
        price: 270,
        location: "Andaman",
        Country: "India",
    },
    {
        title: "Backwaters Houseboat",
        description: "Cruise the backwaters in this traditional Kerala houseboat.",
        image: {
            url: "https://plus.unsplash.com/premium_photo-1678131188332-693a503680ae?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8aHBvc2Vib2F0fGVufDB8fDB8fHww",
            filename: "listingimage",
        },
        price: 300,
        location: "Alleppey",
        Country: "India",
    },
    {
        title: "Hilltop Bungalow",
        description: "Relax in this spacious bungalow with stunning hilltop views.",
        image: {
            url: "https://media.istockphoto.com/id/910224886/photo/chalet-mountain-houses.webp?a=1&b=1&s=612x612&w=0&k=20&c=G1XIicw9px1d6zur6vRnPFbSQneqw6H1AI6RE_pkcpI=",
            filename: "listingimage",
        },
        price: 240,
        location: "Kodaikanal",
        Country: "India",
    },
    {
        title: "Tea Estate Stay",
        description: "Stay amidst lush green tea estates in a charming cottage.",
        image: {
            url: "https://media.istockphoto.com/id/1148294777/photo/summer-holidays-in-finland.webp?a=1&b=1&s=612x612&w=0&k=20&c=7qwSSoY1RGUL1yD6j_3ceaiUOhO_YjPAME_SRRA_MH8=",
            filename: "listingimage",
        },
        price: 210,
        location: "Munnar",
        Country: "India",
    },
    {
        title: "Private Island Resort",
        description: "An exclusive resort experience on a private island.",
        image: {
            url: "https://media.istockphoto.com/id/961525630/photo/aerial-view-of-canareef-resort-maldives-herathera-island-addu-atoll.webp?a=1&b=1&s=612x612&w=0&k=20&c=N3Z6xMpn2fTbRKmJLx2IahU6cPMuRdp3LYAwD9K4RxI=",
            filename: "listingimage",
        },
        price: 500,
        location: "Lakshadweep",
        Country: "India",
    },
];

module.exports = { data: sampleListings };




// const sampleListings = [
//     {
//         title: "Cozy Beach House",
//         description: "A beautiful beach house with stunning ocean views.",
//         image: "https://www.istockphoto.com/photo/the-beach-gm157579910-12329108?utm_campaign=srp_photos_top&utm_content=https%3A%2F%2Funsplash.com%2Fs%2Fphotos%2Fbeach&utm_medium=affiliate&utm_source=unsplash&utm_term=beach%3A%3A%3A",
//         price: 250,
//         location: "Goa",
//         Country: "India",
//     },
//     {
//         title: "Luxury Apartment",
//         description: "A fully furnished apartment in the heart of the city.",
//         image: "https://media.istockphoto.com/id/154946464/photo/aerial-view-of-the-skyline-in-miami-florida.webp?a=1&b=1&s=612x612&w=0&k=20&c=Kf6uTMnBUF2WBuUau1MY03LBzuS9npNPg6_Q2NUXUM0=",
//         price: 500,
//         location: "New York",
//         Country: "USA",
//     },
//     {
//         title: "Mountain Cabin",
//         description: "A serene cabin nestled in the mountains.",
//         image: "https://media.istockphoto.com/id/910224886/photo/chalet-mountain-houses.webp?a=1&b=1&s=612x612&w=0&k=20&c=G1XIicw9px1d6zur6vRnPFbSQneqw6H1AI6RE_pkcpI=",
//         price: 300,
//         location: "Manali",
//         Country: "India",
//     },
//     {
//         title: "Modern Studio",
//         description: "A stylish studio apartment with all modern amenities.",
//         image: "https://plus.unsplash.com/premium_photo-1661853413809-6be6bed796d9?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8c3R1ZGlvJTIwaG91c2V8ZW58MHx8MHx8fDA%3D",
//         price: 150,
//         location: "Berlin",
//         Country: "Germany",
//     },
//     {
//         title: "Countryside Cottage",
//         description: "A quaint cottage surrounded by lush green fields.",
//         image: "https://media.istockphoto.com/id/185275043/photo/old-stone-house.jpg?s=1024x1024&w=is&k=20&c=v5qirScePzdVUy18JI6pQQUjk9fBBukwhDJQnGCvpFQ=",
//         price: 180,
//         location: "Yorkshire",
//         Country: "UK",
//     },
//     {
//         title: "Desert Villa",
//         description: "A luxurious villa in the heart of the desert.",
//         image: "https://plus.unsplash.com/premium_photo-1697729958605-b27137644fbf?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8ZGVzZXJ0JTIwdmlsbGF8ZW58MHx8MHx8fDA%3D",
//         price: 450,
//         location: "Dubai",
//         Country: "UAE",
//     },
//     {
//         title: "Lakefront Bungalow",
//         description: "A beautiful bungalow by the lake with amazing sunset views.",
//         image: "https://media.istockphoto.com/id/154956772/photo/modern-villa-with-a-pool.webp?a=1&b=1&s=612x612&w=0&k=20&c=0utupE7z4lN9pAQXaambyddJZjDNCkdgm2XWDj3fYWA=",
//         price: 400,
//         location: "Udaipur",
//         Country: "India",
//     },
//     {
//         title: "Snowy Chalet",
//         description: "A warm and cozy chalet located in a snowy retreat.",
//         image: "https://media.istockphoto.com/id/1426046174/photo/christmas-night-at-the-chalet.webp?a=1&b=1&s=612x612&w=0&k=20&c=m5u247BKIhuAfBdYxbZwHkgk7WfS51nInJasNx-poqs=",
//         price: 350,
//         location: "Zermatt",
//         Country: "Switzerland",
//     },
// ];

// module.exports = { data: sampleListings };