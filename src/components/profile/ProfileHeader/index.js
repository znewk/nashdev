import React, { useEffect, useState } from "react";
import styles from "./style.module.css";
import { Image } from "react-bootstrap";
import Link from "next/link";

const ProfileHeader = () => {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const token = localStorage.getItem("token"); // Replace 'token' with the actual key for your token

        const response = await fetch(
          "https://api.nashdeveloper.kz/getUserInfo",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${token}`, // Assuming Bearer token, adjust if different
            },
            // Include body if required by the API
          }
        );

        const data = await response.json();
        if (data.success) {
          setUserData(data.user);
        }
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };

    fetchUserData();
  }, []);

  const getOrderLinkByRole = (role) => {
    switch (role) {
      case 1: // Заказчик
        return "/customer/orders/my-orders";
      case 3: // Проектный Менеджер
        return "/pm/orders/my-orders";
    }
  };

  return (
    <div className={styles.header}>
      {userData && (
        <div>
          <div className={styles.topLine}>
            <Link href={getOrderLinkByRole(Number(userData.role_id))}>
              <span>
                Мои заказы -{userData.role_id === 1 && "Заказчик"}
                {userData.role_id === 2 ? "Исполнитель" : ""}
                {userData.role_id === 3 ? "Проектный Менеджер" : ""} -{" "}
                {userData.name}
              </span>
            </Link>
          </div>

          <div className={styles.content}>
            <div className={styles.info}>
              <Image
                src={userData.avatar || "/avatar.png"}
                className={styles.avatar}
              />
              <div className={styles.bio}>
                <span className={styles.types}>
                  {userData.role_id === 1 && "Заказчик"}
                  {userData.role_id === 3 && "Проектный Менеджер"}
                  {userData.role_id === 2 && "Исполнитель"}
                </span>
                <h1 className={styles.name}>{userData.name}</h1>
                {/* Display registration date if available */}
                <span className={styles.date}>На сайте с 18.07.2022</span>
              </div>
            </div>

            <div className={styles.stats}>
              <div className={styles.statBlock}>
                <span className={styles.statTitle}>10</span>
                <span>сделанных заказов</span>
              </div>
              <div className={styles.vr}></div>
              <div className={styles.statBlock}>
                <span className={styles.statTitle}>5</span>
                <span>оставленных отзывов</span>
              </div>
              <div className={styles.vr}></div>
              <div className={styles.statBlock}>
                <span className={styles.statTitle}>0</span>
                <span className={styles.statDesc}>жалоб на заказчика</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
export default ProfileHeader;
