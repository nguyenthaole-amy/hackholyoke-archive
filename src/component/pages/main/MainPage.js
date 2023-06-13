import React, { useEffect } from "react";
import "./MainPage.css";
import "../aboutus/AboutPage.css";
import title from "../../../img/HackHolyoke-1.png";
import hudsonrivertrading from "../../../img/hudson_river_trading.png";
import poweradvocate from "../../../img/poweradvocate.png";
import { MainChallengeItems } from "./MainChallengeItems";
import ChallengeCircle from "./ChallengeCircle";
import { FaqItems } from "./FaqItems";
import FaqContent from "./FaqContent";
import CountDownTimer from "./CountDownTimer";

function MainPage() {
  useEffect(() => {
    document.title = "HackHolyoke 2022";
  }, []);

  const countDownDate = new Date("Nov 12, 2022 00:00:00").getTime();

  let amt = 0;
  let count = 0;

  let amtNarrow = 0;
  let countNarrow = 0;

  const arrayChunk = (FaqItems, n) => {
    const array = FaqItems.slice();
    const chunks = [];
    while (array.length) chunks.push(array.splice(0, n));
    return chunks;
  };

  const countAmount = () => {
    count = amt++;
  };

  const countAmountNarrow = () => {
    countNarrow = amtNarrow++;
  };

  return (
    <div className="main-content-container main-padding-top">
      {/* title div */}
      <div className="main-title">
        <img className="title-img" src={title} alt="title" />
      </div>

      <p className="daysHours">
        {/*Days &emsp;:&emsp; Hours &emsp;:&emsp; Minutes &emsp;:&emsp; Seconds*/}
      </p>
      <div><p className="count-down">LET'S HACK!</p></div>

      <div className="main-title-padding-bottom">
        <p className="main-date">H y b r i d</p>
        <p className="main-date">11.12.2022 ~ 11.13.2022</p>
      </div>

      <hr className="main-hr" />

      {/* about div */}
      <div className="main-text-center main-about">
        <h1 className="main-title-padding-bottom">What is HackHolyoke?</h1>
        <div className="main-about-text">
          HackHolyoke is a 24-hour hackathon hosted every year by students at
          Mount Holyoke College, one of the first historically women’s colleges
          in the US. Initiated in 2014, we have strived to be an inclusive
          hackathon that unites young innovators from a variety of backgrounds.
          With over 50% of HackHolyoke attendees identifying as women and/or
          first-time hackers, our hackathon aims to represent what we hope the
          tech industry will look like.
          {/* (HackHolyoke 2022 will take place on
          November 12-13th, 2022 with a hybrid, digital focus with in-person tea
          breaks, information sessions, and workshops.) */}
        </div>

        <a className="main-button" href="/about">
          About
        </a>
      </div>

      <hr className="main-hr" />

      {/* challenge div */}
      <div className="main-text-center main-challenges">
        <h1 className="main-title-padding-bottom">Challenges</h1>

        <div className="main-flex">
          {MainChallengeItems.map((item) => {
            return (
              <ChallengeCircle key={item.id} name={item.name} img={item.img} />
            );
          })}
        </div>

        <h5 className="check-out-details">
          Check out for more details and prizes!
        </h5>
        <a className="main-button" href="/resources">
          Resources
        </a>
      </div>

      <hr className="main-hr" />

      {/* faq div */}
      <div className="main-faq">
        <h1 className="main-title-padding-bottom">FAQ</h1>

        {/* <div className="faq-flex"> */}
        <div className="faq-wide">
          {arrayChunk([...Array(FaqItems.length).keys()], 2).map((row, i) => (
            <div key={i} className="row justify-content-between">
              {row.map((value, i) => (
                <div key={i} className="col">
                  {countAmount()}
                  <FaqContent
                    key={FaqItems[count].id}
                    question={FaqItems[count].question}
                    answer={FaqItems[count].answer}
                    signUp={FaqItems[count].signUp}
                    answer2={FaqItems[count].answer2}
                    clickHere={FaqItems[count].clickHere}
                    answer3={FaqItems[count].answer3}
                    mentors={FaqItems[count].mentors}
                    volunteers={FaqItems[count].volunteers}
                  />
                </div>
              ))}
            </div>
          ))}
        </div>

        <div className="faq-narrow">
          {arrayChunk([...Array(FaqItems.length).keys()], 1).map((row, i) => (
            <div key={i} className="row justify-content-between">
              {row.map((value, i) => (
                <div key={i} className="col">
                  {countAmountNarrow()}
                  <FaqContent
                    key={FaqItems[countNarrow].id}
                    question={FaqItems[countNarrow].question}
                    answer={FaqItems[countNarrow].answer}
                    signUp={FaqItems[countNarrow].signUp}
                    answer2={FaqItems[countNarrow].answer2}
                    clickHere={FaqItems[countNarrow].clickHere}
                    answer3={FaqItems[countNarrow].answer3}
                    mentors={FaqItems[countNarrow].mentors}
                    volunteers={FaqItems[countNarrow].volunteers}
                  />
                </div>
              ))}
            </div>
          ))}
        </div>

        <h5 className="faq-botton-text">
          Have other questions? Ask us at{" "}
          <a className="faq-font-size" href="mailto:hackholyoke@gmail.com">
            hackholyoke@gmail.com
          </a>
          .
        </h5>
      </div>

      <hr className="main-hr" />

      {/* sponser div */}
      {/* Amy: would you consider using another js file for this info :)))) */}
      <div className="main-text-center main-sponsors">
        <h1 className="main-title-padding-bottom">Sponsors</h1>
        <a
          href="https://www.woodmac.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            className="sponsor-logo"
            src={poweradvocate}
            alt="PowerAdvocate"

            width="45%"

          />
        </a>
        <br/>
        <a
          href="https://www.mastercard.us/en-us.html"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            className="sponsor-logo"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Mastercard-logo.svg/1280px-Mastercard-logo.svg.png?20210817144358"
            alt="Mastercard"

            width="27%"

          />
        </a>
        <br />
        <a
          href="https://www.hudsonrivertrading.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            className="sponsor-logo"
            src={hudsonrivertrading}
            alt="Hudson River Trading"

            width="25%"

          />
        </a>
        <br />
        <a
          href="https://www.echo3d.co/?utm_source=googleads&utm_campaign=Search&utm_term=echo3d&utm_campaign=Search+Campaign+(Complete+Registration,+Any+Plan)&utm_source=adwords&utm_medium=ppc&hsa_acc=8371579743&hsa_cam=6451402957&hsa_grp=82518921492&hsa_ad=431458720778&hsa_src=g&hsa_tgt=kwd-1431902974281&hsa_kw=echo3d&hsa_mt=b&hsa_net=adwords&hsa_ver=3&gclid=CjwKCAjwp9qZBhBkEiwAsYFsb_qnBfDWk5pna5mRtU2nhAEtvpi8wzuW9NHHHTvbVBnc2g0U7taR_BoCn_IQAvD_BwE"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            className="sponsor-logo"
            src="echo3D - Logo 2021 - Dark.png"
            alt="echo3D"
            width="23%"
          />
        </a>
        <a
          href="https://www.wolfram.com/language/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            className="sponsor-logo"
            src="Hackathon Logo Wolfram 2022 resizable Vector-1.png"
            alt="Wolfram"
            width="23%"
          />
        </a>
        <a
          href="https://www.oreilly.com/online-learning/?utm_medium=search&utm_source=google.com&utm_campaign=B2B+Search&utm_content=live+demo&gclid=CjwKCAjw7eSZBhB8EiwA60kCWw0SIo467IGMx5A96vGSMMX7YQGKTdnYm8GeSR5JK7ARtxOJt5B_XhoC2E0QAvD_BwE"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            className="sponsor-logo"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/ec/O%27Reilly_Logo_%282019%29.svg/297px-O%27Reilly_Logo_%282019%29.svg.png"
            alt="oreilly"
            width="23%"
          />
        </a>
      </div>
    </div>
  );
}

export default MainPage;
