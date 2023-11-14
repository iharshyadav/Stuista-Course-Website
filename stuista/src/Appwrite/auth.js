// import conf from "../Conf/Conf";

import {Client, Account, Databases} from "appwrite";

const client = new Client();

client.setEndpoint('https://cloud.appwrite.io/v1')
.setProject('654739634a8f958f0d8c')

export const account = new Account(client);
export const database = new Databases(client, "65475f35559cb809691b");