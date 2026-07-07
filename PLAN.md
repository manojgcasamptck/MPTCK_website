

## Plan: Static migration for GitHub Pages

The goal is to remove the admin/auth/backend pieces from the site so it can be published as a static site on GitHub Pages without runtime dependencies.

### Scope
- Remove the admin experience and its related routes.
- Remove auth and backend dependencies that are only needed for login or content management.
- Simplify or remove the registration flow if it depends on Supabase.
- Prepare the project for static export and GitHub Pages deployment.

### Steps
1. Audit current runtime dependencies
- Review the admin route, login API route, Supabase client usage, and any route handlers that depend on server runtime.
- Identify files that must be removed or rewritten.

2. Remove the admin experience
- Delete the admin route and related layout/page files.
- Remove any navigation links or references that point to the admin area.

3. Remove auth and backend functionality
- Remove the login endpoint and any auth-specific logic.
- Remove Supabase auth usage from the app.
- Remove or replace any server-side API routes.

4. Simplify the registration flow
- Decide whether admissions submissions should be removed, replaced with a static informational page, or moved to an external service.
- If the form remains, replace the Supabase-backed submission with a non-dynamic approach that does not require server-side execution.

5. Remove unused Supabase configuration
- Remove Supabase client imports and related environment variable usage where no longer needed.
- Clean up unused files and dependencies.

6. Prepare the app for static export
- Ensure all remaining pages can be rendered without runtime APIs.
- Update Next.js config and build settings for static export if needed.
- Verify that the app builds successfully as a static site.

7. Deploy to GitHub Pages
- Build the static output.
- Publish the generated output to the GitHub Pages branch or deployment target.
- Verify the deployed site loads correctly.

### Relevant files
- src/app/admin/** - admin pages and layout
- src/app/api/auth/** - login backend route
- page.tsx - registration page that currently uses Supabase
- supabase.ts - Supabase client setup
- next.config.ts - static export configuration
- package.json - scripts and dependencies

### Verification
1. Confirm the admin route is removed and no broken links remain.
2. Confirm the app builds successfully after removing the runtime dependencies.
3. Confirm the exported static output can be served from GitHub Pages.

### Notes
- The current app is likely compatible with static hosting if the admin, auth, and Supabase-backed submission features are removed or replaced.
- If a form must still collect submissions, a future step may involve moving that functionality to a different service rather than keeping it in GitHub Pages.