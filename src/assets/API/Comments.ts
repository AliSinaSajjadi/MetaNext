import ArrowGreen from "../images/arrow-up-right G.png";
import ArrowOrange from "../images/arrow-up-rightO.png";
import Url1 from "../images/Vid1.png";
import Url2 from "../images/Vid2.png";

interface Comment {
  percentage: string;
  arrow: string;
  color: string;
  name: string;
  role: string;
  text: string;
  url: string;
}

const Comments: Comment[] = [
  {
    percentage: "۹۸",
    arrow: ArrowGreen,
    color: "#09C03C",
    name: "آقای علیرضا رودی",
    role: "مدیر عامل ترناو",
    text: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآ",
    url: Url1,
  },
  {
    percentage: "۹۰",
    arrow: ArrowOrange,
    color: "#FF9F1C",
    name: "آقای علیرضا رودی",
    role: "مدیر عامل ترناو",
    text: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآ",
    url: Url2,
  },
  {
    percentage: "۹۸",
    arrow: ArrowGreen,
    color: "#09C03C",
    name: "آقای علیرضا رودی",
    role: "مدیر عامل ترناو",
    text: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآ",
    url: Url1,
  },
  {
    percentage: "۹۰",
    arrow: ArrowOrange,
    color: "#FF9F1C",
    name: "آقای علیرضا رودی",
    role: "مدیر عامل ترناو",
    text: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآ",
    url: Url2,
  },
];

export default Comments;
