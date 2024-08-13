// /* eslint-disable react/no-unescaped-entities */
// /* eslint-disable no-unused-vars */
// import React, { useContext } from 'react';
// import myContext from '../../context/data/myContext';

// function Testimonial() {
//     const context = useContext(myContext);
//     const { mode } = context;

//     return (
//         <div>
//             <section className=''>
//                 <div className="container mx-auto px-5 py-10">
//                     <h1 className='text-center text-3xl font-bold text-black' style={{ color: mode === 'dark' ? 'white' : '' }}>Testimonial</h1>
//                     <h2 className='text-center text-2xl font-semibold mb-10' style={{ color: mode === 'dark' ? 'white' : '' }}>What our <span className='text-pink-500'>customers</span> are saying</h2>
//                     <div className="flex flex-wrap -m-4">
//                         <div className="lg:w-1/3 lg:mb-0 mb-6 p-4">
//                         <div className={`h-full text-center rounded-lg p-4 ${mode === 'dark' ? 'hover:bg-white' : ''}`} style={{ backgroundColor: mode === 'dark' ? '#282c34' : '#acaef5', color: 'black', border: `2px solid ${mode === 'dark' ? 'white' : 'gray-200'}` }}>
//                                 <img alt="testimonial" className="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100" src="https://img.freepik.com/free-photo/young-bearded-man-with-striped-shirt_273609-5677.jpg?uid=R147306243&ga=GA1.1.1087679078.1714562823&semt=ais_user" />
//                                 <p className="leading-relaxed" style={{ color: mode === 'dark' ? 'white' : '' }}>This website has an amazing selection of musical instruments! I found exactly what I was looking for, and the prices were unbeatable.</p>
//                                 <span className="inline-block h-1 w-10 rounded bg-white mt-6 mb-4" />
//                                 <h2 className="font-bold title-font tracking-wider text-sm uppercase" style={{ color: mode === 'dark' ? '#ff4162' : 'black' }}>Alice Johnson</h2>
//                                 <p style={{ color: mode === 'dark' ? 'white' : '' }}>Music Teacher</p>
//                             </div>
//                         </div>
//                         <div className="lg:w-1/3 lg:mb-0 mb-6 p-4">
//                         <div className={`h-full text-center rounded-lg p-4 ${mode === 'dark' ? 'hover:bg-white' : ''}`} style={{ backgroundColor: mode === 'dark' ? '#282c34' : '#acaef5', color: 'black', border: `2px solid ${mode === 'dark' ? 'white' : 'gray-200'}` }}>
//                                 <img alt="testimonial" className="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100" src="https://img.freepik.com/free-photo/smiling-young-man-with-crossed-arms-outdoors_1140-255.jpg?uid=R147306243&ga=GA1.1.1087679078.1714562823&semt=ais_user" />
//                                 <p className="leading-relaxed" style={{ color: mode === 'dark' ? 'white' : '' }}>The customer service is outstanding. They helped me choose the perfect guitar and even offered free shipping. Highly recommend!</p>
//                                 <span className="inline-block h-1 w-10 rounded bg-white mt-6 mb-4" />
//                                 <h2 className="font-bold title-font tracking-wider text-sm uppercase" style={{ color: mode === 'dark' ? '#ff4162' : 'black' }}>Michael Smith</h2>
//                                 <p style={{ color: mode === 'dark' ? 'white' : '' }}>Customer</p>
//                             </div>
//                         </div>
//                         <div className="lg:w-1/3 lg:mb-0 p-4">
//                         <div className={`h-full text-center rounded-lg p-4 ${mode === 'dark' ? 'hover:bg-white' : ''}`} style={{ backgroundColor: mode === 'dark' ? '#282c34' : '#acaef5', color: 'black', border: `2px solid ${mode === 'dark' ? 'white' : 'gray-200'}` }}>
//                                 <img alt="testimonial" className="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100" src="https://img.freepik.com/free-photo/horizontal-portrait-smiling-happy-young-pleasant-looking-female-wears-denim-shirt-stylish-glasses-with-straight-blonde-hair-expresses-positiveness-poses_176420-13176.jpg?uid=R147306243&ga=GA1.1.1087679078.1714562823&semt=ais_user" />
//                                 <p className="leading-relaxed" style={{ color: mode === 'dark' ? 'white' : '' }}>I'm so impressed with the quality of the products. My new keyboard arrived quickly and in perfect condition.</p>
//                                 <span className="inline-block h-1 w-10 rounded bg-white mt-6 mb-4" />
//                                 <h2 className="font-bold title-font tracking-wider text-sm uppercase" style={{ color: mode === 'dark' ? '#ff4162' : 'black' }}>Emily Davis</h2>
//                                 <p style={{ color: mode === 'dark' ? 'white' : '' }}>Customer</p>
//                             </div>
//                         </div>
                        
//                     </div>
//                 </div>
//             </section>
//         </div>
//     );
// }

