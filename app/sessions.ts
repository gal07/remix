// app/sessions.ts
import { createCookieSessionStorage, redirect } from "@remix-run/node"; // or cloudflare/deno

type SessionData = {
  userId: string;
  keySec: string;
};

type SessionFlashData = {
  error: string;
  act:string;
  id:string;
};

const { getSession, commitSession, destroySession } =
  createCookieSessionStorage<SessionData, SessionFlashData>(
    {
      // a Cookie from `createCookie` or the CookieOptions to create one
      cookie: {
        name: "eccs_pos_cookie",

        // all of these are optional
        // domain: "remix.run",
        // Expires can also be set (although maxAge overrides it when used in combination).
        // Note that this method is NOT recommended as `new Date` creates only one date on each server deployment, not a dynamic date in the future!
        //
        // expires: new Date(Date.now() + 60_000),
        // httpOnly: true,
        maxAge: 3600,
        // path: "/",
        // sameSite: "lax",
        secrets: ["s3cret1"],
        // secure: false,
      },
    }
  );


  export async function requireUserSession(request :any) {
    // get the session
    const cookie = request.headers.get("cookie");
    const session = await getSession(cookie);
    
    if (!session.has("userId") || !session.has("keySec") ) {      
      session.flash("error","Session time out, Please re-login")
      throw redirect("/login",{
        headers: {
            "Set-Cookie": await commitSession(session)
        }
      });
    }
  
    return session;
  }

export { getSession, commitSession, destroySession };
