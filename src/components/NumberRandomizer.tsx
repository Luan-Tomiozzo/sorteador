import React, { useState } from 'react';

const NumberRandomizer: React.FC = () => {
    const [min, setMin] = useState<number>(1);
    const [max, setMax] = useState<number>(100);
    const [selectedNumber, setSelectedNumber] = useState<number | null>(null);

    const handleRandomize = () => {
        const randomNum = Math.floor(Math.random() * (max - min + 1)) + min;
        setSelectedNumber(randomNum);
    };

    return (
        <div className="flex flex-col space-y-6 h-screen justify-center items-center bg-gray-600 text-white  border-solid border-2 border-white rounded-md">
            <h2 className="text-2xl font-semibold ">Sorteie um número</h2>

            <div className="flex space-x-4">
                <div className="flex flex-col space-y-2">
                    <label className="font-medium">De:</label>
                    <input
                        type="number"
                        value={min}
                        onChange={(e) => setMin(parseInt(e.target.value))}
                        className="border p-2 rounded focus:ring focus:ring-blue-200 text-black"
                    />
                </div>
                <div className="flex flex-col space-y-2">
                    <label className="font-medium">Até:</label>
                    <input
                        type="number"
                        value={max}
                        onChange={(e) => setMax(parseInt(e.target.value))}
                        className="border p-2 rounded focus:ring focus:ring-blue-200 text-black"
                    />
                </div>
            </div>

            <button onClick={handleRandomize} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded shadow">
                Sortear
            </button>

            {selectedNumber !== null && <div className="mt-6 text-xl font-semibold border-t pt-4">Número sorteado: <span className="text-3xl text-blue-500">{selectedNumber}</span></div>}
        </div>
    );
}

export default NumberRandomizer;
