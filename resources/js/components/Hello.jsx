import Logo from '../../assets/svgs/givecloud-logo.svg?react';

const Hello = () => {
    return (
        <div className="flex flex-col gap-8">
            <h1 className="text-xl font-bold text-center text-gray-500 uppercase">
                Hello from
            </h1>
            <Logo />
        </div>
    )
}

export default Hello


