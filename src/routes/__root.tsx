import { createRootRoute, Link, Outlet } from '@tanstack/react-router'
import { TanStackRouterDevtools } from '@tanstack/react-router-devtools'

export const Route = createRootRoute({
    component: () => (
        <>
            <div className="p-2 flex gap-2">
                <Link to="/" className="[&.active]:font-bold">
                    Home
                </Link>
                
                <Link to="/General-data" className="[&.active]:font-bold">
                    Bendrieji duomenys
                </Link>

                <Link to="/Technical-parameters" className="[&.active]:font-bold">
                    Techniniai parametrai
                </Link>
                
                <Link to="/Economic-parameters" className="[&.active]:font-bold">
                    Ekonominiai parametrai
                </Link>

                <Link to="/Summary-results" className="[&.active]:font-bold">
                    Rezultatų apibendrinimas
                </Link>
            </div>

            <Outlet />

            <TanStackRouterDevtools />
        </>
    ),
})