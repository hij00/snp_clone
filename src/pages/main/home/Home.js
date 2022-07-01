import { img_scroll, insta_img, most_loved } from "../../../components/db";
import { DualEye } from "./DualEye";
import { Insta } from "./Insta";
import { MainBanner } from "./MainBanner";
import { Scroll } from "./Scroll";
import { Section } from "./Section";
import { Section2 } from "./Section2";

export const Home = () => {
  return (
    <>
      <MainBanner />
      <Section />
      <Section2 lovedData={most_loved} />
      <Scroll scrollData={img_scroll} />
      <DualEye />
      <Insta instaData={insta_img} />
    </>
  );
};
