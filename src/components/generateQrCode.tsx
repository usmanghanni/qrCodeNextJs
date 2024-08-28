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
    const { SVG,Image,Canvas } = useQRCode();
    return (
        // eslint-disable-next-line jsx-a11y/alt-text
        <Image
            key={'qr-code'}

            text={text}
            options={{
                errorCorrectionLevel: "M",
                margin: 3,
                width: 400,
                color: {
                    dark: "#000000",
                    light: "#FFFFFF",
                },
                ...options,
            }}
        />
    );
}
