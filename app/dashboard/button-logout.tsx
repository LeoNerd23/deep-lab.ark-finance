"use client"

import { signOut } from "next-auth/react";
import { Button } from "../../components/ui/button";

export default function ButtonLogout() {
    return (
        <Button onClick={() => signOut()}>Sair</Button>
    )
}