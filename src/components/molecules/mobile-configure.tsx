import { PencilIcon} from "lucide-react";
import { Button } from "../ui/button";
import { Drawer, DrawerContent, DrawerDescription, DrawerHeader, DrawerTitle, DrawerTrigger } from "../ui/drawer";
import WebConfigure from "./web-configure";
import { Tooltip, TooltipContent, TooltipTrigger } from "../ui/tooltip";

export default function MobileConfigure({ data, setData, savedRoles, setSavedRoles }: any) {
    return (
        <Drawer>
            <DrawerTrigger asChild>
                <Button variant="ghost" size="icon" className="md:hidden">
                <Tooltip defaultOpen>
                    <TooltipTrigger asChild>
                    <PencilIcon className="size-4" />
                    </TooltipTrigger>
                        <TooltipContent side="right" sideOffset={5}>
                            Choose company and role
                        </TooltipContent>
                    </Tooltip>
                </Button>
            </DrawerTrigger>
            <DrawerContent className="max-h-[80vh] overflow-scroll">
                <DrawerHeader>
                    <DrawerTitle>Configuration</DrawerTitle>
                    <DrawerDescription>
                        Configure the CTC breakdown.
                    </DrawerDescription>
                </DrawerHeader>
                <WebConfigure data={data} setData={setData} savedRoles={savedRoles}
                setSavedRoles={setSavedRoles} />
            </DrawerContent>
        </Drawer>
    )
}