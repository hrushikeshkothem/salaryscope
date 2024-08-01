import { Calculator, Github, MoonIcon, Star, SunIcon, User } from "lucide-react";
import { Button } from "../ui/button";
import { Tooltip, TooltipContent, TooltipTrigger } from "../ui/tooltip";
import { useTheme } from "next-themes";
import { toast } from "sonner";

export default function Sidebar(){
    const { theme,setTheme } = useTheme()
    return(
        <>
        <nav className="grid gap-1 p-2">
          <Tooltip>
            <TooltipTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                className="rounded-lg bg-muted"
                aria-label="TCS-SALARY-BREAKDOWN"
              >
                <Calculator className="size-5" />
              </Button>
            </TooltipTrigger>
            <TooltipContent side="right" sideOffset={5}>
              TCS-SALARY-BREAKDOWN
            </TooltipContent>
          </Tooltip>
          <Tooltip>
            <TooltipTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                className="rounded-lg"
                aria-label="Settings"
                onClick={()=>{
                    window.open("https://github.com/hrushikeshkothem/salaryscope")
                }}
              >
                <Github className="size-5" />
              </Button>
            </TooltipTrigger>
            <TooltipContent side="right" sideOffset={5}>
              Code
            </TooltipContent>
          </Tooltip>
        </nav>
         <nav className="mt-auto grid gap-1 p-2">
         <Tooltip>
           <TooltipTrigger asChild>
             <Button
               variant="ghost"
               size="icon"
               className="mt-auto rounded-lg"
               aria-label="Account"
               onClick={()=>{
                toast("This is not official data from any organisation",{
                    description: "Consider it just as a tool",
                    action: {
                      label: "Okay",
                      onClick:()=>console.log("okay")
                    },
                  })
               }}
             >
               <Star className="size-5" />
             </Button>
           </TooltipTrigger>
           <TooltipContent side="right" sideOffset={5}>
             Information might not be accurate
           </TooltipContent>
         </Tooltip>
         <Tooltip>
           <TooltipTrigger asChild>
             <Button
               variant="ghost"
               size="icon"
               className="mt-auto rounded-lg"
               aria-label="Account"
               onClick={()=>{
                if(theme == "light"){
                    setTheme("dark")
                }
                else{
                    setTheme("light")
                }
               }}
             >
               {theme == "light" ? <MoonIcon className="size-5" /> : <SunIcon className="size-5" />}
             </Button>
           </TooltipTrigger>
           <TooltipContent side="right" sideOffset={5}>
             Theme
           </TooltipContent>
         </Tooltip>
         <Tooltip>
           <TooltipTrigger asChild>
             <Button
               variant="ghost"
               size="icon"
               className="mt-auto rounded-lg"
               aria-label="Help"
               onClick={()=>{
                window.open('https://hrushispace.com')
               }}
             >
               <User className="size-5" />
             </Button>
           </TooltipTrigger>
           <TooltipContent side="right" sideOffset={5}>
             Developer
           </TooltipContent>
         </Tooltip>
       </nav>
       </>
    )
}