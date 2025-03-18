"use client"
import { useEffect } from "react";
import { useUserAuth } from "./_utils/auth-context";
import Link from "next/link";

export default function Page() {
    const { user, gitHubSignIn, firebaseSignOut } = useUserAuth();

    useEffect(() => {
        if(user){
            const authenticateUser = async () => {
                if (!user) {
                    await gitHubSignIn();
                }
            };
            authenticateUser();
        }
        
    }, [user, gitHubSignIn]);

    return (
        <div>
            {user ? (
                <>
                    <p>Welcome, {user.displayName} ({user.email})</p>
                    <button onClick={firebaseSignOut}>Sign out</button>

                    {/* New Line for Link */}
                    <div className="mt-4">
                        <Link href={"/week-9/shopping-list"} className="text-blue-500 hover:underline">
                            Continue to your Shopping List
                        </Link>
                    </div>
                </>
            ) : (
                <button onClick={gitHubSignIn}>Sign In with GitHub</button>
            )}
        </div>
    );
}
