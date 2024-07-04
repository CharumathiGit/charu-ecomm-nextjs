//we r usin this for fetching our data(prd).wixClient for user
//then refresh tokens instead of using js-cookies this time we reach cookies using next js header just import it

import { createClient, OAuthStrategy } from "@wix/sdk";
import {products,collections} from "@wix/stores"
import { cookies } from "next/headers";


//i have created this func and return wixclient
export const wixClientServer = async () => {


        let refreshToken;
        try{

            const cookieStore = cookies()
            refreshToken = JSON.parse(cookieStore.get("refreshToken")?.value || "{}")
            
        }catch(e){}

        const wixClient = createClient({
            modules: {
            products,
            collections,
            //currentCart
            },
            auth: OAuthStrategy({
            clientId:"8a5808e7-2721-437e-a223-a155aa0ace7b",
            tokens: {
            refreshToken,
            accessToken:{value:"" , expiresAt:0}
            },
            }),
        });

        return wixClient;

}