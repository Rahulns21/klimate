import { Button } from "@/components/ui/button";
import { RefreshCcw } from "lucide-react";

export default function WeatherDashboard() {
    return <div>
        {/* favorite cities */}
        <div className="flex items-center justify-between">
            <h1 className="text-xl font-bold tracking-tight">My Location</h1>
            <Button variant={'outline'} 
            size={'icon'} 
            // onClick={handleRefresh}
            // disabled={}
            >
                <RefreshCcw />
            </Button>
        </div>

        {/* current and hourly weather */}
    </div>
}