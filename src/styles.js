export const tailwindStyle = {
    form: {
        formContainer: "flex flex-col justify-center items-center text-center m-auto",
        button: "bg-blue-400 py-2 px-2 uppercase font-bold text-lg text-white rounded w-full",
        select: "px-6 text-center py-2 mx-2 rounded bg-blue-300 text-black",
        heading: "text-5xl uppercase font-bold mb-5",
        section: "m-2 flex  justify-center items-center w-full",
        buttonDark:"bg-blue-800 py-2 px-2 uppercase font-bold text-lg text-white rounded w-full"
    },
    App: {
        Container:" bg-slate-300 font-[Poppins] flex flex-col justify-center h-[100vh] align-center outline",
        toogleIcon: " absolute top-[15px] right-[15px] cursor-pointer",
        helpIcon: "fixed bottom-[15px] right-[15px] cursor-pointer z-10",
        Dark:"bg-slate-800 text-white font-[Poppins] flex flex-col justify-center h-[100vh] align-center"
    },
    Game: {
        Container: "m-3 flex flex-col justify-center items-center", 
        textContainer:"flex justify-start gap-10 items-center m-3",
        rounds:"text-2xl",
        title:"font-mono lg:text-5xl text-3xl lg:text-4xl my-2 text-center",
        score:"font-mono text-2xl",
        question: "text-4xl font-bold lg:text-6xl my-4 text-center drop-shadow-[4px 5px 6px rgba(28,28,28,0.47)]",
        UL: "flex flex-row flex-wrap lg:flex-nowrap justify-center items-center my-3 w-full",
        LI: "w-full h-[5rem] lg:h-[15rem] my-3 mx-4 outline outline-2 rounded-md drop-shadow-2xl"
    },
    EndScreen:{
        Container:" text-center flex flex-col text-center sm:m-auto m-10 gap-3",
        text:"text-5xl m-4",
        button:"bg-blue-400 py-2 px-2 uppercase font-bold text-lg text-white rounded"
    }
}