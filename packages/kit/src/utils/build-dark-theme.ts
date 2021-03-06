import buildTheme from "./build-theme";
import { Theme } from "../types";

const color: Theme["color"]["core"] = {
  // Gray
  neutral: [
    "#242424",
    "#373737",
    "#474747",
    "#777777",
    "#B1B1B1",
    "#D1D1D1",
    "#F0F0F0",
  ],
  // Blue
  secondary: [
    "#073260",
    "#0A437F",
    "#105094",
    "#1561B2",
    "#237CDA",
    "#8AB0D9",
    "#B9D0E8",
  ],
  // Any
  primary: [
    "#38108A",
    "#41159C",
    "#5A1FD1",
    "#9362F9",
    "#AD87FF",
    "#CDBCFF",
    "#DACDFF",
  ],
  // Green
  success: [
    "#0E6208",
    "#1C7315",
    "#227D1B",
    "#4AA83E",
    "#5ED24F",
    "#9CE592",
    "#C5FFBD",
  ],
  // Yellow/Orange
  warning: [
    "#613806",
    "#97590E",
    "#AF6D1C",
    "#FF8C00",
    "#F7A800",
    "#FFB400",
    "#FFDA80",
  ],
  // Red/Pink
  danger: [
    "#350F0F",
    "#650B0B",
    "#882018",
    "#D84141",
    "#F84747",
    "#FB8585",
    "#FFA8A8",
  ],
};

export default (fontFamily: string) =>
  buildTheme({
    base: "#181818",
    baseInverse: "#FFF",
    boxShadowColor: "#000",
    color,
    disabledOpacity: 0.2,
    fontFamily,
  });
