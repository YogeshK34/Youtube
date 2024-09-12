import { SearchBar } from "./SearchBar"
import { Signin } from "./Signin"
import { Youtube } from "./Youtube"

export const Appbar = () => {
    return <div className="flex justify-between pt-1 p-3">
        <div className="text-md inline-flex items-center pb-2">
            {/* Youtube */}
            <Youtube/>
        </div>
        <div className="pt-2">
           <SearchBar/>
        </div>
        <div className="pt-2 pr-4"> 
            <Signin/>
        </div>
    </div>
}