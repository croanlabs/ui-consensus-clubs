import * as twitter_usersApi from "./fakeTwitterUser";

const polls = [
  {
    id: 0,
    question: "Who are the most insightful crypto investors?",
    description: "Best investor in crypto.",
    candidates: [
      {
        id: 0,
        poll_id: 0,
        twitter_info: {
          name: "Meltem Demirors",
          description: "<<Description>>",
          twitter_user: "@melt_dem"
        },
        total_tokens_confidence: "0.00000000000000000",
        total_tokens_no_confidence: "0.00000000000000000"
      },
      {
        id: 1,
        poll_id: 0,
        name: "Chris Burniske",
        description: "<<Description>>",
        twitter_user: "@cburniske",
        total_tokens_confidence: "0.00000000000000000",
        total_tokens_no_confidence: "0.00000000000000000"
      },
      {
        id: 5,
        poll_id: 0,
        name: "Cryptobobby",
        description: "Cryptobobby needs a description bhabhabha",
        twitter_user: "@cryptobobby",
        total_tokens_confidence: "0.00000000000000000",
        total_tokens_no_confidence: "0.00000000000000000"
      }
    ]
  },
  {
    id: 1,
    question: "What are the best ICOs in 2018?",
    description: "Best ICOs in 2018.",
    candidates: [
      {
        id: 2,
        poll_id: 1,
        name: "FlipNpik",
        description:
          "FlipNpik is the only ecosystem that allows you to monetize your social media posts by supporting local businesses.",
        twitter_user: "@flipnpik",
        total_tokens_confidence: "0.00000000000000000",
        total_tokens_no_confidence: "0.00000000000000000"
      },
      {
        id: 3,
        poll_id: 1,
        name: "Dominium",
        description:
          "Dominium Blockchain – The one-stop-platform for everything to do with property anywhere in the world!",
        twitter_user: "@Dominium_me",
        total_tokens_confidence: "0.00000000000000000",
        total_tokens_no_confidence: "0.00000000000000000"
      }
    ]
  },
  {
    id: 2,
    question: "What are the best cryptocurrency books of 2018?",
    description: "Best cryptobooks in 2018.",
    candidates: [
      {
        id: 4,
        poll_id: 2,
        name: "The Crypto Intro",
        description: "Author: Nathan Rose",
        twitter_user: "@placeholder",
        total_tokens_confidence: "0.00000000000000000",
        total_tokens_no_confidence: "0.00000000000000000"
      }
    ]
  }
];
