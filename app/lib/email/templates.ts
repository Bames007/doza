// app/lib/email/templates.ts
import { LOGO_URL, MARKETING_URL, UNSUBSCRIBE_URL } from "./client";

// ─────────────────────────────────────────────────────────────
// Subdomain URLs (can also live in client.ts — same values)
// ─────────────────────────────────────────────────────────────
const USERS_URL =
  process.env.NEXT_PUBLIC_USERS_URL || "https://users.dozamedic.com";
const MEDICS_URL =
  process.env.NEXT_PUBLIC_MEDICS_URL || "https://medics.dozamedic.com";
const CENTERS_URL =
  process.env.NEXT_PUBLIC_CENTERS_URL || "https://centers.dozamedic.com";

const shell = (html: string): string =>
  html
    .replaceAll("{{LOGO_URL}}", LOGO_URL)
    .replaceAll("{{USERS_URL}}", USERS_URL)
    .replaceAll("{{MEDICS_URL}}", MEDICS_URL)
    .replaceAll("{{CENTERS_URL}}", CENTERS_URL)
    .replaceAll("{{MARKETING_URL}}", MARKETING_URL)
    .replaceAll("{{UNSUBSCRIBE_URL}}", UNSUBSCRIBE_URL)
    .replaceAll("{{YEAR}}", String(new Date().getFullYear()));

