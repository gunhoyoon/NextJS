// import { Axios } from "axios";
import Axios from "axios";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Item from "../../src/components/Item/Item";

const Post = () => {
  const router = useRouter();
  const { id } = router.query;

  const [item, setItem] = useState({});

  const API_URL = `http://makeup-api.herokuapp.com/api/v1/products/${id}.json`;
  function getData() {
    Axios.get(API_URL).then((res) => {
      setItem(res.data);
    });
  }
  useEffect(() => {
    // undefined가 나오는 id가 있기때문에 그의 대한 대비책임
    if (id && id > 0) {
      getData();
    }
  }, [id]);

  return <Item item={item} />;
};

export default Post;
