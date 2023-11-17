import React, { useState } from 'react';
import Navbar from '../components/Navbar';

export default function AssetAllocation() {
    const [divList, setDivList] = useState([]);
    const [count, setCount] = useState(1);
    const [inputText, setInputText] = useState("")
    const PageStyle = {
        backgroundColor: "#282c34",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        color: "white"
    }

    async function getAnswer() {
        const url = `/auth/test`
        const body = inputText
        try {
            const response = await fetch(url, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: body,
            });
            const jsonresponse = await response.json()
            if (response.status === 200) {
                console.log('ok')
                const newDiv = <div key={count} className="min-h-[20vh] added-div p-4 border border-white m-2 rounded-md w-[90%]">This is div with Text : {jsonresponse.answer} #{count}!</div>;
                setDivList([...divList, newDiv]);
                setCount(count + 1);
            }
            else
                console.log('error')
        }
        catch {
            console.log('error')
        }
    }

    const handleButtonClick = () => {

        const newDiv = <div key={count} className="min-h-[20vh] added-div p-4 border border-white m-2 rounded-md w-[90%]">This is div with Text : {inputText} #{count}!</div>;
        setDivList([...divList, newDiv]);
        setCount(count + 1);
    };

    return (
        <div className="">
            <Navbar />
            <div style={PageStyle}>
                {
                    divList.length === 0 ?
                        <div className="flex">You can Ask me Anything</div>
                        :
                        <div className='mb-28 w-full items-center justify-center flex flex-col'>{divList}</div>
                }
                <div className="flex justify-around w-[75vw] fixed bottom-8">
                    <textarea rows="1" onChange={e => setInputText(e.target.value)} className='bg-[#282c34] border border-white rounded-md py-4 px-2 w-[80%] text-black' type="text" />
                    <button className=' bg-[#282c34] text-white px-8 border border-white rounded-md h-[8vh]' onClick={getAnswer}>Ask</button>
                </div>
            </div>
        </div>
    );
}
