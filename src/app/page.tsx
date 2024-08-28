"use client";
import GenerateQrCode from "@/components/generateQrCode";
import {useState} from "react";
import {WifiForm} from "@/components/wifiForm";
import {Select, SelectContent, SelectItem, SelectTrigger, SelectValue,} from "@/components/ui/select"
import {ContactForm} from "@/components/ContactForm";
import {Label} from "@/components/ui/label";
import {SimpleText} from "@/components/simpleText";
import {useDebounce} from "@/hooks/useDebounce";
import {Button} from "@/components/ui/button";

export default function Home() {
    const [text, setText] = useState("");
    const [type, setType] = useState("");
    const [bgColor, setBgColor] = useState("#000000");
    const [fgColor, setFgColor] = useState("#ffffff");
    const debouncedBgColor = useDebounce(bgColor);
    const debouncedFgColor = useDebounce(fgColor);
    const debouncedText = useDebounce(text);


    function downloadImage() {
        if (!document.getElementsByTagName('img')[0]) {
            return
        }
        // download-button
        const downloadButton = document.getElementById('download-button');
        if (!downloadButton) {
            return
        }
        downloadButton.innerText = 'Downloading...';
        downloadButton.setAttribute('disabled', 'true');


        console.log(document.getElementsByTagName('img')[0].src);
        const link = document.createElement('a');
        link.href = document.getElementsByTagName('img')[0].src;
        link.download = 'QRCode.png';
        // delay a bit to show the downloading text

        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        setTimeout(() => {
            downloadButton.innerText = 'Download';
            downloadButton.removeAttribute('disabled');
        }, 1000);
    }

    function remount() {
        setText("");
        setBgColor("#000000");
        setFgColor("#ffffff");
        setType("");
    }

    return (
        <main
            className="w-2/3
             mt-36 my-0 mx-auto"
        >
            <h1 className="text-5xl text-center font-bold mb-16 ">QR Code</h1>
            <div
                className="grid   justify-between  shadow-2xl shadow-black   lg:grid-cols-2 sm:grid-cols-1 md:grid-cols-1">
                <div
                    className="w-full dark:bg-secondary light:bg-secondary dark:text-gray-300 light:text-white p-5 px-8 grid-cols-2">
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
                    {type === "text" && <SimpleText text={text} setText={setText}/>}
                    <div className="grid w-full max-w-sm items-center mb-2">
                        <Button onClick={remount}>Clear</Button>
                    </div>
                    <div className="grid w-full max-w-sm items-center mb-2">
                        {/*Download generated Imgae*/}
                        <Button id={'download-button'} disabled={false} onClick={downloadImage}>Download</Button>
                    </div>


                </div>

                <div className=" h-full  p-2  grid-cols-2">
                    {debouncedText && (
                        <GenerateQrCode text={debouncedText} options={
                            {
                                width: 500,
                                color: {
                                    dark: debouncedFgColor,
                                    light: debouncedBgColor,
                                }

                            }
                        }/>
                    )}
                </div>
            </div>
        </main>
    );
}
