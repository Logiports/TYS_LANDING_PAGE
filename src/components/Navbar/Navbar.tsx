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
//components
import { ThemedContainer } from "@/components_themed";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <ThemedContainer element="header" className={classes.navbar}>
      <ThemedContainer
        element="div"
        backgroundColor="primary-light"
        className={classes.ontop}
      >
        <Link href={SystemsURLs.CLIENTES} target="_blank">
          Clientes
        </Link>
        <div className={classes.ontop__divider}>|</div>
        <Link href={SystemsURLs.PROVEEDORES} target="_blank">
          Proveedores
        </Link>
      </ThemedContainer>
      <ThemedContainer element="header" className={classes.navbar__container}>
        <Link href="/" className={classes.navbar__logo}>
          <Image src={logo} alt="logo" width={65} />
        </Link>
        <ThemedContainer element="div" className={classes.navbar__toggle_menu}>
          Botton
        </ThemedContainer>
        <ThemedContainer element="div" className={classes.navbar__list}>
          <Link href="/" className={classes.navbar__item}>
            Inicio
          </Link>
          <Link
            href={MainRoutesModel.SERVICES}
            className={classes.navbar__item}
          >
            Servicios
          </Link>
          <Link href={MainRoutesModel.ABOUT} className={classes.navbar__item}>
            ¿Quienes Somos?
          </Link>
          <Link href={MainRoutesModel.HISTORY} className={classes.navbar__item}>
            Historia
          </Link>
          <Link href="/" className={classes.navbar__item}>
            Contacto
          </Link>
        </ThemedContainer>
      </ThemedContainer>
    </ThemedContainer>
  );
};

export default Navbar;
