const data = [
  {
    id: 1,
    question: "Rolex is a company that specializes in what type of product?",
    answers: [
      {
        text: "Phone",
        correct: false,
      },
      {
        text: "Watches",
        correct: true,
      },
      {
        text: "Food",
        correct: false,
      },
      {
        text: "Cosmetic",
        correct: false,
      },
    ],
  },
  {
    id: 2,
    question: "When did the website `Facebook` launch?",
    answers: [
      {
        text: "2004",
        correct: true,
      },
      {
        text: "2005",
        correct: false,
      },
      {
        text: "2006",
        correct: false,
      },
      {
        text: "2007",
        correct: false,
      },
    ],
  },
  {
    id: 3,
    question: "Who played the character of harry potter in movie?",
    answers: [
      {
        text: "Johnny Deep",
        correct: false,
      },
      {
        text: "Leonardo Di Caprio",
        correct: false,
      },
      {
        text: "Denzel Washington",
        correct: false,
      },
      {
        text: "Daniel Red Cliff",
        correct: true,
      },
    ],
  },
  {
    id: 4,
    question: "Best Player in Cricket ?",
    answers: [
      {
        text: "MS Dhoni",
        correct: true,
      },
      {
        text: "Virat Kohli",
        correct: false,
      },
      {
        text: "Sachin Tendualkar",
        correct: false,
      },
      {
        text: "Rohit Sharma",
        correct: false,
      },
    ],
  },
  {
    id: 5,
    question: "Who is the first woman to successfully climb K2, the world’s second highest mountain peak?",
    answers: [
      {
        text: "Junko Tabei",
        correct: false,
      },
      {
        text: "Wanda Rutkiewicz",
        correct: true,
      },
      {
        text: "Tamae Watanabe",
        correct: false,
      },
      {
        text: "Chantal Mauduit",
        correct: false,
      },
    ],
  },
  {
    id: 6,
    question: "What was the title of the thesis that Dr. B. R. Ambedkar submitted to the London School of Economics for which he was awarded his doctorate in 1923?",
    answers: [
      {
        text: "The Want and Means of India ",
        correct: false,
      },
      {
        text: "The Problem of the Rupee ",
        correct: true,
      },
      {
        text: "National Dividend of India",
        correct: false,
      },
      {
        text: "The Law and Lawyers",
        correct: false,
      },
    ],
  },
  {
    id: 7,
    question: "Which was the first mountain peak above 8,000 metres in height to be summited by humans?",
    answers: [
      {
        text: "Lhotse ",
        correct: false,
      },
      {
        text: "Annapurna ",
        correct: true,
      },
      {
        text: "Kanchenjunga ",
        correct: false,
      },
      {
        text: "Makalu",
        correct: false,
      },
    ],
  },
  {
    id: 8,
    question: "Who, in 1978, became the first person to be born in the continent of Antarctica?",
    answers: [
      {
        text: "Emilio Palma",
        correct: true,
      },
      {
        text: "James Weddell ",
        correct: false,
      },
      {
        text: "Nathaniel Palmer",
        correct: false,
      },
      {
        text: "Charles Wilkes",
        correct: false,
      },
    ],
  },
  {
    id: 9,
    question: "The International Literacy Day is observed on?",
    answers: [
      {
        text: "Sep 8",
        correct: true,
      },
      {
        text: "Nov 28",
        correct: false,
      },
      {
        text: "May 2",
        correct: false,
      },
      {
        text: "Sep 22",
        correct: false,
      },
    ],
  },
  {
    id: 10,
    question: "The language of Lakshadweep. a Union Territory of India, is",
    answers: [
      {
        text: "Tamil",
        correct: false,
      },
      {
        text: "Hindi",
        correct: false,
      },
      {
        text: "Malyalam",
        correct: true,
      },
      {
        text: "Telugu",
        correct: false,
      },
    ],
  },
  {
    id: 11,
    question: "In which group of places the Kumbha Mela is held every twelve years?",
    answers: [
      {
        text: "Ujjain. Purl; Prayag. Haridwar",
        correct: false,
      },
      {
        text: "Prayag. Haridwar, Ujjain,. Nasik",
        correct: true,
      },
      {
        text: "Rameshwaram. Purl, Badrinath. Dwarika",
        correct: false,
      },
      {
        text: "Chittakoot, Ujjain, Prayag,'Haridwar",
        correct: false,
      },
    ],
  },
  {
    id: 12,
    question: "Kalarippayat isthe martial art  of the State of ?",
    answers: [
      {
        text: "Madhya Pradesh",
        correct: false,
      },
      {
        text: "Mizoram",
        correct: false,
      },
      {
        text: "Nagaland",
        correct: false,
      },
      {
        text: "Kerala",
        correct: true,
      },
    ],
  },
  {
    id: 13,
    question: "Where was the BRICS summit held in 2014?",
    answers: [
      {
        text: "Brazil",
        correct: true,
      },
      {
        text: "Russia",
        correct: false,
      },
      {
        text: "India",
        correct: false,
      },
      {
        text: "China",
        correct: false,
      },
    ],
  },
  {
    id: 14,
    question: "Which city of India was first of all affected by plague?",
    answers: [
      {
        text: "Jaipur",
        correct: false,
      },
      {
        text: "Bombay",
        correct: false,
      },
      {
        text: "Kanpur",
        correct: false,
      },
      {
        text: "Surat",
        correct: true,
      },
    ],
  },
  {
    id: 15,
    question: "The wife of which of these famous sports persons was once captain of Indian volleyball team?",
    answers: [
      {
        text: "K.D.Jadav",
        correct: false,
      },
      {
        text: "Dhyan Chand",
        correct: false,
      },
      {
        text: "Prakash Padukone",
        correct: false,
      },
      {
        text: "Milkha Singh",
        correct: true,
      },
    ],
  },
  {
    id: 16,
    question: "Which battle in 1757 marked the beginning of British occupation in India?",
    answers: [
      {
        text: "Plassey",
        correct: true,
      },
      {
        text: "Assaye",
        correct: false,
      },
      {
        text: "Buxar",
        correct: false,
      },
      {
        text: "Cuddalore",
        correct: false,
      },
    ],
  },

];

export default data;