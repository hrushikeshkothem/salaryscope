"use client";
import { Badge } from "@/components/ui/badge";
import { TooltipProvider } from "@/components/ui/tooltip";
import Sidebar from "@/components/molecules/sidebar";
import Icon from "@/components/molecules/icon";
import MobileConfigure from "@/components/molecules/mobile-configure";
import Header from "@/components/molecules/header";
import WebConfigure from "@/components/molecules/web-configure";
import { useEffect, useState } from "react";
import { TopTable } from "@/components/molecules/toptable";
import { PieBlock } from "@/components/molecules/piechart";
import ResultList from "@/components/molecules/result-list";
import { Button } from "@/components/ui/button";
import { Cross, X } from "lucide-react";
export default function Home() {
  const [data, setData] = useState<any>({
    basic_salary: 0,
    benifits: 0,
    performance: 0,
    bonus: 0,
    retentionBonus: 0,
    monthsWithOutBonus: 0,
    food: 0,
    travel: 0,
    pf: 0,
    gratuity: 0,
    retirals: 0,
    health: 0,
    city: 0,
  });
  const [transformedData, setTransformedData] = useState<any>([]);
  const [savedRoles, setSavedRoles] = useState<any>([]);
  const [bannerShow, setBannerShow] = useState<boolean>(true);
  useEffect(() => {
    let intData: any = {};
    for (let i in data) {
      intData[i] = parseInt(data[i]);
    }
    const inhand =
      (intData.basic_salary + intData.benifits + intData.performance) / 12 -
      intData.food -
      intData.travel;
    const inhandYearly =
      inhand * intData.monthsWithOutBonus +
      (inhand + intData.bonus / (12 - intData.monthsWithOutBonus)) *
        (12 - intData.monthsWithOutBonus) +
      intData.retentionBonus;
    const totalInHand =
      intData.basic_salary +
      intData.benifits +
      intData.performance +
      intData.bonus +
      intData.retentionBonus;
    const foodAndTravel = totalInHand - inhandYearly;
    const ctc =
      totalInHand +
      intData.pf +
      intData.gratuity +
      intData.retirals +
      intData.health +
      intData.city;
    const transformedData = [
      {
        name: "Monthly without bonus",
        value: Math.round(inhand),
        fill: "#bc2ef1",
      },
      {
        name: "Monthly with bonus",
        value: Math.round(
          inhand + (data.bonus) / (12 - data.monthsWithOutBonus)
        ),
        fill: "#1a383b",
      },
      {
        name: "Yearly without bonus",
        value: inhand * 12,
        fill: "#156e5d",
      },
      {
        name: "Yearly with bonus",
        value: Math.round(inhandYearly),
        fill: "#44aaff",
      },
      // {
      //   name: "Food and travel",
      //   value: foodAndTravel,
      //    fill: "#1a5ba0"
      // },
      {
        name: "CTC without PF",
        value: Math.round(totalInHand),
        fill: "#7437cf",
      },
      {
        name: "CTC with PF & Bonus",
        value: ctc,
        fill: "#00aaff",
      },
    ];
    setTransformedData(transformedData);
  }, [data]);
  return (
    <TooltipProvider>
      <div className="grid h-screen w-full pl-[53px]">
        <aside className="inset-y fixed  left-0 z-20 flex h-full flex-col  bg-primary">
          <Icon />
          <Sidebar />
        </aside>
        <div className="flex flex-col">
          {bannerShow && <div className="flex flex-row bg-primary w-full">
            <p className="mx-auto my-auto text-xs ">
              Made by 
              <a className="font-bold text-xs " href="https://www.linkedin.com/in/hrushispace" target="__blank">{' '}Hrushikesh Kothem</a>,
              <a className="font-bold text-xs " href="https://www.linkedin.com/in/satya-ajay-098400217/" target="__blank">{' '} Satya Ajay </a>,
              <a className="font-bold text-xs " href="https://www.linkedin.com/in/sunil-noolu/" target="__blank">{' '}Sunil Noolu</a>
            </p>
            <Button onClick={()=>{
              setBannerShow(false)
            }} className="text-current my-auto">
              <X className="h-[20px]"/>
            </Button>
          </div>}
          <Header
            data={data}
            ctc={transformedData[transformedData.length - 1]?.value || 0}
            setSavedRoles={setSavedRoles}
          >
            <MobileConfigure data={data} setData={setData} savedRoles={savedRoles}
                setSavedRoles={setSavedRoles} />
          </Header>
          <main className="grid flex-1 gap-4 overflow-auto p-4 md:grid-cols-2 lg:grid-cols-3">
            <div
              className="relative hidden flex-col items-start gap-8 md:flex"
              x-chunk="dashboard-03-chunk-0"
            >
              <WebConfigure
                savedRoles={savedRoles}
                setSavedRoles={setSavedRoles}
                data={data}
                setData={setData}
              />
            </div>
            <div className="relative flex h-full min-h-[50vh] flex-col rounded-xl bg-muted/50 p-4 lg:col-span-2">
              <Badge
                variant="outline"
                className="absolute right-3 top-2 text-primary"
              >
                Output
              </Badge>
              {data.basic_salary != 0 && <><div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mt-6">
                <TopTable data={data} />
                <PieBlock data={transformedData} />
              </div>
              <ResultList data={transformedData} />
              <div className="flex-1" /></>}
            </div>
          </main>
        </div>
      </div>
    </TooltipProvider>
  );
}
