import { AiFillStar, AiOutlineStar } from "react-icons/ai";

const displayArtistPopularity = (popularity) => {
  if (popularity >= 0 && popularity < 25) {
    return (
      <>
        <AiFillStar />
        <AiOutlineStar />
        <AiOutlineStar />
        <AiOutlineStar />
      </>
    );
  } else if (popularity >= 25 && popularity < 50) {
    return (
      <>
        <AiFillStar />
        <AiFillStar />
        <AiOutlineStar />
        <AiOutlineStar />
      </>
    );
  } else if (popularity >= 50 && popularity < 75) {
    return (
      <>
        <AiFillStar />
        <AiFillStar />
        <AiFillStar />
        <AiOutlineStar />
      </>
    );
  } else if (popularity >= 75 && popularity <= 100) {
    return (
      <>
        <AiFillStar />
        <AiFillStar />
        <AiFillStar />
        <AiFillStar />
      </>
    );
  } else {
    return (
      <>
        <AiOutlineStar />
        <AiOutlineStar />
        <AiOutlineStar />
        <AiOutlineStar />
      </>
    );
  }
};

export default displayArtistPopularity;