// ─────────────────────────────────────────────────────────────
// USER WELCOME
// ─────────────────────────────────────────────────────────────
export const welcomeTemplate = (name: string, userId: string): string => {
  const unsubscribeLink = `${UNSUBSCRIBE_URL}?u=${encodeURIComponent(userId)}`;

  return shell(`
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html dir="ltr" lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="x-apple-disable-message-reformatting" />
    <meta name="color-scheme" content="light only" />
    <meta name="supported-color-schemes" content="light only" />
    <meta name="format-detection" content="telephone=no,address=no,email=no,date=no,url=no" />
    <title>Welcome to Doza Medic</title>
    <style>
      :root { color-scheme: light only; }
      @import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Poppins:wght@400;500;600;700&display=swap');
      html, body { margin:0!important; padding:0!important; width:100%!important; height:100%!important; background-color:#f2f5f3; -webkit-text-size-adjust:100%; -ms-text-size-adjust:100%; }
      table { border-collapse: collapse; mso-table-lspace:0pt; mso-table-rspace:0pt; }
      td { mso-table-lspace:0pt; mso-table-rspace:0pt; }
      img { border:0; height:auto; line-height:100%; outline:none; text-decoration:none; -ms-interpolation-mode:bicubic; display:block; }
      a { text-decoration:none; }
      .cta-btn:hover { background-color:#219639!important; box-shadow:0 6px 18px rgba(41,175,69,0.35)!important; }
      .footer-link:hover { color:#29af45!important; text-decoration:underline!important; }
      .benefit-card:hover { border-color:#29af45!important; box-shadow:0 4px 12px rgba(41,175,69,0.08)!important; }
      @media only screen and (max-width:640px){
        .email-wrapper{padding:16px 10px!important}
        .email-container{border-radius:18px!important}
        .header-cell{padding:20px 22px!important}
        .hero-cell{padding:40px 22px 32px!important}
        .hero-eyebrow{font-size:11px!important;letter-spacing:1.6px!important}
        .hero-title{font-size:40px!important;line-height:1.0!important}
        .hero-desc{font-size:14px!important;line-height:1.6!important}
        .cta-btn{display:block!important;width:100%!important;text-align:center!important;padding:16px 20px!important;font-size:13px!important;box-sizing:border-box!important}
        .benefits-cell{padding-left:22px!important;padding-right:22px!important}
        .benefits-title{font-size:22px!important}
        .stack-col{display:block!important;width:100%!important;max-width:100%!important;padding:0 0 12px 0!important;box-sizing:border-box!important}
        .card-inner{padding:18px!important}
        .final-card{padding:32px 22px!important}
        .final-title{font-size:26px!important;line-height:1.1!important}
        .final-desc{font-size:12.5px!important}
        .footer-cell{padding:24px 22px!important}
        .footer-links td{padding:0 6px!important}
        .brand-name{font-size:20px!important}
      }
      @media only screen and (max-width:480px){
        .email-wrapper{padding:8px 6px!important}
        .hero-cell{padding:32px 18px 28px!important}
        .hero-title{font-size:34px!important}
        .hero-desc{font-size:13px!important}
        .benefits-cell{padding-left:18px!important;padding-right:18px!important}
        .benefits-title{font-size:20px!important}
        .card-inner{padding:16px!important}
        .final-card{padding:28px 18px!important}
        .final-title{font-size:22px!important}
        .footer-cell{padding:22px 18px!important}
        .logo-header{height:36px!important;width:36px!important}
      }
    </style>
  </head>
  <body dir="ltr" lang="en" style="background-color:#f2f5f3;margin:0;padding:0;">
    <table border="0" width="100%" cellpadding="0" cellspacing="0" role="presentation" align="center">
      <tbody>
        <tr>
          <td style="background-color:#f2f5f3;margin:0;padding:0;">
            <table align="left" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="max-width:620px;width:100%;background-color:#ffffff;border-radius:0;">
              <tbody>
                <tr>
                  <td style="padding:0;">
                    <div style="display:none;font-size:1px;color:#f2f5f3;line-height:1px;max-height:0;max-width:0;opacity:0;overflow:hidden;">
                      <p style="margin:0;font-weight:400;">Welcome to Doza Medic — your personal health companion.</p>
                    </div>
                    <table width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" class="email-wrapper" style="margin:0;padding:40px 12px;background-color:#f2f5f3;">
                      <tbody>
                        <tr>
                          <td align="center" style="margin:0;padding:0;">
                            <table width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" class="email-container" style="margin:0;padding:0;max-width:620px;background-color:#ffffff;border-radius:24px;overflow:hidden;box-shadow:0 10px 30px rgba(0,0,0,0.04);">
                              <tbody>
                                <tr>
                                  <td class="header-cell" style="margin:0;padding:28px 40px;background-color:#ffffff;border-bottom:1px solid #edf1ee;">
                                    <table width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation">
                                      <tbody>
                                        <tr>
                                          <td align="left" style="margin:0;padding:0;">
                                            <table border="0" cellpadding="0" cellspacing="0" role="presentation">
                                              <tbody>
                                                <tr>
                                                  <td style="margin:0;padding:0 12px 0 0;">
                                                    <img alt="Doza Medic" height="40" class="logo-header" src="{{LOGO_URL}}" style="display:block;height:40px;width:40px;border-radius:8px;" width="40" />
                                                  </td>
                                                  <td style="margin:0;padding:0;font-family:'Bebas Neue','Impact','Arial Narrow Bold',sans-serif;font-size:24px;color:#1e9f3e;letter-spacing:1px;line-height:1;vertical-align:middle;">DOZA MEDIC</td>
                                                </tr>
                                              </tbody>
                                            </table>
                                          </td>
                                        </tr>
                                      </tbody>
                                    </table>
                                  </td>
                                </tr>

                                <tr>
                                  <td class="hero-cell" align="center" style="margin:0;padding:60px 40px 50px;text-align:center;">
                                    <p class="hero-eyebrow" style="margin:0 0 8px;padding:0;font-family:'Poppins','Helvetica Neue',Helvetica,Arial,sans-serif;font-size:12px;font-weight:600;letter-spacing:2px;text-transform:uppercase;color:#29af45;">
                                      Welcome to Doza Medic
                                    </p>
                                    <h1 class="hero-title" style="margin:0;padding:0;font-family:'Bebas Neue','Impact','Arial Narrow Bold',sans-serif;font-size:58px;line-height:0.95;letter-spacing:0.5px;color:#121c15;font-weight:400;">
                                      HI ${name || "THERE"}.<br /><span style="color:#29af45;">YOUR HEALTH. SIMPLIFIED.</span>
                                    </h1>
                                    <p class="hero-desc" style="margin:20px auto 0;padding:0;max-width:460px;font-family:'Poppins','Helvetica Neue',Helvetica,Arial,sans-serif;font-size:15px;line-height:1.7;color:#5a665e;">
                                      Welcome to Doza Medic — your personal health companion. Discover hospitals, manage records, and stay connected with care providers anytime, anywhere.
                                    </p>
                                    <table align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="margin:30px auto 0;width:100%;max-width:280px;">
                                      <tbody>
                                        <tr>
                                          <td style="margin:0;padding:0;" align="center">
                                            <a class="cta-btn" href="{{USERS_URL}}" rel="noopener noreferrer nofollow" style="color:#ffffff;text-decoration:none;display:inline-block;background-color:#29af45;padding:15px 36px;border-radius:10px;font-family:'Poppins','Helvetica Neue',Helvetica,Arial,sans-serif;font-size:13px;font-weight:600;letter-spacing:0.5px;" target="_blank">GO TO DOZA MEDIC</a>
                                          </td>
                                        </tr>
                                      </tbody>
                                    </table>
                                  </td>
                                </tr>

                                <tr>
                                  <td style="margin:0;padding:0 40px 40px;">
                                    <table width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="margin:0;padding:0;background-color:#f7faf8;border:1px solid #e2ebe4;border-radius:16px;">
                                      <tbody>
                                        <tr>
                                          <td style="margin:0;padding:28px 30px;">
                                            <p style="margin:0 0 8px;padding:0;font-family:'Poppins','Helvetica Neue',Helvetica,Arial,sans-serif;font-size:11px;font-weight:700;letter-spacing:1.5px;text-transform:uppercase;color:#29af45;">You're in</p>
                                            <h2 style="margin:0;padding:0;font-family:'Bebas Neue','Impact','Arial Narrow Bold',sans-serif;font-size:28px;letter-spacing:0.5px;color:#142018;line-height:1.1;font-weight:400;">A BETTER WAY TO MANAGE YOUR HEALTH</h2>
                                            <p style="margin:10px 0 0;padding:0;font-family:'Poppins','Helvetica Neue',Helvetica,Arial,sans-serif;font-size:14px;line-height:1.7;color:#606c63;">
                                              Doza Medic brings essential healthcare tools and personal health metrics into one intuitive dashboard.
                                            </p>
                                          </td>
                                        </tr>
                                      </tbody>
                                    </table>
                                  </td>
                                </tr>

                                <tr>
                                  <td class="benefits-cell" style="margin:0;padding:0 40px 40px;">
                                    <h2 class="benefits-title" style="margin:0 0 20px;padding:0;font-family:'Bebas Neue','Impact','Arial Narrow Bold',sans-serif;font-size:28px;letter-spacing:0.5px;color:#142018;font-weight:400;">WHAT YOU STAND TO BENEFIT</h2>

                                    <table width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="margin:0;padding:0;">
                                      <tbody>
                                        <tr>
                                          <td class="stack-col" width="50%" style="width:50%;vertical-align:top;padding:0 7px 14px 0;">
                                            <table width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" class="benefit-card" style="margin:0;padding:0;background-color:#ffffff;border:1px solid #edf1ee;border-radius:14px;height:100%;">
                                              <tbody>
                                                <tr>
                                                  <td class="card-inner" style="margin:0;padding:20px;vertical-align:top;">
                                                    <div style="margin:0 0 12px;padding:0;width:32px;height:32px;border-radius:8px;background-color:#eaf7ed;color:#29af45;font-family:'Poppins','Helvetica Neue',Helvetica,Arial,sans-serif;font-size:12px;font-weight:700;line-height:32px;text-align:center;">01</div>
                                                    <p style="margin:0 0 4px;padding:0;font-family:'Poppins','Helvetica Neue',Helvetica,Arial,sans-serif;font-size:14px;font-weight:700;color:#142018;">Find Healthcare</p>
                                                    <p style="margin:0;padding:0;font-family:'Poppins','Helvetica Neue',Helvetica,Arial,sans-serif;font-size:12px;line-height:1.6;color:#6c7770;">Discover nearby hospitals, pharmacies, laboratories, and clinics.</p>
                                                  </td>
                                                </tr>
                                              </tbody>
                                            </table>
                                          </td>
                                          <td class="stack-col" width="50%" style="width:50%;vertical-align:top;padding:0 0 14px 7px;">
                                            <table width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" class="benefit-card" style="margin:0;padding:0;background-color:#ffffff;border:1px solid #edf1ee;border-radius:14px;height:100%;">
                                              <tbody>
                                                <tr>
                                                  <td class="card-inner" style="margin:0;padding:20px;vertical-align:top;">
                                                    <div style="margin:0 0 12px;padding:0;width:32px;height:32px;border-radius:8px;background-color:#eaf7ed;color:#29af45;font-family:'Poppins','Helvetica Neue',Helvetica,Arial,sans-serif;font-size:12px;font-weight:700;line-height:32px;text-align:center;">02</div>
                                                    <p style="margin:0 0 4px;padding:0;font-family:'Poppins','Helvetica Neue',Helvetica,Arial,sans-serif;font-size:14px;font-weight:700;color:#142018;">Manage Health Records</p>
                                                    <p style="margin:0;padding:0;font-family:'Poppins','Helvetica Neue',Helvetica,Arial,sans-serif;font-size:12px;line-height:1.6;color:#6c7770;">Organize vital health records, daily activities, and tracking metrics effortlessly.</p>
                                                  </td>
                                                </tr>
                                              </tbody>
                                            </table>
                                          </td>
                                        </tr>
                                      </tbody>
                                    </table>

                                    <table width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="margin:0;padding:0;">
                                      <tbody>
                                        <tr>
                                          <td class="stack-col" width="50%" style="width:50%;vertical-align:top;padding:0 7px 0 0;">
                                            <table width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" class="benefit-card" style="margin:0;padding:0;background-color:#ffffff;border:1px solid #edf1ee;border-radius:14px;height:100%;">
                                              <tbody>
                                                <tr>
                                                  <td class="card-inner" style="margin:0;padding:20px;vertical-align:top;">
                                                    <div style="margin:0 0 12px;padding:0;width:32px;height:32px;border-radius:8px;background-color:#eaf7ed;color:#29af45;font-family:'Poppins','Helvetica Neue',Helvetica,Arial,sans-serif;font-size:12px;font-weight:700;line-height:32px;text-align:center;">03</div>
                                                    <p style="margin:0 0 4px;padding:0;font-family:'Poppins','Helvetica Neue',Helvetica,Arial,sans-serif;font-size:14px;font-weight:700;color:#142018;">Connect with Care</p>
                                                    <p style="margin:0;padding:0;font-family:'Poppins','Helvetica Neue',Helvetica,Arial,sans-serif;font-size:12px;line-height:1.6;color:#6c7770;">Streamline communication with medical professionals.</p>
                                                  </td>
                                                </tr>
                                              </tbody>
                                            </table>
                                          </td>
                                          <td class="stack-col" width="50%" style="width:50%;vertical-align:top;padding:0 0 0 7px;">
                                            <table width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" class="benefit-card" style="margin:0;padding:0;background-color:#ffffff;border:1px solid #edf1ee;border-radius:14px;height:100%;">
                                              <tbody>
                                                <tr>
                                                  <td class="card-inner" style="margin:0;padding:20px;vertical-align:top;">
                                                    <div style="margin:0 0 12px;padding:0;width:32px;height:32px;border-radius:8px;background-color:#eaf7ed;color:#29af45;font-family:'Poppins','Helvetica Neue',Helvetica,Arial,sans-serif;font-size:12px;font-weight:700;line-height:32px;text-align:center;">04</div>
                                                    <p style="margin:0 0 4px;padding:0;font-family:'Poppins','Helvetica Neue',Helvetica,Arial,sans-serif;font-size:14px;font-weight:700;color:#142018;">Centralized Data</p>
                                                    <p style="margin:0;padding:0;font-family:'Poppins','Helvetica Neue',Helvetica,Arial,sans-serif;font-size:12px;line-height:1.6;color:#6c7770;">Keep a complete history of your personal health timeline.</p>
                                                  </td>
                                                </tr>
                                              </tbody>
                                            </table>
                                          </td>
                                        </tr>
                                      </tbody>
                                    </table>
                                  </td>
                                </tr>

                                <tr>
                                  <td style="margin:0;padding:0 40px 48px;">
                                    <table align="center" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" class="final-card" style="margin:0 auto;padding:0;background-color:#121c15;border-radius:18px;text-align:center;">
                                      <tbody>
                                        <tr>
                                          <td style="margin:0;padding:40px 30px;">
                                            <h2 class="final-title" style="margin:0;padding:0;font-family:'Bebas Neue','Impact','Arial Narrow Bold',sans-serif;font-size:36px;line-height:1.05;letter-spacing:0.5px;color:#ffffff;font-weight:400;">
                                              YOUR HEALTH.<br />YOUR INFORMATION.<br /><span style="color:#29af45;">YOUR DOZA MEDIC.</span>
                                            </h2>
                                            <p class="final-desc" style="margin:14px auto 0;padding:0;max-width:360px;font-family:'Poppins','Helvetica Neue',Helvetica,Arial,sans-serif;font-size:13px;line-height:1.65;color:#a2b0a6;">
                                              Log in to your dashboard to explore Doza Medic and take control of your wellness journey.
                                            </p>
                                            <table align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="margin:24px auto 0;width:100%;max-width:220px;">
                                              <tbody>
                                                <tr>
                                                  <td style="margin:0;padding:0;" align="center">
                                                    <a class="cta-btn" href="{{USERS_URL}}" rel="noopener noreferrer nofollow" style="color:#ffffff;text-decoration:none;display:inline-block;background-color:#29af45;padding:14px 30px;border-radius:8px;font-family:'Poppins','Helvetica Neue',Helvetica,Arial,sans-serif;font-size:12px;font-weight:600;letter-spacing:0.5px;" target="_blank">OPEN DOZA MEDIC</a>
                                                  </td>
                                                </tr>
                                              </tbody>
                                            </table>
                                          </td>
                                        </tr>
                                      </tbody>
                                    </table>
                                  </td>
                                </tr>

                                <tr>
                                  <td class="footer-cell" align="center" style="margin:0;padding:32px 30px;background-color:#f7faf8;border-top:1px solid #edf1ee;text-align:center;">
                                    <img alt="Doza Medic" height="36" src="{{LOGO_URL}}" style="display:block;height:36px;margin:0 auto 10px;width:36px;border-radius:6px;" width="36" />
                                    <p class="brand-name" style="margin:0;padding:0;font-family:'Bebas Neue','Impact','Arial Narrow Bold',sans-serif;font-size:22px;letter-spacing:1px;color:#29af45;line-height:1;font-weight:400;">DOZA MEDIC</p>
                                    <p style="margin:4px 0 0;padding:0;font-family:'Poppins','Helvetica Neue',Helvetica,Arial,sans-serif;font-size:11px;color:#828d85;">Your Personal Medical Assistant</p>

                                    <table align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" class="footer-links" style="margin:18px auto 0;">
                                      <tbody>
                                        <tr>
                                          <td style="margin:0;padding:0 10px;"><a class="footer-link" href="{{MARKETING_URL}}/privacy" style="color:#626d65;text-decoration:none;font-family:'Poppins','Helvetica Neue',Helvetica,Arial,sans-serif;font-size:11px;" target="_blank">Privacy</a></td>
                                          <td style="margin:0;padding:0 10px;"><a class="footer-link" href="{{MARKETING_URL}}/terms" style="color:#626d65;text-decoration:none;font-family:'Poppins','Helvetica Neue',Helvetica,Arial,sans-serif;font-size:11px;" target="_blank">Terms</a></td>
                                        </tr>
                                      </tbody>
                                    </table>

                                    <p style="margin:16px 0 0;padding:0;font-family:'Poppins','Helvetica Neue',Helvetica,Arial,sans-serif;font-size:10px;line-height:1.6;color:#9aa39d;">
                                      &copy; {{YEAR}} Doza Medic. All rights reserved.<br />
                                      You are receiving this email because you registered for a Doza Medic account.
                                    </p>

                                    <p style="margin:14px 0 0;padding:0;font-family:'Poppins','Helvetica Neue',Helvetica,Arial,sans-serif;font-size:10px;line-height:1.6;color:#9aa39d;">
                                      Don't want these emails?
                                      <a class="footer-link" href="${unsubscribeLink}" style="color:#626d65;text-decoration:underline;font-family:'Poppins','Helvetica Neue',Helvetica,Arial,sans-serif;font-size:10px;" target="_blank">Unsubscribe</a>
                                      from Doza Medic.
                                    </p>
                                  </td>
                                </tr>
                              </tbody>
                            </table>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </td>
                </tr>
              </tbody>
            </table>
          </td>
        </tr>
      </tbody>
    </table>
  </body>
</html>
`);
};

