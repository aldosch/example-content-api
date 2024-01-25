import Link from "next/link";

export default function Home() {
  return (
    <main className="flex flex-col gap-4 m-4">
      <div className="dark:bg-purple-100/10 dark:text-white w-fit overflow-hidden bg-white rounded-lg shadow">
        <div className="sm:p-6 flex flex-col gap-2 px-4 py-5">
          <h1 className="text-2xl font-bold">Example Content API</h1>
          <p>Get some hard-coded JSON to test stuff</p>
          <code>
            curl -s https://example-content-api.vercel.app/api/content | jq
          </code>
          <code>
            curl -s https://example-content-api.vercel.app/api/draft-content |
            jq
          </code>
          <Link
            className="hover:text-purple-600 dark:text-purple-400 dark:hover:text-purple-300 text-purple-500 duration-100"
            href={"https://github.com/aldosch/example-content-api"}
            target="_blank"
          >
            Git repo
          </Link>
        </div>
      </div>
    </main>
  );
}
