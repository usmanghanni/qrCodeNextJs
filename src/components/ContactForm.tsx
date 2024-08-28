import {useEffect, useState} from "react";
import {InputWithLabel} from "@/components/InputWithLabel";

type Props = {
    setText: (text: string) => void;
}

export function ContactForm({setText}: Props) {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [url, setUrl] = useState("");
    const [org, setOrg] = useState("");
    useEffect(() => {
            setText(`BEGIN:VCARD\nVERSION:3.0\nFN:${name}\nEMAIL:${email}\nTEL:${phone}\nURL:${url}\nORG:${org}\nEND:VCARD`);
            return () => {
                setText("");
            }
        }
        , [name, email, phone, url, org]);
    return (
        <>
            <InputWithLabel setText={setName} id="name" label="Name" placeholder="Name" value={name} type="text"/>
            <InputWithLabel setText={setEmail} id="email" label="Email" placeholder="Email" value={email} type="email"/>
            <InputWithLabel setText={setPhone} id="phone" label="Phone" placeholder="Phone" value={phone} type="tel"/>
            <InputWithLabel setText={setUrl} id="url" label="URL" placeholder="URL" value={url} type="url"/>
            <InputWithLabel setText={setOrg} id="org" label="Organization" placeholder="Organization" value={org}
                            type="text"/>
        </>
    );
}