/* ==========================================
   PERFUME FINDER
========================================== */


/* ==========================================
   SMELL OPTIONS
========================================== */

const smellData = {

    floral: {
        title: "What kind of floral scent?",
        options: [
            "Rose",
            "Jasmine",
            "White Floral",
            "Powdery",
            "Violet",
            "Fruity Floral"
        ]
    },

    fresh: {
        title: "What kind of fresh scent?",
        options: [
            "Clean",
            "Green",
            "Fresh Spicy",
            "Fresh Aquatic",
            "Cool",
            "Crisp"
        ]
    },

    woody: {
        title: "What kind of woody scent?",
        options: [
            "Sandalwood",
            "Cedar",
            "Oud",
            "Earthy",
            "Warm Woody",
            "Dry Woody"
        ]
    },

    sweet: {
        title: "What kind of sweet scent?",
        options: [
            "Vanilla",
            "Caramel",
            "Chocolate",
            "Fruity",
            "Gourmand",
            "Honey"
        ]
    },

    spicy: {
        title: "What kind of spicy scent?",
        options: [
            "Warm Spicy",
            "Fresh Spicy",
            "Cinnamon",
            "Pepper",
            "Cardamom",
            "Oriental"
        ]
    },

    citrus: {
        title: "What kind of citrus scent?",
        options: [
            "Lemon",
            "Orange",
            "Bergamot",
            "Grapefruit",
            "Mandarin",
            "Lime"
        ]
    },

    aquatic: {
        title: "What kind of aquatic scent?",
        options: [
            "Marine",
            "Oceanic",
            "Fresh Water",
            "Mineral",
            "Cool",
            "Salty"
        ]
    },

    aromatic: {
        title: "What kind of aromatic scent?",
        options: [
            "Lavender",
            "Herbal",
            "Green",
            "Mossy",
            "Aromatic Spicy",
            "Fresh Aromatic"
        ]
    }

};


/* ==========================================
   PERFUME DATA
========================================== */

