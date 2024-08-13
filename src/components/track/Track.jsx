// import React, { useContext } from 'react';
// import myContext from '../../context/data/myContext';

// function Track() {
//     const context = useContext(myContext);
//     const { mode } = context;

//     return (
//         <div>
//             <section>
//                 <div className="container mx-auto px-5 md:py-5">
//                     <div className="flex flex-wrap -m-4 text-center">
//                         <div className="p-4 md:w-1/3 sm:w-1/2 w-full">
//                         <div className="border-2 hover:shadow-xl hover:shadow-gray-200 border-gray-200 shadow-[inset_0_0_2px_rgba(0,0,0,0.6)] px-4 py-6 rounded-lg" style={{ backgroundColor: mode === 'dark' ? '#282c34' : '#acaef5', color: 'black', borderColor: mode === 'dark' ? 'white' : 'gray-200' }}>
//                             <img src="https://cdn-icons-png.freepik.com/256/11311/11311461.png?uid=R147306243&ga=GA1.1.1087679078.1714562823&semt=ais_hybrid" alt="Icon" className="w-12 h-12 mb-3 inline-block" />
//                                 <h2 className="title-font font-bold text-lg text-gray-900" style={{ color: mode === 'dark' ? 'white' : '' }}>Quality Assurance</h2>
//                                 <p className="leading-relaxed" style={{ color: mode === 'dark' ? 'white' : '' }}>Instruments made with the finest materials ensure longevity and reliability.</p>
//                             </div>
//                         </div>
//                         <div className="p-4 md:w-1/3 sm:w-1/2 w-full">
//                         <div className="border-2 hover:shadow-xl hover:shadow-gray-200 border-gray-200 shadow-[inset_0_0_2px_rgba(0,0,0,0.6)] px-4 py-6 rounded-lg" style={{ backgroundColor: mode === 'dark' ? '#282c34' : '#acaef5', color: 'black', borderColor: mode === 'dark' ? 'white' : 'gray-200' }}>
//                             <img src="https://cdn-icons-png.freepik.com/256/15771/15771163.png?uid=R147306243&ga=GA1.1.1087679078.1714562823&semt=ais_hybrid" alt="Icon" className="w-12 h-12 mb-3 inline-block" />
//                                 <h2 className="title-font font-bold text-lg text-gray-900" style={{ color: mode === 'dark' ? 'white' : '' }}>Expert Advice</h2>
//                                 <p className="leading-relaxed" style={{ color: mode === 'dark' ? 'white' : '' }}>Our team is dedicated to helping you find the perfect instrument for your needs.</p>
//                             </div>
//                         </div>

//                         <div className="p-4 md:w-1/3 sm:w-1/2 w-full">
//                         <div className="border-2 hover:shadow-xl hover:shadow-gray-200 border-gray-200 shadow-[inset_0_0_2px_rgba(0,0,0,0.6)] px-4 py-6 rounded-lg" style={{ backgroundColor: mode === 'dark' ? '#282c34' : '#acaef5', color: 'black', borderColor: mode === 'dark' ? 'white' : 'gray-200' }}>
//                                 <img src="https://cdn-icons-png.freepik.com/256/13484/13484601.png?uid=R147306243&ga=GA1.1.1087679078.1714562823&semt=ais_hybrid" alt="Icon" className="w-12 h-12 mb-3 inline-block" />
//                                 <h2 className="title-font font-bold text-lg text-gray-900" style={{ color: mode === 'dark' ? 'white' : '' }}>Customer Satisfaction</h2>
//                                 <p className="leading-relaxed" style={{ color: mode === 'dark' ? 'white' : '' }}>Join countless musicians who trust us for their musical journeys.</p>
//                             </div>
//                         </div>


//                     </div>
//                 </div>
//             </section>
//         </div>
//     );
// }

// export default Track;


import React, { useContext } from 'react';
import myContext from '../../context/data/myContext';

