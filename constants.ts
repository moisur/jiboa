
import type { Product } from './types';

export const PRODUCTS: Product[] = [
  {
    id: 1,
    name: "Le Jiboia Classique",
    price: 29.99,
    description: "The classic snake design that started it all. Très chic, non?",
    details: [
        "100% Coton Organique",
        "Coupe Classique, very comfy",
        "Imprimé en France avec amour",
        "Laver à 30°, retourner le t-shirt",
    ],
    story: "It all started with a doodle on a napkin in a café in Le Marais. One line became a snake, and that snake became our icon. The rest, c'est l'histoire.",
    reviews: [
      { id: 1, author: "Jean-Pierre", rating: 5, comment: "Super quality, le design est top. Je recommend.", date: "2 weeks ago" },
      { id: 2, author: "Camila", rating: 4, comment: "It's a little bit large for me, but I love it anyway. A vibe.", date: "1 month ago" },
    ],
    colorVariants: [
      {
        colorName: "Blanc Cassé",
        colorHex: "#F1EBE4",
        imageUrls: [
          "/images/1 (2).png",
          "/images/1 (2).png",
        ],
        sizes: [
          { size: 'S', sku: 'JB-CLS-WHT-S'},
          { size: 'M', sku: 'JB-CLS-WHT-M'},
          { size: 'L', sku: 'JB-CLS-WHT-L'},
          { size: 'XL', sku: 'JB-CLS-WHT-XL'},
        ]
      },
      {
        colorName: "Vert Forêt",
        colorHex: "#2C5234",
        imageUrls: [
          "/images/lifestyle-oven.jpg",
        ],
        sizes: [
          { size: 'M', sku: 'JB-CLS-GRN-M'},
          { size: 'L', sku: 'JB-CLS-GRN-L'},
        ]
      }
    ]
  },
  {
    id: 2,
    name: "Franglais Fun",
    price: 32.50,
    description: "Featuring all your favorite franglais words. 'Furthermore' is on the back!",
    details: [
        "100% Coton Organique",
        "A little bit 'loose'",
        "Perfect for 'le brainstorming'",
        "Handle with 'care'",
    ],
    story: "This t-shirt is a tribute to Louis and his unique way of speaking. Every time he says 'Furthermore' in a meeting, an angel gets its wings. Or something like that.",
    reviews: [
      { id: 3, author: "Louis", rating: 5, comment: "Furthermore, c'est mon t-shirt préféré. Douw.", date: "3 days ago" },
    ],
    colorVariants: [
      {
        colorName: "Heather Grey",
        colorHex: "#BDBDBD",
        imageUrls: [ "/images/1 (2).png" ],
        sizes: [
          { size: 'S', sku: 'JB-FRN-GRY-S'},
          { size: 'M', sku: 'JB-FRN-GRY-M'},
          { size: 'L', sku: 'JB-FRN-GRY-L'},
          { size: 'XL', sku: 'JB-FRN-GRY-XL'},
        ]
      }
    ]
  },
  {
    id: 3,
    name: "Samba & Seine",
    price: 29.99,
    description: "A beautiful fusion of Brazilian and French culture on a tee.",
    details: [
        "50% Coton, 50% Modal",
        "Soft touch, like a bossa nova song",
        "Designed in Paris, inspired by Rio",
        "Wear it and feel 'saudade'",
    ],
    story: "One evening, listening to João Gilberto while looking at the Eiffel Tower, the idea was born. A mix of two worlds, two feelings, one t-shirt.",
    reviews: [
        { id: 4, author: "Ana", rating: 5, comment: "Me lembra de casa. So soft, a qualidade é incrível!", date: "1 week ago" },
        { id: 5, author: "Chloé", rating: 5, comment: "Je l'adore, a perfect mix of my two cultures.", date: "1 month ago" },
    ],
    colorVariants: [
      {
        colorName: "Noir",
        colorHex: "#212121",
        imageUrls: [ "/images/louis.png" ],
        sizes: [
          { size: 'S', sku: 'JB-SS-BLK-S'},
          { size: 'M', sku: 'JB-SS-BLK-M'},
          { size: 'L', sku: 'JB-SS-BLK-L'},
        ]
      },
      {
        colorName: "Bleu Marine",
        colorHex: "#1A237E",
        imageUrls: [ "/images/lifestyle-wine.jpg" ],
        sizes: [
          { size: 'S', sku: 'JB-SS-NVY-S'},
          { size: 'M', sku: 'JB-SS-NVY-M'},
          { size: 'L', sku: 'JB-SS-NVY-L'},
          { size: 'XL', sku: 'JB-SS-NVY-XL'},
        ]
      }
    ]
  },
  {
    id: 4,
    name: "Caipirinha Croissant",
    price: 35.00,
    description: "The perfect shirt for your brunch, whether in Rio or Paris.",
    details: [
        "100% Coton Pima",
        "Coupe 'élégante'",
        "Stain-resistant to both cachaça and butter",
        "A real conversation starter",
    ],
    story: "Inspired by a particularly chaotic brunch where a croissant accidentally fell into a caipirinha. It was a mess, but a beautiful one. A legendary one.",
    reviews: [
         { id: 6, author: "Pierre", rating: 4, comment: "Funny shirt, good quality. The fit is a bit slim.", date: "2 months ago" },
    ],
    colorVariants: [
      {
        colorName: "Jaune Pâle",
        colorHex: "#FFF59D",
        imageUrls: [ "/images/louis (1).png" ],
        sizes: [
          { size: 'M', sku: 'JB-CC-YEL-M'},
          { size: 'L', sku: 'JB-CC-YEL-L'},
        ]
      }
    ]
  },
];
