import * as mp from "./art/matchphotos/mp-index.js";

const a = {title: "Cody Rhodes (c) vs. John Cena",
    pix: mp.CODY_CENA, vis: "hide-li"};
const b = {title: "Gunther (c) vs. Jey Uso",
    pix: mp.GUNTHER_JEY, vis: "hide-li"};
const c = {title: "LA Knight (c) vs. Jacob Fatu",
    pix: mp.LA_FATU, vis: "hide-li"};
const d = {title: "Tiffany Stratton (c) vs. Charlotte Flair",
    pix: mp.TIFF_CHAR, vis: "hide-li"};
const e = {title: "AJ Styles vs. Logan Paul",
    pix: mp.AJ_LOGAN, vis: "hide-li"};

const Lheader = {title: "John's List:"};
const L1 = e;
const L2 = d;
const L3 = c;
const L4 = b;
const L5 = a;

export const listL = [Lheader, L1, L2, L3, L4, L5];