// ─────────────────────────────────────────────────────────────
// MEDIC WELCOME
// ─────────────────────────────────────────────────────────────
export const medicWelcomeTemplate = (name: string, userId: string): string => {
  const unsubscribeLink = `${UNSUBSCRIBE_URL}?u=${encodeURIComponent(userId)}`;

  return shell(`
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html dir="ltr" lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="x-apple-disable-message-reformatting" />
    <meta name="color-scheme" content="light only" />
    <meta name="supported-color-schemes" content="light only" />
    <meta name="format-detection" content="telephone=no,address=no,email=no,date=no,url=no" />
    <title>Welcome to Doza Medic</title>
    <style>
      :root { color-scheme: light only; }
      @import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Poppins:wght@400;500;600;700&display=swap');
      html, body { margin:0!important; padding:0!important; width:100%!important; height:100%!important; background-color:#f2f5f3; -webkit-text-size-adjust:100%; -ms-text-size-adjust:100%; }
      table { border-collapse: collapse; mso-table-lspace:0pt; mso-table-rspace:0pt; }
      td { mso-table-lspace:0pt; mso-table-rspace:0pt; }
      img { border:0; height:auto; line-height:100%; outline:none; text-decoration:none; -ms-interpolation-mode:bicubic; display:block; }
      a { text-decoration:none; }
      .cta-btn:hover { background-color:#219639!important; box-shadow:0 6px 18px rgba(41,175,69,0.35)!important; }
      .footer-link:hover { color:#29af45!important; text-decoration:underline!important; }
      .step-card:hover { border-color:#29af45!important; box-shadow:0 4px 12px rgba(41,175,69,0.08)!important; }
      @media only screen and (max-width:640px){
        .email-wrapper{padding:16px 10px!important}
        .email-container{border-radius:18px!important}
        .header-cell{padding:20px 22px!important}
        .hero-cell{padding:40px 22px 32px!important}
        .hero-title{font-size:40px!important;line-height:1.0!important}
        .hero-desc{font-size:14px!important;line-height:1.6!important}
        .cta-btn{display:block!important;width:100%!important;text-align:center!important;padding:16px 20px!important;font-size:13px!important;box-sizing:border-box!important}
        .content-cell{padding-left:22px!important;padding-right:22px!important}
        .final-card{padding:32px 22px!important}
        .final-title{font-size:26px!important;line-height:1.1!important}
        .footer-cell{padding:24px 22px!important}
        .footer-links td{padding:0 6px!important}
        .brand-name{font-size:20px!important}
      }
      @media only screen and (max-width:480px){
        .email-wrapper{padding:8px 6px!important}
        .hero-cell{padding:32px 18px 28px!important}
        .hero-title{font-size:34px!important}
        .hero-desc{font-size:13px!important}
        .content-cell{padding-left:18px!important;padding-right:18px!important}
        .final-card{padding:28px 18px!important}
        .final-title{font-size:22px!important}
        .footer-cell{padding:22px 18px!important}
        .logo-header{height:36px!important;width:36px!important}
      }
    </style>
  </head>
  <body dir="ltr" lang="en" style="background-color:#f2f5f3;margin:0;padding:0;">
    <table border="0" width="100%" cellpadding="0" cellspacing="0" role="presentation" align="center">
      <tbody><tr><td style="background-color:#f2f5f3;margin:0;padding:0;">
        <table align="left" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="max-width:620px;width:100%;background-color:#ffffff;border-radius:0;">
          <tbody><tr><td style="padding:0;">
            <div style="display:none;font-size:1px;color:#f2f5f3;line-height:1px;max-height:0;max-width:0;opacity:0;overflow:hidden;">
              <p style="margin:0;font-weight:400;">Welcome to Doza Medic — your medic account is ready.</p>
            </div>
            <table width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" class="email-wrapper" style="margin:0;padding:40px 12px;background-color:#f2f5f3;">
              <tbody><tr><td align="center" style="margin:0;padding:0;">
                <table width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" class="email-container" style="margin:0;padding:0;max-width:620px;background-color:#ffffff;border-radius:24px;overflow:hidden;box-shadow:0 10px 30px rgba(0,0,0,0.04);">
                  <tbody>
                    <tr>
                      <td class="header-cell" style="margin:0;padding:28px 40px;background-color:#ffffff;border-bottom:1px solid #edf1ee;">
                        <table border="0" cellpadding="0" cellspacing="0" role="presentation">
                          <tbody><tr>
                            <td style="margin:0;padding:0 12px 0 0;"><img alt="Doza Medic" height="40" class="logo-header" src="{{LOGO_URL}}" style="display:block;height:40px;width:40px;border-radius:8px;" width="40" /></td>
                            <td style="margin:0;padding:0;font-family:'Bebas Neue','Impact','Arial Narrow Bold',sans-serif;font-size:24px;color:#1e9f3e;letter-spacing:1px;line-height:1;vertical-align:middle;">DOZA MEDIC</td>
                          </tr></tbody>
                        </table>
                      </td>
                    </tr>

                    <tr>
                      <td class="hero-cell" align="center" style="margin:0;padding:60px 40px 50px;text-align:center;">
                        <p style="margin:0 0 8px;padding:0;font-family:'Poppins','Helvetica Neue',Helvetica,Arial,sans-serif;font-size:12px;font-weight:600;letter-spacing:2px;text-transform:uppercase;color:#29af45;">Medic Account Created</p>
                        <h1 class="hero-title" style="margin:0;padding:0;font-family:'Bebas Neue','Impact','Arial Narrow Bold',sans-serif;font-size:58px;line-height:0.95;letter-spacing:0.5px;color:#121c15;font-weight:400;">
                          WELCOME ${name || "DOCTOR"}.<br /><span style="color:#29af45;">YOUR PRACTICE AWAITS.</span>
                        </h1>
                        <p class="hero-desc" style="margin:20px auto 0;padding:0;max-width:460px;font-family:'Poppins','Helvetica Neue',Helvetica,Arial,sans-serif;font-size:15px;line-height:1.7;color:#5a665e;">
                          Your Doza Medic account is ready. Log in to complete your profile and submit your credentials for verification.
                        </p>
                        <table align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="margin:30px auto 0;width:100%;max-width:280px;">
                          <tbody><tr><td style="margin:0;padding:0;" align="center">
                            <a class="cta-btn" href="{{MEDICS_URL}}" rel="noopener noreferrer nofollow" style="color:#ffffff;text-decoration:none;display:inline-block;background-color:#29af45;padding:15px 36px;border-radius:10px;font-family:'Poppins','Helvetica Neue',Helvetica,Arial,sans-serif;font-size:13px;font-weight:600;letter-spacing:0.5px;" target="_blank">GO TO DOZA MEDIC</a>
                          </td></tr></tbody>
                        </table>
                      </td>
                    </tr>

                    <tr>
                      <td class="content-cell" style="margin:0;padding:0 40px 40px;">
                        <table width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="margin:0;padding:0;background-color:#f7faf8;border:1px solid #e2ebe4;border-radius:16px;">
                          <tbody><tr><td style="margin:0;padding:28px 30px;">
                            <p style="margin:0 0 8px;padding:0;font-family:'Poppins','Helvetica Neue',Helvetica,Arial,sans-serif;font-size:11px;font-weight:700;letter-spacing:1.5px;text-transform:uppercase;color:#29af45;">What's Next</p>
                            <h2 style="margin:0;padding:0;font-family:'Bebas Neue','Impact','Arial Narrow Bold',sans-serif;font-size:28px;letter-spacing:0.5px;color:#142018;line-height:1.1;font-weight:400;">COMPLETE YOUR PROFILE TO GET VERIFIED</h2>
                            <p style="margin:10px 0 0;padding:0;font-family:'Poppins','Helvetica Neue',Helvetica,Arial,sans-serif;font-size:14px;line-height:1.7;color:#606c63;">
                              After logging in, submit your medical license, registration details, and professional history. Our team reviews submissions within 24–48 hours.
                            </p>
                          </td></tr></tbody>
                        </table>
                      </td>
                    </tr>

                    <tr>
                      <td class="content-cell" style="margin:0;padding:0 40px 40px;">
                        <h2 style="margin:0 0 20px;padding:0;font-family:'Bebas Neue','Impact','Arial Narrow Bold',sans-serif;font-size:28px;letter-spacing:0.5px;color:#142018;font-weight:400;">YOUR ONBOARDING PATH</h2>

                        <table width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="margin:0 0 12px 0;">
                          <tbody><tr><td style="margin:0;padding:0;">
                            <table width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" class="step-card" style="margin:0;padding:0;background-color:#ffffff;border:1px solid #edf1ee;border-radius:14px;">
                              <tbody><tr><td style="margin:0;padding:20px;">
                                <table width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation">
                                  <tbody><tr>
                                    <td width="44" style="width:44px;vertical-align:top;padding:0 14px 0 0;">
                                      <div style="margin:0;padding:0;width:32px;height:32px;border-radius:8px;background-color:#eaf7ed;color:#29af45;font-family:'Poppins','Helvetica Neue',Helvetica,Arial,sans-serif;font-size:12px;font-weight:700;line-height:32px;text-align:center;">01</div>
                                    </td>
                                    <td style="vertical-align:top;padding:0;">
                                      <p style="margin:0 0 4px;padding:0;font-family:'Poppins','Helvetica Neue',Helvetica,Arial,sans-serif;font-size:14px;font-weight:700;color:#142018;">Log in &amp; set up</p>
                                      <p style="margin:0;padding:0;font-family:'Poppins','Helvetica Neue',Helvetica,Arial,sans-serif;font-size:12px;line-height:1.6;color:#6c7770;">Access your dashboard and personalise your profile.</p>
                                    </td>
                                  </tr></tbody>
                                </table>
                              </td></tr></tbody>
                            </table>
                          </td></tr></tbody>
                        </table>

                        <table width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="margin:0 0 12px 0;">
                          <tbody><tr><td style="margin:0;padding:0;">
                            <table width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" class="step-card" style="margin:0;padding:0;background-color:#ffffff;border:1px solid #edf1ee;border-radius:14px;">
                              <tbody><tr><td style="margin:0;padding:20px;">
                                <table width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation">
                                  <tbody><tr>
                                    <td width="44" style="width:44px;vertical-align:top;padding:0 14px 0 0;">
                                      <div style="margin:0;padding:0;width:32px;height:32px;border-radius:8px;background-color:#eaf7ed;color:#29af45;font-family:'Poppins','Helvetica Neue',Helvetica,Arial,sans-serif;font-size:12px;font-weight:700;line-height:32px;text-align:center;">02</div>
                                    </td>
                                    <td style="vertical-align:top;padding:0;">
                                      <p style="margin:0 0 4px;padding:0;font-family:'Poppins','Helvetica Neue',Helvetica,Arial,sans-serif;font-size:14px;font-weight:700;color:#142018;">Upload credentials</p>
                                      <p style="margin:0;padding:0;font-family:'Poppins','Helvetica Neue',Helvetica,Arial,sans-serif;font-size:12px;line-height:1.6;color:#6c7770;">Submit your medical license, registration, and certifications.</p>
                                    </td>
                                  </tr></tbody>
                                </table>
                              </td></tr></tbody>
                            </table>
                          </td></tr></tbody>
                        </table>

                        <table width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation">
                          <tbody><tr><td style="margin:0;padding:0;">
                            <table width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" class="step-card" style="margin:0;padding:0;background-color:#ffffff;border:1px solid #edf1ee;border-radius:14px;">
                              <tbody><tr><td style="margin:0;padding:20px;">
                                <table width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation">
                                  <tbody><tr>
                                    <td width="44" style="width:44px;vertical-align:top;padding:0 14px 0 0;">
                                      <div style="margin:0;padding:0;width:32px;height:32px;border-radius:8px;background-color:#eaf7ed;color:#29af45;font-family:'Poppins','Helvetica Neue',Helvetica,Arial,sans-serif;font-size:12px;font-weight:700;line-height:32px;text-align:center;">03</div>
                                    </td>
                                    <td style="vertical-align:top;padding:0;">
                                      <p style="margin:0 0 4px;padding:0;font-family:'Poppins','Helvetica Neue',Helvetica,Arial,sans-serif;font-size:14px;font-weight:700;color:#142018;">Get verified</p>
                                      <p style="margin:0;padding:0;font-family:'Poppins','Helvetica Neue',Helvetica,Arial,sans-serif;font-size:12px;line-height:1.6;color:#6c7770;">Once approved, your profile goes live for patient matching.</p>
                                    </td>
                                  </tr></tbody>
                                </table>
                              </td></tr></tbody>
                            </table>
                          </td></tr></tbody>
                        </table>
                      </td>
                    </tr>

                    <tr>
                      <td class="content-cell" style="margin:0;padding:0 40px 48px;">
                        <table align="center" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" class="final-card" style="margin:0 auto;padding:0;background-color:#121c15;border-radius:18px;text-align:center;">
                          <tbody><tr><td style="margin:0;padding:40px 30px;">
                            <h2 class="final-title" style="margin:0;padding:0;font-family:'Bebas Neue','Impact','Arial Narrow Bold',sans-serif;font-size:36px;line-height:1.05;letter-spacing:0.5px;color:#ffffff;font-weight:400;">
                              CARE BETTER.<br />REACH FURTHER.<br /><span style="color:#29af45;">GROW WITH DOZA MEDIC.</span>
                            </h2>
                            <p style="margin:14px auto 0;padding:0;max-width:360px;font-family:'Poppins','Helvetica Neue',Helvetica,Arial,sans-serif;font-size:13px;line-height:1.65;color:#a2b0a6;">
                              Log in to your dashboard to finish setup and start taking consultations.
                            </p>
                            <table align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="margin:24px auto 0;width:100%;max-width:220px;">
                              <tbody><tr><td style="margin:0;padding:0;" align="center">
                                <a class="cta-btn" href="{{MEDICS_URL}}" rel="noopener noreferrer nofollow" style="color:#ffffff;text-decoration:none;display:inline-block;background-color:#29af45;padding:14px 30px;border-radius:8px;font-family:'Poppins','Helvetica Neue',Helvetica,Arial,sans-serif;font-size:12px;font-weight:600;letter-spacing:0.5px;" target="_blank">OPEN DOZA MEDIC</a>
                              </td></tr></tbody>
                            </table>
                          </td></tr></tbody>
                        </table>
                      </td>
                    </tr>

                    <tr>
                      <td class="footer-cell" align="center" style="margin:0;padding:32px 30px;background-color:#f7faf8;border-top:1px solid #edf1ee;text-align:center;">
                        <img alt="Doza Medic" height="36" src="{{LOGO_URL}}" style="display:block;height:36px;margin:0 auto 10px;width:36px;border-radius:6px;" width="36" />
                        <p class="brand-name" style="margin:0;padding:0;font-family:'Bebas Neue','Impact','Arial Narrow Bold',sans-serif;font-size:22px;letter-spacing:1px;color:#29af45;line-height:1;font-weight:400;">DOZA MEDIC</p>
                        <p style="margin:4px 0 0;padding:0;font-family:'Poppins','Helvetica Neue',Helvetica,Arial,sans-serif;font-size:11px;color:#828d85;">Healthcare, Connected.</p>

                        <table align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" class="footer-links" style="margin:18px auto 0;">
                          <tbody><tr>
                            <td style="margin:0;padding:0 10px;"><a class="footer-link" href="{{MARKETING_URL}}/privacy" style="color:#626d65;text-decoration:none;font-family:'Poppins','Helvetica Neue',Helvetica,Arial,sans-serif;font-size:11px;" target="_blank">Privacy</a></td>
                            <td style="margin:0;padding:0 10px;"><a class="footer-link" href="{{MARKETING_URL}}/terms" style="color:#626d65;text-decoration:none;font-family:'Poppins','Helvetica Neue',Helvetica,Arial,sans-serif;font-size:11px;" target="_blank">Terms</a></td>
                          </tr></tbody>
                        </table>

                        <p style="margin:16px 0 0;padding:0;font-family:'Poppins','Helvetica Neue',Helvetica,Arial,sans-serif;font-size:10px;line-height:1.6;color:#9aa39d;">
                          &copy; {{YEAR}} Doza Medic. All rights reserved.<br />
                          You are receiving this email because you registered for a Doza Medic account.
                        </p>

                        <p style="margin:14px 0 0;padding:0;font-family:'Poppins','Helvetica Neue',Helvetica,Arial,sans-serif;font-size:10px;line-height:1.6;color:#9aa39d;">
                          Don't want these emails?
                          <a class="footer-link" href="${unsubscribeLink}" style="color:#626d65;text-decoration:underline;font-family:'Poppins','Helvetica Neue',Helvetica,Arial,sans-serif;font-size:10px;" target="_blank">Unsubscribe</a>
                          from Doza Medic.
                        </p>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </td></tr></tbody>
            </table>
          </td></tr></tbody>
        </table>
      </td></tr></tbody>
    </table>
  </body>
</html>
`);
};

