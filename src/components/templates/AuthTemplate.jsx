const AuthTemplate = ({ title, titleBg, descriptionBg, children }) => {
    return (
        <div className="grid lg:grid-cols-2 rounded-lg min-h-svh">
            <div className="flex flex-col items-center justify-center space-y-4">
                <h2 className="font-bold text-2xl md:text-3xl">{title}</h2>
                <div className="flex flex-col items-center w-[90%] lg:w-4/5 gap-2">
                    {children}
                </div>
            </div>
            <div className="bg-[url(https://images.unsplash.com/photo-1614850523011-8f49ffc73908)] bg-cover hidden lg:flex flex-col items-center justify-center gap-3">
                <h1 className="text-white font-bold text-4xl">{titleBg}</h1>
                <span className="text-white font-bold text-4xl">
                    {descriptionBg}
                </span>
            </div>
        </div>
    );
};

export default AuthTemplate;
