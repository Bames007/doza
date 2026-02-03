// import { Resend } from "resend";

// const resend = new Resend("re_h29gvg8S_54ZJ9aXTdmnNpXmvTV5qz2FW");

// resend.emails.send({
//   from: "onboarding@resend.dev",
//   to: "innoventiontechnologiesng@gmail.com",
//   subject: "Hello World",
//   html: "<p>Congrats on sending your <strong>first email</strong>!</p>",
// });
import { NextResponse } from "next/server";
import { Resend } from "resend";

export async function GET() {
  const resend = new Resend(process.env.RESEND_API_KEY);

  try {
    const { data } = await resend.emails.send({
      from: "eddy@doza.com",
      to: "eddybames007@gmail.com",
      subject: "Hello World",
      html: "<p>Congrats on sending your <strong>first email</strong>!</p>",
    });
    return NextResponse.json({ hello: "world" });
  } catch (error) {
    return NextResponse.json({ error });
  }
}
