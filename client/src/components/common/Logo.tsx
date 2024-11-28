import Image from "next/image"


const Logo = (props:any) => {
    return (

        <Image className={ "w-full h-auto" + props.className }
            src={'/logo/logo.png'}
            width="80"
            height="20"
            alt="logo"
        />

    )
}

export default Logo
