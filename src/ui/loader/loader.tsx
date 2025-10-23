import { GlobalStyles } from "@mui/material"
import { useEffect, useState } from "react"

interface LoaderProps {
    loadingTime?: number // in seconds
}

export const Loader = ({ loadingTime = 120 }: LoaderProps) => {
    const [timeLeft, setTimeLeft] = useState(loadingTime)
    const [progress, setProgress] = useState(0)

    useEffect(() => {
        if (timeLeft <= 0) return

        const interval = setInterval(() => {
            setTimeLeft((prev) => {
                if (prev <= 1) {
                    clearInterval(interval)
                    return 0
                }
                return prev - 1
            })
        }, 1000)

        return () => clearInterval(interval)
    }, [timeLeft])

    useEffect(() => {
        const calculatedProgress = ((loadingTime - timeLeft) / loadingTime) * 100
        setProgress(calculatedProgress)
    }, [timeLeft, loadingTime])

    const formatTime = (seconds: number) => {
        const mins = Math.floor(seconds / 60)
        const secs = seconds % 60
        return `${mins}:${secs.toString().padStart(2, '0')}`
    }

    return (
        <div style={{ fontWeight: 400, fontFamily: "Arial", width: "768px" }}>
            <GlobalStyles
                styles={{
                    ".MuiContainer-root": {
                        padding: "0px !important",
                    },
                }}
            />
            <div
                style={{
                    fontSize: "32px",
                    marginTop: "40px",
                    marginBottom: "48px",
                }}
            >
                Rezultatai
            </div>
            <div
                style={{
                    backgroundColor: "#F5F7F8",
                    display: "flex",
                    color: "#3F576B",
                    width: "768px",
                }}
            >
                <div style={{ marginTop: "20px", marginBottom: "20px", fontSize: "24px", marginLeft: "16px", width: "736px" }}>
                    <div style={{ marginBottom: "8px", color: "black" }}>Palaukite, vykdomas skaičiavimas...</div>

                    <div style={{ fontSize: "16px", width: "696px", marginBottom: "16px" }}>
                        Energetikos ateitis – tai lankstumo, inovacijų ir duomenimis grįstų sprendimų sintezė.
                    </div>

                    {timeLeft > 0 && (
                        <div style={{ width: "696px" }}>
                            <div style={{
                                width: "100%",
                                height: "8px",
                                backgroundColor: "#D9D9D9",
                                borderRadius: "4px",
                                overflow: "hidden"
                            }}>
                                <div style={{
                                    width: `${progress}%`,
                                    height: "100%",
                                    backgroundColor: "#00EB8C",
                                    transition: "width 1s linear",
                                    borderRadius: "4px"
                                }} />
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}