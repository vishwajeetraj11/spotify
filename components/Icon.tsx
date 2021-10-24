import React from "react";
import IcoMoon, { iconList } from "react-native-icomoon";
import iconSet from "../assets/icon-fonts/selection.json";
// const iconSet = require('../assets/iconFonts/selection.json');

// console.log(iconList(iconSet));

interface IIcons {
  name: string;
  color: string;
  size: number;
}

export const Icon: React.FC<IIcons> = ({ name, ...props }) => {
  return <IcoMoon iconSet={iconSet} name={name} {...props} />;
};

/*
import Icon from "./icon";
<Icon name="pencil" size={20} color="orange" />;
 */
