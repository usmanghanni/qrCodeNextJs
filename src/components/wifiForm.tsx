import {useEffect, useState} from "react";
import {InputWithLabel} from "@/components/InputWithLabel";

type Props = {
    setText: (text: string) => void;
}

export function WifiForm({setText}: Props) {
    const [ssid, setSsid] = useState("");
    const [password, setPassword] = useState("");

    useEffect(() => {
            setText(`WIFI:T:WPA;S:${ssid};P:${password};;`);
            return () => {
                setText("");
            }
        }
        , [ssid, password]);


    return (
        <>
            <InputWithLabel setText={setSsid} id="ssid" label="SSID" placeholder="SSID" value={ssid} type="text"/>
            <InputWithLabel setText={setPassword} id={password} label={'Password'} placeholder={"Type Password"} value={password} type={"password"} />
        </>
    );
}