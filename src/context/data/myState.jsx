// /* eslint-disable react-hooks/rules-of-hooks */
// // eslint-disable-next-line no-unused-vars
// import React, { useEffect, useState } from 'react';
// import MyContext from './myContext';
// import { Timestamp, addDoc, collection, deleteDoc, doc, getDocs, onSnapshot, orderBy, query, setDoc } from 'firebase/firestore';
// import { toast } from 'react-toastify';
// import { fireDB } from '../../fireabase/FirebaseConfig';

// function myState(props) {
//     const [mode, setMode] = useState('light');
//     const [loading, setLoading] = useState(false);
//     const [products, setProducts] = useState({
//         title: null,
//         price: null,
//         imageUrl: null,
//         category: null,
//         description: null,
//         time: Timestamp.now(),
//         date: new Date().toLocaleString("en-US", { month: "short", day: "2-digit", year: "numeric" })
//     });
//     const [product, setProduct] = useState([]);
//     const [order, setOrder] = useState([]);
//     const [user, setUser] = useState([]);
//     const [searchkey, setSearchkey] = useState('');
//     const [filterType, setFilterType] = useState('');
//     const [filterBrandName, setFilterBrandName] = useState('');

//     const toggleMode = () => {
//         if (mode === 'light') {
//             setMode('dark');
//             document.body.style.backgroundColor = "rgb(17, 24, 39)";
//         } else {
//             setMode('light');
//             document.body.style.backgroundColor = "white";
//         }
//     };

//     const addProduct = async () => {
//         if (!products.title || !products.price || !products.imageUrl || !products.category || !products.description) {
//             return toast.error("All fields are required");
//         }

//         setLoading(true);

//         try {
//             const productRef = collection(fireDB, 'products');
//             await addDoc(productRef, products);
//             toast.success("Product added successfully");
//             setTimeout(() => {
//                 window.location.href = '/dashboard';
//             }, 800);
//             getProductData();
//             setLoading(false);
//         } catch (error) {
//             console.log(error);
//             setLoading(false);
//         }
//     };

//     const getProductData = async () => {
//         setLoading(true);

//         try {
//             const q = query(collection(fireDB, 'products'), orderBy('time'));
//             const data = onSnapshot(q, (QuerySnapshot) => {
//                 let productArray = [];
//                 QuerySnapshot.forEach((doc) => {
//                     productArray.push({ ...doc.data(), id: doc.id });
//                 });
//                 setProduct(productArray);
//                 setLoading(false);
//             });

//             return () => data;
//         } catch (error) {
//             console.log(error);
//             setLoading(false);
//         }
//     };

//     useEffect(() => {
//         getProductData();
//     }, []);

//     const edithandle = (item) => {
//         setProducts(item);
//     };

//     const updateProduct = async () => {
//         setLoading(true);
//         try {
//             await setDoc(doc(fireDB, 'products', products.id), products);
//             toast.success("Product updated successfully");
//             setTimeout(() => {
//                 window.location.href = '/dashboard';
//             }, 800);
//             getProductData();
//             setLoading(false);
//         } catch (error) {
//             console.log(error);
//             setLoading(false);
//         }
//     };

//     const deleteProduct = async (item) => {
//         setLoading(true);
//         try {
//             await deleteDoc(doc(fireDB, 'products', item.id));
//             toast.success('Product deleted successfully');
//             getProductData();
//             setLoading(false);
//         } catch (error) {
//             console.log(error);
//             setLoading(false);
//         }
//     };

//     const getOrderData = async () => {
//         setLoading(true);
//         try {
//             const result = await getDocs(collection(fireDB, "order"));
//             const ordersArray = [];
//             result.forEach((doc) => {
//                 ordersArray.push({ ...doc.data(), id: doc.id });
//             });
//             setOrder(ordersArray);
//             setLoading(false);
//         } catch (error) {
//             console.log(error);
//             setLoading(false);
//         }
//     };

//     const editOrder = (item) => {
//         setOrder(prevOrders => prevOrders.map(o => o.id === item.id ? item : o));
//     };

//     const updateOrder = async (updatedOrder) => {
//         setLoading(true);
//         try {
//             await setDoc(doc(fireDB, 'order', updatedOrder.id), updatedOrder);
//             toast.success("Order updated successfully");
//             getOrderData();
//             setLoading(false);
//         } catch (error) {
//             console.log(error);
//             setLoading(false);
//         }
//     };

//     const getUserData = async () => {
//         setLoading(true);
//         try {
//             const result = await getDocs(collection(fireDB, "users"));
//             const usersArray = [];
//             result.forEach((doc) => {
//                 usersArray.push(doc.data());
//             });
//             setUser(usersArray);
//             setLoading(false);
//         } catch (error) {
//             console.log(error);
//             setLoading(false);
//         }
//     };

//     useEffect(() => {
//         getOrderData();
//         getUserData();
//     }, []);

//     return (
//         <MyContext.Provider value={{
//             mode, toggleMode, loading, setLoading, products, setProducts, addProduct, product,
//             edithandle, updateProduct, deleteProduct, order, updateOrder, editOrder,
//             user, searchkey, setSearchkey, filterType, setFilterType, filterBrandName, setFilterBrandName
//         }}>
//             {props.children}
//         </MyContext.Provider>
//     );
// }

// export default myState;



