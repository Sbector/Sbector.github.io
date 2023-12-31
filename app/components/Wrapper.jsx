export default function Wrapper({ children, className }) {
    return (
        <div className={`flex flex-col justify-center min-h-screen w-auto mx-10 md:mx-20 lg:w-[740px] lg:mx-auto ${className}`}>
            {children}
        </div>
    )
}