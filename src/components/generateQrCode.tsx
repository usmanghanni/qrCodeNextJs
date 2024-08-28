"use client";
import { useQRCode } from "next-qrcode";
type Props = {
    text: string;
    options?: {
        errorCorrectionLevel?: "L" | "M" | "Q" | "H";
        margin?: number;
        width?: number;
        color?: {
            dark?: string;
            light?: string;
        };
    };
};
export default function GenerateQrCode({ text, options }: Props) {
    const { SVG } = useQRCode();
    return (
        <SVG
            text={text}
            options={{
                errorCorrectionLevel: "M",
                margin: 3,
                width: 400,
                color: {
                    dark: "#010599FF",
                    light: "#FFBF60FF",
                },
                ...options,
            }}
        />
    );
}
