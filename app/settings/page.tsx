import { Switch } from "@/components/ui/switch"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"

export default function Settings() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-2xl">
      <h1 className="text-3xl font-bold mb-8">Settings</h1>
      <div className="bg-white rounded-lg shadow-lg p-6 space-y-6">
        <div>
          <h2 className="text-xl font-semibold mb-4">Notifications</h2>
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <Label htmlFor="push-notifications">Push Notifications</Label>
              <Switch id="push-notifications" />
            </div>
            <div className="flex items-center justify-between">
              <Label htmlFor="email-notifications">Email Notifications</Label>
              <Switch id="email-notifications" />
            </div>
          </div>
        </div>
        <div>
          <h2 className="text-xl font-semibold mb-4">Privacy</h2>
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <Label htmlFor="show-online-status">Show Online Status</Label>
              <Switch id="show-online-status" />
            </div>
            <div className="flex items-center justify-between">
              <Label htmlFor="allow-friend-requests">Allow Friend Requests</Label>
              <Switch id="allow-friend-requests" />
            </div>
          </div>
        </div>
        <div>
          <h2 className="text-xl font-semibold mb-4">AI Suggestions</h2>
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <Label htmlFor="enable-ai-suggestions">Enable AI Suggestions</Label>
              <Switch id="enable-ai-suggestions" />
            </div>
            <div className="flex items-center justify-between">
              <Label htmlFor="personalized-suggestions">Personalized Suggestions</Label>
              <Switch id="personalized-suggestions" />
            </div>
          </div>
        </div>
        <Button>Save Settings</Button>
      </div>
    </div>
  )
}

