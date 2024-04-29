"use client";
import ArenaData from "../Data Fetching/getArenaData";
import { Suspense } from "react";
import { infoClicked } from "@/public/eventListeners.js";

export default function LandingPage() {

    function handleClick() {
        infoClicked();
    }

    return (
        <>
            <section className="title">
                <div>
                    <p className="star">★</p>
                </div>
                <div className="link" id="link">
                    <a href="https://blueroomstudios.com.au/">
                        <p>the blueroom</p>
                    </a>
                </div>
                <div className="info link">
                    <p onClick={handleClick}>information</p>
                </div>
            </section>

            <section className="information">
                <div className="info-text">
                    <p>hi this is the blueroom.</p>
                    <p>think of it like my inspo playground.</p>
                    <p>periodically updated and curated, dynamically different every visit.</p>
                    <br />
                    <p>i will try to credit original authors where i can, these are not my pictures.</p>
                    <br />
                    <p>please enjoy.</p>
                </div>
            </section>
            <Suspense>
                <ArenaData />
            </Suspense>
        </>
    )
}