const perfumes = {

    floral: [

        {
            name: "J'adore",
            brand: "Dior",
            rating: "4.7",
            accords: ["Floral", "White Floral", "Fruity"],
            notes: "Ylang-Ylang, Jasmine, Rose",
            price: 12100,
            platform: "Sephora",
            secondary: ["Rose", "Jasmine", "White Floral"],
            prices: [
                {
                    platform: "Sephora India",
                    type: "Official Beauty Store",
                    price: 12100,
                    oldPrice: 13500,
                    discount: "10% OFF",
                    url: "https://sephora.in/"
                },
                {
                    platform: "Nykaa",
                    type: "Beauty Marketplace",
                    price: 12450,
                    oldPrice: 13500,
                    discount: "8% OFF",
                    url: "https://www.nykaa.com/"
                },
                {
                    platform: "Tira",
                    type: "Beauty Marketplace",
                    price: 12200,
                    oldPrice: 13500,
                    discount: "10% OFF",
                    url: "https://www.tirabeauty.com/"
                },
                {
                    platform: "Myntra",
                    type: "Fashion & Beauty",
                    price: 12900,
                    oldPrice: 13500,
                    discount: "4% OFF",
                    url: "https://www.myntra.com/"
                }
            ]
        },

        {
            name: "Gucci Bloom",
            brand: "Gucci",
            rating: "4.6",
            accords: ["Floral", "White Floral", "Powdery"],
            notes: "Jasmine, Tuberose, Rangoon Creeper",
            price: 9900,
            platform: "Nykaa",
            secondary: ["Jasmine", "White Floral", "Powdery"],
            prices: [
                {
                    platform: "Nykaa",
                    type: "Beauty Marketplace",
                    price: 9900,
                    oldPrice: 11000,
                    discount: "10% OFF",
                    url: "https://www.nykaa.com/"
                },
                {
                    platform: "Tira",
                    type: "Beauty Marketplace",
                    price: 10100,
                    oldPrice: 11000,
                    discount: "8% OFF",
                    url: "https://www.tirabeauty.com/"
                },
                {
                    platform: "Myntra",
                    type: "Fashion & Beauty",
                    price: 10400,
                    oldPrice: 11000,
                    discount: "5% OFF",
                    url: "https://www.myntra.com/"
                }
            ]
        },

        {
            name: "Flowerbomb",
            brand: "Viktor & Rolf",
            rating: "4.6",
            accords: ["Floral", "Sweet", "Powdery"],
            notes: "Rose, Jasmine, Vanilla",
            price: 11500,
            platform: "Tira",
            secondary: ["Rose", "Jasmine", "Powdery"],
            prices: [
                {
                    platform: "Tira",
                    type: "Beauty Marketplace",
                    price: 11500,
                    oldPrice: 12800,
                    discount: "10% OFF",
                    url: "https://www.tirabeauty.com/"
                },
                {
                    platform: "Nykaa",
                    type: "Beauty Marketplace",
                    price: 11900,
                    oldPrice: 12800,
                    discount: "7% OFF",
                    url: "https://www.nykaa.com/"
                },
                {
                    platform: "Myntra",
                    type: "Fashion & Beauty",
                    price: 12100,
                    oldPrice: 12800,
                    discount: "5% OFF",
                    url: "https://www.myntra.com/"
                }
            ]
        }

    ],


    fresh: [

        {
            name: "Light Blue",
            brand: "Dolce & Gabbana",
            rating: "4.5",
            accords: ["Citrus", "Fresh", "Woody"],
            notes: "Lemon, Apple, Cedar",
            price: 7600,
            platform: "Nykaa",
            secondary: ["Clean", "Crisp", "Fresh"],
            prices: [
                {
                    platform: "Nykaa",
                    type: "Beauty Marketplace",
                    price: 7600,
                    oldPrice: 8500,
                    discount: "11% OFF",
                    url: "https://www.nykaa.com/"
                },
                {
                    platform: "Tira",
                    type: "Beauty Marketplace",
                    price: 7750,
                    oldPrice: 8500,
                    discount: "9% OFF",
                    url: "https://www.tirabeauty.com/"
                },
                {
                    platform: "Myntra",
                    type: "Fashion & Beauty",
                    price: 7900,
                    oldPrice: 8500,
                    discount: "7% OFF",
                    url: "https://www.myntra.com/"
                }
            ]
        },

        {
            name: "Acqua di Gio",
            brand: "Giorgio Armani",
            rating: "4.7",
            accords: ["Aquatic", "Citrus", "Fresh"],
            notes: "Bergamot, Marine Notes, Cedar",
            price: 8900,
            platform: "Tira",
            secondary: ["Clean", "Fresh Aquatic", "Crisp"],
            prices: [
                {
                    platform: "Tira",
                    type: "Beauty Marketplace",
                    price: 8900,
                    oldPrice: 9900,
                    discount: "10% OFF",
                    url: "https://www.tirabeauty.com/"
                },
                {
                    platform: "Nykaa",
                    type: "Beauty Marketplace",
                    price: 9200,
                    oldPrice: 9900,
                    discount: "7% OFF",
                    url: "https://www.nykaa.com/"
                },
                {
                    platform: "Myntra",
                    type: "Fashion & Beauty",
                    price: 9400,
                    oldPrice: 9900,
                    discount: "5% OFF",
                    url: "https://www.myntra.com/"
                }
            ]
        }

    ],


    woody: [

        {
            name: "Santal 33",
            brand: "Le Labo",
            rating: "4.6",
            accords: ["Woody", "Powdery", "Warm"],
            notes: "Sandalwood, Cedar, Leather",
            price: 21500,
            platform: "Nykaa",
            secondary: ["Sandalwood", "Cedar", "Warm Woody"],
            prices: [
                {
                    platform: "Nykaa",
                    type: "Beauty Marketplace",
                    price: 21500,
                    oldPrice: 23000,
                    discount: "7% OFF",
                    url: "https://www.nykaa.com/"
                },
                {
                    platform: "Tira",
                    type: "Beauty Marketplace",
                    price: 21900,
                    oldPrice: 23000,
                    discount: "5% OFF",
                    url: "https://www.tirabeauty.com/"
                }
            ]
        },

        {
            name: "Oud Wood",
            brand: "Tom Ford",
            rating: "4.7",
            accords: ["Woody", "Oud", "Warm Spicy"],
            notes: "Oud, Sandalwood, Amber",
            price: 24500,
            platform: "Sephora",
            secondary: ["Oud", "Sandalwood", "Warm Woody"],
            prices: [
                {
                    platform: "Sephora",
                    type: "Official Beauty Store",
                    price: 24500,
                    oldPrice: 27000,
                    discount: "9% OFF",
                    url: "https://sephora.in/"
                },
                {
                    platform: "Nykaa",
                    type: "Beauty Marketplace",
                    price: 25200,
                    oldPrice: 27000,
                    discount: "7% OFF",
                    url: "https://www.nykaa.com/"
                },
                {
                    platform: "Tira",
                    type: "Beauty Marketplace",
                    price: 24900,
                    oldPrice: 27000,
                    discount: "8% OFF",
                    url: "https://www.tirabeauty.com/"
                }
            ]
        }

    ],


    sweet: [

        {
            name: "Baccarat Rouge 540",
            brand: "Maison Francis Kurkdjian",
            rating: "4.7",
            accords: ["Sweet", "Woody", "Amber"],
            notes: "Saffron, Amberwood, Fir Resin",
            price: 28500,
            platform: "Nykaa",
            secondary: ["Gourmand", "Vanilla", "Honey"],
            prices: [
                {
                    platform: "Nykaa",
                    type: "Beauty Marketplace",
                    price: 28500,
                    oldPrice: 30000,
                    discount: "5% OFF",
                    url: "https://www.nykaa.com/"
                },
                {
                    platform: "Tira",
                    type: "Beauty Marketplace",
                    price: 28900,
                    oldPrice: 30000,
                    discount: "4% OFF",
                    url: "https://www.tirabeauty.com/"
                }
            ]
        },

        {
            name: "La Vie Est Belle",
            brand: "Lancôme",
            rating: "4.6",
            accords: ["Sweet", "Fruity", "Vanilla"],
            notes: "Iris, Praline, Vanilla",
            price: 8500,
            platform: "Nykaa",
            secondary: ["Vanilla", "Gourmand", "Fruity"],
            prices: [
                {
                    platform: "Nykaa",
                    type: "Beauty Marketplace",
                    price: 8500,
                    oldPrice: 9500,
                    discount: "11% OFF",
                    url: "https://www.nykaa.com/"
                },
                {
                    platform: "Tira",
                    type: "Beauty Marketplace",
                    price: 8700,
                    oldPrice: 9500,
                    discount: "8% OFF",
                    url: "https://www.tirabeauty.com/"
                },
                {
                    platform: "Myntra",
                    type: "Fashion & Beauty",
                    price: 8900,
                    oldPrice: 9500,
                    discount: "6% OFF",
                    url: "https://www.myntra.com/"
                }
            ]
        }

    ],


    spicy: [

        {
            name: "Spicebomb",
            brand: "Viktor & Rolf",
            rating: "4.5",
            accords: ["Spicy", "Woody", "Warm"],
            notes: "Pepper, Cinnamon, Tobacco",
            price: 8200,
            platform: "Tira",
            secondary: ["Warm Spicy", "Cinnamon", "Pepper"],
            prices: [
                {
                    platform: "Tira",
                    type: "Beauty Marketplace",
                    price: 8200,
                    oldPrice: 9000,
                    discount: "9% OFF",
                    url: "https://www.tirabeauty.com/"
                },
                {
                    platform: "Nykaa",
                    type: "Beauty Marketplace",
                    price: 8450,
                    oldPrice: 9000,
                    discount: "6% OFF",
                    url: "https://www.nykaa.com/"
                }
            ]
        }

    ],


    citrus: [

        {
            name: "Terre d'Hermes",
            brand: "Hermès",
            rating: "4.6",
            accords: ["Citrus", "Woody", "Earthy"],
            notes: "Orange, Pepper, Vetiver",
            price: 9500,
            platform: "Nykaa",
            secondary: ["Orange", "Bergamot", "Grapefruit"],
            prices: [
                {
                    platform: "Nykaa",
                    type: "Beauty Marketplace",
                    price: 9500,
                    oldPrice: 10500,
                    discount: "10% OFF",
                    url: "https://www.nykaa.com/"
                },
                {
                    platform: "Tira",
                    type: "Beauty Marketplace",
                    price: 9700,
                    oldPrice: 10500,
                    discount: "8% OFF",
                    url: "https://www.tirabeauty.com/"
                },
                {
                    platform: "Myntra",
                    type: "Fashion & Beauty",
                    price: 9900,
                    oldPrice: 10500,
                    discount: "6% OFF",
                    url: "https://www.myntra.com/"
                }
            ]
        }

    ],


    aquatic: [

        {
            name: "Cool Water",
            brand: "Davidoff",
            rating: "4.4",
            accords: ["Aquatic", "Fresh", "Aromatic"],
            notes: "Mint, Lavender, Amber",
            price: 4500,
            platform: "Nykaa",
            secondary: ["Marine", "Oceanic", "Cool"],
            prices: [
                {
                    platform: "Nykaa",
                    type: "Beauty Marketplace",
                    price: 4500,
                    oldPrice: 5200,
                    discount: "13% OFF",
                    url: "https://www.nykaa.com/"
                },
                {
                    platform: "Tira",
                    type: "Beauty Marketplace",
                    price: 4650,
                    oldPrice: 5200,
                    discount: "11% OFF",
                    url: "https://www.tirabeauty.com/"
                },
                {
                    platform: "Myntra",
                    type: "Fashion & Beauty",
                    price: 4700,
                    oldPrice: 5200,
                    discount: "10% OFF",
                    url: "https://www.myntra.com/"
                }
            ]
        }

    ],


    aromatic: [

        {
            name: "L'Homme",
            brand: "Yves Saint Laurent",
            rating: "4.5",
            accords: ["Aromatic", "Citrus", "Woody"],
            notes: "Ginger, Bergamot, Cedar",
            price: 7800,
            platform: "Nykaa",
            secondary: ["Aromatic Spicy", "Fresh Aromatic", "Herbal"],
            prices: [
                {
                    platform: "Nykaa",
                    type: "Beauty Marketplace",
                    price: 7800,
                    oldPrice: 8800,
                    discount: "11% OFF",
                    url: "https://www.nykaa.com/"
                },
                {
                    platform: "Tira",
                    type: "Beauty Marketplace",
                    price: 7950,
                    oldPrice: 8800,
                    discount: "10% OFF",
                    url: "https://www.tirabeauty.com/"
                }
            ]
        }

    ]

};


