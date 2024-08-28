import {Label} from "@/components/ui/label";
import {Input} from "@/components/ui/input";

type Props = {
    text: string;
    setText: (text: string) => void;
}
export function SimpleText({text,setText}: Props) {
    return (
        <div className={"grid w-full max-w-sm items-center mb-2"}>
            <Label className="mb-2" htmlFor="text">Text</Label>
            <Input
                type="text"
                id="text"
                value={text}
                placeholder="Write Something to Generate Qr Code"
                onChange={(e) => setText(e.target.value)}
            />
        </div>
    );
}