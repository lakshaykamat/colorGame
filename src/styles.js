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
        helpIcon: "fixed bottom-[15px] right-[15px] cursor-pointer z-10"
    },
    Game: {
        Container: "m-3 flex flex-col justify-center align-center", 
        textContainer:"flex justify-start gap-10 align-center m-3",
        rounds:"text-2xl",
        title:"text-4xl lg:text-4xl my-2 text-center",
        score:"text-2xl",
        question: "text-3xl lg:text-5xl my-2 text-center drop-shadow-[4px 5px 6px rgba(28,28,28,0.47)]",
        UL: "flex flex-row flex-wrap lg:flex-nowrap justify-center align-center my-3",
        LI: "w-full h-[6rem] lg:h-[12rem] my-3 mx-4 outline outline-2 rounded-md drop-shadow-2xl"
    },
    EndScreen:{
        Container:"flex flex-col w-[30%] text-center m-auto gap-3 my-10",
        text:"text-3xl",
        button:"bg-blue-400 py-2 px-7 text-white rounded"
    }
}