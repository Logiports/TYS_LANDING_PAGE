"use client";
import { useState } from "react";
import classes from "./navbar.module.css";
//next js
import Link from "next/link";
import Image from "next/image";
//models
import { MainRoutesModel, SystemsURLs } from "@/models";
//logo
import logo from "@/logos/logo_dark.svg";
//icons
import menu_burger from "@/icons/menu-burger.svg";
import arrow_left from "@/icons/arrow-left.svg";
//components
import { ThemedContainer, ThemedLink } from "@/components_themed";
import { SvgIcon } from "../SvgIcon";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  const handleLinkClick = () => {
    setShowMenu(false);
  };

  return (
    <ThemedContainer element="header" className={classes.navbar}>
      <ThemedContainer
        element="div"
        backgroundColor="primary-light"
        className={classes.ontop}
      >
        <ThemedLink href={SystemsURLs.CLIENTES} target="_blank" color="black">
          Clientes
        </ThemedLink>
        <div className={classes.ontop__divider}>|</div>
        <ThemedLink
          href={SystemsURLs.PROVEEDORES}
          target="_blank"
          color="black"
        >
          Proveedores
        </ThemedLink>
      </ThemedContainer>
      <ThemedContainer element="header" className={classes.navbar__container}>
        <Link href="/" className={classes.navbar__logo}>
          <Image src={logo} alt="logo" width={55} />
        </Link>
        <SvgIcon
          src={menu_burger}
          alt="Abrir menu"
          className={classes.navbar__toggle_menu}
          onClick={() => setShowMenu(!showMenu)}
        />
        <ThemedContainer
          element="div"
          className={`${classes.navbar__list} ${
            showMenu && classes["navbar__list--show"]
          }`}
        >
          <ThemedContainer element="div" className={classes.navbar__close_menu}>
            <SvgIcon
              src={arrow_left}
              alt="Cerrar menu"
              width={30}
              onClick={() => setShowMenu(false)}
            />
          </ThemedContainer>
          <Link
            href="/"
            className={classes.navbar__item}
            onClick={handleLinkClick}
          >
            Inicio
          </Link>
          <Link
            href={MainRoutesModel.SERVICES}
            className={classes.navbar__item}
            onClick={handleLinkClick}
          >
            Servicios
          </Link>
          <Link
            href={MainRoutesModel.ABOUT}
            className={classes.navbar__item}
            onClick={handleLinkClick}
          >
            ¿Quienes Somos?
          </Link>
          <Link
            href={MainRoutesModel.HISTORY}
            className={classes.navbar__item}
            onClick={handleLinkClick}
          >
            Historia
          </Link>
          <Link
            href={MainRoutesModel.CONTACT}
            className={classes.navbar__item}
            onClick={handleLinkClick}
          >
            Contacto
          </Link>
        </ThemedContainer>
      </ThemedContainer>
    </ThemedContainer>
  );
};

export default Navbar;
