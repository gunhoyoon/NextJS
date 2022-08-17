import Head from "next/head";
import Image from "next/image";
import { useEffect, useState } from "react";
import styles from "../styles/Home.module.css";
import Axios from "axios";
import ItemList from "../src/components/ItemList";

export default function Home() {
  const [list, setList] = useState([]);
  const API_URL =
    "http://makeup-api.herokuapp.com/api/v1/products.json?brand=maybelline";

  function getData() {
    Axios.get(API_URL).then((res) => {
      setList(res.data);
    });
  }
  useEffect(() => {
    getData();
  }, []);

  return (
    <div>
      <Head>
        <title>HOME | 건호앙마</title>
      </Head>
      <ItemList list={list} />
    </div>
  );
}

// next js에서의 index역할과 app의 역할이 뭔지
