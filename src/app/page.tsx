"use client";
import GenerateQrCode from "@/components/generateQrCode";
import {useEffect, useState} from "react";
import {WifiForm} from "@/components/wifiForm";
import {Select, SelectContent, SelectItem, SelectTrigger, SelectValue,} from "@/components/ui/select"
import {ContactForm} from "@/components/ContactForm";
import {Label} from "@/components/ui/label";
import {SimpleText} from "@/components/simpleText";

export default function Home() {
    const [text, setText] = useState("hi");
    const [type, setType] = useState("wifi");
    const [bgColor, setBgColor] = useState("#000000");
    const [fgColor, setFgColor] = useState("#ffffff");
    useEffect(() => {
            console.log(type);
        }
        , [type]);

    return (
        <main
            className="w-2/3
             mt-36 my-0 mx-auto"
        >
            <h1 className="text-5xl text-center font-bold mb-16 ">QR Code</h1>
            <div
                className="grid  bg-gray-200 justify-between  shadow-2xl shadow-black rounded-lg border-[1px] border-gray-300  lg:grid-cols-2 sm:grid-cols-1 md:grid-cols-1">
                <div className="w-full bg-red-500 shadow-lg p-5 px-8 grid-cols-2">
                    <div className="grid w-full max-w-sm items-center mb-2">
                        <Select onValueChange={(value) => setType(value)} value={type}>
                            <SelectTrigger className="w-[180px]">
                                <SelectValue placeholder="Select Type"/>
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="wifi">WIFI</SelectItem>
                                <SelectItem value="contact">Contact</SelectItem>
                                <SelectItem value="text">Text</SelectItem>
                            </SelectContent>
                        </Select>
                    </div>
                    <div className="grid w-full max-w-sm items-center mb-2">
                        <Label className="mb-2" htmlFor="bgColor">Background Color</Label>
                        <input
                            type="color"
                            id="bgColor"
                            value={bgColor}
                            onChange={(e) => setBgColor(e.target.value)}
                        />
                    </div>
                    <div className="grid w-full max-w-sm items-center mb-2">
                        <Label className="mb-2" htmlFor="fgColor">Foreground Color</Label>
                        <input
                            type="color"
                            id="fgColor"
                            value={fgColor}
                            onChange={(e) => setFgColor(e.target.value)}
                        />
                    </div>
                    {type === "wifi" && <WifiForm setText={setText}/>}
                    {type === "contact" && <ContactForm setText={setText}/>}
                    {type === "text" && <SimpleText text={text} setText={setText}/>  }




                </div>

                <div className="w-full bg-zinc-50 float-right grid-cols-2">
                    {text && (
                        <GenerateQrCode text={text} options={
                            {
                                width: 500,
                                color: {
                                    dark: fgColor,
                                    light: bgColor,
                                }

                            }
                        }/>
                    )}
                </div>
            </div>
        </main>
    );
}
