"use client"

import { useState } from "react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Search, UserPlus } from "lucide-react"

const contacts = [
  { id: 1, name: "Alice Johnson", username: "@alice", avatar: "/avatar-1.png" },
  { id: 2, name: "Bob Smith", username: "@bob", avatar: "/avatar-2.png" },
  { id: 3, name: "Charlie Brown", username: "@charlie", avatar: "/avatar-3.png" },
  { id: 4, name: "Diana Ross", username: "@diana", avatar: "/avatar-4.png" },
]

export default function Contacts() {
  const [searchTerm, setSearchTerm] = useState("")

  const filteredContacts = contacts.filter(
    (contact) =>
      contact.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      contact.username.toLowerCase().includes(searchTerm.toLowerCase()),
  )

  return (
    <div className="container mx-auto px-4 py-8 max-w-2xl">
      <h1 className="text-3xl font-bold mb-8">Contacts</h1>
      <div className="bg-white rounded-lg shadow-lg p-6">
        <div className="flex items-center space-x-2 mb-6">
          <div className="relative flex-grow">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <Input
              type="text"
              placeholder="Search contacts..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10"
            />
          </div>
          <Button>
            <UserPlus className="w-4 h-4 mr-2" />
            Add Contact
          </Button>
        </div>
        <div className="space-y-4">
          {filteredContacts.map((contact) => (
            <div
              key={contact.id}
              className="flex items-center justify-between p-3 hover:bg-gray-100 rounded-lg transition-colors"
            >
              <div className="flex items-center space-x-3">
                <Avatar>
                  <AvatarImage src={contact.avatar} />
                  <AvatarFallback>{contact.name[0]}</AvatarFallback>
                </Avatar>
                <div>
                  <h3 className="font-semibold">{contact.name}</h3>
                  <p className="text-sm text-gray-500">{contact.username}</p>
                </div>
              </div>
              <Button variant="outline">Message</Button>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

