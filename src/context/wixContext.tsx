//why we put in this context becz i wanna use this client all around my applications so
//To get started connecting to a Wix project, use the createClient() function imported from the @wix/sdk package to create a new client.


"use client"
import { createClient, OAuthStrategy } from "@wix/sdk";
import {products,collections} from "@wix/stores"
import Cookies from "js-cookie"
import { createContext, ReactNode } from "react";

//give refresh tokens for cookies if no cookies no refreshtokne .cookies menas a user use our website without logged in like they add product in add to cart without logged in so that time even they refresh the prds remains same no changes

const refreshToken = JSON.parse(Cookies.get("refreshToken") || "{}")

const wixClient = createClient({
    modules: {
      products,
      //currentCart
    },
    auth: OAuthStrategy({
      clientId: "8a5808e7-2721-437e-a223-a155aa0ace7b",
      tokens: {
       refreshToken,
       accessToken:{value:"" , expiresAt:0}
      },
    }),
  });


export type WixClient = typeof wixClient ;
//1.
export const WixClientContext = createContext<WixClient>(wixClient)

//actually im passing wixClinet and <>- type.type as well

//2.
export const WixClientContextProvider =({children} : {children:ReactNode}) => {
    return <WixClientContext.Provider value={wixClient}>
        {children}
    </WixClientContext.Provider>
}
//wrapping our children using wixClientContextProvider so we can use that wixClient everywhere. lte's wrap our app using this provider so i gonna open up my layout