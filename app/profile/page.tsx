import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

export default function Profile() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-2xl">
      <h1 className="text-3xl font-bold mb-8">Your Profile</h1>
      <div className="bg-white rounded-lg shadow-lg p-6">
        <div className="flex items-center space-x-4 mb-6">
          <Avatar className="w-24 h-24">
            <AvatarImage src="/user-avatar.png" />
            <AvatarFallback>JD</AvatarFallback>
          </Avatar>
          <div>
            <h2 className="text-2xl font-semibold">John Doe</h2>
            <p className="text-gray-600">@johndoe</p>
          </div>
        </div>
        <form className="space-y-4">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700">
              Name
            </label>
            <Input type="text" id="name" name="name" defaultValue="John Doe" />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Email
            </label>
            <Input type="email" id="email" name="email" defaultValue="john@example.com" />
          </div>
          <div>
            <label htmlFor="bio" className="block text-sm font-medium text-gray-700">
              Bio
            </label>
            <textarea
              id="bio"
              name="bio"
              rows={3}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
              defaultValue="I love chatting with AI!"
            ></textarea>
          </div>
          <Button type="submit">Save Changes</Button>
        </form>
      </div>
    </div>
  )
}

