import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="h-screen flex justify-center items-center">
      <div className="flex-col justify-center">
        <h1 className="text-center text-lime-600 text-lg">Poultry Farm</h1>
        <div className="border border-slate-700 rounded-xl w-[700px] mt-4">
          <h3 className="text-center">Incubator Section</h3>
          <div>
            <div className="flex justify-center items-center space-x-3">
              <div>
                <Label>Live Temperature</Label>
                <Input value="32" readOnly></Input>
              </div>
              <div>
                <Label>Change Temperature</Label>
                <Input placeholder="Input Temperature"></Input>
              </div>
              <Button className="bg-blue-500 hover:bg-blue-600">Change Temperature</Button>
            </div>
            <div className="flex justify-center items-center space-x-3">
              <div>
                <Label>Live Humidity</Label>
                <Input value="70%" readOnly></Input>
              </div>
              <div>
                <Label>Change Humidity</Label>
                <Input placeholder="Input Humidity"></Input>
              </div>
              <Button className="bg-blue-500 hover:bg-blue-600">Change Humidity</Button>
            </div>
          </div>
        </div>
        <div className="border border-slate-700 rounded-xl w-[700px] mt-4">
          <h3 className="text-center">Brooding Section</h3>
          <div>
            <div className="flex justify-center items-center space-x-3">
              <div>
                <Label>Live Temperature</Label>
                <Input value="32" readOnly></Input>
              </div>
              <div>
                <Label>Change Temperature</Label>
                <Input placeholder="Input Temperature"></Input>
              </div>
              <Button className="bg-blue-500 hover:bg-blue-600">Change Temperature</Button>
            </div>
            <div className="flex justify-center items-center space-x-3">
              <div>
                <Label>Live Humidity</Label>
                <Input value="70%" readOnly></Input>
              </div>
              <div>
                <Label>Change Humidity</Label>
                <Input placeholder="Input Humidity"></Input>
              </div>
              <Button className="bg-blue-500 hover:bg-blue-600">Change Humidity</Button>
            </div>
          </div>
        </div>
        <div className="border border-slate-700 rounded-xl w-[700px] mt-4">
          <h3 className="text-center">Mature Section</h3>
          <div>
            <div className="flex justify-center items-center space-x-3">
              <div>
                <Label>Live Temperature</Label>
                <Input value="32" readOnly></Input>
              </div>
              <div>
                <Label>Change Temperature</Label>
                <Input placeholder="Input Temperature"></Input>
              </div>
              <Button className="bg-blue-500 hover:bg-blue-600">Change Temperature</Button>
            </div>
            <div className="flex justify-center items-center space-x-3">
              <div>
                <Label>Live Humidity</Label>
                <Input value="70%" readOnly></Input>
              </div>
              <div>
                <Label>Change Humidity</Label>
                <Input placeholder="Input Humidity"></Input>
              </div>
              <Button className="bg-blue-500 hover:bg-blue-600">Change Humidity</Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
