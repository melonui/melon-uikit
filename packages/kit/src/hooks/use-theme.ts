import React from "react";
import { Theme as BaseTheme } from "../types";

import { ThemeContext } from "../providers/theme-provider";

export type Theme = BaseTheme;

export default function useTheme() {
  return React.useContext(ThemeContext);
}
