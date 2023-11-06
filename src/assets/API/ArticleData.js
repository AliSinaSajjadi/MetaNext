import image1 from "../images/lake.png"
import image2 from "../images/flower.png"
import image3 from "../images/studing.png"
import tag from "../images/tags.png"
const today = new Date();
const lastYear = new Date(today);
lastYear.setFullYear(today.getFullYear() - 1);

function getRandomDate() {
  const randomTime =
    Math.random() * (today.getTime() - lastYear.getTime()) + lastYear.getTime();
  return new Date(randomTime);
}

function getRandomDuration() {
  return Math.floor(Math.random() * 14) + 2; // Random number between 2 and 15
}

const ArticleData = [
  {
    image: image1,
    tag: tag,
    title: "چگونه از راه دوره هم میتونیم کسب و کار خودمون رو مدیریت کنیم",
    duration: getRandomDuration(),
    date: getRandomDate(),
  },
  {
    image: image2,
    tag: tag,
    title: "چگونه از راه دوره هم میتونیم کسب و کار خودمون رو مدیریت کنیم",
    duration: getRandomDuration(),
    date: getRandomDate(),
  },
  {
    image: image3,
    tag: tag,
    title: "چگونه از راه دوره هم میتونیم کسب و کار خودمون رو مدیریت کنیم",
    duration: getRandomDuration(),
    date: getRandomDate(),
  },
  {
    image: image1,
    tag: tag,
    title: "چگونه از راه دوره هم میتونیم کسب و کار خودمون رو مدیریت کنیم",
    duration: getRandomDuration(),
    date: getRandomDate(),
  },
  {
    image: image2,
    tag: tag,
    title: "چگونه از راه دوره هم میتونیم کسب و کار خودمون رو مدیریت کنیم",
    duration: getRandomDuration(),
    date: getRandomDate(),
  },
  {
    image: image3,
    tag: tag,
    title: "چگونه از راه دوره هم میتونیم کسب و کار خودمون رو مدیریت کنیم",
    duration: getRandomDuration(),
    date: getRandomDate(),
  },
];

export default ArticleData;