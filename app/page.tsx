import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "./page.module.css";
import os from "os";
const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  console.log("안녕~~ 서버");
  console.log(os.cpus());
  console.log(os.freemem());
  return <h1>홈페이지다!!</h1>;
}
