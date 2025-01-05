// "use client";
// import {
//     Table,
//     TableBody,
//     TableCell,
//     TableHead,
//     TableHeader,
//     TableRow,
// } from "@/components/ui/table";
// import React, { useEffect, useState } from 'react';



// export default function AllProducts() {
//     const [Products, setAllProducts] = useState([]); // Initialize as an empty array

//     useEffect(() => {

//         const fetchProduct = async () => {
//             try {
//                 let res = await fetch("/api/allProducts", {
//                     method: 'POST',
//                     headers: {
//                         'Content-Type': 'application/json',
//                     },
//                 });
//                 const all_products = await res.json();
//                 console.log("data without parse: ", all_products )
//                 // const a = JSON.parse(all_products.allProducts);

//                 console.log("response from fetchdata:", all_products);

//                 if (all_products.success === true) {
//                     setAllProducts(all_products.allProducts); // Ensure the data is an array
//                 } else {
//                     throw new Error("Product fetch failed!");
//                 }
//             } catch (error) {
//                 console.error(error);
//             }
//         };
//         const intervalId = setInterval(fetchProduct, 5000);

//         return () => clearInterval(intervalId);
//     }, [Products]);


//     return (
//         <div>
//             <div className="bg-sky-300 w-full rounded-md h-16 flex items-center justify-center">
//                 <h1 className="text-blue-900 text-[30px]">Incubator Data</h1>
//             </div>
//             <Table>
//                 <TableHeader>
//                     <TableRow>
//                         <TableHead>RFID Tag</TableHead>
//                         <TableHead>Product Name</TableHead>
//                         <TableHead>Category</TableHead>
//                         <TableHead>Quantity</TableHead>
//                     </TableRow>
//                 </TableHeader>
//                 <TableBody>
//                     {Products.map(product => (
//                         <TableRow key={product.tag}>
//                             <TableCell>{product.tag}</TableCell>
//                             <TableCell>{product.productName}</TableCell>
//                             <TableCell>{product.category}</TableCell>
//                             <TableCell>{product.quantity}</TableCell>
//                         </TableRow>
//                     ))}
//                 </TableBody>
//             </Table>
//         </div>
//     );
// }

export default function fetchRecordData() {
    return(
        <div>
            hello
        </div>
    );
}