# Mission Ready Supply Transport Website

A responsive static website built for deployment through GitHub and Cloudflare Pages.

## Before publishing

Open these files and replace the placeholders:

### index.html
- Replace `(317) 555-0123` with your business phone number.
- Replace `+13175550123` with your phone number in international format.
- Replace `quotes@missionreadytransport.com` with your business email.
- Adjust hours, service descriptions, and service area if necessary.

### script.js
- Replace `quotes@missionreadytransport.com` in the `BUSINESS_EMAIL` line.

## Upload to GitHub

1. Sign in to GitHub.
2. Select the **+** button in the upper-right corner.
3. Select **New repository**.
4. Name it `mission-ready-website`.
5. Choose **Public** or **Private**.
6. Select **Create repository**.
7. Select **uploading an existing file**.
8. Upload `index.html`, `style.css`, `script.js`, and this README.
9. Select **Commit changes**.

## Deploy with Cloudflare Pages

1. Sign in to Cloudflare.
2. Open **Workers & Pages**.
3. Select **Create application**.
4. Select the **Pages** tab.
5. Select **Import an existing Git repository**.
6. Connect GitHub and select `mission-ready-website`.
7. For a plain HTML website:
   - Framework preset: `None`
   - Build command: leave blank
   - Build output directory: `/`
8. Select **Save and Deploy**.

Cloudflare will create a temporary `pages.dev` website address. Future changes pushed to GitHub will automatically deploy.

## Custom domain

In your Pages project, open **Custom domains**, select **Set up a custom domain**, and enter your business domain.

## Quote form

The form currently uses the visitor's email application through a `mailto:` link. This is simple and does not require a server. For a fully online form that stores submissions, add Cloudflare Pages Functions or a form service later.
