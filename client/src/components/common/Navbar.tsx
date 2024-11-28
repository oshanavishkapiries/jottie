import Link from "next/link"
import {Button} from "../ui/button"
import Logo from "./Logo"


const Navbar = () => {
    return (
        <header className="flex h-16 w-full max-w-7xl mx-auto items-center justify-between bg-background px-4 md:px-6">
            <Link href="/" className="flex items-center gap-2"
                prefetch={false}>
                <Logo/>
            </Link>

            <Link href="/" className="flex items-center gap-2"
                prefetch={false}>
                <Button className='group relative inline-flex items-center justify-center overflow-hidden rounded-md  bg-gradient-to-r dark:from-[#070e41] dark:to-[#263381] from-[#f6f7ff] to-[#f5f6ff] dark:border-[rgb(76_100_255)] border-2 border-[#263381]  bg-transparent px-6 font-medium dark:text-white text-black transition-all duration-100 [box-shadow:5px_5px_rgb(6_142_247)] dark:[box-shadow:5px_5px_rgb(76_100_255)] hover:translate-x-[3px] hover:translate-y-[3px] hover:[box-shadow:0px_0px_rgb(38_51_129)] dark:hover:[box-shadow:0px_0px_rgb(76_100_255)]'>
                    Login
                </Button>
            </Link>
        </header>
    )
}

export default Navbar
