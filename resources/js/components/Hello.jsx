import Logo from '@/assets/svgs/givecloud-logo.svg?react';
import Supporter from "@/js/components/Supporter.jsx";

import CreateSupporter from "@/js/components/CreateSupporter.jsx";


const Hello = () => {
    return (
        <div className="flex flex-col gap-8">
            <h1 className="text-xl font-bold text-center text-gray-500 uppercase">
               List of Users
            </h1>
            <Supporter />
        </div>
    )
}

export default Hello


