import { useEffect, useState } from "react"

export const TopTable = ({ data }: any) => {
    const [sort,setSort] = useState<{name:string,value:string,length:string}[]>([]);
    useEffect(() => {
        const sortedKeys = Object.keys(data).sort();
        let total = 0
        for(let x in data){
            total += parseInt(data[x]);
        }
        const sortedObj:any = [];
        sortedKeys.forEach(key => {
            sortedObj.push({
                name: key,
                value: data[key],
                length: Math.round((parseInt(data[key])/total)*100)+""
            });
        });
        sortedObj.sort((a:any,b:any)=>b.value-a.value)
        setSort(sortedObj)
    }, [data])
    const TableRow = ({ name, value, length, color }: any) => {
        return (
            <tr className="text-gray-500">
                <th className="border-t-0 px-4 align-middle text-sm font-normal whitespace-nowrap p-4 text-left">
                    {name}</th>
                <td className="border-t-0 px-4 align-middle text-xs font-medium whitespace-nowrap p-4">
                    {value}</td>
                <td className="border-t-0 px-4 align-middle text-xs whitespace-nowrap p-4">
                    <div className="flex items-center">
                        <span className="mr-2 text-xs font-medium">{length}</span>
                        <div className="relative w-full">
                            <div className="w-full bg-gray-200 rounded-sm h-2">
                                <div className="h-2 rounded-sm" style={{ width: length, backgroundColor: color }}></div>
                            </div>
                        </div>
                    </div>
                </td>
            </tr>
        )
    }
    return (
        <div className="block w-full bg-card overflow-x-auto rounded-lg  max-w-xl border">
            <table className="items-center w-full bg-transparent border-collapse">
                <thead>
                    <tr className="bg-primary">
                        <th
                            className="px-4  align-middle py-3 text-xs font-semibold text-left uppercase border-l-0 border-r-0 whitespace-nowrap">
                            Segment</th>
                        <th
                            className="px-4  align-middle py-3 text-xs font-semibold text-left uppercase border-l-0 border-r-0 whitespace-nowrap">
                            Amount</th>
                        <th
                            className="px-4  align-middle py-3 text-xs font-semibold text-left uppercase border-l-0 border-r-0 whitespace-nowrap min-w-140-px">
                        </th>
                    </tr>
                </thead>
                <tbody className="divide-y divide-gray-100 dark:divide-gray-900">
                    <TableRow name={sort[0]?.name} value={sort[0]?.value} length={sort[0]?.length} color={"#00aaff"} />
                    <TableRow name={sort[1]?.name} value={sort[1]?.value} length={sort[1]?.length} color={"#bc2ef1"} />
                    <TableRow name={sort[2]?.name} value={sort[2]?.value} length={sort[2]?.length} color={"#1a383b"} />
                    <TableRow name={sort[3]?.name} value={sort[3]?.value} length={sort[3]?.length} color={"#156e5d"} />
                    <TableRow name={sort[4]?.name} value={sort[4]?.value} length={sort[4]?.length} color={"#44aaff"} />
                    <TableRow name={sort[5]?.name} value={sort[5]?.value} length={sort[5]?.length} color={"#36fe09"} />
                    <TableRow name={sort[6]?.name} value={sort[6]?.value} length={sort[6]?.length} color={"#f82527"} />
                </tbody>
            </table>
        </div>
    )
}