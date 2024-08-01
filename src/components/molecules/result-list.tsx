export default function ResultList({data}:any) {
    const convertToIndia = (num:number) => {
        return num.toLocaleString('en-IN', {
            style: 'currency',
            currency: 'INR',
            maximumFractionDigits: 0,
        })
    }
    return (
        <div className="flex flex-col bg-card gap-4 w-full mt-4 rounded-lg p-6 mx-auto overflow-x-auto border">
            <p className="text-lg font-bold text-primary">Results</p>
            <div className="grid lg:grid-cols-2 gap-4">
              {
                data.map((i:any,j:number)=>{
                    return(
                        <div key={j} className="relative p-4 rounded-2xl shadow bg-muted">
                        <div className="space-y-2">
                            <div
                                className="flex items-center space-x-2 rtl:space-x-reverse text-sm font-medium text-gray-500 dark:text-gray-200">
                                <span>{i.name}</span>
                            </div>
    
                            <div className="text-3xl">
                                {convertToIndia(i.value)}
                            </div>
                        </div>
                    </div>
                    )
                })
              }
            </div>
        </div>
    )
}