import React, { useEffect, useState } from 'react';
import MyContext from './myContext';
import { Timestamp, addDoc, collection, deleteDoc, doc, getDocs, onSnapshot, orderBy, query, setDoc } from 'firebase/firestore';
import { toast } from 'react-toastify';
import { fireDB } from '../../fireabase/FirebaseConfig';

function MyState(props) {
    const [mode, setMode] = useState('light');
    const [loading, setLoading] = useState(false);
    const [products, setProducts] = useState({
        title: '',
        price: 0,
        imageUrl: '',
        category: '',
        description: '',
        quantity: 0, // Initialize quantity as a number
        time: new Date().toISOString(),
        date: new Date().toLocaleString("en-US", { month: "short", day: "2-digit", year: "numeric" })
    });
    const [product, setProduct] = useState([]);
    const [order, setOrder] = useState([]);
    const [user, setUser] = useState([]);
    const [searchkey, setSearchkey] = useState('');
    const [filterType, setFilterType] = useState('');
    const [filterBrandName, setFilterBrandName] = useState('');

    const toggleMode = () => {
        setMode((prevMode) => {
            const newMode = prevMode === 'light' ? 'dark' : 'light';
            document.body.style.backgroundColor = newMode === 'dark' ? "rgb(17, 24, 39)" : "white";
            return newMode;
        });
    };

    const handleError = (error) => {
        console.error(error);
        toast.error('An error occurred');
    };

    const addProduct = async () => {
        if (!products.title || !products.price || !products.imageUrl || !products.category || !products.description) {
            return toast.error("All fields are required");
        }

        setLoading(true);
        try {
            const productRef = collection(fireDB, 'products');
            await addDoc(productRef, {
                ...products,
                price: Number(products.price), // Ensure price is a number
                quantity: Number(products.quantity) // Ensure quantity is a number
            });
            toast.success("Product added successfully");
            setTimeout(() => {
                window.location.href = '/dashboard';
            }, 800);
            getProductData();
        } catch (error) {
            handleError(error);
        } finally {
            setLoading(false);
        }
    };

    const getProductData = async () => {
        setLoading(true);
        try {
            const q = query(collection(fireDB, 'products'), orderBy('time'));
            const unsubscribe = onSnapshot(q, (querySnapshot) => {
                let productArray = [];
                querySnapshot.forEach((doc) => {
                    const data = doc.data();
                    productArray.push({
                        ...data,
                        id: doc.id,
                        time: data.time.toDate().toISOString(), // Convert Timestamp to ISO string
                        quantity: Number(data.quantity) // Convert quantity to number
                    });
                });
                setProduct(productArray);
            });

            return () => unsubscribe();
        } catch (error) {
            handleError(error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        getProductData();
    }, []);

    const edithandle = (item) => setProducts(item);

    const updateProduct = async () => {
        setLoading(true);
        try {
            await setDoc(doc(fireDB, 'products', products.id), {
                ...products,
                price: Number(products.price), // Ensure price is a number
                quantity: Number(products.quantity) // Ensure quantity is a number
            });
            toast.success("Product updated successfully");
            setTimeout(() => {
                window.location.href = '/dashboard';
            }, 800);
            getProductData();
        } catch (error) {
            handleError(error);
        } finally {
            setLoading(false);
        }
    };

    const deleteProduct = async (item) => {
        setLoading(true);
        try {
            await deleteDoc(doc(fireDB, 'products', item.id));
            toast.success('Product deleted successfully');
            getProductData();
        } catch (error) {
            handleError(error);
        } finally {
            setLoading(false);
        }
    };

    const getOrderData = async () => {
        setLoading(true);
        try {
            const result = await getDocs(collection(fireDB, "order"));
            const ordersArray = [];
            result.forEach((doc) => {
                ordersArray.push({
                    ...doc.data(),
                    id: doc.id,
                    date: doc.data().date.toDate().toLocaleString("en-US", { month: "short", day: "2-digit", year: "numeric" }), // Convert Timestamp
                });
            });
            setOrder(ordersArray);
        } catch (error) {
            handleError(error);
        } finally {
            setLoading(false);
        }
    };

    const editOrder = (item) => {
        setOrder(prevOrders => prevOrders.map(o => o.id === item.id ? item : o));
    };

    const updateOrder = async (updatedOrder) => {
        setLoading(true);
        try {
            await setDoc(doc(fireDB, 'order', updatedOrder.id), updatedOrder);
            toast.success("Order updated successfully");
            getOrderData();
        } catch (error) {
            handleError(error);
        } finally {
            setLoading(false);
        }
    };

    const getUserData = async () => {
        setLoading(true);
        try {
            const result = await getDocs(collection(fireDB, "users"));
            const usersArray = [];
            result.forEach((doc) => {
                usersArray.push(doc.data());
            });
            setUser(usersArray);
        } catch (error) {
            handleError(error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        getOrderData();
        getUserData();
    }, []);

    return (
        <MyContext.Provider value={{
            mode, toggleMode, loading, setLoading, products, setProducts, addProduct, product,
            edithandle, updateProduct, deleteProduct, order, updateOrder, editOrder,
            user, searchkey, setSearchkey, filterType, setFilterType, filterBrandName, setFilterBrandName
        }}>
            {props.children}
        </MyContext.Provider>
    );
}

export default MyState;