/* ==========================================
   DOM ELEMENTS
========================================== */

const smellCards =
    document.querySelectorAll(".smell-card");

const secondarySection =
    document.getElementById("secondarySection");

const secondaryTitle =
    document.getElementById("secondaryTitle");

const secondaryOptions =
    document.getElementById("secondaryOptions");

const perfumeSection =
    document.getElementById("perfumeSection");

const perfumeGrid =
    document.getElementById("perfumeGrid");

const selectedSmell =
    document.getElementById("selectedSmell");

const profileSection =
    document.getElementById("profileSection");

const profileCard =
    document.getElementById("profileCard");

const priceSection =
    document.getElementById("priceSection");

const priceCard =
    document.getElementById("priceCard");

const recommendationSection =
    document.getElementById("recommendationSection");

const recommendationGrid =
    document.getElementById("recommendationGrid");

const chartSection =
    document.getElementById("chartSection");

const changeSmell =
    document.getElementById("changeSmell");


let currentSmell = "";

let currentSecondary = "";

let selectedPerfume = null;

let similarityChart = null;


/* ==========================================
   FORMAT PRICE
========================================== */

function formatPrice(price) {

    return "₹" + price.toLocaleString("en-IN");

}


/* ==========================================
   FIND LOWEST PRICE
========================================== */