// ─────────────────────────────────────────────────────────────
// CENTER CONFIRMATION (submitted, pending review)
// ─────────────────────────────────────────────────────────────
export const centerConfirmationTemplate = (opts: {
  centerName: string;
  ownerName: string;
  centerId: string;
  status: string;
}): string =>
  shell(`
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html dir="ltr" lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="x-apple-disable-message-reformatting" />
    <meta name="color-scheme" content="light only" />
    <meta name="supported-color-schemes" content="light only" />
    <title>Your Doza Medic Center Application</title>
    <style>
      :root { color-scheme: light only; }
      @import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Poppins:wght@400;500;600;700&display=swap');
      html, body { margin:0!important; padding:0!important; width:100%!important; background-color:#f2f5f3; -webkit-text-size-adjust:100%; -ms-text-size-adjust:100%; }
      table { border-collapse: collapse; mso-table-lspace:0pt; mso-table-rspace:0pt; }
      td { mso-table-lspace:0pt; mso-table-rspace:0pt; }
      img { border:0; height:auto; line-height:100%; outline:none; text-decoration:none; display:block; }
      a { text-decoration:none; }
      .cta-btn:hover { background-color:#219639!important; }
      .footer-link:hover { color:#29af45!important; text-decoration:underline!important; }
      @media only screen and (max-width:640px){
        .email-wrapper{padding:16px 10px!important}
        .email-container{border-radius:18px!important}
        .header-cell{padding:20px 22px!important}
        .hero-cell{padding:40px 22px 32px!important}
        .hero-title{font-size:40px!important;line-height:1.0!important}
        .hero-desc{font-size:14px!important}
        .cta-btn{display:block!important;width:100%!important;text-align:center!important;padding:16px 20px!important;font-size:13px!important;box-sizing:border-box!important}
        .content-cell{padding-left:22px!important;padding-right:22px!important}
        .final-card{padding:32px 22px!important}
        .final-title{font-size:26px!important}
        .footer-cell{padding:24px 22px!important}
        .footer-links td{padding:0 6px!important}
        .brand-name{font-size:20px!important}
      }
      @media only screen and (max-width:480px){
        .email-wrapper{padding:8px 6px!important}
        .hero-cell{padding:32px 18px 28px!important}
        .hero-title{font-size:32px!important}
        .hero-desc{font-size:13px!important}
        .content-cell{padding-left:18px!important;padding-right:18px!important}
        .final-card{padding:28px 18px!important}
        .final-title{font-size:22px!important}
        .footer-cell{padding:22px 18px!important}
        .logo-header{height:36px!important;width:36px!important}
      }
    </style>
  </head>
  <body dir="ltr" lang="en" style="background-color:#f2f5f3;margin:0;padding:0;">
    <table border="0" width="100%" cellpadding="0" cellspacing="0" role="presentation" align="center">
      <tbody><tr><td style="background-color:#f2f5f3;margin:0;padding:0;">
        <table align="left" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="max-width:620px;width:100%;background-color:#ffffff;border-radius:0;">
          <tbody><tr><td style="padding:0;">
            <table width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" class="email-wrapper" style="margin:0;padding:40px 12px;background-color:#f2f5f3;">
              <tbody><tr><td align="center" style="margin:0;padding:0;">
                <table width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" class="email-container" style="margin:0;padding:0;max-width:620px;background-color:#ffffff;border-radius:24px;overflow:hidden;box-shadow:0 10px 30px rgba(0,0,0,0.04);">
                  <tbody>
                    <tr>
                      <td class="header-cell" style="margin:0;padding:28px 40px;background-color:#ffffff;border-bottom:1px solid #edf1ee;">
                        <table border="0" cellpadding="0" cellspacing="0" role="presentation">
                          <tbody><tr>
                            <td style="margin:0;padding:0 12px 0 0;"><img alt="Doza Medic" height="40" class="logo-header" src="{{LOGO_URL}}" style="display:block;height:40px;width:40px;border-radius:8px;" width="40" /></td>
                            <td style="margin:0;padding:0;font-family:'Bebas Neue','Impact','Arial Narrow Bold',sans-serif;font-size:24px;color:#1e9f3e;letter-spacing:1px;line-height:1;vertical-align:middle;">DOZA MEDIC</td>
                          </tr></tbody>
                        </table>
                      </td>
                    </tr>

                    <tr>
                      <td class="hero-cell" align="center" style="margin:0;padding:60px 40px 50px;text-align:center;">
                        <p style="margin:0 0 8px;padding:0;font-family:'Poppins','Helvetica Neue',Helvetica,Arial,sans-serif;font-size:12px;font-weight:600;letter-spacing:2px;text-transform:uppercase;color:#29af45;">Application Received</p>
                        <h1 class="hero-title" style="margin:0;padding:0;font-family:'Bebas Neue','Impact','Arial Narrow Bold',sans-serif;font-size:54px;line-height:0.95;letter-spacing:0.5px;color:#121c15;font-weight:400;">
                          HI ${opts.ownerName || "THERE"}.<br /><span style="color:#29af45;">WE'RE ON IT.</span>
                        </h1>
                        <p class="hero-desc" style="margin:20px auto 0;padding:0;max-width:460px;font-family:'Poppins','Helvetica Neue',Helvetica,Arial,sans-serif;font-size:15px;line-height:1.7;color:#5a665e;">
                          We've received your registration for <strong style="color:#121c15;">${opts.centerName}</strong>. Our medical audit team will review it and reach out within 2–5 business days.
                        </p>
                      </td>
                    </tr>

                    <tr>
                      <td class="content-cell" style="margin:0;padding:0 40px 40px;">
                        <table width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="margin:0;padding:0;background-color:#f7faf8;border:1px solid #e2ebe4;border-radius:16px;">
                          <tbody><tr><td style="margin:0;padding:20px 24px;">
                            <p style="margin:0;padding:0;font-family:'Poppins','Helvetica Neue',Helvetica,Arial,sans-serif;font-size:13px;line-height:1.6;color:#142018;font-weight:600;">
                              Reference ID: <span style="font-family:'Bebas Neue','Impact','Arial Narrow Bold',sans-serif;font-size:20px;letter-spacing:1.5px;color:#29af45;font-weight:400;">${opts.centerId}</span>
                            </p>
                          </td></tr></tbody>
                        </table>
                      </td>
                    </tr>

                    <tr>
                      <td class="content-cell" style="margin:0;padding:0 40px 40px;">
                        <h2 style="margin:0 0 20px;padding:0;font-family:'Bebas Neue','Impact','Arial Narrow Bold',sans-serif;font-size:28px;letter-spacing:0.5px;color:#142018;font-weight:400;">WHAT HAPPENS NEXT</h2>

                        <table width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="margin:0 0 12px 0;">
                          <tbody><tr><td style="margin:0;padding:0;">
                            <table width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="margin:0;padding:0;background-color:#ffffff;border:1px solid #edf1ee;border-radius:14px;">
                              <tbody><tr><td style="margin:0;padding:20px;">
                                <div style="margin:0 0 12px;padding:0;width:32px;height:32px;border-radius:8px;background-color:#eaf7ed;color:#29af45;font-family:'Poppins','Helvetica Neue',Helvetica,Arial,sans-serif;font-size:12px;font-weight:700;line-height:32px;text-align:center;">01</div>
                                <p style="margin:0 0 4px;padding:0;font-family:'Poppins','Helvetica Neue',Helvetica,Arial,sans-serif;font-size:14px;font-weight:700;color:#142018;">Access Dashboard &amp; Upload Credentials</p>
                                <p style="margin:0;padding:0;font-family:'Poppins','Helvetica Neue',Helvetica,Arial,sans-serif;font-size:12px;line-height:1.6;color:#6c7770;">Log in to your center dashboard using your center name, the OTP sent to you, and your full name — then upload your credentials. (Start now)</p>
                              </td></tr></tbody>
                            </table>
                          </td></tr></tbody>
                        </table>

                        <table width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="margin:0 0 12px 0;">
                          <tbody><tr><td style="margin:0;padding:0;">
                            <table width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="margin:0;padding:0;background-color:#ffffff;border:1px solid #edf1ee;border-radius:14px;">
                              <tbody><tr><td style="margin:0;padding:20px;">
                                <div style="margin:0 0 12px;padding:0;width:32px;height:32px;border-radius:8px;background-color:#eaf7ed;color:#29af45;font-family:'Poppins','Helvetica Neue',Helvetica,Arial,sans-serif;font-size:12px;font-weight:700;line-height:32px;text-align:center;">02</div>
                                <p style="margin:0 0 4px;padding:0;font-family:'Poppins','Helvetica Neue',Helvetica,Arial,sans-serif;font-size:14px;font-weight:700;color:#142018;">Document Verification</p>
                                <p style="margin:0;padding:0;font-family:'Poppins','Helvetica Neue',Helvetica,Arial,sans-serif;font-size:12px;line-height:1.6;color:#6c7770;">Our team reviews your submitted medical licenses and registration details. (1–2 business days)</p>
                              </td></tr></tbody>
                            </table>
                          </td></tr></tbody>
                        </table>

                        <table width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="margin:0 0 12px 0;">
                          <tbody><tr><td style="margin:0;padding:0;">
                            <table width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="margin:0;padding:0;background-color:#ffffff;border:1px solid #edf1ee;border-radius:14px;">
                              <tbody><tr><td style="margin:0;padding:20px;">
                                <div style="margin:0 0 12px;padding:0;width:32px;height:32px;border-radius:8px;background-color:#eaf7ed;color:#29af45;font-family:'Poppins','Helvetica Neue',Helvetica,Arial,sans-serif;font-size:12px;font-weight:700;line-height:32px;text-align:center;">03</div>
                                <p style="margin:0 0 4px;padding:0;font-family:'Poppins','Helvetica Neue',Helvetica,Arial,sans-serif;font-size:14px;font-weight:700;color:#142018;">Site Inspection</p>
                                <p style="margin:0;padding:0;font-family:'Poppins','Helvetica Neue',Helvetica,Arial,sans-serif;font-size:12px;line-height:1.6;color:#6c7770;">Our audit team schedules a facility visit. (3–5 business days)</p>
                              </td></tr></tbody>
                            </table>
                          </td></tr></tbody>
                        </table>

                        <table width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation">
                          <tbody><tr><td style="margin:0;padding:0;">
                            <table width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="margin:0;padding:0;background-color:#ffffff;border:1px solid #edf1ee;border-radius:14px;">
                              <tbody><tr><td style="margin:0;padding:20px;">
                                <div style="margin:0 0 12px;padding:0;width:32px;height:32px;border-radius:8px;background-color:#eaf7ed;color:#29af45;font-family:'Poppins','Helvetica Neue',Helvetica,Arial,sans-serif;font-size:12px;font-weight:700;line-height:32px;text-align:center;">04</div>
                                <p style="margin:0 0 4px;padding:0;font-family:'Poppins','Helvetica Neue',Helvetica,Arial,sans-serif;font-size:14px;font-weight:700;color:#142018;">Board Approval</p>
                                <p style="margin:0;padding:0;font-family:'Poppins','Helvetica Neue',Helvetica,Arial,sans-serif;font-size:12px;line-height:1.6;color:#6c7770;">Final review and approval by the Doza Medic governing board. (24–48 hours post-inspection)</p>
                              </td></tr></tbody>
                            </table>
                          </td></tr></tbody>
                        </table>
                      </td>
                    </tr>

                    <tr>
                      <td class="content-cell" style="margin:0;padding:0 40px 48px;">
                        <table align="center" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" class="final-card" style="margin:0 auto;padding:0;background-color:#121c15;border-radius:18px;text-align:center;">
                          <tbody><tr><td style="margin:0;padding:36px 30px;">
                            <h2 class="final-title" style="margin:0;padding:0;font-family:'Bebas Neue','Impact','Arial Narrow Bold',sans-serif;font-size:32px;line-height:1.05;letter-spacing:0.5px;color:#ffffff;font-weight:400;">
                              START YOUR<br /><span style="color:#29af45;">ONBOARDING NOW</span>
                            </h2>
                            <p style="margin:14px auto 0;padding:0;max-width:400px;font-family:'Poppins','Helvetica Neue',Helvetica,Arial,sans-serif;font-size:12.5px;line-height:1.65;color:#a2b0a6;">
                              Log in to your center dashboard to upload your credentials and kick off verification.
                            </p>
                            <table align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="margin:24px auto 0;width:100%;max-width:240px;">
                              <tbody><tr><td style="margin:0;padding:0;" align="center">
                                <a class="cta-btn" href="https://centers.dozamedic.com" style="color:#ffffff;text-decoration:none;display:inline-block;background-color:#29af45;padding:14px 30px;border-radius:8px;font-family:'Poppins','Helvetica Neue',Helvetica,Arial,sans-serif;font-size:12px;font-weight:600;letter-spacing:0.5px;" target="_blank">GO TO DASHBOARD</a>
                              </td></tr></tbody>
                            </table>
                          </td></tr></tbody>
                        </table>
                      </td>
                    </tr>

                    <tr>
                      <td class="footer-cell" align="center" style="margin:0;padding:32px 30px;background-color:#f7faf8;border-top:1px solid #edf1ee;text-align:center;">
                        <img alt="Doza Medic" height="36" src="{{LOGO_URL}}" style="display:block;height:36px;margin:0 auto 10px;width:36px;border-radius:6px;" width="36" />
                        <p class="brand-name" style="margin:0;padding:0;font-family:'Bebas Neue','Impact','Arial Narrow Bold',sans-serif;font-size:22px;letter-spacing:1px;color:#29af45;line-height:1;font-weight:400;">DOZA MEDIC</p>
                        <p style="margin:4px 0 0;padding:0;font-family:'Poppins','Helvetica Neue',Helvetica,Arial,sans-serif;font-size:11px;color:#828d85;">Your Personal Medic Assistant</p>

                        <table align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" class="footer-links" style="margin:18px auto 0;">
                          <tbody><tr>
                            <td style="margin:0;padding:0 10px;"><a class="footer-link" href="{{MARKETING_URL}}/privacy" style="color:#626d65;text-decoration:none;font-family:'Poppins','Helvetica Neue',Helvetica,Arial,sans-serif;font-size:11px;" target="_blank">Privacy</a></td>
                            <td style="margin:0;padding:0 10px;"><a class="footer-link" href="{{MARKETING_URL}}/terms" style="color:#626d65;text-decoration:none;font-family:'Poppins','Helvetica Neue',Helvetica,Arial,sans-serif;font-size:11px;" target="_blank">Terms</a></td>
                          </tr></tbody>
                        </table>

                        <p style="margin:16px 0 0;padding:0;font-family:'Poppins','Helvetica Neue',Helvetica,Arial,sans-serif;font-size:10px;line-height:1.6;color:#9aa39d;">
                          Questions? <a href="mailto:dozamedichq@gmail.com" style="color:#626d65;text-decoration:underline;">dozamedichq@gmail.com</a><br />
                          &copy; {{YEAR}} Doza Medic. All rights reserved.<br />
                          You are receiving this email because you registered for a Doza Medic account.
                        </p>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </td></tr></tbody>
            </table>
          </td></tr></tbody>
        </table>
      </td></tr></tbody>
    </table>
  </body>
</html>
`);

