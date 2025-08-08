import {createRootRoute, Outlet} from '@tanstack/react-router'
import { TanStackRouterDevtools } from '@tanstack/react-router-devtools'
import {Layout} from "../components/layout/layout.tsx";
import { Navigation } from '../components/navigation/navigation.tsx';

const Component = () => {
    return (
        <Layout>
            <Navigation />
            <Outlet />
            <TanStackRouterDevtools />
        </Layout>
    )
}

export const Route = createRootRoute({
    component: Component
})