function getLowestPrice(perfume) {

    return perfume.prices.reduce(
        (lowest, item) =>
            item.price < lowest.price
                ? item
                : lowest
    );

}


/* ==========================================
   SHOW SECONDARY OPTIONS
========================================== */

function showSecondaryOptions(smell) {

    currentSmell = smell;

    const data = smellData[smell];

    secondaryTitle.textContent =
        data.title;

    secondaryOptions.innerHTML = "";

    data.options.forEach(option => {

        const button =
            document.createElement("button");

        button.className =
            "secondary-option";

        button.textContent =
            option;

        button.addEventListener(
            "click",
            () => {

                document
                    .querySelectorAll(
                        ".secondary-option"
                    )
                    .forEach(item =>
                        item.classList.remove(
                            "active"
                        )
                    );

                button.classList.add("active");

                currentSecondary =
                    option;

                showPerfumes(smell, option);

            }
        );

        secondaryOptions.appendChild(button);

    });

    secondarySection.classList.remove("hidden");

    perfumeSection.classList.add("hidden");

    profileSection.classList.add("hidden");

    priceSection.classList.add("hidden");

    recommendationSection.classList.add("hidden");

    chartSection.classList.add("hidden");

    secondarySection.scrollIntoView({
        behavior: "smooth",
        block: "center"
    });

}


/* ==========================================
   SHOW PERFUMES
========================================== */

