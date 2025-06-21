import {
  blue,
  blueDark,
  green,
  greenDark,
  indigo,
  indigoDark,
  red,
  redDark,
  sand,
  sandDark,
} from "@radix-ui/colors"

export type Colors = typeof colors.light & typeof colors.dark

export const colors = {
  light: {
    ...indigo,
    ...sand,
    ...blue,
    ...red,
    ...green,
  },
  dark: {
    ...indigoDark,
    ...sandDark,
    ...blueDark,
    ...redDark,
    ...greenDark,
  },
}
