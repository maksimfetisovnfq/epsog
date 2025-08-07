import {Navigate, useLocation} from "@tanstack/react-router";

export const EconomicParametersPage = () => {
    const location = useLocation();

    const generalData = location.state.generalData;

    if (!generalData) {
        return <Navigate to="/general-data"/>
    }

    return (
        <div>
            <h1>Ekonominiai parametrai</h1>

            <p>{generalData?.network}</p>

            <p>Šioje skiltyje galite nustatyti ekonominius parametrus, kurie bus naudojami jūsų simuliacijoje.</p>
        </div>
    )
}