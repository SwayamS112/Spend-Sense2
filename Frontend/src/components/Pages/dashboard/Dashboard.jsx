import React, { useEffect,useState } from 'react';
import axios from "axios";

import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/CustomButton";
import { Card, CardContent } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Pencil, Trash2 } from "lucide-react";

const Dashboard = () => {
  const [editMode, setEditMode] = useState(false);
  const [previewImg, setPreviewImg] = useState(null);

  const [user, setUser] = useState({
    name: "Swayam Sood",
    email: "soodswayam41@gmail.com",
    password: "••••••••",
    profilePic: "https://i.pravatar.cc/150?img=32",
  });

  const toggleEdit = () => setEditMode(!editMode);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUser((prev) => ({ ...prev, [name]: value }));
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setPreviewImg(imageUrl);
      setUser((prev) => ({ ...prev, profilePic: imageUrl }));

      // OPTIONAL: Upload to your backend or a cloud service here
    }
  };

  const saveChanges = async () => {
    try {
      const res = await fetch("/api/user/update", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
      });

      if (!res.ok) throw new Error("Update failed");

      const data = await res.json();
      console.log("User updated:", data);
      setEditMode(false);
    } catch (err) {
      console.error("Error updating user:", err);
    }
  };

  return (
    <div className="min-h-screen p-6 bg-[#0f0f0f] text-white transition">
      <div className="max-w-5xl mx-auto space-y-6">
        {/* PROFILE CARD */}
        <Card className="bg-[#1f1f1f] shadow-lg border border-gray-700">
          <CardContent className="p-6 flex flex-col md:flex-row gap-6 items-center">
            <Avatar className="w-24 h-24">
              <AvatarImage src={previewImg || user.profilePic} />
              <AvatarFallback>{user.name.charAt(0)}</AvatarFallback>
            </Avatar>

            <div className="flex-1 space-y-3">
              <div className="text-2xl font-semibold">{user.name}</div>
              <div className="text-sm text-gray-400">{user.email}</div>
              <div className="text-sm text-gray-400">Password: {user.password}</div>
            </div>

            <div className="flex gap-4">
              <Button onClick={toggleEdit} variant="secondary" className="bg-[#333] hover:bg-[#444]">
                <Pencil className="w-4 h-4 mr-2" />
                {editMode ? "Cancel" : "Edit Profile"}
              </Button>
              <Button variant="destructive">
                <Trash2 className="w-4 h-4 mr-2" />
                Delete Account
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* EDIT FORM */}
        {editMode && (
          <Card className="bg-[#1a1a1a] border border-gray-700">
            <CardContent className="p-6 space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <Label className="text-white">Name</Label>
                  <Input className="bg-[#333] text-white" name="name" value={user.name} onChange={handleInputChange} />
                </div>
                <div>
                  <Label className="text-white">Email</Label>
                  <Input className="bg-[#333] text-white" name="email" value={user.email} onChange={handleInputChange} />
                </div>
                <div>
                  <Label className="text-white">Password</Label>
                  <Input className="bg-[#333] text-white" name="password" type="password" onChange={handleInputChange} />
                </div>
                <div>
                  <Label className="text-white">Upload Profile Picture</Label>
                  <Input className="bg-[#333] text-white" type="file" accept="image/*" onChange={handleImageUpload} />
                </div>
              </div>
              <Button className="mt-4 bg-green-600 hover:bg-green-700" onClick={saveChanges}>
                Save Changes
              </Button>
            </CardContent>
          </Card>
        )}

        {/* TABS */}
        <Tabs defaultValue="personal" className="bg-[#1a1a1a] rounded-xl p-4 border border-gray-700">
          <TabsList className="bg-[#2a2a2a] border border-gray-600">
            <TabsTrigger value="personal">Personal Expenses</TabsTrigger>
            <TabsTrigger value="shared">Family / Friends</TabsTrigger>
          </TabsList>

          <TabsContent value="personal">
            <div className="mt-4 space-y-4">
              <Card className="bg-[#2b2b2b] p-4 border border-gray-700 flex justify-between">
                <span>Groceries</span>
                <span>₹2,500</span>
              </Card>
              <Card className="bg-[#2b2b2b] p-4 border border-gray-700 flex justify-between">
                <span>Electricity Bill</span>
                <span>₹1,200</span>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="shared">
            <div className="mt-4 space-y-4">
              <Card className="bg-[#2b2b2b] p-4 border border-gray-700 flex justify-between">
                <span>Family Dinner</span>
                <span>₹4,000</span>
              </Card>
              <Card className="bg-[#2b2b2b] p-4 border border-gray-700 flex justify-between">
                <span>Friend's Trip</span>
                <span>₹8,000</span>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Dashboard;