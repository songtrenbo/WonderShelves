// const { Book } = require("../models/book.model");
// const { Category } = require("../models/category.model");
// const { connectDB, disconnectDB } = require("../config/db.config");

// class BookData {
//   constructor() {
//     connectDB();
//   }
//   async seedBook() {
//     const drama = await Category.findOne({ name: "drama" });
//     const comedy = await Category.findOne({ name: "comedy" });
//     const sport = await Category.findOne({ name: "sport" });
//     const books = [
//       new Book({
//         title: "new book",
//         image: "sadasd",
//         quantity: 1,
//         price: 55,
//         description: "sdadad",
//         categories: drama._id,
//       }),
//       new Book({
//         title: "new sdsa",
//         image: "adwqewqeqw",
//         quantity: 3,
//         price: 11,
//         description: "aertaergfa",
//         categories: drama._id,
//       }),
//     ];
//     var done = 0;
//     for (let i = 0; i < books.length; i++) {
//       books[i].save(function (err, result) {
//         done++;
//         if (done === books.length) {
//           disconnectDB();
//         }
//       });
//     }
//     console.log("Seed book data successfully");
//   }
// }

// module.exports =  new BookData();
const { Book } = require("../models/book.model");
const { Category } = require("../models/category.model");
const mongoose = require("mongoose");
require("dotenv").config();

