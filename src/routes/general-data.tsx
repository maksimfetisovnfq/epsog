import {createFileRoute, Link} from '@tanstack/react-router'
import {useState} from "react";

export const Route = createFileRoute('/general-data')({
    component: RouteComponent,
})

function RouteComponent() {
    const [network, setNetwork] = useState('')

    return <div>
        <h2>Bendrieji duomenys</h2>

        <input value={network} onChange={(e) => setNetwork(e.target.value)}/>

        <Link disabled={!network} to="/economic-parameters" state={{
            generalData: {
                network
            }
        }}>next</Link>
    </div>
}