function showPerfumes(smell, secondary) {

    const list =
        perfumes[smell] || [];

    let filtered =
        list.filter(perfume =>
            perfume.secondary.includes(secondary)
        );

    if (filtered.length === 0) {

        filtered = list;

    }

    selectedSmell.textContent =
        `${secondary} ${smell} perfumes`;

    perfumeGrid.innerHTML = "";

    filtered.forEach(perfume => {

        const lowest =
            getLowestPrice(perfume);

        const card =
            document.createElement("div");

        card.className =
            "perfume-option";

        card.innerHTML = `

            <h3>
                ${perfume.name}
            </h3>

            <div class="perfume-brand">
                ${perfume.brand}
            </div>

            <div class="perfume-rating">
                ⭐ ${perfume.rating}
            </div>

            <div class="accords">

                ${perfume.accords.map(
                    accord =>
                        `<span class="accord">
                            ${accord}
                        </span>`
                ).join("")}

            </div>

            <div class="perfume-notes">
                ${perfume.notes}
            </div>

            <div class="card-price-box">

                <span class="card-price-label">
                    Best available price
                </span>

                <span class="card-price">
                    ${formatPrice(lowest.price)}
                </span>

                <span class="card-price-platform">
                    on ${lowest.platform}
                </span>

            </div>

            <button
                class="select-button"
                data-name="${perfume.name}"
            >
                View Perfume
            </button>

        `;

        perfumeGrid.appendChild(card);

    });

    document
        .querySelectorAll(".select-button")
        .forEach(button => {

            button.addEventListener(
                "click",
                () => {

                    const perfume =
                        list.find(
                            item =>
                                item.name ===
                                button.dataset.name
                        );

                    showProfile(perfume);

                }
            );

        });

    perfumeSection.classList.remove("hidden");

    perfumeSection.scrollIntoView({
        behavior: "smooth",
        block: "start"
    });

}


/* ==========================================
   SHOW PROFILE
========================================== */

function showProfile(perfume) {

    selectedPerfume =
        perfume;

    profileCard.innerHTML = `

        <div class="profile-layout">

            <div>

                <div class="profile-title">
                    ${perfume.name}
                </div>

                <div class="profile-brand">
                    ${perfume.brand}
                </div>

                <div class="profile-stats">

                    <div class="profile-stat">
                        <span>Rating</span>
                        <strong>
                            ⭐ ${perfume.rating}
                        </strong>
                    </div>

                    <div class="profile-stat">
                        <span>Best Price</span>
                        <strong>
                            ${formatPrice(
                                getLowestPrice(perfume).price
                            )}
                        </strong>
                    </div>

                    <div class="profile-stat">
                        <span>Best Platform</span>
                        <strong>
                            ${getLowestPrice(perfume).platform}
                        </strong>
                    </div>

                </div>

            </div>


            <div>

                <div class="note-group">

                    <h3>
                        Fragrance Accords
                    </h3>

                    <div class="accords">

                        ${perfume.accords.map(
                            accord =>
                                `<span class="accord">
                                    ${accord}
                                </span>`
                        ).join("")}

                    </div>

                </div>


                <div class="note-group">

                    <h3>
                        Fragrance Notes
                    </h3>

                    <p>
                        ${perfume.notes}
                    </p>

                </div>

            </div>

        </div>

    `;


    profileSection.classList.remove("hidden");

    showPriceComparison(perfume);

    showRecommendations(perfume);

    showChart(perfume);

    profileSection.scrollIntoView({
        behavior: "smooth",
        block: "start"
    });

}


/* ==========================================
   PRICE COMPARISON
========================================== */

