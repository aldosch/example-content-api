import Link from "next/link";

export default function Home() {
  return (
    <main className="flex flex-col gap-4 m-4">
      <div className="max-w-96 dark:bg-purple-100/10 dark:text-white overflow-hidden bg-white rounded-lg shadow">
        <div className="sm:p-6 flex flex-col gap-4 px-4 py-5">
          <h1 className="text-2xl font-bold">Example Content API</h1>
          <p>Get some hard-coded JSON to test stuff</p>
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
