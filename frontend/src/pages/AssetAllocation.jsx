import React, { useState } from 'react';
import Navbar from '../components/Navbar';

export default function AssetAllocation() {
    const [divList, setDivList] = useState([]);
    const [count, setCount] = useState(1);
    const [inputText, setInputText] = useState("")
    const PageStyle = {
        backgroundColor: "#093b60",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        color: "white"
    }

    async function getAnswer() {
        const url = `/auth/test`
        const body = { question: inputText }
        try {
            const response = await fetch(url, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(body),
            });
            const jsonresponse = await response.json()
            console.log(jsonresponse)
            if (response.status === 200) {
                console.log('ok')
                const newDiv = <div key={count} className="min-h-[20vh] added-div p-4 border border-white m-2 rounded-md w-[90%]">Question: {jsonresponse.question} <br /> Answer: {jsonresponse.answer} #{count}!</div>;
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
            <div className='bg-gradient-to- from-[#093b60] to-[#2eade2]' style={PageStyle}>
                {
                    divList.length === 0 ?
                        <div className="flex flex-col justify-center items-center text-[1.5rem]">
                            <p className='text-center'>
                                Hey! I am your Asset Manager! <br />Describe your situation to get the best asset allocation plan
                            </p>
                            <p className='text-center text-[0.7rem] opacity-60 w-[70%]'>
                                Example: Please help me allocate my assets. I am 40 years old, earning 12 lakhs annually, with 10 lakhs in savings. My monthly expenses are 40 thousand, and I'm concerned about tax implications (estimated tax rate: 12). My future plans include buying a house.  
                            </p>
                        </div>
                        :
                        <div className='mb-28 w-full items-center justify-center flex flex-col'>{divList}</div>
                }
                <div className="flex justify-around w-[75vw] fixed bottom-8">
                    <textarea rows="1" onChange={e => setInputText(e.target.value)} className='bg-[#2eade2] border border-white rounded-md py-4 px-2 w-[80%] text-black' type="text" />
                    <button className=' bg-[#2eade2] text-white px-8 border border-white rounded-md h-[8vh]' onClick={getAnswer}>Ask</button>
                </div>
            </div>
        </div>
    );
}
