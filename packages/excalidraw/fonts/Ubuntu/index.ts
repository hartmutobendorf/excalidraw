import { GOOGLE_FONTS_RANGES } from "@excalidraw/common";

import { type ExcalidrawFontFaceDescriptor } from "../Fonts";

import Latin from "./UbuntuSans-Regular.woff2";

export const UbuntuFontFaces: ExcalidrawFontFaceDescriptor[] = [
  {
    uri: Latin,
    descriptors: { unicodeRange: GOOGLE_FONTS_RANGES.LATIN, weight: "500" },
  },
];
