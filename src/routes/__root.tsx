import { createRootRoute, Link, Outlet } from '@tanstack/react-router'
import { TanStackRouterDevtools } from '@tanstack/react-router-devtools'

export const Route = createRootRoute({
    component: () => (
        <>
            <div className="p-2 flex gap-2">
                <Link to="/" className="[&.active]:font-bold">
                    Home
                </Link>
                
                <Link to="/general-data" className="[&.active]:font-bold">
                    Bendrieji duomenys
                </Link>
                
                <Link to="/economic-parameters" className="[&.active]:font-bold">
                    Ekonominiai parametrai
                </Link>
            </div>

            <Outlet />

            <TanStackRouterDevtools />
        </>
    ),
})