// export default Testimonial;




/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import React, { useContext } from 'react';
import myContext from '../../context/data/myContext';

function Testimonial() {
    const context = useContext(myContext);
    const { mode } = context;

    return (
        <div>
            <section>
                <div className="container mx-auto px-4 md:px-5 py-10">
                    <h1 className='text-center text-3xl font-bold' style={{ color: mode === 'dark' ? 'white' : 'black' }}>Testimonial</h1>
                    <h2 className='text-center text-2xl font-semibold mb-10' style={{ color: mode === 'dark' ? 'white' : '' }}>What our <span className='text-pink-500'>customers</span> are saying</h2>
                    <div className="flex flex-wrap -m-4">
                        <div className="lg:w-1/3 md:w-1/2 w-full p-4">
                            <div
                                className={`h-full text-center rounded-lg p-4 ${mode === 'dark' ? 'hover:bg-white' : ''}`}
                                style={{
                                    backgroundColor: mode === 'dark' ? '#282c34' : '#acaef5',
                                    color: 'black',
                                    border: `2px solid ${mode === 'dark' ? 'white' : 'gray-200'}`,
                                }}
                            >
                                <img
                                    alt="testimonial"
                                    className="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100"
                                    src="https://img.freepik.com/free-photo/young-bearded-man-with-striped-shirt_273609-5677.jpg?uid=R147306243&ga=GA1.1.1087679078.1714562823&semt=ais_user"
                                />
                                <p className="leading-relaxed" style={{ color: mode === 'dark' ? 'white' : '' }}>
                                    This website has an amazing selection of musical instruments! I found exactly what I was looking for, and the prices were unbeatable.
                                </p>
                                <span className="inline-block h-1 w-10 rounded bg-white mt-6 mb-4" />
                                <h2 className="font-bold title-font tracking-wider text-sm uppercase" style={{ color: mode === 'dark' ? '#ff4162' : 'black' }}>Alice Johnson</h2>
                                <p style={{ color: mode === 'dark' ? 'white' : '' }}>Music Teacher</p>
                            </div>
                        </div>
                        <div className="lg:w-1/3 md:w-1/2 w-full p-4">
                            <div
                                className={`h-full text-center rounded-lg p-4 ${mode === 'dark' ? 'hover:bg-white' : ''}`}
                                style={{
                                    backgroundColor: mode === 'dark' ? '#282c34' : '#acaef5',
                                    color: 'black',
                                    border: `2px solid ${mode === 'dark' ? 'white' : 'gray-200'}`,
                                }}
                            >
                                <img
                                    alt="testimonial"
                                    className="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100"
                                    src="https://img.freepik.com/free-photo/smiling-young-man-with-crossed-arms-outdoors_1140-255.jpg?uid=R147306243&ga=GA1.1.1087679078.1714562823&semt=ais_user"
                                />
                                <p className="leading-relaxed" style={{ color: mode === 'dark' ? 'white' : '' }}>
                                    The customer service is outstanding. They helped me choose the perfect guitar and even offered free shipping. Highly recommend!
                                </p>
                                <span className="inline-block h-1 w-10 rounded bg-white mt-6 mb-4" />
                                <h2 className="font-bold title-font tracking-wider text-sm uppercase" style={{ color: mode === 'dark' ? '#ff4162' : 'black' }}>Michael Smith</h2>
                                <p style={{ color: mode === 'dark' ? 'white' : '' }}>Customer</p>
                            </div>
                        </div>
                        <div className="lg:w-1/3 md:w-1/2 w-full p-4">
                            <div
                                className={`h-full text-center rounded-lg p-4 ${mode === 'dark' ? 'hover:bg-white' : ''}`}
                                style={{
                                    backgroundColor: mode === 'dark' ? '#282c34' : '#acaef5',
                                    color: 'black',
                                    border: `2px solid ${mode === 'dark' ? 'white' : 'gray-200'}`,
                                }}
                            >
                                <img
                                    alt="testimonial"
                                    className="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100"
                                    src="https://img.freepik.com/free-photo/horizontal-portrait-smiling-happy-young-pleasant-looking-female-wears-denim-shirt-stylish-glasses-with-straight-blonde-hair-expresses-positiveness-poses_176420-13176.jpg?uid=R147306243&ga=GA1.1.1087679078.1714562823&semt=ais_user"
                                />
                                <p className="leading-relaxed" style={{ color: mode === 'dark' ? 'white' : '' }}>
                                    I'm so impressed with the quality of the products. My new keyboard arrived quickly and in perfect condition.
                                </p>
                                <span className="inline-block h-1 w-10 rounded bg-white mt-6 mb-4" />
                                <h2 className="font-bold title-font tracking-wider text-sm uppercase" style={{ color: mode === 'dark' ? '#ff4162' : 'black' }}>Emily Davis</h2>
                                <p style={{ color: mode === 'dark' ? 'white' : '' }}>Customer</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Testimonial;