// ─────────────────────────────────────────────────────────────
// CENTER OTP (verification code)
// ─────────────────────────────────────────────────────────────
export const centerOtpTemplate = (opts: {
  ownerName: string;
  centerName: string;
  otp: string;
}): string =>
  shell(`
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html dir="ltr" lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta name="x-apple-disable-message-reformatting" />
    <meta name="color-scheme" content="light only" />
    <meta name="supported-color-schemes" content="light only" />
    <title>Your Doza Medic Verification Code</title>
    <style>
      :root { color-scheme: light only; }
      @import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Poppins:wght@400;500;600;700&display=swap');
      html, body { margin:0!important; padding:0!important; width:100%!important; background-color:#f2f5f3; -webkit-text-size-adjust:100%; }
      table { border-collapse: collapse; }
      img { border:0; display:block; }
      a { text-decoration:none; }
      @media only screen and (max-width:640px){
        .email-wrapper{padding:16px 10px!important}
        .email-container{border-radius:18px!important}
        .header-cell{padding:20px 22px!important}
        .hero-cell{padding:40px 22px 32px!important}
        .hero-title{font-size:38px!important;line-height:1.0!important}
        .hero-desc{font-size:14px!important}
        .otp-cell{padding-left:22px!important;padding-right:22px!important}
        .otp-box{font-size:34px!important;letter-spacing:8px!important;padding:22px 12px!important}
        .footer-cell{padding:24px 22px!important}
        .footer-links td{padding:0 6px!important}
        .brand-name{font-size:20px!important}
      }
      @media only screen and (max-width:480px){
        .email-wrapper{padding:8px 6px!important}
        .hero-cell{padding:32px 18px 28px!important}
        .hero-title{font-size:30px!important}
        .hero-desc{font-size:13px!important}
        .otp-cell{padding-left:18px!important;padding-right:18px!important}
        .otp-box{font-size:28px!important;letter-spacing:6px!important;padding:18px 10px!important}
        .footer-cell{padding:22px 18px!important}
        .logo-header{height:36px!important;width:36px!important}
      }
    </style>
  </head>
  <body dir="ltr" lang="en" style="background-color:#f2f5f3;margin:0;padding:0;">
    <table border="0" width="100%" cellpadding="0" cellspacing="0" role="presentation" align="center">
      <tbody><tr><td style="background-color:#f2f5f3;margin:0;padding:0;">
        <table align="left" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="max-width:620px;width:100%;background-color:#ffffff;">
          <tbody><tr><td style="padding:0;">
            <table width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" class="email-wrapper" style="margin:0;padding:40px 12px;background-color:#f2f5f3;">
              <tbody><tr><td align="center" style="margin:0;padding:0;">
                <table width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" class="email-container" style="margin:0;padding:0;max-width:620px;background-color:#ffffff;border-radius:24px;overflow:hidden;box-shadow:0 10px 30px rgba(0,0,0,0.04);">
                  <tbody>
                    <tr>
                      <td class="header-cell" style="margin:0;padding:28px 40px;background-color:#ffffff;border-bottom:1px solid #edf1ee;">
                        <table border="0" cellpadding="0" cellspacing="0" role="presentation">
                          <tbody><tr>
                            <td style="margin:0;padding:0 12px 0 0;"><img alt="Doza Medic" height="40" class="logo-header" src="{{LOGO_URL}}" style="display:block;height:40px;width:40px;border-radius:8px;" width="40" /></td>
                            <td style="margin:0;padding:0;font-family:'Bebas Neue','Impact','Arial Narrow Bold',sans-serif;font-size:24px;color:#1e9f3e;letter-spacing:1px;line-height:1;vertical-align:middle;">DOZA MEDIC</td>
                          </tr></tbody>
                        </table>
                      </td>
                    </tr>

                    <tr>
                      <td class="hero-cell" align="center" style="margin:0;padding:60px 40px 30px;text-align:center;">
                        <p style="margin:0 0 8px;padding:0;font-family:'Poppins','Helvetica Neue',Helvetica,Arial,sans-serif;font-size:12px;font-weight:600;letter-spacing:2px;text-transform:uppercase;color:#29af45;">Your Verification Code</p>
                        <h1 class="hero-title" style="margin:0;padding:0;font-family:'Bebas Neue','Impact','Arial Narrow Bold',sans-serif;font-size:48px;line-height:1;letter-spacing:0.5px;color:#121c15;font-weight:400;">
                          HI ${opts.ownerName || "THERE"}.<br /><span style="color:#29af45;">USE THIS TO CONTINUE.</span>
                        </h1>
                        <p class="hero-desc" style="margin:16px auto 0;padding:0;max-width:440px;font-family:'Poppins','Helvetica Neue',Helvetica,Arial,sans-serif;font-size:14px;line-height:1.7;color:#5a665e;">
                          Enter this 6-digit code to verify ownership of <strong style="color:#121c15;">${opts.centerName}</strong>. It expires in 15 minutes.
                        </p>
                      </td>
                    </tr>

                    <tr>
                      <td class="otp-cell" align="center" style="margin:0;padding:0 40px 40px;">
                        <table align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="margin:0 auto;max-width:360px;width:100%;background-color:#f7faf8;border:1px solid #e2ebe4;border-radius:16px;">
                          <tbody><tr><td align="center" class="otp-box" style="padding:32px 20px;font-family:'Bebas Neue','Impact','Arial Narrow Bold',sans-serif;font-size:44px;letter-spacing:12px;color:#121c15;font-weight:400;text-align:center;">
                            ${opts.otp}
                          </td></tr></tbody>
                        </table>
                      </td>
                    </tr>

                    <tr>
                      <td class="otp-cell" style="margin:0;padding:0 40px 48px;">
                        <table width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="margin:0;padding:0;background-color:#f7faf8;border:1px solid #e2ebe4;border-radius:16px;">
                          <tbody><tr><td style="margin:0;padding:20px 24px;">
                            <p style="margin:0;padding:0;font-family:'Poppins','Helvetica Neue',Helvetica,Arial,sans-serif;font-size:12px;line-height:1.6;color:#606c63;">
                              <strong style="color:#121c15;">Never share this code.</strong> Doza Medic will never ask you for it over the phone, email, or chat.
                            </p>
                          </td></tr></tbody>
                        </table>
                      </td>
                    </tr>

                    <tr>
                      <td class="footer-cell" align="center" style="margin:0;padding:32px 30px;background-color:#f7faf8;border-top:1px solid #edf1ee;text-align:center;">
                        <img alt="Doza Medic" height="36" src="{{LOGO_URL}}" style="display:block;height:36px;margin:0 auto 10px;width:36px;border-radius:6px;" width="36" />
                        <p class="brand-name" style="margin:0;padding:0;font-family:'Bebas Neue','Impact','Arial Narrow Bold',sans-serif;font-size:22px;letter-spacing:1px;color:#29af45;line-height:1;font-weight:400;">DOZA MEDIC</p>
                        <p style="margin:4px 0 0;padding:0;font-family:'Poppins','Helvetica Neue',Helvetica,Arial,sans-serif;font-size:11px;color:#828d85;">Your Personal Medic Assistant</p>

                        <table align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" class="footer-links" style="margin:18px auto 0;">
                          <tbody><tr>
                            <td style="margin:0;padding:0 10px;"><a class="footer-link" href="{{MARKETING_URL}}/privacy" style="color:#626d65;text-decoration:none;font-family:'Poppins','Helvetica Neue',Helvetica,Arial,sans-serif;font-size:11px;" target="_blank">Privacy</a></td>
                            <td style="margin:0;padding:0 10px;"><a class="footer-link" href="{{MARKETING_URL}}/terms" style="color:#626d65;text-decoration:none;font-family:'Poppins','Helvetica Neue',Helvetica,Arial,sans-serif;font-size:11px;" target="_blank">Terms</a></td>
                          </tr></tbody>
                        </table>

                        <p style="margin:16px 0 0;padding:0;font-family:'Poppins','Helvetica Neue',Helvetica,Arial,sans-serif;font-size:10px;line-height:1.6;color:#9aa39d;">
                          Need help? <a href="mailto:dozamedichq@gmail.com" style="color:#626d65;text-decoration:underline;">dozamedichq@gmail.com</a><br />
                          &copy; {{YEAR}} Doza Medic. All rights reserved.
                        </p>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </td></tr></tbody>
            </table>
          </td></tr></tbody>
        </table>
      </td></tr></tbody>
    </table>
  </body>
</html>
`);
