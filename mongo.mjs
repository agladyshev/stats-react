import MongoClient from "mongodb";

import dotenv from "dotenv";

dotenv.config();
const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}${process.env.DB_HOST}/test?retryWrites=true`;

export const fetchAccounts = async () => {
  // Grab influencers' accounts from DB with twitter name filled
  let accounts;
  try {
    const mongo = await MongoClient.connect(uri, { useUnifiedTopology: true });
    const db = mongo.db(process.env.DB_NAME);
    const col = db.collection(process.env.DB_COLLECTION);
    accounts = await col
      .find()
      //   .project({ twitter_name: 1, twitter_id: 1 })
      .toArray();
    mongo.close();
  } catch (e) {
    console.error(e);
  }
  return accounts;
};
