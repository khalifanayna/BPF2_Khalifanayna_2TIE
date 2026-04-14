export default function tailwindCSS(){
    return (
        <div>
            <h1 class="border m-4">Belajar Tailwind CSS 4</h1>
            <button className="bg-purple-500 text-white
                                 px-4 py-2 mx-2 rounded
                                 shadow-lg">Click Me</button>
            <Spacing/>
            <Typography/>
            <BorderRadius/>
            <BackgroundColors/>
            <FlexboxGrid/>
            <ShadowEffects/>
        </div>
    )
}

function Spacing(){
    return (
        <div className="bg-white shadow-lg p-6 m-4 rounded-lg">
            <h2 className="text-lg font-semibold">Card Title</h2>
            <p className="mt-2 text-gray-600">Ini adalah contoh penggunaan padding dan margin di Tailwind.</p>
        </div>
    )
}

function Typography(){
    return (
        <div>
            <h1 className="text-3xl font-bold text-blue-600">Tailwind Typography</h1>
            <p className="text-purple-300 text-lg mt-2">Belajar Tailwind sangat menyenangkan dan cepat!</p>
        </div>
    )
}

function BorderRadius(){
    return (
        <button className="border-2 border-blue-500 text-blue-500 px-4 py-2 rounded-lg"> Klik Saya </button>
    )
}

function BackgroundColors(){
    return(
        <div className="bg-purple-300 text-white p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-bold">Tailwind Colors</h3>
            <p className="mt-2">Belajar Tailwind itu seru dan fleksibel!</p>
        </div>
    )
}

function FlexboxGrid(){
    return (
        <nav className="flex justify-between bg-blue-500 p-4 text-white">
            <h1 className="text-lg font-bold">MyWebsite</h1>
            <ul className="flex space-x-4">
                <li><a href="#">Home</a></li>
                <li><a href="#">About</a></li>
                <li><a href="#">Contact</a></li>
            </ul>
        </nav>
    )
}

function ShadowEffects(){
    return (
        <div className="bg-white shadow-lg p-6 rounded-lg hover:shadow-2xl transition">
            <h3 className="text-xl font-semibold">Hover me!</h3>
            <p className="text-gray-600 mt-2">Lihat efek bayangan saat hover.</p>
        </div>
    )

function Sizing(){
    return (
        <div className="bg-blue-200 w-40 h-40 flex items-center justify-center">
            Box
        </div>
    )
}
}