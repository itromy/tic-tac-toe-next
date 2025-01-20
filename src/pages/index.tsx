import Board from "@/components/Board";
import TicTacToeGame from "@/containers/TicTacToeGame";
import Head from "next/head";


export default function Home() {
  return (
    <>
      <Head>
        <title>Tic Tac Toe</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <TicTacToeGame/>
      </main>
    </>
  );
}
