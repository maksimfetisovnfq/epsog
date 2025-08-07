import {Navigate, useLocation} from "@tanstack/react-router";

export const SummaryOfResultsPage = () => {
    const location = useLocation();

    const generalData = location.state.generalData;

    if (!generalData) {
        return <Navigate to="/general-data"/>
    }

    return (
        <div>
            <h1>Summary of results</h1>

            <p>{generalData?.network}</p>

            <p>Atkreipiame dėmesį, kad šios informacijos pateikimui, geriausia pasitelkti įrenginio technines specifikacijas. Jei kažkurių verčių nežinote, nesijaudinkite, parinkome numatytąsias reikšmes, kurios atspindi rinkoje esančių įrenginių galimybes.</p>
        </div>
    )
}