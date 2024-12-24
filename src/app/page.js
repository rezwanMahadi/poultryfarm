// 'use client';
// import { Label } from "@/components/ui/label";
// import { Input } from "@/components/ui/input";
// import { Button } from "@/components/ui/button";
// import { useEffect, useState } from 'react';

// export default function Home() {
//   const [incubatorTemp, setIncubatorTemp] = useState('');
//   const [incubatorHumi, setIncubatorHumi] = useState('');
//   const [brooderTemp, setBrooderTemp] = useState('');
//   const [brooderHumi, setBrooderHumi] = useState('');
//   const [bigChickTemp, setBigChickTemp] = useState('');

//   useEffect(() => {
//     const fetchreceivedTag = async () => {

//       let res = await fetch("/api/fetchData", {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//       });
//       const receivedData = await res.json();
//       console.log("response from fetchdata:", receivedData);

//       if (receivedData.success == true) {
//         tagFetchStatus = false;
//         clearInterval(intervalId);
//         setIncubatorTemp(receivedData.incubatorTemp);
//         setIncubatorHumi(receivedData.incubatorHumi);
//         setBrooderTemp(receivedData.brooderTemp);
//         setBrooderHumi(receivedData.brooderHumi);
//         setBigChickTemp(receivedData.bigChickTemp);
//       } else {
//         console.error(receivedData);
//       }
//     }
//   }, []);

//   return (
//     <div className="h-screen flex justify-center items-center">
//       <div className="flex-col justify-center">
//         <h1 className="text-center text-lime-600 text-lg">Poultry Farm</h1>
//         <div className="border border-slate-700 rounded-xl w-[700px] mt-4">
//           <h3 className="text-center">Incubator Section</h3>
//           <div>
//             <div className="flex justify-center items-center space-x-3">
//               <div>
//                 <Label>Live Temperature</Label>
//                 <Input value="32" readOnly></Input>
//               </div>
//               <div>
//                 <Label>Change Temperature</Label>
//                 <Input placeholder="Input Temperature"></Input>
//               </div>
//               <Button className="bg-blue-500 hover:bg-blue-600">Change Temperature</Button>
//             </div>
//             <div className="flex justify-center items-center space-x-3">
//               <div>
//                 <Label>Live Humidity</Label>
//                 <Input value="70%" readOnly></Input>
//               </div>
//               <div>
//                 <Label>Change Humidity</Label>
//                 <Input placeholder="Input Humidity"></Input>
//               </div>
//               <Button className="bg-blue-500 hover:bg-blue-600">Change Humidity</Button>
//             </div>
//           </div>
//         </div>
//         <div className="border border-slate-700 rounded-xl w-[700px] mt-4">
//           <h3 className="text-center">Brooding Section</h3>
//           <div>
//             <div className="flex justify-center items-center space-x-3">
//               <div>
//                 <Label>Live Temperature</Label>
//                 <Input value="32" readOnly></Input>
//               </div>
//               <div>
//                 <Label>Change Temperature</Label>
//                 <Input placeholder="Input Temperature"></Input>
//               </div>
//               <Button className="bg-blue-500 hover:bg-blue-600">Change Temperature</Button>
//             </div>
//             <div className="flex justify-center items-center space-x-3">
//               <div>
//                 <Label>Live Humidity</Label>
//                 <Input value="70%" readOnly></Input>
//               </div>
//               <div>
//                 <Label>Change Humidity</Label>
//                 <Input placeholder="Input Humidity"></Input>
//               </div>
//               <Button className="bg-blue-500 hover:bg-blue-600">Change Humidity</Button>
//             </div>
//           </div>
//         </div>
//         <div className="border border-slate-700 rounded-xl w-[700px] mt-4">
//           <h3 className="text-center">Mature Section</h3>
//           <div>
//             <div className="flex justify-center items-center space-x-3">
//               <div>
//                 <Label>Live Temperature</Label>
//                 <Input value="32" readOnly></Input>
//               </div>
//               <div>
//                 <Label>Change Temperature</Label>
//                 <Input placeholder="Input Temperature"></Input>
//               </div>
//               <Button className="bg-blue-500 hover:bg-blue-600">Change Temperature</Button>
//             </div>
//             <div className="flex justify-center items-center space-x-3">
//               <div>
//                 <Label>Live Humidity</Label>
//                 <Input value="70%" readOnly></Input>
//               </div>
//               <div>
//                 <Label>Change Humidity</Label>
//                 <Input placeholder="Input Humidity"></Input>
//               </div>
//               <Button className="bg-blue-500 hover:bg-blue-600">Change Humidity</Button>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

'use client';
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from 'react';

