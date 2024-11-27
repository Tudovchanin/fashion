import "./Blog.css";
import Card from "../Card/Card";
import data from "../../data/data.js";
import React, { useState, useEffect } from "react";
import ButtonPanel from "../ButtonPanel/ButtonPanel.jsx";

const Blog = () => {
  const dataLength = data.length;
  const indexBigCard = 6;
  const quantityCards = 11;
  const arrayBtn = Array.from({ length: Math.ceil(dataLength / quantityCards) }, (_, index) => index + 1);
  const [start, setStart] = useState(0);
  const [end, setEnd] = useState(quantityCards);
  const [cardsData, setCardsData] = useState(data.slice(start, end));
  const [isPrevDisabled, setIsPrevDisabled] = useState(true);
  const [isNextDisabled, setIsNextDisabled] = useState(false);
  const [activeBtn, setActiveBtn] = useState(1);

  useEffect(() => {
    setCardsData(data.slice(start, end));
    if (start > 0) {
      setIsPrevDisabled(false);
    } else {
      setIsPrevDisabled(true);
    }
    if (end >= dataLength) {
      setIsNextDisabled(true);
    } else {
      setIsNextDisabled(false);
    }
  }, [start, end]);

  function handleIndexClick(btn) {
    if (btn === "next") {
      if (end === dataLength ) {
        return;
      }
      if(start + quantityCards >= dataLength) {
        setStart(end);
        setEnd(dataLength);
        setActiveBtn((prev) => ++prev);
        return;
      }
      setStart(start + quantityCards);
      setEnd(end + quantityCards);
      setActiveBtn((prev) => ++prev);
      return;
    }

    if (btn === "prev") {
      if (start === 0) {
        return;
      }
      setStart(start - quantityCards);
      setEnd(end - quantityCards);
      setActiveBtn((prev) => --prev);
      return;
    }

    const count = btn * quantityCards;
    setStart(count - quantityCards);
    setEnd(count);
    setActiveBtn(btn);
  }

  return (
    <div className="wrapper-blog">
      <div className="blog">
        {cardsData.map(
          (cardData, index) =>
            index < indexBigCard && (
              <Card
                key={cardData.id}
                img={cardData.image}
                title={cardData.title}
                paragraph={cardData.paragraph}
                date={cardData.date}
                name={cardData.authorName}
                id={cardData.id}
              />
            )
        )}
{cardsData[indexBigCard] && cardsData[indexBigCard].id && (
  <Card
    key={cardsData[indexBigCard].id}
    img={cardsData[indexBigCard].image}
    title={cardsData[indexBigCard].title}
    paragraph={cardsData[indexBigCard].paragraph}
    date={cardsData[indexBigCard].date}
    name={cardsData[indexBigCard].authorName}
    className={"big-card"}
    footerText={cardsData[indexBigCard].footerText}
    id={cardsData[indexBigCard].id} // Используем id из cardsData
  />
)}

        {cardsData.map(
          (cardData, index) =>
            index > indexBigCard && (
              <Card
                key={cardData.id}
                img={cardData.image}
                title={cardData.title}
                paragraph={cardData.paragraph}
                date={cardData.date}
                name={cardData.authorName}
                id={cardData.id}
              />
            )
        )}
      </div>
    
      <ButtonPanel
        handleIndexClick={handleIndexClick}
        buttonTexts={["< OLDER POST", arrayBtn, "NEXT POST >"]}
        buttonStates={[isPrevDisabled, isNextDisabled]}
				activeBtn={activeBtn}
      />
    </div>
  );
};

export default Blog;