function showPriceComparison(perfume) {

    const prices =
        [...perfume.prices]
        .sort(
            (a, b) =>
                a.price - b.price
        );

    const lowest =
        prices[0];


    let rows = "";


    prices.forEach((item, index) => {

        const isBest =
            index === 0;

        rows += `

            <tr
                class="${isBest ? "best-price-row" : ""}"
            >

                <td>

                    <div class="platform-name">
                        ${item.platform}

                        ${
                            isBest
                                ? `<span class="best-price-label">
                                    LOWEST PRICE
                                   </span>`
                                : ""
                        }

                    </div>

                    <div class="platform-type">
                        ${item.type}
                    </div>

                </td>


                <td>

                    <span class="platform-price">
                        ${formatPrice(item.price)}
                    </span>

                    <span class="old-price">
                        ${formatPrice(item.oldPrice)}
                    </span>

                </td>


                <td>

                    <span class="discount-badge">
                        ${item.discount}
                    </span>

                </td>


                <td>

                    <a
                        href="${item.url}"
                        target="_blank"
                        rel="noopener noreferrer"
                        class="buy-button"
                    >
                        Buy Now →
                    </a>

                </td>

            </tr>

        `;

    });


    priceCard.innerHTML = `

        <div class="price-header">

            <div>

                <div class="price-product-name">
                    ${perfume.name}
                </div>

                <div class="price-product-brand">
                    ${perfume.brand}
                </div>

            </div>


            <div class="lowest-price">

                <span>
                    LOWEST LISTED PRICE
                </span>

                <strong>
                    ${formatPrice(lowest.price)}
                </strong>

            </div>

        </div>


        <table class="price-table">

            <thead>

                <tr>

                    <th>
                        Platform
                    </th>

                    <th>
                        Price
                    </th>

                    <th>
                        Offer
                    </th>

                    <th>
                        Shop
                    </th>

                </tr>

            </thead>

            <tbody>

                ${rows}

            </tbody>

        </table>


        <div class="price-note">

            Prices shown here are example
            comparison data for the frontend.
            Actual prices, discounts, availability
            and seller information may change.

        </div>

    `;


    priceSection.classList.remove("hidden");

}


/* ==========================================
   SIMILAR PERFUMES
========================================== */

function showRecommendations(perfume) {

    const list =
        perfumes[currentSmell] || [];

    const recommendations =
        list
            .filter(
                item =>
                    item.name !== perfume.name
            )
            .slice(0, 3);


    recommendationGrid.innerHTML = "";


    recommendations.forEach(
        (item, index) => {

            const similarity =
                94 - index * 4;

            const lowest =
                getLowestPrice(item);

            const card =
                document.createElement("div");

            card.className =
                "recommendation-card";

            card.innerHTML = `

                <h3>
                    ${item.name}
                </h3>

                <p class="perfume-brand">
                    ${item.brand}
                </p>

                <span class="similarity">
                    ${similarity}% similar
                </span>

                <p class="recommendation-info">

                    ${item.notes}

                    <br><br>

                    From
                    <strong>
                        ${formatPrice(
                            lowest.price
                        )}
                    </strong>

                    on ${lowest.platform}

                </p>

            `;

            recommendationGrid.appendChild(card);

        }
    );


    if (recommendations.length > 0) {

        recommendationSection
            .classList
            .remove("hidden");

    }

}


/* ==========================================
   SIMILARITY CHART
========================================== */

function showChart(perfume) {

    const list =
        perfumes[currentSmell] || [];

    const recommendations =
        list
            .filter(
                item =>
                    item.name !== perfume.name
            )
            .slice(0, 5);


    const labels =
        recommendations.map(
            item => item.name
        );


    const values =
        recommendations.map(
            (_, index) =>
                94 - index * 4
        );


    chartSection.classList.remove(
        "hidden"
    );


    if (similarityChart) {

        similarityChart.destroy();

    }


    const ctx =
        document
            .getElementById(
                "similarityChart"
            );


    similarityChart =
        new Chart(
            ctx,
            {
                type: "bar",

                data: {

                    labels: labels,

                    datasets: [
                        {
                            label: "Similarity %",
                            data: values,

                            backgroundColor: "#8b6045",
                            borderColor: "#704831",
                            borderWidth: 1,

                            borderRadius: 8
                        }
                    ]

                },

                options: {

                    responsive: true,

                    maintainAspectRatio: false,

                    scales: {

                        y: {

                            beginAtZero: true,

                            max: 100

                        }

                    },

                    plugins: {

                        legend: {

                            display: false

                        }

                    }

                }

            }
        );

}


/* ==========================================
   SMELL CARD EVENTS
========================================== */

smellCards.forEach(card => {

    card.addEventListener(
        "click",
        () => {

            smellCards.forEach(item =>
                item.classList.remove(
                    "active"
                )
            );

            card.classList.add("active");

            const smell =
                card.dataset.smell;

            showSecondaryOptions(smell);

        }
    );

});


/* ==========================================
   CHANGE SMELL
========================================== */

changeSmell.addEventListener(
    "click",
    () => {

        secondarySection.classList.remove(
            "hidden"
        );

        perfumeSection.classList.add(
            "hidden"
        );

        profileSection.classList.add(
            "hidden"
        );

        priceSection.classList.add(
            "hidden"
        );

        recommendationSection.classList.add(
            "hidden"
        );

        chartSection.classList.add(
            "hidden"
        );

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });

    }
);