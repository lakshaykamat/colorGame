export const tailwindStyle = {
    form: {
        formContainer: "flex flex-col justify-center align-center text-center m-4 mt-[5rem]",
        button: "bg-blue-400 py-2 px-7 text-white rounded",
        select: "px-6 text-center py-2 mx-2 rounded bg-blue-100",
        heading: "text-4xl m-5",
        section: "m-2",
        flexBoxW: "flex flex-wrap justify-center align-center"
    },
    App: {
        toogleIcon: " absolute top-[15px] right-[15px] cursor-pointer",
        helpIcon: "fixed bottom-[15px] right-[15px] cursor-pointer"
    },
    Game: {
        Container: "my-[5rem] mx-2 sm:mx-[3rem] flex flex-col justify-center align-center", 
        textContainer:"flex justify-between align-center m-3",
        rounds:"text-2xl",
        title:"text-4xl text-center",
        score:"text-2xl",
        question: "text-6xl m-5 text-center",
        UL: "flex flex-row flex-wrap lg:flex-nowrap justify-center align-center",
        LI: "w-full h-36 mx-4 my-2 outline rounded "
    }
}