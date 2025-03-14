import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import ButtonLogout from "@/app/dashboard/button-logout";

export default async function Dashboard() {
  const session = await getServerSession();
  const userName = session?.user?.name || "";
  const userImageURL = session?.user?.image || "";

  if (!session) {
    return redirect("/");
  }

  const getInitial = (name: string) => name.charAt(0).toUpperCase();
  const userInitial = getInitial(userName);

  return (
    <div className="min-h-screen w-full flex items-center justify-center overflow-hidden gap-8">
      <Avatar>
        <AvatarImage src={userImageURL} alt={userName} />
        <AvatarFallback>{userInitial}</AvatarFallback>
      </Avatar>
      <div>{userName}</div>
      <ButtonLogout />
    </div>
  );
}
