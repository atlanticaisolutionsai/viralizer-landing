// pages/[slug].js

export async function getStaticPaths() {
  return {
    paths: [
      { params: { slug: "gibson-giveaway" } },
      { params: { slug: "summer-sale" } },
    ],
    fallback: false, // or true if using ISR or dynamic loading
  };
}

export async function getStaticProps({ params }) {
  const { slug } = params;

  // Here you could pull data from an API, CMS, or file
  return {
    props: {
      slug,
    },
  };
}

export default function CampaignLandingPage({ slug }) {
  return (
    <main className="p-8">
      <h1 className="text-3xl font-bold">Welcome to the {slug} campaign!</h1>
      <form
        action="https://hook.us1.make.com/YOUR-MAKE-WEBHOOK"
        method="POST"
        className="mt-4"
      >
        <input type="hidden" name="campaign" value={slug} />
        <input name="name" required placeholder="Name" />
        <input name="email" required placeholder="Email" />
        <button type="submit">Join Now</button>
      </form>
    </main>
  );
}
