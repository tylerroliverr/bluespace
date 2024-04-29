import ArenaData from "../Data Fetching/getArenaData";
import { Suspense } from "react";

export default function LandingPage() {
    return (
        <>
            <Suspense>
                <ArenaData/>
            </Suspense>
        </>
    )
}