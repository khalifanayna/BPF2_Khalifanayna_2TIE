export default function HelloWorld() {
    const propsUserCard = {
        nama: "Goku",
        nim: "999999",
        tanggal: "2025-01-01"
    }
    return (
        <div>
            <img src="img/download.jpg" width="100%"/>
            <h1>Hello World</h1>
            <p>Selamat Belajar ReactJs</p>
            <GretingBinjai/>
            <QuoteText/>
            <UserCard 
            nama="nayna" 
            nim = "2455301089" 
            tanggal = "2005/12/22"/>
            <UserCard {...propsUserCard}/>
        </div>
    )
}

function GretingBinjai(){
    return(
        <small> Salam Dari binjai</small>
    )
}

function QuoteText() {
    const text = "Mulutmu Harimaumu";
    const text2 = "Aku ingin jadi macan";
    return (
        <div>
            <hr/>
            <p>{text.toLowerCase()}</p>
            <p>{text2.toUpperCase()}</p>
        </div>
    )
}

function UserCard(props){
    return (
        <div>
            <hr/>
            <h3>Nama: {props.nama}</h3>
            <p>NIM: {props.nim}</p>
            <p>Tanggal: {props.tanggal}</p>
        </div>
    )
}