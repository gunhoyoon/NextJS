import { Button, Divider, Header } from "semantic-ui-react";
import styles from "./Item.module.css";

export default function Item({ item }) {
  const {
    image_link,
    name,
    price,
    description,
    updataed_at,
    category,
    product_type,
    product_link,
  } = item;
  return (
    <>
      <div className={styles.wrap}>
        {/* 이미지*/}
        <div className={styles.img_item}>
          <img src={image_link} alt={name} />
        </div>

        {/* 버튼까지 감싼 박스 */}
        <div
          style={{
            height: "200px",
            display: "flex",
            alignItems: "center",
            marginLeft: "20px",
          }}
        >
          <div className={styles.info_item}>
            <strong className={styles.tit_item}>{name}</strong>
            <strong className={styles.num_price}>${price}</strong>
            <span className={styles.txt_info}>
              {category ? `${category}/` : ""}
              {product_type}
            </span>
            <Button color="orange" style={{ marginTop: "5px" }}>
              구매하기
            </Button>
          </div>
        </div>
        {/*  */}
      </div>
      <Divider />
      <div style={{ height: "120px" }}>
        <Header as="h3" styles={{ paddingTop: "10px" }}>
          Description
        </Header>
        <p className={styles.des_info}>{description}</p>
      </div>
    </>
  );
}
