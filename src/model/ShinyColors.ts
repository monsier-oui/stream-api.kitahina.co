import { Album } from "../types/Album.ts";
import BrilliantWing from "./shinycolors/2018_BrilliantWing.ts";
import FragmentWing from "./shinycolors/2019_FragmentWing.ts";
import GradateWing from "./shinycolors/2020_GradateWing.ts";
import LayeredWing from "./shinycolors/2021_LayeredWing.ts";
import ColorfulFeathers from "./shinycolors/2021_ColorfulFeathers.ts";
import SyntheSide from "./shinycolors/2021_SyntheSide.ts";
import OffVocalCollection from "./shinycolors/2022_OffVocalCollection.ts";
import PanoramaWing from "./shinycolors/2022_PanoramaWing.ts";
import WingCollection from "./shinycolors/2023_WingCollection.ts";
import Other from "./shinycolors/Other.ts";

const Albums: Array<Album> = [];

const ShinyColors: Array<Album> = Albums.concat(
  BrilliantWing,
  FragmentWing,
  GradateWing,
  LayeredWing,
  ColorfulFeathers,
  SyntheSide,
  OffVocalCollection,
  PanoramaWing,
  WingCollection,
  Other,
);

export default ShinyColors;
