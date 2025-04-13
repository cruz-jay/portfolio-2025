import ProjectShowcase from "./ProjectShowcase";

function UseBeatBot_Home() {
  const projectDate = {
    title: "BeatBot Studio",
    techStack: [
      {
        name: "NextJS + AuthJS",
        description:
          "SSR and Server Side Actions with Form & AuthJS Authentication API",
      },
      {
        name: "React + Tailwind",
        description: "Component-based UI with Tailwind scoped styling",
      },
      {
        name: "TanStack Query",
        description: "Client Side State management and caching",
      },
      {
        name: "Supabase",
        description:
          "Row Level Security with PostgresSQL and S3 Buckets for audio files and ",
      },
    ],
    projectJourney: [
      {
        heading: "A Fun and Challenging Development Experience",
        paragraph:
          "At first, my goal was to create a complex replica of Spotify where users would log in with their Spotify accounts, access their playlists, and generate music using AI. The idea sparked after a club meeting where a guest speaker from Amazon introduced us to Amazon Bedrock. Motivated, I started building right away, but I quickly realized that the AWS ecosystem was too complex to navigate within my timeframe. After some research, I pivoted to using Hugging Face’s API instead. Facebook provides three versions of their MusicGen model—small, medium, and large. I chose the small one for simplicity and to avoid any extra costs.",
      },
    ],
    codePreviews: [
      {
        code: `"use server";

import { auth, signIn, signOut } from "./auth";

export async function signInWithGoogleAction() {
  await signIn("google", { redirectTo: "/studio" });
}

export async function signInWithSpotifyAction() {
  await signIn("spotify", { redirectTo: "/studio" });
}

export async function signInWithGithubAction() {
  await signIn("github", { redirectTo: "/studio" });
}

export async function signOutAction() {
  await signOut({ redirectTo: "/" });
}
`,
        description: "A Server Action for handling authentication login",
      },
      {
        code: `
export async function generateMusic(formData, userId) {
  try {
    const response = await fetch("/api/generate-music", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        prompt: formData.description,
        albumArt: formData.albumArt,
        title: formData.title,
        genre: formData.genre,
        userId: userId,
        model: formData.model || "facebook/musicgen-small",
      }),
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.error || "Failed to generate music");
    }

    const data = await response.json();
    return data;
  } catch (err) {
    console.error("Error generating music:", err);
    throw err;
  }
}`,
        description:
          "Small part of the exposed api endpoint making a post request and waiting for the returned media ",
      },
    ],
    demoLink: "https://beatbot-seven.vercel.app",
    videoFile: "/mp4/beatbot.mov",
  };

  return <ProjectShowcase {...projectDate} />;
}

export default UseBeatBot_Home;
