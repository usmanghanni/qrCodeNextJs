import {Label} from "@/components/ui/label";
import {Input} from "@/components/ui/input";


type Props = {
    setText: (text: string) => void;
    id: string;
    label: string;
    placeholder: string;
    value: string;
    type: 'text' | 'password' | 'email' | 'tel' | 'color' | 'url';
}

export function InputWithLabel({setText, id, placeholder,label, value, type = 'text'}: Props) {
    return (
        <div className={"grid w-full max-w-sm items-center mb-2"}>
            <Label className="mb-2" htmlFor="text">{label}</Label>
            <Input
                type={type}
                id={id}
                value={value}
                placeholder={placeholder}
                onChange={(e) => setText(e.target.value)}
            />
        </div>
    );
}