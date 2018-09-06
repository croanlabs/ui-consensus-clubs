export const twitter_users = [
  {
    id: "0",
    twitter_user: "@melt_dem",
    name: "Meltem Demirors",
    description: "<<Description>>"
  },
  {
    id: "1",
    twitter_user: "@cburniske",
    name: "Chris Burniske",
    description: "<<Description>>"
  },
  {
    id: "5",
    twitter_user: "@cryptobobby",
    name: "Cryptobobby",
    description: "Cryptobobby needs a description bhabhabha"
  },
  {
    id: "2",
    twitter_user: "@flipnpik",
    name: "FlipNpik",
    description:
      "FlipNpik is the only ecosystem that allows you to monetize your social media posts by supporting local businesses."
  },
  {
    id: "3",
    twitter_user: "@Dominium_me",
    name: "Dominium",
    description:
      "Dominium Blockchain – The one-stop-platform for everything to do with property anywhere in the world!"
  },
  {
    id: "4",
    twitter_user: "@placeholder",
    name: "The Crypto Intro",
    description: "Author: Nathan Rose"
  },
  {
    id: "6",
    twitter_user: "@whatthe",
    name: "TheCryptoMan",
    description: "Writer of Crypto"
  },
  {
    id: "7",
    twitter_user: "@arisu",
    name: "Arisu",
    description: "I am the expert in crypto"
  },
  {
    id: "8",
    twitter_user: "@ininin",
    name: "Yo",
    description: "I am familiar with investment"
  },
  {
    id: "9",
    twitter_user: "@wonderland",
    name: "Wonderland",
    description: "I love crypto world"
  }
];

export function getTwitterUsers() {
  return twitter_users.filter(t => t);
}
