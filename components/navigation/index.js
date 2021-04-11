import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "./index.module.css";
import cn from "classnames";
import Button from "../button";

function Navigation() {
  const [state, setState] = useState(
    {
      links: [
        {
          id: 1,
          name: "Home",
          to: "/",
        },
        {
          id: 2,
          name: "Features",
          to: "/",
        },
        {
          id: 3,
          name: "Pricing",
          to: "/",
        },
        {
          id: 4,
          name: "Blog",
          to: "/",
        },
      ],
      activeLink: 1,
    },
    []
  );

  const handleClick = (id) => {
    setState({ ...state, activeLink: id });
  };

  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <Link href="/">
          <a>
            <img src="/images/logo.svg" alt="logo" />
          </a>
        </Link>
      </div>
      <nav className={styles.nav}>
        {state.links.map((link) => (
          <Link href={link.to} key={link.id}>
            <a
              onClick={() => handleClick(link.id)}
              className={
                link.id === state.activeLink ? styles.active : styles.link
              }
            >
              {link.name}
            </a>
          </Link>
        ))}
      </nav>
      <Button appearance="nav_btn">Get Started</Button>
    </header>
  );
}

export default Navigation;
