import {type FC} from "react";
import {Button} from "../../../shared/ui/button";

export interface PopupProps {
    onClose: () => void;

}
export const Popup : FC<PopupProps> = ({onClose}) => {

    return (
        <div>
            <p>hello its popup widget</p>
            <Button variant="secondary" onClick={onClose}> Close</Button>
        </div>
    )
}