export default function Home() {
  const [incubatorTemp, setIncubatorTemp] = useState('');
  const [incubatorHumi, setIncubatorHumi] = useState('');
  const [brooderTemp, setBrooderTemp] = useState('');
  const [brooderHumi, setBrooderHumi] = useState('');
  const [bigChickTemp, setBigChickTemp] = useState('');

  useEffect(() => {
    const fetchreceivedTag = async () => {
      try {
        let res = await fetch("/api/fetchData", {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
        });
        const receivedData = await res.json();
        console.log("response from fetchdata:", receivedData);

        if (receivedData.success) {
          setIncubatorTemp(receivedData.incubatorTemp);
          setIncubatorHumi(receivedData.incubatorHumi);
          setBrooderTemp(receivedData.brooderTemp);
          setBrooderHumi(receivedData.brooderHumi);
          setBigChickTemp(receivedData.bigChickTemp);
        } else {
          console.error(receivedData);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    const intervalId = setInterval(fetchreceivedTag, 1000); // Fetch data every 5 seconds

    return () => clearInterval(intervalId); // Cleanup interval on component unmount
  }, []);

  return (
    <div className="h-screen flex justify-center">
      <div className="flex-col justify-center">
        <div className="bg-sky-800 mt-8">
          <h1 className="text-center text-white text-[30px]">Poultry Farm</h1>
        </div>
        <div className="border border-slate-700 rounded-xl w-[900px] mt-4 bg-sky-50">
          <div className="bg-slate-300 rounded-t-xl pt-2 pb-2">
            <h3 className="text-center">Incubator Section</h3>
          </div>
          <div className="grid grid-cols-3 space-x-4 m-4">
            <div className="flex-col space-y-3">
              <div>
                <Label>Live Temperature</Label>
                <Input className="bg-white" value={incubatorTemp} readOnly></Input>
              </div>
              <div>
                <Label>Live Humidity</Label>
                <Input className="bg-white" value={incubatorHumi} readOnly></Input>
              </div>
            </div>
            <div className="flex-col space-y-3">
              <div className="space-y-1">
                <Label>Temperature Upper Limit</Label>
                <Input className="bg-white" value={incubatorTemp} readOnly></Input>
                <Input className="bg-white" placeholder="Input Upper Limit"></Input>
              </div>
              <div className="space-y-1">
                <Label>Temperature Lower Limit</Label>
                <Input className="bg-white" value={incubatorTemp} readOnly></Input>
                <Input className="bg-white" placeholder="Input Lower Limit"></Input>
              </div>

              <Button className="bg-blue-500 hover:bg-blue-700 w-full">Change Temperature</Button>
            </div>
            <div className="flex-col space-y-3">
              <div className="space-y-1">
                <Label>Humidity Upper Limit</Label>
                <Input className="bg-white" value={incubatorHumi} readOnly></Input>
                <Input className="bg-white" placeholder="Input Upper Limit"></Input>
              </div>
              <div className="space-y-1">
                <Label>Humidity Lower Limit</Label>
                <Input className="bg-white" value={incubatorHumi} readOnly></Input>
                <Input className="bg-white" placeholder="Input Lower Limit"></Input>
              </div>
              <Button className="bg-blue-500 hover:bg-blue-700 w-full">Change Humidity</Button>
            </div>
          </div>
        </div>
        <div className="border border-slate-700 rounded-xl w-[700px] mt-4 bg-sky-50">
          <div className="bg-slate-300 rounded-t-xl pt-2 pb-2">
            <h3 className="text-center">Brooding Section</h3>
          </div>
          <div className="mt-2 mb-4">
            <div className="flex justify-center items-center space-x-3">
              <div>
                <Label>Live Temperature</Label>
                <Input className="bg-white" value={brooderTemp} readOnly></Input>
              </div>
              <div>
                <Label>Change Temperature</Label>
                <Input className="bg-white" placeholder="Input Temperature"></Input>
              </div>
              <Button className="bg-blue-500 hover:bg-blue-600">Change Temperature</Button>
            </div>
            <div className="flex justify-center items-center space-x-3">
              <div>
                <Label>Live Humidity</Label>
                <Input className="bg-white" value={brooderHumi} readOnly></Input>
              </div>
              <div>
                <Label>Change Humidity</Label>
                <Input className="bg-white" placeholder="Input Humidity"></Input>
              </div>
              <Button className="bg-blue-500 hover:bg-blue-600">Change Humidity</Button>
            </div>
          </div>
        </div>
        <div className="border border-slate-700 rounded-xl w-[700px] mt-4 bg-sky-50">
          <div className="bg-slate-300 rounded-t-xl pt-2 pb-2">
            <h3 className="text-center">Mature Section</h3>
          </div>
          <div className="mt-2 mb-4">
            <div className="flex justify-center items-center space-x-3">
              <div>
                <Label>Live Temperature</Label>
                <Input className="bg-white" value={bigChickTemp} readOnly></Input>
              </div>
              <div>
                <Label>Change Temperature</Label>
                <Input className="bg-white" placeholder="Input Temperature"></Input>
              </div>
              <Button className="bg-blue-500 hover:bg-blue-600">Change Temperature</Button>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-3 space-x-5">
          <Button className="bg-blue-500 hover:bg-blue-600">Change Temperature</Button>
          <Button className="bg-blue-500 hover:bg-blue-600">Change Temperature</Button>
          <Button className="bg-blue-500 hover:bg-blue-600">Change Temperature</Button>
        </div>
      </div>
    </div>
  );
}