function Track() {
    const context = useContext(myContext);
    const { mode } = context;

    return (
        <div>
            <section>
                <div className="container mx-auto px-4 md:px-5 py-8">
                    <div className="flex flex-wrap -m-4 text-center">
                        <div className="p-4 md:w-1/3 sm:w-1/2 w-full">
                            <div
                                className="border-2 hover:shadow-xl hover:shadow-gray-200 border-gray-200 shadow-[inset_0_0_2px_rgba(0,0,0,0.6)] px-4 py-6 rounded-lg"
                                style={{
                                    backgroundColor: mode === 'dark' ? '#282c34' : '#acaef5',
                                    color: 'black',
                                    borderColor: mode === 'dark' ? 'white' : 'gray-200',
                                }}
                            >
                                <img
                                    src="https://cdn-icons-png.freepik.com/256/11311/11311461.png?uid=R147306243&ga=GA1.1.1087679078.1714562823&semt=ais_hybrid"
                                    alt="Icon"
                                    className="w-12 h-12 mb-3 mx-auto"
                                />
                                <h2
                                    className="title-font font-bold text-lg"
                                    style={{ color: mode === 'dark' ? 'white' : '' }}
                                >
                                    Quality Assurance
                                </h2>
                                <p
                                    className="leading-relaxed"
                                    style={{ color: mode === 'dark' ? 'white' : '' }}
                                >
                                    Instruments made with the finest materials ensure longevity and reliability.
                                </p>
                            </div>
                        </div>
                        <div className="p-4 md:w-1/3 sm:w-1/2 w-full">
                            <div
                                className="border-2 hover:shadow-xl hover:shadow-gray-200 border-gray-200 shadow-[inset_0_0_2px_rgba(0,0,0,0.6)] px-4 py-6 rounded-lg"
                                style={{
                                    backgroundColor: mode === 'dark' ? '#282c34' : '#acaef5',
                                    color: 'black',
                                    borderColor: mode === 'dark' ? 'white' : 'gray-200',
                                }}
                            >
                                <img
                                    src="https://cdn-icons-png.freepik.com/256/15771/15771163.png?uid=R147306243&ga=GA1.1.1087679078.1714562823&semt=ais_hybrid"
                                    alt="Icon"
                                    className="w-12 h-12 mb-3 mx-auto"
                                />
                                <h2
                                    className="title-font font-bold text-lg"
                                    style={{ color: mode === 'dark' ? 'white' : '' }}
                                >
                                    Expert Advice
                                </h2>
                                <p
                                    className="leading-relaxed"
                                    style={{ color: mode === 'dark' ? 'white' : '' }}
                                >
                                    Our team is dedicated to helping you find the perfect instrument for your needs.
                                </p>
                            </div>
                        </div>

                        <div className="p-4 md:w-1/3 sm:w-1/2 w-full">
                            <div
                                className="border-2 hover:shadow-xl hover:shadow-gray-200 border-gray-200 shadow-[inset_0_0_2px_rgba(0,0,0,0.6)] px-4 py-6 rounded-lg"
                                style={{
                                    backgroundColor: mode === 'dark' ? '#282c34' : '#acaef5',
                                    color: 'black',
                                    borderColor: mode === 'dark' ? 'white' : 'gray-200',
                                }}
                            >
                                <img
                                    src="https://cdn-icons-png.freepik.com/256/13484/13484601.png?uid=R147306243&ga=GA1.1.1087679078.1714562823&semt=ais_hybrid"
                                    alt="Icon"
                                    className="w-12 h-12 mb-3 mx-auto"
                                />
                                <h2
                                    className="title-font font-bold text-lg"
                                    style={{ color: mode === 'dark' ? 'white' : '' }}
                                >
                                    Customer Satisfaction
                                </h2>
                                <p
                                    className="leading-relaxed"
                                    style={{ color: mode === 'dark' ? 'white' : '' }}
                                >
                                    Join countless musicians who trust us for their musical journeys.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Track;

