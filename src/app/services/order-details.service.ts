import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class OrderDetailsService {

  constructor() {

  }

  sportsItems = [
    // Football
    {
      id: 1,
      sportsName: "Football",
      sportsDetails: "Premium quality football for professional matches",
      price: "$29.99",
      // sportsImage: "../media/football.jpg"
      sportsImage: "https://images.unsplash.com/photo-1552318965-6e6be7484ada?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGZvb3RiYWxsfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60"
    },
    {
      id: 2,
      sportsName: "Football",
      sportsDetails: "Training football for practice sessions",
      price: "$19.99",
      // sportsImage: "../media/training-football.jpg"
      sportsImage: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1d/Football_Pallo_valmiina-cropped.jpg/170px-Football_Pallo_valmiina-cropped.jpg"
    },
    {
      id: 3,
      sportsName: "Football",
      sportsDetails: "Football kit including jersey, shorts, and socks",
      price: "$49.99",
      // sportsImage: "../media/football-kit.jpg"
      sportsImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRu_xPqcwHOZn9G6Mm5r2apFClLRFAzWs1daPxy6MI3SWWZ5kDZyu1FxvAW_rtbX02twDw&usqp=CAU"
    },
    // Cricket
    {
      id: 4,
      sportsName: "Cricket",
      sportsDetails: "Professional cricket bat for powerful shots",
      price: "$79.99",
      // sportsImage: "../media/cricket-bat.jpg"
      sportsImage: "https://championsports.pk/wp-content/uploads/2021/01/20220212184340872616966.jpg"
    },
    {
      id: 5,
      sportsName: "Cricket",
      sportsDetails: "Cricket ball for match play",
      price: "$9.99",
      // sportsImage: "../media/cricket-ball.jpg"
      sportsImage: "https://static-01.daraz.pk/p/f208736c1764b0dc08dad2d115561642.jpg_720x720.jpg_.webp"
    },
    {
      id: 6,
      sportsName: "Cricket",
      sportsDetails: "Cricket kit including bat, ball, pads, gloves, and helmet",
      price: "$129.99",
      // sportsImage: "../media/cricket-kit.jpg"
      sportsImage: "https://shopon.pk/images/thumbnails/550/450/detailed/62/79328624716b606a5a8af20974597b79.jpg"
    },
    // Hockey
    {
      id: 7,
      sportsName: "Hockey",
      sportsDetails: "Professional hockey stick for enhanced control",
      price: "$49.99",
      // sportsImage: "../media/hockey-stick.jpg"
      sportsImage: "https://static-01.daraz.pk/p/f7f36e13f22b898c66fc4c683a9a4292.jpg"
    },
    {
      id: 8,
      sportsName: "Hockey",
      sportsDetails: "Hockey ball for smooth gameplay",
      price: "$5.99",
      // sportsImage: "../media/hockey-ball.jpg"
      sportsImage: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/Balle_de_hockey_sur_gazon.jpg/800px-Balle_de_hockey_sur_gazon.jpg"
    },
    {
      id: 9,
      sportsName: "Hockey",
      sportsDetails: "Hockey goalkeeper kit with pads, helmet, and gloves",
      price: "$89.99",
      // sportsImage: "../media/hockey-goalkeeper-kit.jpg"
      sportsImage: "https://cdn.shopify.com/s/files/1/0673/4397/4710/products/WhatsAppImage2022-10-29at05.51.36_1.jpg?v=1668994451&width=823"
    },
    // Tennis
    {
      id: 10,
      sportsName: "Tennis",
      sportsDetails: "Professional tennis racket for powerful shots",
      price: "$99.99",
      // sportsImage: "../media/tennis-racket.jpg"
      sportsImage: "https://sportslab.pk/image/cache/catalog/products/Head%202021/Tennis%20Racket/233821_1_4-250x250.jpg"
    },
    {
      id: 11,
      sportsName: "Tennis",
      sportsDetails: "Tennis balls for match play",
      price: "$8.99",
      // sportsImage: "../media/tennis-balls.jpg"
      sportsImage: "https://static-01.daraz.pk/p/fb9f43e58faa4438506f1c3f54a9ba15.jpg"
    },
    {
      id: 12,
      sportsName: "Tennis",
      sportsDetails: "Tennis kit including racket, balls, and wristbands",
      price: "$129.99",
      // sportsImage: "../media/tennis-kit.jpg"
      sportsImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrmurltGSssilp-atR5qQ369ji44L6t_0vm9D4YLSPvICm6t-Y4D6O7vu7tJ_zx-SWhwQ&usqp=CAU"
    },
    // Basketball
    {
      id: 13,
      sportsName: "Basketball",
      sportsDetails: "Premium quality basketball for indoor and outdoor play",
      price: "$24.99",
      // sportsImage: "../media/basketball.jpg"
      sportsImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBTKedExNyFp3LLDxKn9GDSJ8rVjWJSVU0m5tvLO6QHKu4kNx9VvlKZp_6YanuGsyCbwo&usqp=CAU"
    },
    {
      id: 14,
      sportsName: "Basketball",
      sportsDetails: "Basketball hoop and backboard set for home use",
      price: "$199.99",
      // sportsImage: "../media/basketball-hoop.jpg"
      sportsImage: "https://i5.walmartimages.com/asr/68e84151-aa78-4dbd-b3bf-215cb3ecd9bc.25d78a4a07732d8b54a06a54c5be9974.jpeg?odnHeight=612&odnWidth=612&odnBg=FFFFFF"
    },
    {
      id: 15,
      sportsName: "Basketball",
      sportsDetails: "Basketball shoes for optimal grip and support",
      price: "$79.99",
      // sportsImage: "../media/basketball-shoes.jpg"
      sportsImage: "https://www.si.com/.image/c_limit%2Ccs_srgb%2Cq_auto:good%2Cw_700/MTk1NTk5Mzk4MDY1OTM5ODUz/img_7110.webp"
    }
  ];

}
