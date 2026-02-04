import { ProfileForm } from "@/components/profile/profile-form";

export default function ProfilePage() {
  return (
    <div className="max-w-3xl">
      <div className="mb-6">
        <h1 className="text-3xl font-bold">Profile Settings</h1>
        <p className="mt-2 text-muted-foreground">Manage your account settings and preferences</p>
      </div>
      <ProfileForm />
    </div>
  );
}
