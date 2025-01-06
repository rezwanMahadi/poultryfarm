'use client';
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from 'react';
import Link from 'next/link';

export default function Home() {
  const [incubatorTemp, setIncubatorTemp] = useState('');
  const [incubatorHumi, setIncubatorHumi] = useState('');
  const [brooderTemp, setBrooderTemp] = useState('');
  const [brooderHumi, setBrooderHumi] = useState('');
  const [bigChickTemp, setBigChickTemp] = useState('');
  const [incubatorTempUpLimitData, setIncubatorTempUpLimitData] = useState('');
  const [incubatorTempDownLimitData, setIncubatorTempDownLimitData] = useState('');
  const [incubatorHumiUpLimitData, setIncubatorHumiUpLimitData] = useState('');
  const [incubatorHumiDownLimitData, setIncubatorHumiDownLimitData] = useState('');
  const [brooderTempUpLimitData, setBrooderTempUpLimitData] = useState('');
  const [brooderTempDownLimitData, setBrooderTempDownLimitData] = useState('');
  const [brooderHumiUpLimitData, setBrooderHumiUpLimitData] = useState('');
  const [brooderHumiDownLimitData, setBrooderHumiDownLimitData] = useState('');
  const [bigChickTempUpLimitData, setBigChickTempUpLimitData] = useState('');
  const [bigChickTempDownLimitData, setBigChickTempDownLimitData] = useState('');
  const [incubatorTempUpLimit, setincubatorTempUpLimit] = useState('');
  const [incubatorTempDownLimit, setincubatorTempDownLimit] = useState('');
  const [incubatorHumiUpLimit, setincubatorHumiUpLimit] = useState('');
  const [incubatorHumiDownLimit, setincubatorHumiDownLimit] = useState('');
  const [brooderTempUpLimit, setBrooderTempUpLimit] = useState('');
  const [brooderTempDownLimit, setBrooderTempDownLimit] = useState('');
  const [brooderHumiUpLimit, setBrooderHumiUpLimit] = useState('');
  const [brooderHumiDownLimit, setBrooderHumiDownLimit] = useState('');
  const [bigChickTempUpLimit, setMatureTempUpLimit] = useState('');
  const [bigChickTempDownLimit, setMatureTempDownLimit] = useState('');


  const handleChange = (e) => {
    if (e.target.name == 'incubatorTempUpLimitField') {
      setincubatorTempUpLimit(e.target.value)
    }
    else if (e.target.name == 'incubatorTempDownLimitField') {
      setincubatorTempDownLimit(e.target.value)
    }
    else if (e.target.name == 'incubatorHumiUpLimitField') {
      setincubatorHumiUpLimit(e.target.value)
    }
    else if (e.target.name == 'incubatorHumiDownLimitField') {
      setincubatorHumiDownLimit(e.target.value)
    }
    else if (e.target.name == 'brooderTempUpLimitField') {
      setBrooderTempUpLimit(e.target.value)
    }
    else if (e.target.name == 'brooderTempDownLimitField') {
      setBrooderTempDownLimit(e.target.value)
    }
    else if (e.target.name == 'brooderHumiUpLimitField') {
      setBrooderHumiUpLimit(e.target.value)
    }
    else if (e.target.name == 'brooderHumiDownLimitField') {
      setBrooderHumiDownLimit(e.target.value)
    }
    else if (e.target.name == 'matureTempUpLimitField') {
      setMatureTempUpLimit(e.target.value)
    }
    else if (e.target.name == 'matureTempDownLimitField') {
      setMatureTempDownLimit(e.target.value)
    }
  }

  const handleSubmitIncubatorTemp = async (e) => {
    e.preventDefault();
    if (incubatorTempUpLimit != '') {
      const data = {
        sectionName: "IncubatorTemp",
        incubatorTempUpLimit: incubatorTempUpLimit,
        incubatorTempDownLimit: incubatorTempDownLimit
      };
      console.log(data);
      let res = await fetch("/api/updateLimit", {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });
      let response = await res.json();
      if (response.success == true) {
        console.log("Data Updated");
      } else {
        console.log("Data Updated Failed");
      }
      console.log(response);
      setincubatorTempUpLimit('');
      setincubatorTempDownLimit('');
    }
    else {
      console.log("IncubatorTemp Every Field Should Fillup");
    }
  }

  const handleSubmitIncubatorHumi = async (e) => {
    e.preventDefault();
    if (incubatorHumiUpLimit != '') {
      const data = {
        sectionName: "IncubatorHumi",
        incubatorHumiUpLimit: incubatorHumiUpLimit,
        incubatorHumiDownLimit: incubatorHumiDownLimit
      };
      console.log(data);
      let res = await fetch("/api/updateLimit", {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });
      let response = await res.json();
      if (response.success == true) {
        console.log("Data Updated");
      } else {
        console.log("Data Updated Failed");
      }
      console.log(response);
      setincubatorHumiUpLimit('');
      setincubatorHumiDownLimit('');
    }
    else {
      console.log("IncubatorHumi Every Field Should Fillup");
    }
  }

  const handleSubmitBrooderTemp = async (e) => {
    e.preventDefault();
    if (brooderTempUpLimit != '') {
      const data = {
        sectionName: "BrooderTemp",
        brooderTempUpLimit: brooderTempUpLimit,
        brooderTempDownLimit: brooderTempDownLimit
      };
      console.log(data);
      let res = await fetch("/api/updateLimit", {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });
      let response = await res.json();
      if (response.success == true) {
        console.log("Data Updated");
      } else {
        console.log("Data Updated Failed");
      }
      console.log(response);
      setBrooderTempUpLimit('');
      setBrooderTempDownLimit('');
    }
    else {
      console.log("BrooderTemp Every Field Should Fillup");
    }
  }

  const handleSubmitBrooderHumi = async (e) => {
    e.preventDefault();
    if (brooderHumiUpLimit != '') {
      const data = {
        sectionName: "BrooderHumi",
        brooderHumiUpLimit: brooderHumiUpLimit,
        brooderHumiDownLimit: brooderHumiDownLimit
      };
      console.log(data);
      let res = await fetch("/api/updateLimit", {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });
      let response = await res.json();
      if (response.success == true) {
        console.log("Data Updated");
      } else {
        console.log("Data Updated Failed");
      }
      console.log(response);
      setBrooderHumiUpLimit('');
      setBrooderHumiDownLimit('');
    }
    else {
      console.log("BrooderHumi Every Field Should Fillup");
    }
  }

  const handleSubmitMatureTemp = async (e) => {
    e.preventDefault();
    if (bigChickTempUpLimit != '') {
      const data = {
        sectionName: "MatureTemp",
        bigChickTempUpLimit: bigChickTempUpLimit,
        bigChickTempDownLimit: bigChickTempDownLimit
      };
      console.log(data);
      let res = await fetch("/api/updateLimit", {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });
      let response = await res.json();
      if (response.success == true) {
        console.log("Data Updated");
      } else {
        console.log("Data Updated Failed");
      }
      console.log(response);
      setMatureTempUpLimit('');
      setMatureTempDownLimit('');
    }
    else {
      console.log("MatureTemp Every Field Should Fillup");
    }
  }


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
          setIncubatorTempUpLimitData(receivedData.incubatorTempUpLimit || '');
          setIncubatorTempDownLimitData(receivedData.incubatorTempDownLimit || '');
          setIncubatorHumiUpLimitData(receivedData.incubatorHumiUpLimit || '');
          setIncubatorHumiDownLimitData(receivedData.incubatorHumiDownLimit || '');
          setBrooderTempUpLimitData(receivedData.brooderTempUpLimit || '');
          setBrooderTempDownLimitData(receivedData.brooderTempDownLimit || '');
          setBrooderHumiUpLimitData(receivedData.brooderHumiUpLimit || '');
          setBrooderHumiDownLimitData(receivedData.brooderHumiDownLimit || '');
          setBigChickTempUpLimitData(receivedData.bigChickTempUpLimit || '');
          setBigChickTempDownLimitData(receivedData.bigChickTempDownLimit || '');
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
        <div className="grid grid-cols-3 space-x-5 mt-4">
          <Button className="bg-blue-500 hover:bg-blue-600"><Link href="/incubatorData">Incubator Section Data</Link></Button>
          <Button className="bg-blue-500 hover:bg-blue-600"><Link href="/brooderData">Brooder Section Data</Link></Button>
          <Button className="bg-blue-500 hover:bg-blue-600"><Link href="/matureData">Mature Section Data</Link></Button>
        </div>

        {/*                  Incubator Section                   */}
        <div className="border border-slate-700 rounded-xl w-[900px] mt-4 bg-sky-50">
          <div className="bg-slate-300 rounded-t-xl pt-2 pb-2">
            <h3 className="text-center">Incubator Section</h3>
          </div>
          <div className="grid grid-cols-3 space-x-4 m-4">
            <div className="flex-col space-y-3">
              <div>
                <Label>Live Temperature (&deg;F)</Label>
                <Input className="bg-white" value={incubatorTemp} readOnly></Input>
              </div>
              <div>
                <Label>Live Humidity (%)</Label>
                <Input className="bg-white" value={incubatorHumi} readOnly></Input>
              </div>
            </div>
            <div className="flex-col space-y-3">
              <form onSubmit={handleSubmitIncubatorTemp} method="POST" className="flex-col space-y-3">
                <div className="space-y-1">
                  <Label>Temperature Limit (&deg;F)</Label>
                  <Input className="bg-white" value={incubatorTempUpLimitData} readOnly></Input>
                  <Input name="incubatorTempUpLimitField" id="incubatorTempUpLimitField" onChange={handleChange} value={incubatorTempUpLimit} type="number" placeholder="Input Temperature Limit" className="bg-white"></Input>
                </div>
                {/* <div className="space-y-1">
                  <Label>Temperature Lower Limit (&deg;F)</Label>
                  <Input className="bg-white" value={incubatorTempDownLimitData} readOnly></Input>
                  <Input name="incubatorTempDownLimitField" id="incubatorTempDownLimitField" onChange={handleChange} value={incubatorTempDownLimit} type="number" placeholder="Input Lower Limit" className="bg-white"></Input>
                </div> */}
                <Button type="submit" className="bg-blue-500 hover:bg-blue-700 w-full">Change Temperature</Button>
              </form>
            </div>
            <div className="flex-col space-y-3">
              <form onSubmit={handleSubmitIncubatorHumi} method="POST" className="flex-col space-y-3">
                <div className="space-y-1">
                  <Label>Humidity Upper Limit (%)</Label>
                  <Input className="bg-white" value={incubatorHumiUpLimitData} readOnly></Input>
                  <Input name="incubatorHumiUpLimitField" id="incubatorHumiUpLimitField" onChange={handleChange} value={incubatorHumiUpLimit} type="number" placeholder="Input Humidity Limit" className="bg-white"></Input>
                </div>
                {/* <div className="space-y-1">
                  <Label>Humidity Lower Limit (%)</Label>
                  <Input className="bg-white" value={incubatorHumiDownLimitData} readOnly></Input>
                  <Input name="incubatorHumiDownLimitField" id="incubatorHumiDownLimitField" onChange={handleChange} value={incubatorHumiDownLimit} type="number" placeholder="Input Lower Limit" className="bg-white"></Input>
                </div> */}
                <Button type="submit" className="bg-blue-500 hover:bg-blue-700 w-full">Change Humidity</Button>
              </form>
            </div>
          </div>
        </div>

        {/*                  Brooder Section                   */}
        <div className="border border-slate-700 rounded-xl w-[900px] mt-4 bg-sky-50">
          <div className="bg-slate-300 rounded-t-xl pt-2 pb-2">
            <h3 className="text-center">Brooding Section</h3>
          </div>
          <div className="grid grid-cols-3 space-x-4 m-4">
            <div className="flex-col space-y-3">
              <div>
                <Label>Live Temperature (&deg;F)</Label>
                <Input className="bg-white" value={brooderTemp} readOnly></Input>
              </div>
              <div>
                <Label>Live Humidity (%)</Label>
                <Input className="bg-white" value={brooderHumi} readOnly></Input>
              </div>
            </div>
            <div className="flex-col space-y-3">
              <form onSubmit={handleSubmitBrooderTemp} method="POST" className="flex-col space-y-3">
                <div className="space-y-1">
                  <Label>Temperature Limit (&deg;F)</Label>
                  <Input className="bg-white" value={brooderTempUpLimitData} readOnly></Input>
                  <Input name="brooderTempUpLimitField" id="brooderTempUpLimitField" onChange={handleChange} value={brooderTempUpLimit} type="number" placeholder="Input Temperature Limit" className="bg-white"></Input>
                </div>
                {/* <div className="space-y-1">
                  <Label>Temperature Lower Limit (&deg;F)</Label>
                  <Input className="bg-white" value={brooderTempDownLimitData} readOnly></Input>
                  <Input name="brooderTempDownLimitField" id="brooderTempDownLimitField" onChange={handleChange} value={brooderTempDownLimit} type="number" placeholder="Input Lower Limit" className="bg-white"></Input>
                </div> */}

                <Button type="submit" className="bg-blue-500 hover:bg-blue-700 w-full">Change Temperature</Button>
              </form>
            </div>
            <div className="flex-col space-y-3">
              <form onSubmit={handleSubmitBrooderHumi} method="POST" className="flex-col space-y-3">
                <div className="space-y-1">
                  <Label>Humidity Limit (%)</Label>
                  <Input className="bg-white" value={brooderHumiUpLimitData} readOnly></Input>
                  <Input name="brooderHumiUpLimitField" id="brooderHumiUpLimitField" onChange={handleChange} value={brooderHumiUpLimit} type="number" placeholder="Input Humidity Limit" className="bg-white"></Input>
                </div>
                {/* <div className="space-y-1">
                  <Label>Humidity Lower Limit (%)</Label>
                  <Input className="bg-white" value={brooderHumiDownLimitData} readOnly></Input>
                  <Input name="brooderHumiDownLimitField" id="brooderHumiDownLimitField" onChange={handleChange} value={brooderHumiDownLimit} type="number" placeholder="Input Lower Limit" className="bg-white"></Input>
                </div> */}
                <Button type="submit" className="bg-blue-500 hover:bg-blue-700 w-full">Change Humidity</Button>
              </form>
            </div>
          </div>
        </div>

        {/*                  Mature Section                   */}
        <div className="border border-slate-700 rounded-xl w-[900px] mt-4 bg-sky-50">
          <div className="bg-slate-300 rounded-t-xl pt-2 pb-2">
            <h3 className="text-center">Mature Section</h3>
          </div>
          <div className="grid grid-cols-3 space-x-4 m-4">
            <div className="flex-col space-y-3">
              <div>
                <Label>Live Temperature (&deg;F)</Label>
                <Input className="bg-white" value={bigChickTemp} readOnly></Input>
              </div>
            </div>
            <div className="flex-col space-y-3">
              <form onSubmit={handleSubmitMatureTemp} method="POST" className="flex-col space-y-3">
                <div className="space-y-1">
                  <Label>Temperature Limit (&deg;F)</Label>
                  <Input className="bg-white" value={bigChickTempUpLimitData} readOnly></Input>
                  <Input name="matureTempUpLimitField" id="matureTempUpLimitField" onChange={handleChange} value={bigChickTempUpLimit} type="number" placeholder="Input Lower Limit" className="bg-white"></Input>
                </div>

                <Button type="submit" className="bg-blue-500 hover:bg-blue-700 w-full">Change Temperature</Button>
              </form>
            </div>
            {/* <div className="space-y-1">
              <Label>Temperature Lower Limit (&deg;F)</Label>
              <Input className="bg-white" value={bigChickTempDownLimitData} readOnly></Input>
              <Input name="matureTempDownLimitField" id="matureTempDownLimitField" onChange={handleChange} value={bigChickTempDownLimit} type="number" placeholder="Input Lower Limit" className="bg-white"></Input>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
}

