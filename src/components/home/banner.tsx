import { arimo } from "@/helpers/fonts";
import React from "react";
import { Container } from "react-bootstrap";
import "./banner.scss";
import data from "@/helpers/data/tr.json";
import MeetingButton from "./meeting-button";

const Banner = () => {
  const bannerData = data[0]?.home || {};
  const videoSrc = bannerData["banner-video"];
  const title = bannerData["banner-title"];
  const description = bannerData["banner-description"];
  const buttonText = bannerData["banner-button"] ; // Fixed typo here ("banner-buton" -> "banner-button")

  return (
    <Container fluid className="banner">
      <video
        src={`/image/banner/${videoSrc}`} // Corrected the syntax
        className="banner-video"
        autoPlay
        muted
        loop
      ></video>

      <div className="banner-text-wrapper">
        <h2 className={`${arimo.variable} banner-title`}>{title}</h2>
        <p className="banner-text">{description}</p>
        <MeetingButton title={buttonText} />
      </div>
    </Container>
  );
};

export default Banner;