async function seedBook() {
  await mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  const drama = await Category.findOne({ name: "drama" });
  const comedy = await Category.findOne({ name: "comedy" });
  const sport = await Category.findOne({ name: "sport" });
  const books = [
    new Book({
      title: "Hamlet",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS05VSpJWJC37_JMl2rhC30RNns2YzUKIaFcAW7D-H-&usqp=CAE&s",
      quantity: 21,
      price: 12,
      description: "This is one in a series of books which is aimed at children whose reading ability and confidence allows them to tackle longer and more complex stories. This book is a retelling of Shakespeare's classic tragedy, 'Hamlet'",
      categories: drama._id,
    }),
    new Book({
      title: "The Crucible",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRq1HZXxozoA6IBngn5JYcwIrXJs7h8HErOfL06zu4K&usqp=CAE&s",
      quantity: 14,
      price: 11,
      description: "This book was written during the height of the Army McCarthy Hearings, when writers were investigated by Senator Joe McCarthy and his side-kick Roy Cohen for their suspected left-wing leanings, and were often alleged to be Communists or Soviet spies. ",
      categories: drama._id,
    }),
    new Book({
      title: "The Complete Works of William Shakespeare",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTUAgmjX4TQYHhdN-ywj3FNZCjGyeME10wa73554EdQ&usqp=CAE&s",
      quantity: 1,
      price: 5.3,
      description: "William Shakespeare (1564-1616) is acknowledged as the greatest dramatist of all time. He excels in plot, poetry and wit, and his talent encompasses the great tragedies of Hamlet, King Lear, Othello and Macbeth as well as the moving history plays and the comedies such as A Midsummer Night's Dream, The Taming of the Shrew and As You Like It with their magical combination of humour, ribaldry and tenderness.",
      categories: drama._id,
    }),
    new Book({
      title: "Othello",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8utAbA1TbsFbsRWXPa1UoRGoeBAUPgMSEs5GzoYE&usqp=CAE&s",
      quantity: 51,
      price: 14.2,
      description: "In Othello, Shakespeare creates a powerful drama out of a marriage between the eerie Moor Othello and the Venetian woman Desdemona that begins with escapism and mutual devotion and ends with jealous rage and rage. died. Shakespeare builds many distinctions into his heroes and heroines, including race, age, and cultural background. However, most readers and viewers believe that the couple's strong love will overcome these differences not because of Iago, who sets out to destroy Othello. Iago's false hints about Desdemona's infidelity draw Othello into his plans, and Desdemona suffers Othello's horrific physical and verbal attacks.",
      categories: drama._id,
    }),
    new Book({
      title: "Macbeth",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1w5W3tUWageUag7F1yODQMIU-N_r_G2SnmNrt-Ip1rs-Ham12",
      quantity: 18,
      price: 6.49,
      description: "Shakespeare's Macbeth is one of the greatest tragic dramas the world has known. Macbeth himself, a brave warrior, is fatally impelled by supernatural forces, by his proud wife, and by his own burgeoning ambition.",
      categories: drama._id,
    }),
    new Book({
      title: "Antigone",
      image: "https://bizweb.dktcdn.net/100/180/408/products/yeu-sach-cua-antigone-03-d2ffabd9-7a81-4445-b303-0df73440dd4e.jpg?v=1633334950460",
      quantity: 9,
      price: 9.8,
      description: `The author uses the point of view of Hegel and Lacan - whose readings of Antigone are most influential ever - to challenge themselves, and try to answer the question: 'What would happen if distracted learn Antigone, instead of Oedipus, as your starting point?'`,
      categories: drama._id,
    }),
    new Book({
      title: "Noël Coward",
      image: "https://www.dcthomsonshop.co.uk/media/catalog/product/cache/b9792c8b49179a5cb196c29de83d77f1/n/o/noel_coward_bbc_radio_drama_collection.jpg",
      quantity: 19,
      price: 32.5,
      description: "Seven BBC radio full-cast productions of Noël Coward’s classic plays – plus bonus material including a profile of Coward and extracts from his diaries. Renowned for his wit, style and sophistication, Noël Coward was one of the greatest playwrights of the twentieth century. His plays, set in the glittering world of high society in which he lived, are much admired and have remained in the popular theatre repertoire to this day.",
      categories: drama._id,
    }),
    new Book({
      title: "Noughts & Crosses",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRyIUA6ykPpDQ3OTkooCktCFjz5EeyXOnAAojLq3V6r&usqp=CAE&s",
      quantity: 27,
      price: 8.14,
      description: "Sephy is a Cross -- a member of the dark-skinned ruling class. Callum is a Nought -- a “colourless” member of the underclass who were once slaves to the Crosses. The two have been friends since early childhood, but that’s as far as it can go. In their world, Noughts and Crosses simply don’t mix. Against a background of prejudice and distrust, intensely highlighted by violent terrorist activity, a romance builds between Sephy and Callum -- a romance that is to lead both of them into terrible danger. Can they possibly find a way to be together?",
      categories: drama._id,
    }),
    new Book({
      title: "Harry Potter and the Cursed Child",
      image: "https://www.nxbtre.com.vn/Images/Book/nxbtre_full_21422017_044234.jpg",
      quantity: 17,
      price: 11.2,
      description: "The script for Harry Potter and the Cursed Child was written based on a story by JK Rowling, Jack Thorne and John Tiffany. From familiar characters in the Harry Potter series, the script is about the adventures of the descendants, the intervention in the timeline has caused unexpected changes to the seemingly peaceful future after its absence. Lord Voldemort",
      categories: drama._id,
    }),
    new Book({
      title: "The Faust Legend",
      image: "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQVcSW1shkKJTaQyRq2eNFaYVu0FuhSruJqy0MOTRy-8-kNtpp1",
      quantity: 17,
      price: 30.33,
      description: `Livraison GRATUITE (0,01€ pour les livres) en point retrait (selon éligibilité des articles). Détails
      What do men and women desire? For what will they barter their immortal souls? These two questions have haunted Western society, and these persistent queries find their fullest embodiment in the Faust legend. This memorable story, told and retold in novels, prose fiction, and drama, has also profoundly influenced music, art, and cinema. Sara Munson Deats explores its impact, tracing the development of the Faust topos from the seminal works of Marlowe and Goethe to the large number of dramatic and cinematic adaptations which have fascinated audiences and readers throughout the centuries. `,
      categories: drama._id,
    }),
    new Book({
      title: "Born a Crime",
      image: "https://images-na.ssl-images-amazon.com/images/I/917LEdmXT4L.jpg",
      quantity: 14,
      price: 12.14,
      description: ` WINNER OF THE THURBER PRIZE   The compelling, inspiring, (often comic) coming-of-age story of Trevor Noah, set during the twilight of apartheid and the tumultuous days of freedom that followed.   One of the comedy world's brightest new voices, Trevor Noah is a light-footed but sharp-minded observer of the absurdities of politics, race and identity, sharing jokes and insights drawn from the wealth of experience acquired in his relatively young life. As host of the US hit show The Daily Show with Trevor Noah`,
      categories: comedy._id,
    }),
    new Book({
      title: "Tres Hombres en una Barca",
      image: "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcRbhreDsFHgXIQSUwI1qu7uyuc5FuwPR3oqLmds_XwDDLPfveqE",
      quantity: 31,
      price: 13.7,
      description: `A comic masterpiece that has never been out of print since it was first published in 1889, Jerome K. Jerome's Three Men in a Boat includes an introduction and notes by Jeremy Lewis in Penguin Classics.

      Martyrs to hypochondria and general seediness, J. and his friends George and Harris decide that a jaunt up the Thames would suit them to a 'T'. But when they set off, they can hardly predict the troubles that lie ahead with tow-ropes, unreliable weather forecasts and tins of pineapple chunks - not to mention the devastation left in the wake of J.'s small fox-terrier Montmorency. Three Men in a Boat was an instant success when it appeared in 1889, and, with its benign escapism, authorial discursions and wonderful evocation of the late-Victorian 'clerking classes', it hilariously captured the spirit of its age.`,
      categories: comedy._id,
    }),
    new Book({
      title: "Hyperbole and a Half",
      image: "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcR-4JgmqJYFKPqSiuYkK0ciQrdmRq94q5APGMchAxzqNNrbQk2X",
      quantity: 19,
      price: 23.77,
      description: `Hilarious stories about life's mishaps from the creator of the immensely popular blog 'Hyperbole and a Half'. Fully illustrated with over 50% new material.

      Hyperbole and A Half is a blog written by a 20-something American girl called Allie Brosh. She tells fantastically funny, wise stories about the mishaps of her everyday life, with titles like 'Why Dogs Don't Understand Basic Concepts Like Moving' and 'The God of Cake'. She accompanies these with naive drawings using Paint on her PC.`,
      categories: comedy._id,
    }),
    new Book({
      title: "Frog and Toad",
      image: "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcRhsMILr3t57FVVdshqtTCH3AcG6Yn5NkxWg0XzVhxbJR3UF-7X",
      quantity: 24,
      price: 9.45,
      description: `Full of wry humor and deep compassion for our modern vulnerabilities, the stories in Frog and Toad Are Doing Their Best perfectly capture the heartwarming authenticity of Lobel’s famous amphibian friends while revealing razor-sharp truths about the world we live in today. Through Frog and Toad, we see the anxieties that are woven throughout our everyday existence, from our well-meaning but often-failed attempts at practicing self-care to our struggle to balance the gifts and burdens of technology. Toad ponders a variety of questionable schemes to pay off his credit cards, while Frog spends too much time scrolling through the newsfeed on his phone. But despite their daily frustrations and existential concerns, they know that having a friend to share life’s burdens makes even the darkest days brighter`,
      categories: comedy._id,
    }),
    new Book({
      title: "Robin",
      image: "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcT2gREyhBEnYwq56DvZt2iyWc0dOvs6dL0ZkJUwnIw-_A6UsxP6",
      quantity: 14,
      price: 11,
      description: `Full of wry humor and deep compassion for our modern vulnerabilities, the stories in Frog and Toad Are Doing Their Best perfectly capture the heartwarming authenticity of Lobel’s famous amphibian friends while revealing razor-sharp truths about the world we live in today. Through Frog and Toad, we see the anxieties that are woven throughout our everyday existence, from our well-meaning but often-failed attempts at practicing self-care to our struggle to balance the gifts and burdens of technology. Toad ponders a variety of questionable schemes to pay off his credit cards, while Frog spends too much time scrolling through the newsfeed on his phone. But despite their daily frustrations and existential concerns, they know that having a friend to share life’s burdens makes even the darkest days brighter`,
      categories: comedy._id,
    }),
    new Book({
      title: "All about Me!",
      image: "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcSq30UyjaeOcQzs6vDaFzbPIYZt75AIX916Mtol9_xn_gIOoz8A",
      quantity: 21,
      price: 15.4,
      description: `All About Me! charts Mel Brooks’s meteoric rise from a Depression-era kid in Brooklyn to the recipient of the National Medal of Arts. Whether serving in the United States Army in World War II, or during his burgeoning career as a teenage comedian in the Catskills, Mel was always mining his experiences for material, always looking for the perfect joke. His iconic career began with Sid Caesar’s Your Show of Shows, where he was part of the greatest writers’ room in history, which included Carl Reiner, Neil Simon, and Larry Gelbart. After co-creating both the mega-hit 2000 Year Old Man comedy albums and the classic television series Get Smart, Brooks’s stellar film career took off. He would go on to write, direct, and star in The Producers, The Twelve Chairs, Blazing Saddles, Young Frankenstein, Silent Movie, High Anxiety, and Spaceballs, as well as produce groundbreaking and eclectic films, including The Elephant Man, The Fly, and My Favorite Year. Brooks then went on to conquer Broadway with his record-breaking, Tony-winning musical, The Producers.`,
      categories: comedy._id,
    }),
    new Book({
      title: "Eating Salad Drunk",
      image: "https://images-na.ssl-images-amazon.com/images/I/41ioPCIktSL._SX342_SY445_QL70_ML2_.jpg",
      quantity: 11,
      price: 9.23,
      description: `"A hilarious read that also honors the origin of the haiku. No, seriously. Read the introduction and you’ll see what I mean. Yeah, I know you don’t normally read introductions but you should make an exception here. Just do it. God for once in your life, Chris, just read an entire book cover to cover would it kill you to commit fully to one goddamn thing?" ―Rachel Bloom, co-creator and star of the award-winning TV series Crazy Ex-Girlfriend`,
      categories: comedy._id,
    }),
    new Book({
      title: "How to be Perfect",
      image: "https://m.media-amazon.com/images/I/41Ym1m-BeRL._SY346_.jpg",
      quantity: 27,
      price: 13.1,
      description: `* From the writer and executive producer of the award-winning Netflix series The Good Place that made moral philosophy fun: a foolproof guide to making the correct moral decision in every situation you ever encounter, anywhere on earth, forever *

'An absolute breeze to read; funny and enlightening and revealing' - Guardian`,
      categories: comedy._id,
    }),
    new Book({
      title: "Priestdaddy",
      image: "https://images-na.ssl-images-amazon.com/images/I/51-gRPQn1NL._SX331_BO1,204,203,200_.jpg",
      quantity: 23,
      price: 9.23,
      description: `Great Experience. Great Value.
      Enjoy a great reading experience when you buy the Kindle edition of this book. Learn more about Great on Kindle, available in select categories.`,
      categories: comedy._id,
    }),
    new Book({
      title: "I Am Not a Wolf",
      image: "https://m.media-amazon.com/images/I/51ugndBbG5S.jpg",
      quantity: 25,
      price: 10.53,
      description: `You are a HUMAN MAN navigating every day life, dating, bus etiquette, and other important human concerns. You are definitely NOT A WOLF. 
      Life is good. You have a job, an apartment in a nice part of town, and an online dating profile that’s recently yielded as many as three matches. From the outside, it would appear you’re a human man that has all the pieces of a stable and functional life. But you also have a horrible secret. You’re not a human man at all. You're a WOLF. `,
      categories: comedy._id,
    }),
    new Book({
      title: "Friday Night Lights",
      image: "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1266468877l/85431.jpg",
      quantity: 11,
      price: 10.3,
      description: `Return once again to the enduring account of life in the Mojo lane, to the Permian Panthers of Odessa -- the winningest high school football team in Texas history. Odessa is not known to be a town big on dreams, but the Panthers help keep the hopes and dreams of this small, dusty town going. Socially and racially divided, its fragile economy follows the treacherous boom-bust path of the oil business.In bad times, the unemployment rate barrels out of control; in good times, its murder rate skyrockets. But every Friday night from September to December, when the Permian High School Panthers play football, this West Texas town becomes a place where dreams can come true. With frankness and compassion, Bissinger chronicles one of the Panthers' dramatic seasons and shows how single-minded devotion to the team shapes the community and inspires-and sometimes shatters-the teenagers who wear the Panthers' uniforms. Includes Reader's Group Guide inside. Now a major motion picture starring Billy Bob Thorton.`,
      categories: sport._id,
    }),
    new Book({
      title: "Paper Lion",
      image: "https://images-na.ssl-images-amazon.com/images/I/41RJR2mflPL._SX302_BO1,204,203,200_.jpg",
      quantity: 12,
      price: 7.21,
      description: `The book that made a legend -- and captures America's sport in detail that's never been matched, featuring a foreword by Nicholas Dawidoff and never-before-seen content from the Plimpton Archives.

      George Plimpton was perhaps best known for Paper Lion, the book that set the bar for participatory sports journalism. With his characteristic wit, Plimpton recounts his experiences in talking his way into training camp with the Detroit Lions, practicing with the team, and taking snaps behind center. His breezy style captures the pressures and tensions rookies confront, the hijinks that pervade when sixty high-strung guys live together in close quarters, and a host of football rites and rituals.`,
      categories: sport._id,
    }),
    new Book({
      title: "Moneyball",
      image: "https://salt.tikicdn.com/cache/400x400/media/catalog/product/i/m/image_1_1078.jpg.webp",
      quantity: 12,
      price: 12.23,
      description: `Moneyball is a quest for the secret of success in baseball. Following the low-budget Oakland Athletics, their larger-than-life general manger, Billy Beane, and the strange brotherhood of amateur baseball enthusiasts, Michael Lewis has written not only "the single most influential baseball book ever" (Rob Neyer, Slate) but also what "may be the best book ever written on business" (Weekly Standard).`,
      categories: sport._id,
    }),
    new Book({
      title: "The Sweet Science",
      image: "https://m.media-amazon.com/images/I/51niN714FxL._SY346_.jpg",
      quantity: 21,
      price: 21.2,
      description: `Great Experience. Great Value.
      Enjoy a great reading experience when you buy the Kindle edition of this book. Learn more about Great on Kindle, available in select categories.`,
      categories: sport._id,
    }),
    new Book({
      title: "Among the Thugs",
      image: "https://upload.wikimedia.org/wikipedia/en/thumb/0/07/Among_the_Thugs.jpg/220px-Among_the_Thugs.jpg",
      quantity: 15,
      price: 11.26,
      description: `Among the Thugs: The Experience, and the Seduction, of Crowd Violence is a 1990 work of journalism by American writer Bill Buford documenting football hooliganism in the United Kingdom.

      Buford, who lived in the UK at the time, became interested in crowd hooliganism when, on his way home from Cardiff in 1982 he boarded a train that was commandeered by supporters coming from a football match. He spent the next eight years going to football matches, befriending supporters, and witnessing riots, resulting in this book.`,
      categories: sport._id,
    }),
    new Book({
      title: "The Miracle of Castel",
      image: "https://images-na.ssl-images-amazon.com/images/I/51AMxcaVlhL._SX317_BO1,204,203,200_.jpg",
      quantity: 18,
      price: 21.23,
      description: `Master storyteller Joe McGinniss travels to Italy to cover the unlikely success of a ragtag minor league soccer team--and delivers a brilliant and utterly unforgettable story of life in an off-the-beaten-track Italian village.

      When Joe McGinniss sets out for the remote Italian village of Castel di Sangro one summer, he merely intends to spend a season with the village's soccer team, which only weeks before had, miraculously, reached the second-highest-ranking professional league in the land. But soon he finds himself embroiled with an absurd yet irresistible cast of characters, including the team's owner, described by the New York Times as "straight out of a Mario Puzo novel," and coach Osvaldo Jaconi, whose only English word is the one he uses to describe himself: "bulldozer."  `,
      categories: sport._id,
    }),
    new Book({
      title: "The Blind Side",
      image: "https://images-na.ssl-images-amazon.com/images/I/31UFcJLHnGL._SX331_BO1,204,203,200_.jpg",
      quantity: 13,
      price: 7.23,
      description: `"Lewis has such a gift for storytelling…he writes as lucidly for sports fans as for those who read him for other reasons." ―Janet Maslin, New York Times
      
      When we first meet him, Michael Oher is one of thirteen children by a mother addicted to crack; he does not know his real name, his father, his birthday, or how to read or write. He takes up football, and school, after a rich, white, Evangelical family plucks him from the streets. Then two great forces alter Oher: the family’s love and the evolution of professional football itself into a game where the quarterback must be protected at any cost. Our protagonist becomes the priceless package of size, speed, and agility necessary to guard the quarterback’s greatest vulnerability, his blind side.`,
      categories: sport._id,
    }),
    new Book({
      title: "Laughing in the Hills",
      image: "https://images-na.ssl-images-amazon.com/images/I/51syoDRGdeL._SX331_BO1,204,203,200_.jpg",
      quantity: 22,
      price: 14.21,
      description: `Bill Barich burst onto the literary scene more than twenty-five years ago with this remarkable account of racetrack life. Holed up in a cheap motel in Albany, California, only a few miles from Golden Gate Fields, he looked to the track to help him make sense of his life during a dark peiod of loss and challenge. With rare sensitivity, he captured the gritty world of the backstretch, and also its poetry, as few other writers have done. Laughing in the Hills, which was first serialized in the New Yorker, has become a classic of sporting literature and a must for anyone who loves horses and the world they create.

      “It is a lovely, valuable book, introspective without being self-servingly so, affectionate but never saccharine in its evocation of racetrack life, witty and perceptive throughout.” —Jonathan Yardley, Sports Illustrated`,
      categories: sport._id,
    }),
    new Book({
      title: "The Last Shot",
      image: "https://images-na.ssl-images-amazon.com/images/I/51gdhCuL+2L._SX314_BO1,204,203,200_.jpg",
      quantity: 17,
      price: 14.32,
      description: `For the average American boy, a basketball scholarship to college is not a necessity. But for many young athletes at Lincoln High School in Coney Island, New York, it is the only escape from the crime and poverty of the inner city. In The Last Shot, author Darcy Frey chronicles the hopes and aspirations of four of Lincoln High's most promising players. What Frey finds is an environment that, by stressing the game above all else, has left its young athletes with nowhere to turn but to the glamorous coaches, slick recruiters, and million-dollar athletic companies who offer everything but guarantee nothing. Gracefully and compassionately written, The Last Shot is a startling and disillusioning exposé of inner-city life and the big business of college basketball.`,
      categories: sport._id,
    }),
    new Book({
      title: "Levels of the Game",
      image: "https://images-na.ssl-images-amazon.com/images/I/41LqWYROVfL._SX331_BO1,204,203,200_.jpg",
      quantity: 27,
      price: 9.25,
      description: `This account of a tennis match played by Arthur Ashe against Clark Graebner at Forest Hills in 1968 begins with the ball rising into the air for the initial serve and ends with the final point. McPhee provides a brilliant, stroke-by-stroke description while examining the backgrounds and attitudes which have molded the players' games.`,
      categories: sport._id,
    }),
  ];

  for (book of books) {
    var newBook = new Book(book);
    await newBook.save();
  }
}
module.exports = {
    seedBook,
};
