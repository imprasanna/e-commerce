const products = [
  {
    id: 1,
    stock: 5,
    numOfReviews: 10,
    name: "NAVIFORCE NF9074 Sports Analog Watch For Men",
    img: [
      {
        url: "https://static-01.daraz.com.np/p/af2b52bc5d62a1ca8391008ba7f26e34.jpg_720x720.jpg_.webp",
      },
      {
        url: "https://static-01.daraz.com.np/p/af2b52bc5d62a1ca8391008ba7f26e34.jpg_720x720.jpg_.webp",
      },
      {
        url: "https://static-01.daraz.com.np/p/af2b52bc5d62a1ca8391008ba7f26e34.jpg_720x720.jpg_.webp",
      },
    ],
    price: "1852",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    ratings: 4.5,
  },

  {
    id: 2,
    stock: 5,
    numOfReviews: 10,
    name: "Videocon 43 Full Hd Smart Android 9.00 LED TV",
    img: [
      {
        url: "https://static-01.daraz.com.np/p/814736ccf173d316a3ac1c1f422b204c.jpg",
      },
      {
        url: "https://static-01.daraz.com.np/p/814736ccf173d316a3ac1c1f422b204c.jpg",
      },
    ],
    price: "35000",
    description: "This is a sample product",
    ratings: 4.5,
  },

  {
    id: 3,
    stock: 5,
    numOfReviews: 10,
    name: "G101 RGB Gaming Mouse",
    img: [
      {
        url: "https://static-01.daraz.com.np/p/bd1526960b8c6f596ec9847d8d3bf669.jpg",
      },
      {
        url: "https://static-01.daraz.com.np/p/bd1526960b8c6f596ec9847d8d3bf669.jpg",
      },
    ],
    price: "270",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    ratings: 4.5,
  },

  {
    id: 4,
    stock: 5,
    numOfReviews: 10,
    name: "Pro4 Wireless Bluetooth Earphone Android Earpods Set",
    img: [
      {
        url: "https://static-01.daraz.com.np/p/ee47b11a4ada6ac67828292d9338d5fb.jpg_200x200q90-product.jpg_.webp",
      },
      {
        url: "https://static-01.daraz.com.np/p/ee47b11a4ada6ac67828292d9338d5fb.jpg_200x200q90-product.jpg_.webp",
      },
      {
        url: "https://static-01.daraz.com.np/p/ee47b11a4ada6ac67828292d9338d5fb.jpg_200x200q90-product.jpg_.webp",
      },
    ],
    price: "679",
    description: "This is a sample product",
    ratings: 3.1,
  },

  {
    id: 5,
    stock: 5,
    numOfReviews: 10,
    name: "Shangrila Magic Buddha Printed T-Shirt For Men",
    img: [
      {
        url: "https://static-01.daraz.com.np/p/02619b2692fc82642bc5d9581c48391f.png",
      },
      {
        url: "https://static-01.daraz.com.np/p/02619b2692fc82642bc5d9581c48391f.png",
      },
      {
        url: "https://static-01.daraz.com.np/p/02619b2692fc82642bc5d9581c48391f.png",
      },
      {
        url: "https://static-01.daraz.com.np/p/02619b2692fc82642bc5d9581c48391f.png",
      },
    ],
    price: "330",
    description: "This is a sample product",
    ratings: 4.5,
  },

  {
    id: 6,
    stock: 5,
    numOfReviews: 10,
    name: "Thick-Edged Avant Garde Sunglasses for Men",
    img: [
      {
        url: "https://static-01.daraz.com.np/p/25f87f5997ee123acd792223f9157cc8.jpg_200x200q90-product.jpg_.webp",
      },
      {
        url: "https://static-01.daraz.com.np/p/25f87f5997ee123acd792223f9157cc8.jpg_200x200q90-product.jpg_.webp",
      },
    ],
    price: "399",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    ratings: 4.5,
  },

  {
    id: 7,
    stock: 5,
    numOfReviews: 10,
    name: "IK Collection White Dial Fancy Watch For Men",
    img: [
      {
        url: "https://static-01.daraz.com.np/p/21f4ef1db637c5dad8cfadd2ff6fd079.jpg_200x200q90-product.jpg_.webp",
      },
      {
        url: "https://static-01.daraz.com.np/p/21f4ef1db637c5dad8cfadd2ff6fd079.jpg_200x200q90-product.jpg_.webp",
      },
    ],
    price: "370",
    description: "This is a sample product",
    ratings: 4.5,
  },

  {
    id: 8,
    stock: 5,
    numOfReviews: 10,
    name: "Maggi 2Min Noodles Double Pck Masala 140G",
    img: [
      {
        url: "https://static-01.daraz.com.np/p/30913d9a52a46eb18d94bf6610134462.jpg",
      },
    ],
    price: "72",
    description: "This is a sample product",
    ratings: 4.5,
  },

  {
    id: 9,
    stock: 5,
    numOfReviews: 10,
    name: 'Sensei 43" Smart LED TV - S43ULED0503VR',
    img: [
      {
        url: "https://static-01.daraz.com.np/p/b420109c60067e60b81aaea60ecb38c1.png",
      },
      {
        url: "https://static-01.daraz.com.np/p/b420109c60067e60b81aaea60ecb38c1.png",
      },
    ],
    price: "42790",
    description: "This is a sample product",
    ratings: 4.5,
  },

  {
    id: 10,
    stock: 5,
    numOfReviews: 10,
    name: "EWA A103 Extra Small Portable Bluetooth Speaker",
    img: [
      {
        url: "https://static-01.daraz.com.np/p/09c66583d72ef9370f82b1d7d8cd625b.jpg",
      },
      {
        url: "https://static-01.daraz.com.np/p/09c66583d72ef9370f82b1d7d8cd625b.jpg",
      },
    ],
    price: "1100",
    description: "This is a sample product",
    ratings: 4.5,
  },

  {
    id: 11,
    stock: 5,
    numOfReviews: 10,
    name: "2Pm 2X Spicy Akabare Chicken Noodles 100G",
    img: [
      {
        url: "https://static-01.daraz.com.np/p/f45218e4d6f4adcada744c70f2cf8772.jpg_200x200q90.jpg_.webp",
      },
      {
        url: "https://static-01.daraz.com.np/p/f45218e4d6f4adcada744c70f2cf8772.jpg_200x200q90.jpg_.webp",
      },
    ],
    price: "50",
    description: "This is a sample product",
    ratings: 4,
  },

  {
    id: 12,
    stock: 5,
    numOfReviews: 10,
    name: "Selfie Stick For Mobile With Tripod",
    img: [
      {
        url: "https://static-01.daraz.com.np/p/5f56ff378074c59f91496465921c88a9.jpg_200x200q90-product.jpg_.webp",
      },
      {
        url: "https://static-01.daraz.com.np/p/5f56ff378074c59f91496465921c88a9.jpg_200x200q90-product.jpg_.webp",
      },
    ],
    price: "350",
    description: "This is a sample product",
    ratings: 4.5,
  },

  {
    id: 13,
    stock: 5,
    numOfReviews: 10,
    name: "QCY T1 Stereo Bluetooth Earbuds",
    img: [
      {
        url: "https://static-01.daraz.com.np/original/de71656ca3b78272309571936320ae76.jpg",
      },
    ],
    price: "2099",
    description: "This is a sample product",
    ratings: 4.5,
  },

  {
    id: 14,
    stock: 5,
    numOfReviews: 10,
    name: 'WEGA 32" Smart HD LED TV',
    img: [
      {
        url: "https://np-live-21.slatic.net/kf/Sf7347c140405474b95ec1fb36a7e1ce3X.jpg",
      },
    ],
    price: "17999",
    description: "This is a sample product",
    ratings: 4.5,
  },

  {
    id: 15,
    stock: 5,
    numOfReviews: 10,
    name: "Apple iPhone 11 - EvoStore",
    img: [
      {
        url: "https://static-01.daraz.com.np/p/8096579c1046f6e24dea79b1d8e542ce.jpg",
      },
      {
        url: "https://static-01.daraz.com.np/p/8096579c1046f6e24dea79b1d8e542ce.jpg",
      },
    ],
    price: "89990",
    description: "This is a sample product",
    ratings: 4.5,
  },

  {
    id: 16,
    stock: 5,
    numOfReviews: 10,
    name: "TP Link TL-WR841N 300Mbps DSL Router",
    img: [
      {
        url: "https://static-01.daraz.com.np/p/f43bc8f669bb051ed80f2a8abaac26f5.jpg",
      },
      {
        url: "https://static-01.daraz.com.np/p/f43bc8f669bb051ed80f2a8abaac26f5.jpg",
      },
    ],
    price: "2249",
    description: "This is a sample product",
    ratings: 4.5,
  },

  {
    id: 17,
    stock: 5,
    numOfReviews: 10,
    name: "T500 Bluetooth Smart Watch",
    img: [
      {
        url: "https://static-01.daraz.com.np/p/e476b95063f16c8a33e7e5cb31d2095c.jpg",
      },
      {
        url: "https://static-01.daraz.com.np/p/e476b95063f16c8a33e7e5cb31d2095c.jpg",
      },
    ],
    price: "745",
    description: "This is a sample product",
    ratings: 3.1,
  },

  {
    id: 18,
    stock: 5,
    numOfReviews: 10,
    name: "KONKA 32 Inch HD LED TV",
    img: [
      {
        url: "https://static-01.daraz.com.np/p/7df36250701a2d5d363b9c87a0e527e1.jpg",
      },
      {
        url: "https://static-01.daraz.com.np/p/7df36250701a2d5d363b9c87a0e527e1.jpg",
      },
    ],
    price: "20400",
    description: "This is a sample product",
    ratings: 3.1,
  },

  {
    id: 19,
    stock: 5,
    numOfReviews: 10,
    name: "OnePlus Nord N100",
    img: [
      {
        url: "https://static-01.daraz.com.np/p/777d32873a94c7e851ab9d13ef554e9e.jpg",
      },
      {
        url: "https://static-01.daraz.com.np/p/777d32873a94c7e851ab9d13ef554e9e.jpg",
      },
      {
        url: "https://static-01.daraz.com.np/p/777d32873a94c7e851ab9d13ef554e9e.jpg",
      },
    ],
    price: "23500",
    description: "This is a sample product",
    ratings: 3.1,
  },

  {
    id: 20,
    stock: 5,
    numOfReviews: 10,
    name: 'Videocon 55" Bazelless 4K Uhd Android Smart Led Tv',
    img: [
      {
        url: "https://static-01.daraz.com.np/p/b420109c60067e60b81aaea60ecb38c1.png",
      },
    ],
    price: "69999",
    description: "This is a sample product",
    ratings: 3.1,
  },

  {
    id: 21,
    stock: 5,
    numOfReviews: 10,
    name: "Smile K3 Mini Drone",
    img: [
      {
        url: "https://static-01.daraz.com.np/p/1db7f85a5b54670a60b4549a084eb17c.jpg",
      },
      {
        url: "https://static-01.daraz.com.np/p/1db7f85a5b54670a60b4549a084eb17c.jpg",
      },
    ],
    price: "2850",
    description: "This is a sample product",
    ratings: 3.1,
  },

  {
    id: 22,
    stock: 5,
    numOfReviews: 10,
    name: "Current Hot N Spicy Noodles 100 gm",
    img: [
      {
        url: "https://static-01.daraz.com.np/p/408bda64763752bde45f09cda424cfb3.jpg",
      },
      {
        url: "https://static-01.daraz.com.np/p/408bda64763752bde45f09cda424cfb3.jpg",
      },
      {
        url: "https://static-01.daraz.com.np/p/408bda64763752bde45f09cda424cfb3.jpg",
      },
    ],
    price: "238",
    description: "This is a sample product",
    ratings: 3.1,
  },

  {
    id: 23,
    stock: 5,
    numOfReviews: 10,
    name: 'Redmi 10A (RAM: 4 GB & ROM: 128 GB) 6.53" HD+ Display',
    img: [
      {
        url: "https://static-01.daraz.com.np/p/4a79d4ef076b89a36911f2560e6acda3.jpg",
      },
    ],
    price: "17999",
    description: "This is a sample product",
    ratings: 3.1,
  },

  {
    id: 24,
    stock: 5,
    numOfReviews: 10,
    name: "T800 Ultra Smartwatch Series 1.99 Inch Smart Watch",
    img: [
      {
        url: "https://static-01.daraz.com.np/p/f95c4bbbc93113feb1687b6f98dca7bf.jpg",
      },
      {
        url: "https://static-01.daraz.com.np/p/f95c4bbbc93113feb1687b6f98dca7bf.jpg",
      },
    ],
    price: "1699",
    description: "This is a sample product",
    ratings: 3.1,
  },

  {
    id: 25,
    stock: 5,
    numOfReviews: 10,
    name: "EWA A103 Extra Small Portable Bluetooth Speaker",
    img: [
      {
        url: "https://static-01.daraz.com.np/p/6d562c2917643fb34dc928e569576b43.jpg",
      },
    ],
    price: "1075",
    description: "This is a sample product",
    ratings: 3.1,
  },

  {
    id: 26,
    stock: 5,
    numOfReviews: 10,
    name: '12"trolly speaker',
    img: [
      {
        url: "https://np-live-21.slatic.net/kf/Sd2ab91ebaee642949a631f0affd52702M.jpg",
      },
      {
        url: "https://np-live-21.slatic.net/kf/Sd2ab91ebaee642949a631f0affd52702M.jpg",
      },
    ],
    price: "11499",
    description: "This is a sample product",
    ratings: 3.1,
  },

  {
    id: 27,
    stock: 5,
    numOfReviews: 10,
    name: 'VESTEL 32" Tempered Glass TV LED Television',
    img: [
      {
        url: "https://static-01.daraz.com.np/p/2e4dc934d3ceea0e5e4b43cdca77d7d4.jpg",
      },
    ],
    price: "14240",
    description: "This is a sample product",
    ratings: 3.1,
  },

  {
    id: 28,
    stock: 5,
    numOfReviews: 10,
    name: "P9 Wireless Headphone",
    img: [
      {
        url: "https://static-01.daraz.com.np/p/414baea9d219f2de4a66923e5313f9a1.jpg",
      },
      {
        url: "https://static-01.daraz.com.np/p/414baea9d219f2de4a66923e5313f9a1.jpg",
      },
    ],
    price: "1450",
    description: "This is a sample product",
    ratings: 3.1,
  },

  {
    id: 29,
    stock: 5,
    numOfReviews: 10,
    name: "Sony Smart TV Remote",
    img: [
      {
        url: "https://static-01.daraz.com.np/p/5521ab2ef1862ff0ee76f9d0c3579eb1.jpg",
      },
      {
        url: "https://static-01.daraz.com.np/p/5521ab2ef1862ff0ee76f9d0c3579eb1.jpg",
      },
    ],
    price: "850",
    description: "This is a sample product",
    ratings: 3.1,
  },

  {
    id: 30,
    stock: 5,
    numOfReviews: 10,
    name: "P47 Wireless Bluetooth Foldable Headphones",
    img: [
      {
        url: "https://static-01.daraz.com.np/p/mdc/fb6aec09610b14b1be6e838fb55e3975.jpg",
      },
      {
        url: "https://static-01.daraz.com.np/p/mdc/fb6aec09610b14b1be6e838fb55e3975.jpg",
      },
      {
        url: "https://static-01.daraz.com.np/p/mdc/fb6aec09610b14b1be6e838fb55e3975.jpg",
      },
      {
        url: "https://static-01.daraz.com.np/p/mdc/fb6aec09610b14b1be6e838fb55e3975.jpg",
      },
    ],
    price: "550",
    description: "This is a sample product",
    ratings: 3.1,
  },
];

export default products;
