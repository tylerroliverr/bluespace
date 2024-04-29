import ArenaData from "../Data Fetching/getArenaData";
import { Suspense } from "react";
import LandingHTML from "./landingHTML";

export default function LandingPage() {
    return (
        <>
            <Suspense>
                <ArenaData />
                <LandingHTML/>
            </Suspense>
        </>
    )
}