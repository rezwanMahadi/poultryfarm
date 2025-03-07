"use client";
import * as React from "react"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { useEffect, useState } from "react"
import { useRouter } from "next/navigation";



export default function CardWithForm() {
  const [email_val, setEmailValue] = useState('');
  const [pass_val, setPassValue] = useState('');
  const router = useRouter();

  useEffect(() => {
    localStorage.removeItem('user');
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault()
    const data = {
      email: email_val,
      pass: pass_val
    }
    console.log(data);
    try {
      let res = await fetch("/auth", {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });
      let response = await res.json();
      if (response.success == true) {
        const local_user_info = {
          farmID: response.user_info.farmID,
          email: response.user_info.email
        };
        localStorage.setItem('user', JSON.stringify(local_user_info));
        console.log("Done Done Done");
        console.log(response);
        router.push('/home');
      }
      else {
        console.log("Email or pass wrong");
      }
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className="container h-screen flex items-center justify-center bg-gray-100">
      <Card className="w-[350px]">
        <CardHeader>
          <CardTitle>Log in</CardTitle>
          <CardDescription>To access dashboard please log in.</CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit}>
            <div className="grid w-full items-center gap-4">
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="email">Email</Label>
                <Input type="email" id="email" placeholder="Example: yourmail@gmail.com" value={email_val} onChange={(e) => setEmailValue(e.target.value)} />
              </div>
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="password">Password</Label>
                <Input type="password" id="password" placeholder="Your password" value={pass_val} onChange={(e) => setPassValue(e.target.value)} />
              </div>
            </div>
            <div className="flex justify-center mt-6">
              <Button type="submit" className="bg-blue-500 hover:bg-blue-600">Log in</Button>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  )
}