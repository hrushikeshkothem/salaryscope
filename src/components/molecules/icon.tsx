import { Button } from "../ui/button";
import Image from "next/image";

export default function Icon(){
    return(
        <div className="p-2">
          <Button size="icon" aria-label="Home">
            <Image src={"/icon.png"} height={400} width={400} alt={""} />
          </Button>
        </div>
    )
}