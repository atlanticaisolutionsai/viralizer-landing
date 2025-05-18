// pages/[slug].js
import campaigns from "../campaigns.json";

export async function getStaticPaths() {
  const paths = campaigns.map((campaign) => ({
    params: { slug: campaign.slug },
  }));
  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const campaign = campaigns.find((c) => c.slug === params.slug);
  return { props: { campaign } };
}

export default function CampaignLandingPage({ campaign }) {
  return (
    <main className="p-8 max-w-xl mx-auto">
      <h1 className="text-3xl font-bold mb-4">{campaign.headline}</h1>
      <p className="mb-6">{campaign.description}</p>
      <form
        action={campaign.formAction}
        method="POST"
        className="flex flex-col gap-4"
      >
        <input type="hidden" name="campaign" value={campaign.slug} />
        <input
          name="name"
          required
          placeholder="Your Name"
          className="border p-2 rounded"
        />
        <input
          name="email"
          required
          placeholder="Your Email"
          className="border p-2 rounded"
        />
        <button
          type="submit"
          className="bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
        >
          Submit
        </button>
      </form>
    </main>
  );
}
