import { arimo } from "@/helpers/fonts";
import React from "react";
import { Container } from "react-bootstrap";
import "./banner.scss";
import data from "@/helpers/data/tr.json";
import MeetingButton from "./meeting-button";
import { useTranslations } from "next-intl";
const Banner = () => {
    const bannerData = data[0]?.home || {};
    const videoSrc = bannerData["banner-video"];
    const t = useTranslations("HomePage");
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
                <h2 className={`${arimo.variable} banner-title`}>
                    {t("banner-title")}
                </h2>
                <p className="banner-text">{t("banner-description")}</p>
                <MeetingButton title={t("banner-button")} />
            </div>
        </Container>
    );
};

export default Banner;