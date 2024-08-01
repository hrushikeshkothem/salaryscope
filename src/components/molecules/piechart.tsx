import { chartConfig } from "@/data/mock"
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "../ui/chart"
import { Label, Pie, PieChart } from "recharts"
export const PieBlock = ({data}:any) => {
    return (
        <div className="flex flex-col bg-card w-full p-4 rounded-xl overflow-x-auto max-w-xl border">
            <p className="text-lg font-bold text-primary">Pie</p>
            <ChartContainer
                config={chartConfig}
                className="mx-auto aspect-square w-full max-h-[250px]"
            >
                <PieChart>
                    <ChartTooltip
                        cursor={false}
                        content={<ChartTooltipContent hideLabel />}
                    />
                    <Pie
                        data={data}
                        dataKey="value"
                        nameKey="name"
                        innerRadius={60}
                        strokeWidth={5}
                    >
                        <Label
                            content={({ viewBox }) => {
                                if (viewBox && "cx" in viewBox && "cy" in viewBox) {
                                    return (
                                        <text
                                            x={viewBox.cx}
                                            y={viewBox.cy}
                                            textAnchor="middle"
                                            dominantBaseline="middle"
                                        >
                                            <tspan
                                                x={viewBox.cx}
                                                y={viewBox.cy}
                                                className="fill-foreground text-3xl font-bold"
                                            >
                                                {(parseInt(data[5].value)/100000).toFixed(2)}L
                                            </tspan>
                                            <tspan
                                                x={viewBox.cx}
                                                y={(viewBox.cy || 0) + 24}
                                                className="fill-muted-foreground"
                                            >
                                                CTC with bonus
                                            </tspan>
                                        </text>
                                    )
                                }
                            }}
                        />
                    </Pie>
                </PieChart>
            </ChartContainer>
            <div className="flex flex-row flex-wrap">
                {
                    data.map((i:any,j:number)=>{
                        return(
                            <div key={j} className="h-[30px] flex gap-3 mx-auto w-[200px]">
                            <div style={{backgroundColor: i.fill, width: 10, height: 10}} className="rounded-full"></div>
                            <p className="text-[15px]">{i.name}</p>
                          </div>
                          
                        )
                    })
                }
            </div>
        </div>
    )
}