import {
  Othent,
  createTransaction,
  signTransaction,
  postTransaction,
  queryAllTransactionsGQL,
  createContract,
  writeContract,
} from "arweavekit";

export default defineNuxtPlugin(() => {
  return {
    provide: {
      Othent,
      createTransaction,
      signTransaction,
      postTransaction,
      queryAllTransactionsGQL,
      createContract,
      writeContract,
    },
  };
});
